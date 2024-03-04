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
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    placeholder='Enter job title'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Description 1</label>
                <input
                    type="text"
                    name="descriptionPoint1"
                    value={formData.descriptionPoint1}
                    placeholder='Enter description first point'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Description 2</label>
                <input
                    type="text"
                    name="descriptionPoint2"
                    value={formData.descriptionPoint2}
                    placeholder='Enter description second point'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Description 3</label>
                <input
                    type="text"
                    name="descriptionPoint3"
                    value={formData.descriptionPoint3}
                    placeholder='Enter description third point'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Description 4</label>
                <input
                    type="text"
                    name="descriptionPoint4"
                    value={formData.descriptionPoint4}
                    placeholder='Enter description fourth point'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Start Date</label>
                <input
                    type="text"
                    name="startDate"
                    value={formData.startDate}
                    placeholder='Enter Start Date'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>End Date</label>
                <input
                    type="text"
                    name="endDate"
                    value={formData.endDate}
                    placeholder='Enter End Date'
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

export default AddExperience