import React, { useState,useContext } from 'react'
import AddEducation from './AddEducation'
import { educationaldetail } from '../scenes/ResumeMaker';
const EducationalDetails = () => {
    const newId = Math.random().toString(36).substring(2, 11);
    // const [allEducationData, setallEducationData] = useState([]);
    const {allEducationData, setallEducationData}=useContext(educationaldetail);

    const [educationComponents, setEducationComponents] = useState([{ id: newId }]);

    const addEducation = () => {
        const newId = Math.random().toString(36).substring(2, 11);// Generate unique ID
        setEducationComponents([...educationComponents, { id: newId }]);
    };

    
    const removeEducation = (idToRemove) => {
        setallEducationData(allEducationData.filter(edu => edu.id !== idToRemove));
        setEducationComponents(educationComponents.filter(edu => edu.id !== idToRemove));
    };

    return (
        <>
            <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center",color:"#072342" }}>Educational Details</div>
            {educationComponents.map(edu => (
                <AddEducation
                    key={edu.id}
                    id={edu.id}
                    removeEducation={removeEducation}
                    allEducationData={allEducationData}
                    setallEducationData={setallEducationData}
                />
            ))}

            <button style={{ backgroundColor: "#115423",color:"white",height:"2.5rem",width:"8rem" }} onClick={addEducation}>Add more+</button>
        </>
    )
}

export default EducationalDetails