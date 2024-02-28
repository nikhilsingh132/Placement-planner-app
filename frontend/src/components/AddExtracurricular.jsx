import React, { useState } from 'react'

const AddExtracurricular = ({ id, removeextracurricular, allExtraCurricularData, setallExtraCurricularData }) => {
    const [formData, setformData] = useState({
        extracurricularName: "",
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
        setallExtraCurricularData([...allExtraCurricularData, newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removeextracurricular(id);
    }
    return (
        <>
            <form style={{ padding: "2rem", display: "flex", flexDirection: "column", border: "3px solid green", marginBottom: "1rem" }}>
                <label style={{ fontWeight: "bold" }}>Extra-curricular activity</label>
                <input
                    type="text"
                    name="extracurricularName"
                    value={formData.extracurricularName}
                    placeholder='Enter Extra-curricular activity'
                    onChange={handleChange}
                    style={{ marginBottom: "1rem", height: "2rem" }}
                />
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <button style={{ backgroundColor: "#072342", color: "white", height: "2.5rem", width: "5rem" }} onClick={saveData}>Confirm</button>
                    <button style={{ backgroundColor: "#ba271a", color: "white", height: "2.5rem", width: "5rem" }} onClick={handleRemove}>Remove</button>
                </div>
            </form>

        </>
    )
}

export default AddExtracurricular