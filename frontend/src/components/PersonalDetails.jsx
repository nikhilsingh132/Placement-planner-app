import React,{useContext} from 'react'
import { personaldetail } from '../scenes/ResumeMaker';
const PersonalDetails = () => {

    const {formData,setformData,setconfirmedData}=useContext(personaldetail);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    }

    const saveData=(e)=>{
        e.preventDefault();
        setconfirmedData(formData);
    }
    return (
        <>
            <div style={{fontSize:"2rem",fontWeight:"bold",textAlign:"center",color:"#072342"}}>Personal Details</div>
            <form style={{ padding: "2rem" ,display:"flex",flexDirection:"column",border:"3px solid green"}}>
                <label style={{fontWeight:"bold"}}>Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    placeholder='Enter Full Name'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

                <label style={{fontWeight:"bold"}}>Email Id</label>
                <input
                    type="text"
                    name="emailId"
                    value={formData.emailId}
                    placeholder='Enter Email Address'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label style={{fontWeight:"bold"}}>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder='Enter Phone Number'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

<label style={{fontWeight:"bold"}}>Linkedin Profile</label>
                <input
                    type="text"
                    name="linkedin"
                    value={formData.linkedin}
                    placeholder='Enter Linkedin Profile'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

<label style={{fontWeight:"bold"}}>Github Profile</label>
                <input
                    type="text"
                    name="github"
                    value={formData.github}
                    placeholder='Enter Github Profile'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <button style={{ backgroundColor: "#072342",color:"white",height:"2.5rem" }} onClick={saveData}>Confirm</button>
            </form>
        </>
    )
}

export default PersonalDetails