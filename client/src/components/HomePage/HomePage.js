import React from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo_corona.png";

import "./homePage.css";

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
