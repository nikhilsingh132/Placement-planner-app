const express = require("express");
const router = express.Router();
const users = require("../models/user");

router.post('/login', async (req, res) => {
    // console.log("login api is called");

    try {
        const { username } = req.body;
        const user = await users.findOne({ username });
        // console.log(user);
        if (!user) {
            return res.status(401).json({ message: "Incorrect Username" });
        }
        res.status(200).json({ message: "Login Successful",user });
    }
    catch {
        res.status(404).json({
            status: "404",
            message: "Error while Logging into"
        });
    }
})

router.post('/signup', async (req, res) => {
    try {
        const { username, email, phoneNumber,password } = req.body;
        const user = new users({ username, email, phoneNumber,password });
        await user.save();
        res.status(201).json({ message: 'Signed up successfully' });
    }
    catch (error) {
        console.log("Error in signing up",error);
        res.status(500).json({ error: "Sign up failed" });
    }
})

module.exports = router;