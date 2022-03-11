import React from "react";
import "./homePage.css";
import logo from "./logo_corona.png";
import { NavLink } from "react-router-dom";
export default function Homepage() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>COVID-19</p>
        
        <NavLink className="App-link" to={`/information`}>
          <button className="btn-showStatistic">Show statistics</button>
        </NavLink>
      </header>
    </div>
  );
}
