import React, { useContext, useState } from 'react'
import { pordetail } from '../scenes/ResumeMaker'
import AddPor from './AddPor'

const PorDetails = () => {
  const { allPorData, setallPorData } = useContext(pordetail);
  const newId = Math.random().toString(36).substring(2, 11);
  const [porComponent, setporComponent] = useState([{ id: newId }]);

  const addpor = () => {
    const newId = Math.random().toString(36).substring(2, 11);// Generate unique ID
    setporComponent([...porComponent, { id: newId }]);
  }
  const removepor = (removeId) => {
    setallPorData(allPorData.filter(exp => exp.id !== removeId));
    setporComponent(porComponent.filter(exp => exp.id !== removeId));
  }
  return (
    <>
      <div className='text-[2rem] font-bold text-center text-[#072342]'>POR Details</div>

      {
        porComponent.map(exp => (
          <AddPor
            key={exp.id}
            id={exp.id}
            removepor={removepor}
            allPorData={allPorData}
            setallPorData={setallPorData} />
        ))
      }
      <button className='bg-[#115423] text-[white] h-[2.5rem] w-[8rem] rounded-lg overflow-hidden' onClick={addpor}>Add more+</button>
    </>
  )
}

export default PorDetails