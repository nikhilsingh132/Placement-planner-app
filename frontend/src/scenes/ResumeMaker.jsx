import React, { useState, useRef, createContext } from 'react'
import NavBar from '../components/NavBar'
import Resumephotologo from '../assets/Resumephotologo.png'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'

const personaldetail = createContext();
const educationaldetail = createContext();
const experiencedetail = createContext();
const skilldetail = createContext();
const projectdetail = createContext();
const achievementdetail = createContext();
const pordetail = createContext();
const extracurriculardetail = createContext();

const ResumeMaker = () => {
    const [formData, setformData] = useState({
        fullname: '',
        emailId: '',
        phoneNumber: '',
        linkedin:'',
        github:'',
        sociallink1:'',
        sociallink2:''
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
        nextViewportRef.current.scrollIntoView({ behavior: 'smooth' });
    };


    return (
        <>

            <NavBar />
            <div>
                <div style={{ height: "92vh", backgroundColor: "#0b2d39", }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ color: "#d3eaf2", fontSize: "5rem", marginRight: "2rem", marginTop: "4rem" }}>
                            <p style={{ marginLeft: "6rem" }}>
                                An
                                <span style={{ color: "#55cb51", fontSize: "6rem", fontWeight: "bold" }}> Excellent </span>
                                and
                                <br />
                                a very
                                <span style={{ color: "#55cb51", fontSize: "6rem", fontWeight: "bold" }}> Easy </span>
                                way to
                                <br />
                                build a
                                <span style={{ color: "#55cb51", fontSize: "6rem", fontWeight: "bold" }}> Resume </span>
                            </p>
                        </div>
                        <div style={{ marginTop: "4rem", transform: `perspective(400px) rotate3d(1, -1, 0, ${isHovered ? '15deg' : '0deg'})`, transition: 'transform 0.5s' }}>
                            <img src={Resumephotologo} alt="ResumePhotoLogo" onMouseEnter={handleHover} onMouseLeave={handleHover} />
                        </div>
                    </div>
                    <div>
                        <div style={{
                            marginTop: "4rem", marginBottom: "4rem", marginLeft: "20rem", marginRight: "20rem", backgroundColor: "#ade0d0", height: "4rem", borderRadius: "10px", display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <p style={{ fontWeight: "bold", fontSize: "2rem", color: "#132e40", marginRight: "1rem" }}>Start building awesome resume 🛠️📑</p>
                            <button style={{ backgroundColor: "#0c2638", color: "white", height: "3rem", width: "7rem", borderRadius: "2rem" }} onClick={handleScrollToNextViewport}>Click Here</button>
                        </div>

                    </div>
                </div>
                <hr style={{
                    color: 'white',
                    backgroundColor: '#708b9e',
                    height: '3px',
                    width: '100%',
                }} />
                <div ref={nextViewportRef} style={{ height: "100vh", backgroundColor: "#0b2d39" }}>
                    <div>
                        <p style={{ fontSize: "2.5rem", color: "#e3d8eb", textAlign: "center", marginBottom: "1rem" }}>One step closer in seeking job opportunities</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row", width: '100%' }}>
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
            </div>
        </>
    )
}

export default ResumeMaker

export { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail }