import React, { useState } from 'react'

const ResumeForm = ({ name, setname }) => {

    const [currentIndex, setcurrentIndex] = useState(0);
    const goToIndex=(index)=>{
        setcurrentIndex(index)
    }
    const nextIndex=(index)=>{
        if(index===3)
        {
            return;
        }
        setcurrentIndex(index+1);
    }
    const prevIndex=(index)=>{
        if(index===1)
        {
            return;
        }
        setcurrentIndex(index-1);
    }
    return (
        <div style={{ width: "50%" }}>
            <p style={{ textAlign: "center", color: "#4287f5", fontWeight: "bold", fontSize: "2rem" }}>Fill the form</p>
            <div>
            
            </div>
        </div>
    )
}

export default ResumeForm