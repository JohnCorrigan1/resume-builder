import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function GetExperience(props) {
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTasks, setEnteredTasks] = useState("");
  const [enteredStart, setEnteredStart] = useState("");
  const [enteredEnd, setEnteredEnd] = useState("");

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const taskChangeHandler = (event) => {
    setEnteredTasks(event.target.value);
  };

  const startChangeHandler = (event) => {
    setEnteredStart(event.target.value);
  };

  const endChangeHandler = (event) => {
    setEnteredEnd(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const experience = {
      company: enteredCompany,
      title: enteredTitle,
      experienceStart: enteredStart,
      experienceEnd: enteredEnd,
      tasks: enteredTasks,
    };
    props.onSubmit(experience);
    setEnteredCompany('')
    setEnteredTitle('')
    setEnteredStart('')
    setEnteredEnd('')
    setEnteredTasks('')
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-center">
          <label htmlFor="company">Company Name</label>
          <input
            onChange={companyChangeHandler}
            type="text"
            className=" w-2/3"
            value={enteredCompany}
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="title">Job Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            className=" w-2/3"
            value={enteredTitle}
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
        <div className="flex flex-col items-center">
          <label htmlFor="tasks">Daily Tasks/Deatils</label>
          <textarea
            onChange={taskChangeHandler}
            className=" w-2/3 pl-2 pr-2"
            value={enteredTasks}
          />
        </div>
          <Button text="Save"/>
      </form>
    </Card>
  );
}
