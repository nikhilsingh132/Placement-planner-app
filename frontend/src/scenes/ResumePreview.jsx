import React from 'react'
import ResumePage from './ResumePage'

const ResumePreview = () => {
  return (
    <div style={{ width: "50%",padding: "20px" }}>
        <p style={{textAlign:"center",color:"#4287f5",fontWeight:"bold",fontSize:"2rem"}}>Resume Preview</p>
        <ResumePage/>
    </div>
  )
}

export default ResumePreview