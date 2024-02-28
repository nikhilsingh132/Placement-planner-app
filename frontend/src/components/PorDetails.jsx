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
      <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#072342" }}>POR Details</div>

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
      <button style={{ backgroundColor: "#115423", color: "white", height: "2.5rem", width: "8rem" }} onClick={addpor}>Add more+</button>
    </>
  )
}

export default PorDetails