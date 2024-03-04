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
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Extra-curricular activity</label>
                <input
                    type="text"
                    name="extracurricularName"
                    value={formData.extracurricularName}
                    placeholder='Enter Extra-curricular activity'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <div className='flex flex-row justify-between'>
                    <button className='bg-[#072342] text-[white] h-[2.5rem] w-[5rem] rounded-lg overflow-hidden' onClick={saveData}>Confirm</button>
                    <button className='bg-[#ba271a] text-[white] h-[2.5rem] w-[5rem] rounded-lg overflow-hidden' onClick={handleRemove}>Remove</button>
                </div>
            </form>

        </>
    )
}

export default AddExtracurricular