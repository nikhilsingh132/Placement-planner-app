import React,{useState} from 'react'

const PersonalDetails = () => {
    const [formData, setformData] = useState({
        fullname: '',
        emailId: '',
        phoneNumber: ''
    });
    let confirmedData={};

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        });
    }

    const saveData=(e)=>{
        e.preventDefault();
        confirmedData=formData;
        console.log(confirmedData);
    }
    return (
        <>
            <div style={{fontSize:"2rem",fontWeight:"bold",textAlign:"center",color:"#072342"}}>Personal Details</div>
            <form style={{ padding: "2rem" ,display:"flex",flexDirection:"column"}}>
                <label>Full Name</label>
                <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    placeholder='Enter Full Name'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />

                <label>Email Id</label>
                <input
                    type="text"
                    name="emailId"
                    value={formData.emailId}
                    placeholder='Enter Email Address'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <label>Phone Number</label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    placeholder='Enter Phone Number'
                    onChange={handleChange}
                    style={{marginBottom:"1rem",height:"2rem"}}
                />
                <button style={{ backgroundColor: "#072342",color:"white",height:"2.5rem" }} onClick={saveData}>Confirm</button>
            </form>
        </>
    )
}

export default PersonalDetails