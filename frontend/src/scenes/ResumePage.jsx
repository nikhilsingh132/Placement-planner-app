import React from 'react';

const resumeStyles = {
  page: {
    fontFamily: '"Times New Roman", Times, serif',
    padding: '24px',
    color: 'black',
    backgroundColor: 'white',
    maxWidth: '800px',
    margin: '24px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
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

const ResumePage = () => (
  <div style={resumeStyles.page}>
    <div style={resumeStyles.header}>
      <h1>NIKHIL KUMAR SINGH</h1>
    </div>

    <div style={resumeStyles.section}>
      <h2 style={resumeStyles.sectionTitle}>EDUCATION</h2>
      <p><strong>Electronics Engineering, Bachelor of Technology, IIT BHU</strong> - Current CPI: 9.01 (Expected 2024)</p>
      <p>CBSE (XII), Nirmala Convent High School - Percentage: 94.20 (2019 - 2020)</p>
      <p>CBSE (X), Nirmala Convent High School - Percentage: 91.00 (2017 - 2018)</p>
    </div>

    <div style={resumeStyles.section}>
      <h2 style={resumeStyles.sectionTitle}>EXPERIENCE</h2>
      <div style={resumeStyles.listItem}>
        <strong>EDG Intern, Mathworks</strong> - May 2023- July 2023
        <ol style={{listStyleType:"circle"}}>
          <li>Leveraged IO device driver builder in MATLAB/Simulink for DS1307, OPT3001, and DCC peripheral.</li>
          <li>Developed Simulink blocks for the sensors using the app, creating .cpp and .h files for seamless integration.</li>
          <li>Utilized sensor libraries, making customized modifications to the code to meet specific output requirements.</li>
          <li>Employed Arduino IDE and CCS Studio to optimize and deploy cpp code for seamless integration of sensors and the DCC peripheral in MATLAB.</li>
        </ol>
      </div>
    </div>


    <div style={resumeStyles.section}>
      <h2 style={resumeStyles.sectionTitle}>SKILLS</h2>
      <ol style={{listStyleType:"circle"}}>
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
        <ol style={{listStyleType:"circle"}}>
          <li>Enhanced captcha image quality by applying noise removal techniques in image processing.</li>
          <li>Accurately segmented emojis and alphabets from captcha images using advanced image processing methods.</li>
          <li>Achieved over 95% accuracy on testing data by training separate custom CNN models for emojis and alphabets.</li>
          <li>Exposure : OpenCV, CNN, Image Segmentation</li>
        </ol>
      </div>
    </div>


  </div>
);

export default ResumePage;
