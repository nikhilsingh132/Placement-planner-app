import React, { useState, useRef } from 'react'
import NavBar from '../components/NavBar'
import Resumephotologo from '../assets/Resumephotologo.png'
import ResumeForm from './ResumeForm'
import ResumePreview from './ResumePreview'
const ResumeMaker = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [name, setname] = useState();
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
                        <p style={{ fontSize: "3rem", color: "#e3d8eb", textAlign: "center", marginBottom:"2rem" }}>One step closer in seeking job opportunities</p>
                    </div>
                    <div style={{display:'flex',flexDirection:"row",width:'100%'}}>
                    <ResumeForm name={name} setname={setname}/>
                    <ResumePreview name={name}/>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ResumeMaker