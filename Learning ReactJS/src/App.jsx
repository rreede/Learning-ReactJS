import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <User name="Rene" age={21} email="rene@rene.com" />
      <User name="Pedro" age={27} email="Pedro@rene.com" />
      <User name="Marcus" age={45} email="Marcus@rene.com" />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
    </div>
  );
}

const props = {
  name: "Rene",
  age: 21,
  email: "rene@rene.com",
};

const User = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

const jobInfo = {
  salary: 90000,
  position: "Senior SDE",
  company: "Amazon",
};

const Job = (jobInfo) => {
  return (
    <div>
      <h1>{jobInfo.salary}</h1>
      <h1>{jobInfo.position}</h1>
      <h1>{jobInfo.company}</h1>
    </div>
  );
};

export default App;
