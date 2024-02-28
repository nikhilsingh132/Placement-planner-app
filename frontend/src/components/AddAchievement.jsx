import React,{useState} from 'react'

const AddAchievement = ({ id,removeAchievement,allAchievementData,setallAchievementData}) => {
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
    <form style={{ padding: "2rem", display: "flex", flexDirection: "column",border:"3px solid green",marginBottom:"1rem" }}>
                <label style={{fontWeight:"bold"}}>Achievement</label>
                <input
                    type="text"
                    name="achievementName"
                    value={formData.achievementName}
                    placeholder='Enter Achievement'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <div style={{display:"flex",flexDirection:"row",justifyContent: "space-between"}}>
                <button style={{ backgroundColor: "#072342",color:"white",height:"2.5rem",width:"5rem" }} onClick={saveData}>Confirm</button>
                <button style={{ backgroundColor: "#ba271a",color:"white",height:"2.5rem",width:"5rem"}} onClick={handleRemove}>Remove</button>
                </div>
            </form>

    </>
  )
}

export default AddAchievement