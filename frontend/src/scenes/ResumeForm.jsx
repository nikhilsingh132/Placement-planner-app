import React, { useState } from 'react';
import PersonalDetails from '../components/PersonalDetails';
import EducationalDetails from '../components/EducationalDetails';
import WorkExperience from '../components/WorkExperience';

const ResumeForm = () => {

    const [currentIndex, setcurrentIndex] = useState(1);

    const nextIndex = () => {
        if (currentIndex === 3) {
            return;
        }
        setcurrentIndex(currentIndex + 1);
    };

    const prevIndex = () => {
        if (currentIndex === 1) {
            return;
        }
        setcurrentIndex(currentIndex - 1);
    };

    return (
        <div style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
            <p style={{ color: "#4287f5", fontWeight: "bold", fontSize: "2rem", marginBottom: "20px" }}>Fill the form</p>
            <div style={{ backgroundColor: "#9edeaf", width: "80%", overflowY: "auto", maxHeight: "60vh", padding: "20px", marginBottom: "20px" }}>
                {currentIndex === 1 && <PersonalDetails />}
                {currentIndex === 2 && <EducationalDetails />}
                {currentIndex === 3 && <WorkExperience />}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
                <button style={{ backgroundColor: "#355475", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }} onClick={prevIndex}>Back</button>

                <button style={{ backgroundColor: "#357546", color: "white", border: "none", padding: "10px 20px", cursor: "pointer" }} onClick={nextIndex}>Next</button>
            </div>
        </div>
    );
};

export default ResumeForm;
