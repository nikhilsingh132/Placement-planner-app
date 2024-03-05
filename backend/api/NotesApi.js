const express = require('express');
const router = express.Router();
const notes = require('../models/notes');


// Store Notes Data API Endpoint
router.post('/storeNotes/:quesId', async (req, res) => {
    const { quesId } = req.params;
    const { notes } = req.body;

    try {
        const existingNotes = await notes.findOne({ quesId });

        if (existingNotes) {
            existingNotes.notes = notes;
            await existingNotes.save();
        } else {
            await notes.create({ quesId, notes });
        }

        res.status(200).json({ success: true, message: 'Notes stored successfully' });
    } catch (error) {
        console.error('Error storing notes:', error);
        res.status(500).json({ success: false, message: 'Notes not stored' });
    }
});

router.get('/getNotes/:quesId', async (req, res) => {
    const { quesId } = req.params;

    try {
        const existingNotes = await notes.findOne({ quesId });

        if (existingNotes) {
            res.status(200).json({ success: true, data: existingNotes.notes });
        } else {
            res.status(404).json({ success: false, message: 'Notes not found' });
        }
    } catch (error) {
        console.error('Error fetching notes:', error);
        res.status(500).json({ success: false, message: 'Internal server error in finding notes' });
    }
});


module.exports = router;