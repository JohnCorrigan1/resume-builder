import { useState } from 'react';

import Header from "./components/ui/Header";
import CvForm from "./components/getData/CvForm";
import Resume from "./components/outputData/Resume";
import "./index.css";

let userData;
function App() {

  const [enteredData, setEnteredData] = useState({})

  const getData = (data) => {
    console.log("in app", data)
    setEnteredData(data)
  }

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
      <div className="forms">
       <CvForm onSave={getData} />
      </div>
      <div className="resume mt-10">
      <Resume data={enteredData} />
      </div>
      </div>
    </div>
  );
}

export default App;
