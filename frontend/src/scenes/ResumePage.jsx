import React, { useContext } from 'react';
import { personaldetail, educationaldetail, experiencedetail } from './ResumeMaker';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const resumeStyles = {
  page: {
    fontFamily: '"Times New Roman", Times, serif',
    padding: '24px',
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '0 0 50px rgba(0, 0, 0, 1)',
    overflowY: "auto",
    maxHeight: "70vh",
    marginBottom: "1rem"
  },
  header: {
    borderBottom: '1px solid black',
    paddingBottom: '12px',
    marginBottom: '24px',
    textAlign: 'center'
  },
  sectionTitle: {
    textDecoration: 'underline',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  section: {
    marginBottom: '16px'
  },
  listItem: {
    marginBottom: '8px'
  }
};

const ResumePage = () => {
  const { confirmedData } = useContext(personaldetail);
  const { allEducationData } = useContext(educationaldetail);
  const { allExperienceData } = useContext(experiencedetail);

  const downloadPDF = () => {
    const capture = document.querySelector('.actual-pdf');
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('img/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      doc.save('Resume.pdf');
    })
  }

  return (
    <>
      <div className="actual-pdf" style={{ width: "80%", marginLeft: "3rem" }}>
        <div style={resumeStyles.page}>
          <div style={resumeStyles.header}>
            <h1>{confirmedData?.fullname}</h1>
          </div>

          <div style={resumeStyles.section}>
            <h2 style={resumeStyles.sectionTitle}>EDUCATION</h2>
            <p><strong>{allEducationData[0]?.institutionName}</strong> - Current CPI: 9.01 (Expected 2024)</p>
            <p>CBSE (XII), Nirmala Convent High School - Percentage: 94.20 (2019 - 2020)</p>
            <p>CBSE (X), Nirmala Convent High School - Percentage: 91.00 (2017 - 2018)</p>
          </div>

          <div style={resumeStyles.section}>
            <h2 style={resumeStyles.sectionTitle}>EXPERIENCE</h2>
            <div style={resumeStyles.listItem}>
              <strong>{allExperienceData[0]?.jobTitle}</strong> - May 2023- July 2023
              <ol style={{ listStyleType: "circle" }}>
                <li>{allExperienceData[0]?.descriptionPoint1}</li>
                <li>Developed Simulink blocks for the sensors using the app, creating .cpp and .h files for seamless integration.</li>
                <li>Utilized sensor libraries, making customized modifications to the code to meet specific output requirements.</li>
                <li>Employed Arduino IDE and CCS Studio to optimize and deploy cpp code for seamless integration of sensors and the DCC peripheral in MATLAB.</li>
              </ol>
            </div>
          </div>


          <div style={resumeStyles.section}>
            <h2 style={resumeStyles.sectionTitle}>SKILLS</h2>
            <ol style={{ listStyleType: "circle" }}>
              <li>Programming Languages: C++, Java, Python, HTML, CSS, JavaScript</li>
              <li>Libraries/Frameworks: Scikit-Learn, Tensorflow, NodeJS, ExpressJS, ReactJS, Bootstrap, Material-UI</li>
              <li>Areas of Interest: Web Development, Competitive Programming, Machine Learning, Data Science</li>
            </ol>
          </div>


          <div style={resumeStyles.section}>
            <h2 style={resumeStyles.sectionTitle}>PROJECTS</h2>
            <div style={resumeStyles.listItem}>
              <strong>
                Handwritten Emoji Captcha Detection (Mosaic’22)</strong> - May 2023- July 2023
              <ol style={{ listStyleType: "circle" }}>
                <li>Enhanced captcha image quality by applying noise removal techniques in image processing.</li>
                <li>Accurately segmented emojis and alphabets from captcha images using advanced image processing methods.</li>
                <li>Achieved over 95% accuracy on testing data by training separate custom CNN models for emojis and alphabets.</li>
                <li>Exposure : OpenCV, CNN, Image Segmentation</li>
              </ol>
            </div>
          </div>


        </div>
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <button style={{ backgroundColor: "#388a7f", color: "white", height: "2.5rem",width:"8rem" }} onClick={downloadPDF}>Download PDF</button>
        </div>
      </div>
    </>
  );
}

export default ResumePage;
