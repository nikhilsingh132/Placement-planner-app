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
            <div className='text-[2rem] font-bold text-center text-[#072342]'>Educational Details</div>
            {educationComponents.map(edu => (
                <AddEducation
                    key={edu.id}
                    id={edu.id}
                    removeEducation={removeEducation}
                    allEducationData={allEducationData}
                    setallEducationData={setallEducationData}
                />
            ))}

            <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addEducation}>Add more+</button>
        </>
    )
}

export default EducationalDetails