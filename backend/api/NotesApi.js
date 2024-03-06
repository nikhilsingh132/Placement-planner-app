const express = require('express');
const router = express.Router();
const notesModel = require("../models/notes");


// Store Notes Data API Endpoint
router.post('/storeNotes', async (req, res) => {
    const { username,quesId,notes }=req.body;

    // console.log("storing ",req.body);
    try {
        const existingNotes = await notesModel.findOne({ username,quesId });
        if (existingNotes) {
            existingNotes.notes = notes;
            await existingNotes.save();
        } else {
            const newNotes = new notesModel({ username,quesId,notes });
            await newNotes.save();
        }

        res.status(200).json({ success: true, message: 'Notes stored successfully' });
    } catch (error) {
        console.error('Error storing notes:', error);
        res.status(500).json({ success: false, message: 'Notes not stored' });
    }
});

router.post('/getNotes', async (req, res) => {
    const {username, quesId } = req.body;
    try {
        const existingNotes = await notesModel.findOne({ username,quesId });
        // console.log("notes",existingNotes.notes);
        if (existingNotes) {
            res.status(200).json({ status:"200",message:"notes exists", data: existingNotes.notes });
        } else {
            res.status(404).json({ status:"404", message: 'Notes not found' });
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ status:"500", message: 'Internal server error in finding notes' });
    }
});


module.exports = router;