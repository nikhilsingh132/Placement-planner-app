import React, { useState } from 'react'

const AddEducation = ({id,allEducationData,setallEducationData,removeEducation}) => {
    
    const [formData, setFormData] = useState({
        institutionName: '',
        percentOrCpi: '',
        completionYear: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const saveData = (e) => {
        e.preventDefault();
        const newFormData = { ...formData, id: id };
        setallEducationData( [...allEducationData,newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removeEducation(id);
    };

    return (
        <>
            <form style={{ padding: "2rem", display: "flex", flexDirection: "column" }}>
                <label>Name of Institution</label>
                <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    placeholder='Enter Name of Institution'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

                <label>Percentage/CPI</label>
                <input
                    type="text"
                    name="percentOrCpi"
                    value={formData.percentOrCpi}
                    placeholder='Enter Percentage or CPI'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label>Year of Completion</label>
                <input
                    type="text"
                    name="completionYear"
                    value={formData.completionYear}
                    placeholder='Enter Year of Completion'
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

export default AddEducation