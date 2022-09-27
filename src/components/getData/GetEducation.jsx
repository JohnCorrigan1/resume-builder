import { useState } from "react";

import Card from "../ui/Card";
import "./forms.css";

export default function GetEducation() {
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
    console.log(education);
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
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="area">Study area</label>
          <input
            onChange={studyChangeHandler}
            type="text"
            id="area"
            className=" w-2/3"
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="start">Start Date</label>
          <input
            onChange={startChangeHandler}
            type="text"
            id="start"
            className=" w-2/3"
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="end">End Date (blank if not complete)</label>
          <input
            onChange={endChangeHandler}
            type="text"
            id="end"
            className=" w-2/3"
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </Card>
  );
}
