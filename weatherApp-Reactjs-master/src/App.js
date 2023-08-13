import React from "react";
import CurrentLocation from "./Components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div style={{color:'white'}} className="footer-info">
        Created by{" "}
        <a target="_blank" href="#" style={{color:'floralwhite'}}>
          Lokesh Kumar
        </a>{" "}
        <a style={{color:'floralwhite', fontWeight:'bold'}} href="https://github.com/lokeshkumar111/weatherApp/tree/main/weatherApp-Reactjs-master">
        | Download Source Code
      </a>{" "}
      </div>
    </React.Fragment>
  );
}

export default App;
