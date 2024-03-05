import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
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
    height: '30rem',
    flexDirection: 'column',
};

const ModalWindow = ({ open, onClose, quesName }) => {

    return (
        <div>
            <Modal
                open={open}
                onClose={onClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box sx={style}>
                    <Typography style={{ marginTop: '-60px',marginBottom:"10px",fontWeight:"bold",fontSize:"2rem" }}>{quesName}</Typography>
                    <TextEditor />
                </Box>
            </Modal>
        </div>
    );
}

export default ModalWindow;
