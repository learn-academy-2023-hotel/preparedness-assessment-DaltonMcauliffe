import React, { useState } from "react";
import { Button, Input, Label } from "reactstrap";
import ModalComponent from "./components/ModalComponent";
import "./App.css";

const App = () => {
  // created a boolean for the modal initializing it as false
  const [modal, setModal] = useState(false);
  // create a state with name as a variable and initializing it as an empty string
  const [name, setName] = useState("");
  // create a handleChange function for the onChange.
  // use e in the parameter for the event
  // call setName(e.target.value) to target the input field and extract the value and set it to a state
  const handleChange = (e) => {
    setName(e.target.value);
  };
  // event handler function to toggle the visibility of the modal
  const toggle = () => setModal(!modal);
  // event handler function to reset the 'name' state
  const reset = () => setName("");

  return (
    <div className="entire-content">
      <h1>Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" onChange={handleChange} value={name} />
        </div>
        <Button onClick={toggle}>Click Me</Button>
        <Button onClick={reset}>Reset</Button>
        <ModalComponent modal={modal} toggle={toggle} name={name} />
      </div>
    </div>
  );
};

export default App; 