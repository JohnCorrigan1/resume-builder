import { useState } from "react";
import GetInfo from "./GetInfo";
import GetEducation from "./GetEducation";
import GetExperience from "./GetExperience";
import Card from "../ui/Card";

export default function CvForm(props) {

    const [infoData, setInfoData] = useState([])
    const [educationData, setEducationData] = useState({})
    const [experienceData, setExperienceData] = useState({})

  const getInfoData = (info) => {
    setInfoData(info)
    console.log(infoData)
  };

  const getEducationData = (education) => {
    setEducationData(education)
  };

  const getExperienceData = (experience) => {
    setExperienceData(experience)
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
      <Card >
      <GetEducation onSubmit={getEducationData} />
      <button className="">Add Another</button>
      </Card>
      <GetExperience onSubmit={getExperienceData} />
      <button onClick={combineData} >Submit</button>
    </div>
  );
}
