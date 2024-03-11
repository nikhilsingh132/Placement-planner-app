const express = require("express");
const router = express.Router();
const users = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const app = express();
const sendEmail = require("../sendEmail")
const Token = require("../models/token")
const crypto = require("crypto")
require("dotenv").config();

app.use(cookieParser());


router.post('/login', async (req, res) => {
    // console.log("login api is called");

    try {
        const { username, password } = req.body;
        const user = await users.findOne({ username });
        console.log(user);
        if (!user) {
            return res.status(401).json({ message: "Incorrect Username" });
        }
        else if (!user.verified) {
            let token = await Token.findOne({ userId: user._id });
            if (!token) {
                token = await new Token({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `Please verify your account to start using Placement Planner ${process.env.BASE_URL}/${user._id}/verify/${token.token}`;
                await sendEmail(user.email, "Verify Email", url);
            }
            return res.status(201).send({ message: "An email sent to your account, please verify" });
        }
        else {
            bcrypt.compare(password, user.password, (err, response) => {
                if (err) {
                    return res.status(500).json({ message: "Error comparing passwords", error: err });
                }
                if (response) {
                    const token = jwt.sign({ username: user.username }, "jwt-secret-key", { expiresIn: "1d" });
                    res.cookie("token", token);
                    return res.status(200).json({ message: "Login Successful", user });
                }
                else {
                    return res.status(404).json({ message: "Incorrect password", user });
                }
            })
        }
    }
    catch {
        res.status(500).json({
            status: "500",
            message: "Error while Logging"
        });
    }
})


router.post('/signup', async (req, res) => {
    try {
        const { username, email, phoneNumber, password } = req.body;
        const userExist = await users.findOne({
            $or: [
                { username },
                { email },
            ],
        });
        if (userExist) {
            return res.status(401).json({ message: 'User already Exists' });
        }
        const hash = await bcrypt.hash(password, 10);
        const user = new users({ username, email, phoneNumber, password: hash });
        await user.save();
        const token = await new Token({
            userId: user._id,
            token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `Please verify your account to start using Placement Planner ${process.env.BASE_URL}/${user._id}/verify/${token.token}`;
        await sendEmail(user.email, "Verify Email", url);
        res.status(201).send({ message: "A mail sent to your account, please verify" });
    }
    catch (error) {
        console.log("Error in signing up", error);
        res.status(500).json({ error: "Sign up failed" });
    }
})


router.get("/:id/verify/:token", async (req, res) => {
    try {
        const user = await users.findOne({ _id: req.params.id });
        if (!user) return res.status(400).send({ message: "Invalid link!" });
        const token = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send({ message: "Invalid link!" });
        await users.updateOne({ _id: user._id }, { $set: { verified: true } });
        await Token.deleteOne({ _id: token._id });
        return res.status(200).send({ message: "Email verified successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal Server Error!!!" });
    }
});

module.exports = router;