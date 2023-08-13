import React from "react";
import CurrentLocation from "./Components/currentLocation";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div style={{color:'floralwhite', fontWeight:'bold'}} className="footer-info">
        Created by{" "}
        <a target="_blank" href="#" style={{color:'floralwhite'}}>
          Lokesh Kumar
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
