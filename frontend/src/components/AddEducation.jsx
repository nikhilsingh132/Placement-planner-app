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
                />

                <label>Percentage/CPI</label>
                <input
                    type="text"
                    name="percentOrCpi"
                    value={formData.percentOrCpi}
                    placeholder='Enter Percentage or CPI'
                    onChange={handleChange}
                />
                <label>Year of Completion</label>
                <input
                    type="text"
                    name="completionYear"
                    value={formData.completionYear}
                    placeholder='Enter Year of Completion'
                    onChange={handleChange}
                />
                <button style={{ backgroundColor: "red" }} onClick={saveData}>Confirm</button>
                <button style={{ backgroundColor: "green" }} onClick={handleRemove}>Remove</button>
            </form>
        </>
    )
}

export default AddEducation