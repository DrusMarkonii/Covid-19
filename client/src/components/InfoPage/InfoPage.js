import React from "react";
import Header from "../Header/Header";
import CountryBox from "./InfoBox/CountyBox/CountryBox";
import InfoBox from "./InfoBox/InfoBox";
import "./InfoPage.css";

export default function Infopage() {
  return (
    <div className="infoPage">
      <Header />
      <CountryBox />
      <InfoBox />
    </div>
  );
}
