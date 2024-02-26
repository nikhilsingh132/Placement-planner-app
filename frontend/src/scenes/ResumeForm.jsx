import React, { useState } from 'react'
import PersonalDetails from '../components/PersonalDetails';
import EducationalDetails from '../components/EducationalDetails';
import WorkExperience from '../components/WorkExperience';

const ResumeForm = ({ name, setname }) => {

    const [currentIndex, setcurrentIndex] = useState(1);
    // const goToIndex = (index) => {
    //     setcurrentIndex(index)
    // }
    const nextIndex = () => {

        if (currentIndex === 3) {
            return;
        }
        setcurrentIndex(currentIndex + 1);
    }
    const prevIndex = () => {
        if (currentIndex === 1) {
            return;
        }
        setcurrentIndex(currentIndex - 1);
    }
    return (
        <div style={{ width: "50%" }}>
            <p style={{ textAlign: "center", color: "#4287f5", fontWeight: "bold", fontSize: "2rem" }}>Fill the form</p>
            <div style={{ backgroundColor: "white", width: "80%", display: "flex", justifyContent: "center", marginLeft: "10%", flexDirection: "column" }}>
                {/* <div style={{display:'flex',flexDirection: 'row', justifyContent:"flex-end",width:"90%"}}>
                {currentIndex}/3
                </div> */}
                {
                    currentIndex === 1 && <PersonalDetails />
                }
                {
                    currentIndex === 2 && <EducationalDetails />
                }
                {
                    currentIndex === 3 && <WorkExperience />
                }
                <div>
                    <button style={{ backgroundColor: "blue" }} onClick={prevIndex}>Back</button>
                    <button style={{ backgroundColor: "blue" }} onClick={nextIndex}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default ResumeForm