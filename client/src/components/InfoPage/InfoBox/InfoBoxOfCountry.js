import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import "./InfoBox.css";

export default function InfoBox({ dataOfCountry, country}) {
  const NewConfirmed = dataOfCountry.NewConfirmed;
  const TotalConfirmed = dataOfCountry.TotalConfirmed;
  const NewDeaths = dataOfCountry.NewDeaths;
  const TotalDeaths = dataOfCountry.TotalDeaths;

  return (
    <div className="info-box">
      <h3>Number in the {country ? country : 'Afghanistan'}</h3>
      <div className="numberBox">
        <InfoCard name={`New Confirmed:`} count={NewConfirmed} />
        <InfoCard name={`Total Confirmed:`} count={TotalConfirmed} />
        <InfoCard name={`New Deaths:`} count={NewDeaths} />
        <InfoCard name={`Total Deaths:`} count={TotalDeaths} />
      </div>
    </div>
  );
}
