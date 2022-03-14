import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import "./InfoBox.css";

export default function InfoBox({ data }) {
  const NewConfirmed = data.items.NewConfirmed;
  const TotalConfirmed = data.items.TotalConfirmed;
  const NewDeaths = data.items.NewDeaths;
  const TotalDeaths = data.items.TotalDeaths;

  return (
    <div className="info-box">
      <h3>Number in the World</h3>
      <div className="numberBox">
        <InfoCard name={`New Confirmed:`} count={NewConfirmed} />
        <InfoCard name={`Total Confirmed:`} count={TotalConfirmed} />
        <InfoCard name={`New Deaths:`} count={NewDeaths} />
        <InfoCard name={`Total Deaths:`} count={TotalDeaths} />
      </div>
    </div>
  );
}
