import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import TextEditor from './TextEditor';

const style = {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '5px solid black',
    boxShadow: 24,
    pt: 2,
    px: 2,
    pb: 2,
    height: '35rem',
    flexDirection: 'column',
};

const ModalWindow = ({ open, onClose, quesName }) => {
    const [submitButton, setsubmitButton] = useState(false);
    const handleSubmit=()=>{
        setsubmitButton(true);
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{ marginTop: "-50px", marginBottom: "10px", fontWeight: "bold", fontSize: "2rem" }}>{quesName}</Typography>
                    <Button variant="contained" style={{ marginBottom: "10px" }} onClick={handleSubmit}>Submit</Button>
                    <TextEditor submitButton={submitButton} setsubmitButton={setsubmitButton} open={open}/>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalWindow;
