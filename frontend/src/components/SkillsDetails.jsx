import React,{useContext} from 'react'
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
            <div style={{ fontSize: "2rem", fontWeight: "bold", textAlign: "center", color: "#072342" }}>Skills Details</div>
            <form style={{ padding: "2rem", display: "flex", flexDirection: "column", border: "3px solid green" }}>
                <label style={{ fontWeight: "bold" }}>Programming Languages</label>
                <input
                    type="text"
                    name="programmingLang"
                    value={skillData.programmingLang}
                    placeholder='Enter Programming Languages'
                    onChange={handleChange}
                    style={{ marginBottom: "1rem", height: "2rem" }}
                />

                <label style={{ fontWeight: "bold" }}>Libraries/Frameworks</label>
                <input
                    type="text"
                    name="libraries"
                    value={skillData.libraries}
                    placeholder='Enter Libraries and Frameworks'
                    onChange={handleChange}
                    style={{ marginBottom: "1rem", height: "2rem" }}
                />
                <label style={{ fontWeight: "bold" }}>Area of Interest</label>
                <input
                    type="text"
                    name="areaOfInterest"
                    value={skillData.areaOfInterest}
                    placeholder='Enter Areas of Interest'
                    onChange={handleChange}
                    style={{ marginBottom: "1rem", height: "2rem" }}
                />
                <button style={{ backgroundColor: "#072342", color: "white", height: "2.5rem" }} onClick={saveData}>Confirm</button>
            </form></>
    )
}

export default SkillsDetails