import React, { useState, useEffect, useContext } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { notesDetails } from '../scenes/QuesList';
import axios from 'axios';
import { useAuth } from "../AuthContext";

const TextEditor = ({ submitButton, setsubmitButton, open }) => {
    const { user } = useAuth();
    const { quesId } = useContext(notesDetails);
    const { quill, quillRef } = useQuill();
    const [editorData, setEditorData] = useState('');
    const { username } = user;

    useEffect(() => {
        const fetchNotesData = async () => {
            try {
                const response = await axios.post('http://localhost:8000/getNotes', { username, quesId });
                const notesStored = response.data;
                // console.log(notesStored);
                if (quill && notesStored) {
                    quill.setText(notesStored.data);
                }
            } catch (error) {
                console.error('Error fetching notes data:', error);
            }
        };
        fetchNotesData();
    }, [open,quesId,username,quill]);
    useEffect(() => {
        // console.log("by bye");
        if (quill) {
            quill.on('text-change', () => {
                const newData = {
                    html: quillRef.current.firstChild.innerHTML,
                    text: quill.getText(),
                };
                setEditorData(newData.text);
            });
        }
    }, [quill, quillRef, editorData, quesId, username]);


    useEffect(() => {
        if (submitButton) {
            const storeNotesData = async () => {
                const cleanedEditorData = editorData.replace(/\n/g, '');
                const notes = cleanedEditorData;
                // console.log(editorData);
                try {
                    await axios.post('http://localhost:8000/storeNotes', { username, quesId, notes });
                    // console.log('Notes stored successfully');
                } catch (error) {
                    console.error('Error storing notes data:', error);
                }
                setsubmitButton(false);
            };
            storeNotesData();
        }
    }, [submitButton, editorData, quesId, setsubmitButton, username]);

    return (
        <>
            <div className='h-[20rem]'>
                <div ref={quillRef} />
            </div>
        </>
    );
};

export default TextEditor;
