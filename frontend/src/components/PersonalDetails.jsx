import React from 'react'
const detail = [
    {
        id: 1,
        label: "Full Name",
        placeholder: "Enter Full Name",
        type: "text"
    },
    {
        id: 2,
        label: "Email Id",
        placeholder: "Enter Email Id",
        type: "email"
    },
    {
        id: 3,
        label: "Phone Number",
        placeholder: "Enter Phone Number",
        type: "text"
    },
]
const PersonalDetails = () => {
    return (
        <>
            <div style={{fontSize:"2rem",fontWeight:"bold",textAlign:"center"}}>Personal Details</div>
            <form style={{ padding: "2rem" }}>
                {
                    detail.map((item) => (
                        <div key={item.id} style={{ display: "flex", flexDirection: "column" }}>
                            <label>{item.label}</label>
                            <input type={item.type} placeholder={item.placeholder} />
                        </div>
                    ))
                }
            </form>
        </>
    )
}

export default PersonalDetails