import React from 'react'
import ResumePage from './ResumePage'



const ResumePreview = () => {
  return (
    <div className='sm:w-[50%]'>
      <p className='text-center text-[#4287f5] sm:font-bold text-[1.5rem] sm:text-[2rem] mb-[10px] mt-[20px]'>Resume Preview</p>
      <ResumePage/>
    </div>
  )
}

export default ResumePreview