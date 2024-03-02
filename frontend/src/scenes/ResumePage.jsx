import React, { useContext } from 'react';
import { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail } from './ResumeMaker';
import { Document, PDFViewer, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page1: {
    padding: 30
  },
  personal: {
    fontSize: "30px",
    fontWeight: "bold",
    textAlign: "center"
  },
  links: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "black"
  },
  text: {
    fontSize: "16px",
    marginBottom: "5px",
    textAlign:"center"
  },
  titleofField: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  dataofField: {
    fontSize: "12px",
    color: "#363837",
    marginBottom: "5px"
  },
  educationfield: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#363837",
    marginBottom: "5px"
  },
  skillfield: {
    display: "flex",
    flexDirection: "row",
    fontSize: "12px",
  },
  skilltitle: {
    marginRight: "4px"
  },
  skilldata: {
    color: "#363837"
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
      <PDFViewer height={550} width={650}>
        <Document title='Resume'>
          <Page size="A4" style={styles.page1}>
            {/* PERSONAL DETAILS */}
            <View>
              <Text style={styles.personal}>{confirmedData?.fullname}</Text>
              <div style={styles.links}>
                <Link style={{ marginRight: "20px" }}>{confirmedData?.emailId}</Link>
                <Link>{confirmedData?.phoneNumber}</Link>
              </div>
            </View>



            {/* EDUCATION DETAILS */}
            <View>
              {
                allEducationData.length > 0 && <Text style={styles.text}>EDUCATION</Text>
              }
              {
                allEducationData.map((item) => (
                    <View style={styles.educationfield}>
                      <Text>{item?.degree}</Text>
                      <Text>{item?.institutionName}</Text>
                      <Text>{item?.percentOrCpi}</Text>
                      <Text>{item?.completionYear}</Text>
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
                  <View style={styles.skillfield}>
                    {
                      allskillData?.programmingLang &&
                      <>
                        <Text style={styles.skilltitle}>
                          • Programming Languages:
                        </Text>
                        <Text style={styles.skilldata}>
                          {allskillData?.programmingLang}
                        </Text>
                      </>
                    }
                    {
                      allskillData?.libraries &&
                      <>
                        <Text style={styles.skilltitle}>
                          • Libraries/Frameworks:
                        </Text>
                        <Text style={styles.skilldata}>
                          {allskillData?.libraries}
                        </Text>
                      </>
                    }
                    {
                      allskillData?.areaOfInterest &&
                      <>
                        <Text style={styles.skilltitle}>
                          • Area of Interest:
                        </Text>
                        <Text style={styles.skilldata}>
                          {allskillData?.areaOfInterest}
                        </Text>
                      </>
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
                        <Text>
                          • {item?.descriptionPoint1}
                        </Text>
                      }
                      {
                        item?.descriptionPoint2 &&
                        <Text>
                          • {item?.descriptionPoint2}
                        </Text>
                      }
                      {
                        item?.descriptionPoint3 &&
                        <Text>
                          • {item?.descriptionPoint3}
                        </Text>
                      }
                      {
                        item?.descriptionPoint4 &&
                        <Text>
                          • {item?.descriptionPoint4}
                        </Text>
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
                        <Text>
                          • {item?.descriptionPoint1}
                        </Text>
                      }
                      {
                        item?.descriptionPoint2 &&
                        <Text>
                          • {item?.descriptionPoint2}
                        </Text>
                      }
                      {
                        item?.descriptionPoint3 &&
                        <Text>
                          • {item?.descriptionPoint3}
                        </Text>
                      }
                      {
                        item?.descriptionPoint4 &&
                        <Text>
                          • {item?.descriptionPoint4}
                        </Text>
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
                        <Text>
                          • {item?.achievementName}
                        </Text>
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
                        <Text>
                          • {item?.porDescription}
                        </Text>
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
                        <Text>
                          • {item?.extracurricularName}
                        </Text>
                      }
                    </View>
                  </View>
                ))
              }
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default ResumePage;
