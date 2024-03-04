import React, { useState, useRef, createContext } from 'react'
import NavBar from '../components/NavBar'
import Resumephotologo from '../assets/Resumephotologo.png'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'
import { useAuth } from "../AuthContext";

const personaldetail = createContext();
const educationaldetail = createContext();
const experiencedetail = createContext();
const skilldetail = createContext();
const projectdetail = createContext();
const achievementdetail = createContext();
const pordetail = createContext();
const extracurriculardetail = createContext();

const ResumeMaker = () => {
    const { isAuthenticated } = useAuth();
    const [formData, setformData] = useState({
        fullname: '',
        emailId: '',
        phoneNumber: '',
        linkedin: '',
        github: '',
    });
    const [confirmedData, setconfirmedData] = useState([]);
    const [allEducationData, setallEducationData] = useState([]);
    const [allExperienceData, setallExperienceData] = useState([]);
    const [skillData, setskillData] = useState({
        programmingLang: '',
        libraries: '',
        areaOfInterest: ''
    });
    const [allskillData, setallskillData] = useState([]);
    const [allProjectData, setallProjectData] = useState([]);
    const [allAchievementData, setallAchievementData] = useState([]);
    const [allPorData, setallPorData] = useState([]);
    const [allExtraCurricularData, setallExtraCurricularData] = useState([]);



    const [isHovered, setIsHovered] = useState(false);
    const handleHover = () => {
        setIsHovered(!isHovered);
    };

    const nextViewportRef = useRef(null);

    const handleScrollToNextViewport = () => {
        if (isAuthenticated) {
            nextViewportRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Optionally show an alert or handle it in some other way
            alert('Please login to access this feature.');
        }
    };


    return (
        <>

            <NavBar />
            <div>
                <div className="h-[92vh] bg-[#0b2d39]">
                    <div className='flex'>
                        <div className='text-[#d3eaf2] text-[5rem] mr-[2rem] mt-[4rem]'>
                            <p className='ml-[6rem]'>
                                An
                                <span className='text-[#55cb51] text-[6rem] font-bold'> Excellent </span>
                                and
                                <br />
                                a very
                                <span className='text-[#55cb51] text-[6rem] font-bold'> Easy </span>
                                way to
                                <br />
                                build a
                                <span className='text-[#55cb51] text-[6rem] font-bold'> Resume </span>
                            </p>
                        </div>
                        <div className='mt-[4rem]'>
                            <img src={Resumephotologo} alt="ResumePhotoLogo" onMouseEnter={handleHover} onMouseLeave={handleHover} />
                        </div>
                    </div>
                    <div>
                        <div className='mt-[4rem] mb-[4rem] ml-[20rem] mr-[20rem] bg-[#ade0d0] h-[4rem] rounded-lg overflow-hidden flex justify-center items-center'>
                            <p className='font-bold text-[#132e40] text-[2rem] mr-[1rem]' >Start building awesome resume 🛠️📑</p>
                            <button className='bg-[#0c2638] text-[white] h-[3rem] w-[7rem] rounded-lg overflow-hidden' onClick={handleScrollToNextViewport}>Click Here</button>
                        </div>

                    </div>
                </div>
                {
                    isAuthenticated &&
                    <>
                        <div ref={nextViewportRef} className='h-100vh bg-[#0b2d39]'>
                            <div>
                                <p className='text-[2.5rem] text-[#e3d8eb] text-center mb-[1rem]'>One step closer in seeking job opportunities</p>
                            </div>
                            <div className='flex flex-row w-[100%]'>
                                <personaldetail.Provider value={{ formData, setformData, confirmedData, setconfirmedData }}>
                                    <educationaldetail.Provider value={{ allEducationData, setallEducationData }}>
                                        <experiencedetail.Provider value={{ allExperienceData, setallExperienceData }}>
                                            <skilldetail.Provider value={{ skillData, setskillData, allskillData, setallskillData }}>
                                                <projectdetail.Provider value={{ allProjectData, setallProjectData }}>
                                                    <achievementdetail.Provider value={{ allAchievementData, setallAchievementData }}>
                                                        <pordetail.Provider value={{ allPorData, setallPorData }}>
                                                            <extracurriculardetail.Provider value={{ allExtraCurricularData, setallExtraCurricularData }}>
                                                                <ResumeForm />
                                                                <ResumePreview />
                                                            </extracurriculardetail.Provider>
                                                        </pordetail.Provider>
                                                    </achievementdetail.Provider>
                                                </projectdetail.Provider>
                                            </skilldetail.Provider>
                                        </experiencedetail.Provider>
                                    </educationaldetail.Provider>
                                </personaldetail.Provider>
                            </div>
                        </div>
                    </>
                }

            </div>
        </>
    )
}

export default ResumeMaker

export { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail }