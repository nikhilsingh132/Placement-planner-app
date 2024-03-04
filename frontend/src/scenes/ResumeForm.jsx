import React, { useState } from 'react';
import PersonalDetails from '../components/PersonalDetails';
import EducationalDetails from '../components/EducationalDetails';
import WorkExperience from '../components/WorkExperience';
import SkillsDetails from '../components/SkillsDetails';
import ProjectDetails from '../components/ProjectDetails';
import AchievementDetails from '../components/AchievementDetails';
import PorDetails from '../components/PorDetails';
import ExtraCurricularDetails from '../components/ExtraCurricularDetails';

const ResumeForm = () => {

    const [currentIndex, setcurrentIndex] = useState(1);

    const nextIndex = () => {
        if (currentIndex === 8) {
            return;
        }
        setcurrentIndex(currentIndex + 1);
    };

    const prevIndex = () => {
        if (currentIndex === 1) {
            return;
        }
        setcurrentIndex(currentIndex - 1);
    };

    return (
        <div className='w-[50%] flex flex-col items-center'>
            <p className='text-[#4287f5] font-bold text-[2rem] mb-[20px]'>Fill the form</p>
            <div className='bg-[#9edeaf] w-[80%] max-h-[60vh] p-[20px] mb-[20px] border-[3px] border-blue-500 overflow-y-auto'>
                {currentIndex === 1 && <PersonalDetails />}
                {currentIndex === 2 && <EducationalDetails />}
                {currentIndex === 3 && <WorkExperience />}
                {currentIndex === 4 && <SkillsDetails />}
                {currentIndex === 5 && <ProjectDetails />}
                {currentIndex === 6 && <AchievementDetails />}
                {currentIndex === 7 && <PorDetails />}
                {currentIndex === 8 && <ExtraCurricularDetails />}
            </div>
            <div className='flex justify-between w-[80%]'>
                <button className='bg-[#355475] text-[white] border-none p-[10px] px-[20px] cursor-pointer' onClick={prevIndex}>Back</button>

                <button className='bg-[#357546] text-[white] border-none p-[10px] px-[20px] cursor-pointer' onClick={nextIndex}>Next</button>
            </div>
        </div>
    );
};

export default ResumeForm;
