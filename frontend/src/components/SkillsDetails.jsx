import React, { useContext } from 'react'
import { skilldetail } from "../scenes/ResumeMaker";
const SkillsDetails = () => {

    const { skillData, setskillData, setallskillData } = useContext(skilldetail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setskillData({
            ...skillData,
            [name]: value
        });
    }

    const saveData = (e) => {
        e.preventDefault();
        setallskillData(skillData);
    }
    return (
        <>
            <div className='text-[2rem] font-bold text-center text-[#072342]'>Skills Details</div>
            <form className='p-[2rem] flex flex-col border-[3px] border-solid border-green-700 mb-[1rem]'>
                <label className='font-bold'>Programming Languages</label>
                <input
                    type="text"
                    name="programmingLang"
                    value={skillData.programmingLang}
                    placeholder='Enter Programming Languages'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />

                <label className='font-bold'>Libraries/Frameworks</label>
                <input
                    type="text"
                    name="libraries"
                    value={skillData.libraries}
                    placeholder='Enter Libraries and Frameworks'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <label className='font-bold'>Area of Interest</label>
                <input
                    type="text"
                    name="areaOfInterest"
                    value={skillData.areaOfInterest}
                    placeholder='Enter Areas of Interest'
                    onChange={handleChange}
                    className='mb-[1rem] h-[2rem]'
                />
                <button className='bg-[#072342] text-[white] h-[2.5rem] rounded-lg overflow-hidden' onClick={saveData}>Confirm</button>
            </form></>
    )
}

export default SkillsDetails