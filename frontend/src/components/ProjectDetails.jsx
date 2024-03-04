import React, { useContext, useState } from 'react'
import { projectdetail } from '../scenes/ResumeMaker';
import AddProject from './AddProject';

const ProjectDetails = () => {
  const { allProjectData, setallProjectData } = useContext(projectdetail);
  const newId = Math.random().toString(36).substring(2, 11);
  const [projectComponent, setprojectComponent] = useState([{ id: newId }]);

  const addProject = () => {
    const newId = Math.random().toString(36).substring(2, 11);
    setprojectComponent([...projectComponent, { id: newId }]);
  }
  const removeProject = (removeId) => {
    setallProjectData(allProjectData.filter(exp => exp.id !== removeId));
    setprojectComponent(projectComponent.filter(exp => exp.id !== removeId));
  }
  return (
    <>
      <div  className='text-[2rem] font-bold text-center text-[#072342]'>Project Details</div>
      {
        projectComponent.map(exp => (
          <AddProject
            key={exp.id}
            id={exp.id}
            removeProject={removeProject}
            allProjectData={allProjectData}
            setallProjectData={setallProjectData} />
        ))
      }
      <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addProject}>Add more+</button>
    </>
  )
}

export default ProjectDetails