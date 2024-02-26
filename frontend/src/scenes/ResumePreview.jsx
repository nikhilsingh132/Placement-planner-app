import React from 'react'

const ResumePreview = ({name}) => {
  return (
    <div style={{ width: "50%" }}>
        <p style={{textAlign:"center",color:"#4287f5",fontWeight:"bold",fontSize:"2rem"}}>Resume Preview</p>
        <h1 style={{color:"white"}}> your name is {name}</h1>
    </div>
  )
}

export default ResumePreview