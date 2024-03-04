import React, { useContext } from 'react'
import { personaldetail } from '../scenes/ResumeMaker';
const PersonalDetails = () => {

    const { formData, setformData, setconfirmedData } = useContext(personaldetail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    }

    const saveData = (e) => {
        e.preventDefault();
        setconfirmedData(formData);
    }
    return (
        <>
            <div className='text-[2rem] font-bold text-center text-[#072342]'>Personal Details</div>
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    placeholder='Enter Full Name'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />

                <label className='font-bold'>Email Id</label>
                <input
                    type="text"
                    name="emailId"
                    value={formData.emailId}
                    placeholder='Enter Email Address'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder='Enter Phone Number'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />

                <label className='font-bold'>Linkedin Profile</label>
                <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    placeholder='Enter Linkedin Profile'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />

                <label className='font-bold'>Github Profile</label>
                <input
                    type="text"
                    name="github"
                    value={formData.github}
                    placeholder='Enter Github Profile'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <button className='bg-[#072342] text-[white] h-[2.5rem] rounded-lg overflow-hidden' onClick={saveData}>Confirm</button>
            </form>
        </>
    )
}

export default PersonalDetails