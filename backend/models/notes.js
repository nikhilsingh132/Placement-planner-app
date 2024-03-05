const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    quesId: {
        type: String,
        required: true,
        unique: true,
    },
    notes: {
        type: String,
        default: '',
    },
});

const NotesModel = mongoose.model('Notes', notesSchema);

module.exports = NotesModel;
