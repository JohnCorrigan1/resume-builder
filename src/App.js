import { useState } from 'react';

import Header from "./components/ui/Header";
import CvForm from "./components/getData/CvForm";
import Resume from "./components/outputData/Resume";
import "./index.css";

const exampleUser = {
  infoData: {
    fullName: "John Doe",
    email: "john.doe@gmail.com",
    phone: "111-222-3333",
    address: "New York City, NY"
  },
  educationData: [
    {
    school: "Florida State University",
    study: "Bachelors of Science, Computer Science",
    start: "2016",
    end: "2020"
  },
  {
    school: "University of Florida",
    study: "Masters of Science, Computer Science",
    start: "2020",
    end: "present"
  } 
],
  experienceData: [
    {
    company: "Google",
    title: "Software Engineer",
    experienceStart: "2022",
    experienceEnd: "present",
    tasks: "Daily stand up meetings. Code features on multiple projects. Work colaboratively with many team members."
  }
]

}
function App() {

  const [enteredData, setEnteredData] = useState(exampleUser)

  const getData = (data) => {
    console.log("in app", data)
    setEnteredData(data)
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="grid-container">
      <div className="forms">
       <CvForm onSave={getData} />
      </div>
      <div className="resume mt-10 mb-5 min-h-4/5 sticky">
      <Resume data={enteredData} />
      </div>
      </div>
    </div>
  );
}

export default App;
