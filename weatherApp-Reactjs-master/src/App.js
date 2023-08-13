import React from "react";
import CurrentLocation from "./Components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        Created by{" "}
        <a target="_blank" href="#">
          Lokesh Kumar
        </a>{" "}
        <a href="https://github.com/lokeshkumar111/weatherApp/tree/main/weatherApp-Reactjs-master">
        | Download Source Code
      </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
