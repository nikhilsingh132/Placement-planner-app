import React, { useContext, useState } from 'react'
import AddExperience from './AddExperience';
import { experiencedetail } from '../scenes/ResumeMaker';

const WorkExperience = () => {
  const { allExperienceData, setallExperienceData } = useContext(experiencedetail);
  const newId = Math.random().toString(36).substring(2, 11);
  const [experienceComponent, setexperienceComponent] = useState([{ id: newId }]);

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
      <div className='text-[2rem] font-bold text-center text-[#072342]'>Work Experience</div>

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
      <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addExperience}>Add more+</button>
    </>
  )
}

export default WorkExperience