import React, { useState } from 'react'

const AddAchievement = ({ id, removeAchievement, allAchievementData, setallAchievementData }) => {
    const [formData, setformData] = useState({
        achievementName: "",
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
        setallAchievementData([...allAchievementData, newFormData]);
    }

    const handleRemove = (e) => {
        e.preventDefault();
        removeAchievement(id);
    }
    return (
        <>
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Achievement</label>
                <input
                    type="text"
                    name="achievementName"
                    value={formData.achievementName}
                    placeholder='Enter Achievement'
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

export default AddAchievement