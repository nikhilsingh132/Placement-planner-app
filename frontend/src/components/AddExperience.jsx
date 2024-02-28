import React, { useState } from 'react'

const AddExperience = ({ id, allExperienceData, setallExperienceData, removeExperience }) => {
    const [formData, setformData] = useState({
        jobTitle: "",
        descriptionPoint1: "",
        descriptionPoint2: "",
        descriptionPoint3: "",
        descriptionPoint4: "",
        startDate: "",
        endDate: ""
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
        setallExperienceData([...allExperienceData, newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removeExperience(id);
    }


    return (
        <>
            <form style={{ padding: "2rem", display: "flex", flexDirection: "column",border:"3px solid green",marginBottom:"1rem" }}>
                <label style={{fontWeight:"bold"}}>Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    placeholder='Enter job title'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

                <label style={{fontWeight:"bold"}}>Description 1</label>
                <input
                    type="text"
                    name="descriptionPoint1"
                    value={formData.descriptionPoint1}
                    placeholder='Enter description first point'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>Description 2</label>
                <input
                    type="text"
                    name="descriptionPoint2"
                    value={formData.descriptionPoint2}
                    placeholder='Enter description second point'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>Description 3</label>
                <input
                    type="text"
                    name="descriptionPoint3"
                    value={formData.descriptionPoint3}
                    placeholder='Enter description third point'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>Description 4</label>
                <input
                    type="text"
                    name="descriptionPoint4"
                    value={formData.descriptionPoint4}
                    placeholder='Enter description fourth point'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    placeholder='Enter Start Date'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>End Date</label>
                <input
                    type="text"
                    name="endDate"
                    value={formData.endDate}
                    placeholder='Enter End Date'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem",}}
                />
                <div style={{display:"flex",flexDirection:"row",justifyContent: "space-between"}}>
                <button style={{ backgroundColor: "#072342",color:"white",height:"2.5rem",width:"5rem" }} onClick={saveData}>Confirm</button>
                <button style={{ backgroundColor: "#ba271a",color:"white",height:"2.5rem",width:"5rem"}} onClick={handleRemove}>Remove</button>
                </div>
            </form>

        </>
    )
}

export default AddExperience