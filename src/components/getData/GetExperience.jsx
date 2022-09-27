import { useState } from "react";
import Card from "../ui/Card";

export default function GetExperience(props) {
  const [enteredCompany, setEnteredCompany] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredTasks, setEnteredTasks] = useState("");

  const companyChangeHandler = (event) => {
    setEnteredCompany(event.target.value);
  };

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const taskChangeHandler = (event) => {
    setEnteredTasks(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const experience = {
      company: enteredCompany,
      title: enteredTitle,
      tasks: enteredTasks,
    };
    props.onSubmit(experience)
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
          />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="title">Job Title</label>
          <input onChange={titleChangeHandler} type="text" className=" w-2/3" />
        </div>
        <div className="flex flex-col items-center">
          <label htmlFor="tasks">Daily Tasks/Deatils</label>
          <textarea onChange={taskChangeHandler} className=" w-2/3"></textarea>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </Card>
  );
}
