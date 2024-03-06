const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    quesId: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
        default: '',
    },
});

const NotesModel = mongoose.model('note', notesSchema);

module.exports = NotesModel;
