const express = require("express");
const router = express.Router();
const questions = require("../models/questions");

router.post("/getAllQuestions", async (req, res) => {
    console.log("getAllQuestions api");

    try {
        const tag = req.body.tags;

        const allTaggedQues = await questions.find({ tags: { $elemMatch: { $in: tag } } });

        res.status(200).json({
            data: allTaggedQues,
            status: "200",
            message: "List for tagged topic generated successfully"
        });
    }
    catch {
        res.status(404).json({
            status: "404",
            message: "Error while generation of List for tagged topic"
        });
    }
});


router.post("/addQuestions", async (req, res) => {
    console.log("addQuestions Api");

    try {
        const data = req.body;
        const quesExists = await questions.find({ link: { $in: data.link } });
        if (!quesExists) {
            return res.status(400).json({
                status: "400",
                message: "Question Already Exists"
            })
        }

        const newQues = new questions(data);
        await newQues.save();

        res.status(200).json({
            status: "200",
            message: "Questions is added",
            data: newQues
        })
    }
    catch {
        res.status(404).json({
            status: "404",
            message: "Error in adding ques"
        })
    }
});


module.exports = router;