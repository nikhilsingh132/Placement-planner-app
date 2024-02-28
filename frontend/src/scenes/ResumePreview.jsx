import React from 'react'
import ResumePage from './ResumePage'



const ResumePreview = () => {
  return (
    <div style={{ width: "50%" }}>
      <p style={{ textAlign: "center", color: "#4287f5", fontWeight: "bold", fontSize: "2rem",marginBottom:"20px" }}>Resume Preview</p>
      <ResumePage/>
    </div>
  )
}

export default ResumePreview