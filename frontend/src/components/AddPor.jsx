import React, { useState } from 'react'

const AddPor = ({ id, removepor, allPorData, setallPorData }) => {
    const [formData, setformData] = useState({
        porName: "",
        porDescription: ""
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
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>POR Name</label>
                <input
                    type="text"
                    name="porName"
                    value={formData.porName}
                    placeholder='Enter POR Name'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>POR Decription</label>
                <input
                    type="text"
                    name="porDescription"
                    value={formData.porDescription}
                    placeholder='Enter POR Decription'
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

export default AddPor