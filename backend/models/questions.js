const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    difficulty: {
        type: String,
    }
})


const QuestionList = mongoose.model("question", questionSchema);

module.exports = QuestionList;