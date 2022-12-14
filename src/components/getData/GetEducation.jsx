import { useState } from "react";
import Button from "../ui/Button";
import Card from "../ui/Card";
import "./forms.css";

export default function GetEducation(props) {
  const [enteredSchool, setEnteredSchool] = useState("");
  const [enteredStudy, setEnteredStudy] = useState("");
  const [enteredStart, setEnteredStart] = useState("");
  const [enteredEnd, setEnteredEnd] = useState("");

  const schoolChangeHandler = (event) => {
    setEnteredSchool(event.target.value);
  };

  const studyChangeHandler = (event) => {
    setEnteredStudy(event.target.value);
  };

  const startChangeHandler = (event) => {
    setEnteredStart(event.target.value);
  };

  const endChangeHandler = (event) => {
    setEnteredEnd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const education = {
      school: enteredSchool,
      study: enteredStudy,
      start: enteredStart,
      end: enteredEnd,
    };
   props.onSubmit(education)
   setEnteredSchool('')
   setEnteredStudy('')
   setEnteredStart('')
   setEnteredEnd('')
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-center">
          <label htmlFor="school">School Name</label>
          <input
            onChange={schoolChangeHandler}
            type="text"
            id="school"
            className="w-2/3"
            value={enteredSchool}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="area">Degree</label>
          <input
            onChange={studyChangeHandler}
            type="text"
            id="area"
            className=" w-2/3"
            value={enteredStudy}
          />
        </div>
        <div className="flex justify-center gap-10">
        <div className="flex flex-col items-center">
          <label htmlFor="schoolStart">Start Date</label>
          <input
            onChange={startChangeHandler}
            type="text"
            id="schoolStart"
            value={enteredStart}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="schoolEnd">End Date</label>
          <input
            onChange={endChangeHandler}
            type="text"
            id="schoolEnd"
            value={enteredEnd}
          />
        </div>
        </div>
        <div>
          <Button text="Save"/>
        </div>
      </form>
      </Card>
  );
}
