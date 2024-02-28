import React, { useState } from 'react'

const AddPor = ({id,removepor,allPorData,setallPorData}) => {
    const [formData, setformData] = useState({
        porName: "",
        porDescription:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    }

    const saveData = (e) => {
        e.preventDefault();
        const newFormData = { ...formData, id: id };
        setallPorData([...allPorData, newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removepor(id);
    }
  return (
    <>
    <form style={{ padding: "2rem", display: "flex", flexDirection: "column",border:"3px solid green",marginBottom:"1rem" }}>
                <label style={{fontWeight:"bold"}}>POR Name</label>
                <input
                    type="text"
                    name="porName"
                    value={formData.porName}
                    placeholder='Enter POR Name'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>POR Decription</label>
                <input
                    type="text"
                    name="porDescription"
                    value={formData.porDescription}
                    placeholder='Enter POR Decription'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <div style={{display:"flex",flexDirection:"row",justifyContent: "space-between"}}>
                <button style={{ backgroundColor: "#072342",color:"white",height:"2.5rem",width:"5rem" }} onClick={saveData}>Confirm</button>
                <button style={{ backgroundColor: "#ba271a",color:"white",height:"2.5rem",width:"5rem"}} onClick={handleRemove}>Remove</button>
                </div>
            </form>

    </>
  )
}

export default AddPor