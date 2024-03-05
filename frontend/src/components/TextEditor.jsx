import React, { useState, useEffect, useContext } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { notesDetails } from '../scenes/QuesList';
import axios from 'axios';

const TextEditor = () => {
    const { quesId } = useContext(notesDetails);
    const { quill, quillRef } = useQuill();
    const [editorData, setEditorData] = useState('');
    console.log("ques",quesId);
    useEffect(() => {
        const fetchNotesData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/getNotes/${quesId}`);
                const notes = response.data.data;
                if (notes) {
                    setEditorData(notes);
                }
            } catch (error) {
                console.error('Error fetching notes data:', error);
            }
        };

        if (quill) {
            quill.on('text-change', () => {
                const newData = {
                    html: quillRef.current.firstChild.innerHTML,
                    text: quill.getText(),
                };
                setEditorData(newData.text);
                storeNotesData();
            });
        }

        fetchNotesData();
    }, [quill, quillRef, quesId]);

    const storeNotesData = async () => {
        try {
            await axios.post(`http://localhost:8000/storeNotes/${quesId}`, { notes: editorData });
            console.log('Notes stored successfully');
        } catch (error) {
            console.error('Error storing notes data:', error);
        }
    };

    return (
        <>
            <div className='h-[20rem]'>
                <div ref={quillRef}/>
            </div>
        </>
    );
};

export default TextEditor;
