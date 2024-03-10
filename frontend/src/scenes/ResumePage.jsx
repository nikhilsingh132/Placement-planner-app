import React, { useContext } from 'react';
import { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail } from './ResumeMaker';
import { Document, PDFViewer, Page, Text, View, StyleSheet, Link, Font } from '@react-pdf/renderer';
import Arimo from '../assets/fonts/ArimoBold-dVDx.ttf'


Font.register({
  family: 'ArimoFamily',
  src: Arimo
})
const styles = StyleSheet.create({
  pdfview: {
    // flex: 1,
    aspectRatio: 1.2,
    width: '90%',
    marginBottom:'2rem',
    marginLeft:"1rem"
  },
  page: {
    padding: 30,
  },
  pageStyle: {
    borderWidth: 1
  },
  personal: {
    fontSize: "20px",
    textAlign: "center",
    fontFamily: "ArimoFamily",
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "black",
    textAlign: "center",
    fontSize: "10px",
    marginBottom: "2px"
  },
  clickablelink: {
    cursor: "pointer"
  },
  text: {
    fontSize: "14px",
    textAlign: "center",
    fontFamily: 'ArimoFamily',
    fontWeight: 'bold',
    backgroundColor: '#C8DCE6'
  },
  descriptionstyle: {
    display: "flex",
    flexDirection: "row",
    color: "black",
  },
  titleofField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "14px",
    fontFamily: 'ArimoFamily',
    backgroundColor: '#E6E6E6',
    marginBottom: "5px",
    marginLeft: "2px",
    marginRight: "2px"
  },
  dataofField: {
    fontSize: "12px",
    marginBottom: "5px",
    width: "98%",
    flexWrap: 'wrap',
    marginLeft: '2px',
  },
  educationfield: {
    display: "flex",
    flexDirection: "row",
    fontSize: "12px",
    marginBottom: "5px"
  },
  educationHeading: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "5px",
    fontSize: "12px",
    fontFamily: "ArimoFamily",
    backgroundColor: "#E6E6E6"
  },
  skilltitle: {
    marginRight: "4px",
    fontFamily: 'ArimoFamily',
    marginBottom: "5px"
  },
  skillfielddata: {
    display: "flex",
    flexDirection: "row",
    fontSize: "12px",
    marginLeft: "2px",
    marginRight: "2px"
  }
})





const ResumePage = () => {
  const { confirmedData } = useContext(personaldetail);
  const { allEducationData } = useContext(educationaldetail);
  const { allExperienceData } = useContext(experiencedetail);
  const { allskillData } = useContext(skilldetail);
  const { allProjectData } = useContext(projectdetail);
  const { allAchievementData } = useContext(achievementdetail);
  const { allPorData } = useContext(pordetail);
  const { allExtraCurricularData } = useContext(extracurriculardetail);

  return (
    <>
      <PDFViewer style={styles.pdfview}>
        <Document title='Resume'>
          <Page size="A4" style={styles.page}>


            {/* PERSONAL DETAILS */}
            {
              Object.keys(confirmedData).length > 0 &&
              <View>
                <Text style={styles.personal}>{confirmedData?.fullname}</Text>
                <View style={styles.links}>
                  {
                    confirmedData?.emailId &&
                    <Text>
                      <Link style={styles.clickablelink} src={confirmedData?.emailId}>Email</Link>
                    </Text>
                  }
                  {
                    confirmedData?.phoneNumber && <Text> • </Text>
                  }
                  {
                    confirmedData?.phoneNumber &&
                    <Text>
                      <Link style={styles.clickablelink} src={confirmedData?.phoneNumber}>Phone</Link>
                    </Text>
                  }
                  {
                    confirmedData?.linkedin && <Text> • </Text>
                  }
                  {
                    confirmedData?.linkedin &&
                    <Text>
                      <Link style={styles.clickablelink} src={confirmedData?.linkedin}>LinkedIn</Link>
                    </Text>
                  }
                  {
                    confirmedData?.github && <Text> • </Text>
                  }
                  {
                    confirmedData?.github &&
                    <Text style={styles.linkspace}>
                      <Link style={styles.clickablelink} src={confirmedData?.github}>Github</Link>
                    </Text>
                  }
                </View>
              </View>
            }
            <View style={styles.pageStyle}>

              {/* EDUCATION DETAILS */}
              <View>
                {
                  allEducationData.length > 0 && <Text style={styles.text}>EDUCATION</Text>
                }
                {
                  allEducationData.length > 0 &&
                  <View style={styles.educationHeading}>
                    <Text style={{ width: "15%", textAlign: "center" }}>Degree</Text>
                    <Text style={{ width: "55%", textAlign: "center" }}>Institution</Text>
                    <Text style={{ width: "15%", textAlign: "center" }}>Percentage</Text>
                    <Text style={{ width: "15%", textAlign: "center" }}>Year</Text>
                  </View>
                }
                {
                  allEducationData.map((item) => (
                    <View style={styles.educationfield}>
                      <Text style={{ width: "15%", textAlign: "center" }}>{item?.degree}</Text>
                      <Text style={{ width: "55%", textAlign: "center" }}>{item?.institutionName}</Text>
                      <Text style={{ width: "15%", textAlign: "center" }}>{item?.percentOrCpi}</Text>
                      <Text style={{ width: "15%", textAlign: "center" }}>{item?.completionYear}</Text>
                    </View>
                  ))
                }
              </View>


              {/* SKILL DETAILS */}
              <View>
                {
                  Object.keys(allskillData).length > 0 && <Text style={styles.text}>SKILLS</Text>
                }
                {
                  <View>
                    <View>
                      {
                        allskillData?.programmingLang &&
                        <Text style={styles.skillfielddata}>
                          <Text style={styles.skilltitle}>
                            • Programming Languages:
                          </Text>
                          <Text>
                            {allskillData?.programmingLang}
                          </Text>
                        </Text>
                      }
                      {
                        allskillData?.libraries &&
                        <Text style={styles.skillfielddata}>
                          <Text style={styles.skilltitle}>
                            • Libraries/Frameworks:
                          </Text>
                          <Text>
                            {allskillData?.libraries}
                          </Text>
                        </Text>
                      }
                      {
                        allskillData?.areaOfInterest &&
                        <Text style={styles.skillfielddata}>
                          <Text style={styles.skilltitle}>
                            • Area of Interest:
                          </Text>
                          <Text>
                            {allskillData?.areaOfInterest}
                          </Text>
                        </Text>
                      }
                    </View>
                  </View>

                }
              </View>



              {/* EXPERIENCE DETAILS */}
              <View>
                {
                  allExperienceData.length > 0 && <Text style={styles.text}>EXPERIENCE</Text>
                }
                {
                  allExperienceData.map((item) => (
                    <View>
                      <View style={styles.titleofField}>
                        <Text>{item?.jobTitle}</Text>
                        <Text>{item?.startDate} - {item?.endDate}</Text>
                      </View>
                      <View style={styles.dataofField}>
                        {
                          item?.descriptionPoint1 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint1}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint2 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint2}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint3 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint3}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint4 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint4}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  ))
                }
              </View>


              {/* PROJECT DETAILS */}
              <View>
                {
                  allProjectData.length > 0 && <Text style={styles.text}>PROJECT</Text>
                }
                {
                  allProjectData.map((item) => (
                    <View>
                      <View style={styles.titleofField}>
                        <Text>{item?.projectname}</Text>
                        <Text>{item?.startDate} - {item?.endDate}</Text>
                      </View>
                      <View style={styles.dataofField}>
                        {
                          item?.descriptionPoint1 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint1}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint2 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint2}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint3 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint3}
                            </Text>
                          </View>
                        }
                        {
                          item?.descriptionPoint4 &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.descriptionPoint4}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  ))
                }
              </View>



              {/* ACHIEVEMENT DETAILS */}
              <View>
                {
                  allAchievementData.length > 0 && <Text style={styles.text}>HONOURS AND ACHIEVEMENTS</Text>
                }
                {
                  allAchievementData.map((item) => (
                    <View>
                      <View style={styles.dataofField}>
                        {
                          item?.achievementName &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.achievementName}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  ))
                }
              </View>

              {/* POR DETAILS */}
              <View>
                {
                  allPorData.length > 0 && <Text style={styles.text}>POSITION OF RESPONSIBILITY</Text>
                }
                {
                  allPorData.map((item) => (
                    <View>
                      <View style={styles.titleofField}>
                        <Text>{item?.porName}</Text>
                      </View>
                      <View style={styles.dataofField}>
                        {
                          item?.porDescription &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.porDescription}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  ))
                }
              </View>



              {/* EXTRACURRICULAR DETAILS */}
              <View>
                {
                  allExtraCurricularData.length > 0 && <Text style={styles.text}>EXTRA-CURRICULAR ACTIVITIES</Text>
                }
                {
                  allExtraCurricularData.map((item) => (
                    <View>
                      <View style={styles.dataofField}>
                        {
                          item?.extracurricularName &&
                          <View style={styles.descriptionstyle}>
                            <Text style={{ fontFamily: "ArimoFamily", marginRight: "4px" }}>•</Text>
                            <Text>
                              {item?.extracurricularName}
                            </Text>
                          </View>
                        }
                      </View>
                    </View>
                  ))
                }
              </View>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default ResumePage;
