import React from "react";
import Header from "../Header/Header";
import InfoBox from "./InfoBox/InfoBox";
import "./InfoPage.css";

export default function Infopage() {
  return (
    <div className="infoPage">
      <Header />
      <InfoBox />
    </div>
  );
}
