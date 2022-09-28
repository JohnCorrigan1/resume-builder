import { useState } from "react";
import GetInfo from "./GetInfo";
import GetEducation from "./GetEducation";
import GetExperience from "./GetExperience";
import Button from "../ui/Button";

export default function CvForm(props) {

    const [infoData, setInfoData] = useState([])
    const [educationData, setEducationData] = useState([])
    const [experienceData, setExperienceData] = useState([])

  const getInfoData = (info) => {
    setInfoData(info)
    console.log(infoData)
  };

  const getEducationData = (education) => {
    setEducationData(prevEducation => {
        return [...prevEducation, education]
    })
  };

  const getExperienceData = (experience) => {
    setExperienceData(prevExperience => {
        return [...prevExperience, experience]
    })
  };

  const combineData = () => {
    const finalData = {
     infoData: infoData,
     educationData: educationData,
     experienceData: experienceData
    }
    props.onSave(finalData)
}


  return (
    <div>
      <GetInfo onSubmit={getInfoData} />
      <GetEducation onSubmit={getEducationData} />
      <GetExperience onSubmit={getExperienceData} />
      <Button text="Submit" onClick={combineData} >Submit</Button>
    </div>
  );
}
