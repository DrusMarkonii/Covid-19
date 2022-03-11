import React from "react";
import "./homePage.css";
import logo from "./logo_corona.png";
import { NavLink } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="homePage">
      <div className="homePage-components">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="nameBlock">
          <p>COVID-19</p>
        </div>
        <div className="btn-content">
          <NavLink to={`/information`}>
            <button className="btn-showStatistic">Show statistics</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
