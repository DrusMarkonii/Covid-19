import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import "./InfoBox.css";

export default function InfoBox({ dataWorld, country }) {
  const NewConfirmed = dataWorld.items.NewConfirmed;
  const TotalConfirmed = dataWorld.items.TotalConfirmed;
  const NewDeaths = dataWorld.items.NewDeaths;
  const TotalDeaths = dataWorld.items.TotalDeaths;

  return (
    <div className="info-box">
      <h3>Number in the {country}</h3>
      <div className="numberBox">
        <InfoCard name={`New Confirmed:`} count={NewConfirmed} />
        <InfoCard name={`Total Confirmed:`} count={TotalConfirmed} />
        <InfoCard name={`New Deaths:`} count={NewDeaths} />
        <InfoCard name={`Total Deaths:`} count={TotalDeaths} />
      </div>
    </div>
  );
}
