import Header from "./components/ui/Header";
import CvForm from "./components/getData/CvForm";
import Resume from "./components/outputData/Resume";
import "./index.css";


function App() {

  return (
    <div className="App">
      <Header />
      <div className="grid-container">
      <div className="forms">
       <CvForm />
      </div>
      <div className="resume mt-10">
      <Resume />
      </div>
      </div>
    </div>
  );
}

export default App;
