import { useState } from "react";
import GetInfo from "./GetInfo";
import GetEducation from "./GetEducation";
import GetExperience from "./GetExperience";

export default function CvForm(props) {

    const [data, setData] = useState([])

  const infoData = (info) => {
    setData(prevData => {
      return [  info, ...prevData ]
  })
  };

  const educationData = (education) => {
    setData(prevData => {
        return [  education, ...prevData ]
    })
    
  };

  const experienceData = (experience) => {
    setData(prevData => {
        return [  experience, ...prevData ]
    })
  };

  const combineData = () => {
    const finalData = {
      ...data[0],
      ...data[1],
      ...data[2]
    }
    props.onSave(finalData)
}

  return (
    <div>
      <GetInfo onSubmit={infoData} />
      <GetEducation onSubmit={educationData} />
      <GetExperience onSubmit={experienceData} />
      <button onClick={combineData} >Submit</button>
    </div>
  );
}
