import { useState } from "react";
import "./App.css";
import { User } from "./user.jsx";

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  const names = ["Herm", "Shaniqua", "Rene", "Eero"];

  const users = [
    { name: "Rene", age: 25 },
    { name: "Marcus", age: 75 },
    { name: "Juhan", age: 43 },
  ];

  return (
    <div className="App">
      {planets.map((planet, key) => {
        return planet.isGasPlanet && <h1>{planet.name}</h1>;
      })}

      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
}

const PlanetsComponent = () => {};

export default App;
