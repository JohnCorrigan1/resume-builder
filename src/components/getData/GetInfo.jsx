import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

export default function GetInfo(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPhone, setEnteredPhone] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setEnteredPhone(event.target.value);
  };

  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const info = {
      fullName: enteredName,
      email: enteredEmail,
      phone: enteredPhone,
      address: enteredAddress,
    };

    props.onSubmit(info)
  };

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col  mr-auto ml-auto items-center">
          <label htmlFor="name">Full Name</label>
          <input
            onChange={nameChangeHandler}
            type="text"
            id="name"
            className="w-2/3"
          />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="email">Email</label>
          <input
            onChange={emailChangeHandler}
            type="email"
            className="w-2/3"
            id="email"
          />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="phone">Phone Number</label>
          <input
            onChange={phoneChangeHandler}
            type="text"
            className="w-2/3"
            id="phone"
          />
        </div>
        <div className="flex flex-col mr-auto ml-auto items-center">
          <label htmlFor="address">Address</label>
          <input
            onChange={addressChangeHandler}
            type="text"
            className="w-2/3"
            id="address"
          />
        </div>
          <Button text="Save"/>
      </form>
    </Card>
  );
}
