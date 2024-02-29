import React, { useContext } from 'react';
import { personaldetail, educationaldetail, experiencedetail, skilldetail, projectdetail, achievementdetail, pordetail, extracurriculardetail } from './ResumeMaker';
import { Document, PDFViewer, Page, Text, View, StyleSheet,Link } from '@react-pdf/renderer';
const styles = StyleSheet.create({
  page1: {
    padding: 20
  },
  personal: {
    fontSize:"30px",
    fontWeight:"bold",
    textAlign:"center"
  },
  links:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center"
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
            <View>
              <Text style={styles.personal}>{confirmedData?.fullname}</Text>
              <div style={styles.links}>
              <Link>{confirmedData?.emailId}</Link>
              <Link>{confirmedData?.phoneNumber}</Link>
              </div>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
}

export default ResumePage;
