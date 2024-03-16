import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import TextEditor from './TextEditor';


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
                <Box className="absolute flex items-center justify-center bg-[white]  border-[2px] border-black p-[1rem] h-[30rem] flex-col ml-[1rem] mr-[1rem] top-1/4 sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2">
                    <Typography style={{marginTop:"-5rem"}} className=' mb-[10px] text-[2rem] font-bold'>{quesName}</Typography>
                    <Button variant="outlined" className='mb-[10px]' onClick={handleSubmit}>Submit</Button>
                    <TextEditor submitButton={submitButton} setsubmitButton={setsubmitButton} open={open}/>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalWindow;
