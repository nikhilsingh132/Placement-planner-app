import React, { useState } from 'react'
import AddExperience from './AddExperience';

const WorkExperience = () => {
  const newId = Math.random().toString(36).substring(2, 11);
  const [allExperienceData, setallExperienceData] = useState([]);
  const [experienceComponent, setexperienceComponent] = useState([ { id: newId }]);

  const addExperience = () => {
    const newId = Math.random().toString(36).substring(2, 11);// Generate unique ID
    setexperienceComponent([...experienceComponent, { id: newId }]);
  }
  const removeExperience = (removeId) => {
    setallExperienceData(allExperienceData.filter(exp => exp.id !== removeId));
    setexperienceComponent(experienceComponent.filter(exp => exp.id !== removeId));
  }



  return (
    <>
      <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center",color:"#072342" }}>Work Experience</div>
      
      {
        experienceComponent.map(exp => (
          <AddExperience
            key={exp.id}
            id={exp.id}
            removeExperience={removeExperience}
            allExperienceData={allExperienceData}
            setallExperienceData={setallExperienceData} />
        ))
      }
      <button style={{ backgroundColor: "green", width: "20%" }} onClick={addExperience}>Add more+</button>
    </>
  )
}

export default WorkExperience