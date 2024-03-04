import React, { useState } from 'react'

const AddEducation = ({ id, allEducationData, setallEducationData, removeEducation }) => {

    const [formData, setFormData] = useState({
        degree: '',
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
        setallEducationData([...allEducationData, newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removeEducation(id);
    };

    return (
        <>
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Name of Degree</label>
                <input
                    type="text"
                    name="degree"
                    value={formData.degree}
                    placeholder='Enter Degree'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Name of Institution</label>
                <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    placeholder='Enter Name of Institution'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />

                <label className='font-bold'>Percentage/CPI</label>
                <input
                    type="text"
                    name="percentOrCpi"
                    value={formData.percentOrCpi}
                    placeholder='Enter Percentage or CPI'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Year of Completion</label>
                <input
                    type="text"
                    name="completionYear"
                    value={formData.completionYear}
                    placeholder='Enter Year of Completion'
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

export default AddEducation