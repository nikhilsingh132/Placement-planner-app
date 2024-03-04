import React, { useContext, useState } from 'react'
import { extracurriculardetail } from '../scenes/ResumeMaker'
import AddExtracurricular from './AddExtracurricular'

const ExtraCurricularDetails = () => {
  const { allExtraCurricularData, setallExtraCurricularData } = useContext(extracurriculardetail);
  const newId = Math.random().toString(36).substring(2, 11);
  const [extracurricularComponent, setextracurricularComponent] = useState([{ id: newId }]);

  const addextracurricular = () => {
    const newId = Math.random().toString(36).substring(2, 11);// Generate unique ID
    setextracurricularComponent([...extracurricularComponent, { id: newId }]);
  }
  const removeextracurricular = (removeId) => {
    setallExtraCurricularData(allExtraCurricularData.filter(exp => exp.id !== removeId));
    setextracurricularComponent(extracurricularComponent.filter(exp => exp.id !== removeId));
  }
  return (
    <>
      <div className='text-[2rem] font-bold text-center text-[#072342]'>Extra-Curricular Details</div>

      {
        extracurricularComponent.map(exp => (
          <AddExtracurricular
            key={exp.id}
            id={exp.id}
            removeextracurricular={removeextracurricular}
            allExtraCurricularData={allExtraCurricularData}
            setallExtraCurricularData={setallExtraCurricularData} />
        ))
      }
      <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addextracurricular}>Add more+</button>
    </>
  )
}

export default ExtraCurricularDetails