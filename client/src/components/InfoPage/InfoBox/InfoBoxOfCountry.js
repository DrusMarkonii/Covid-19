import React from "react";
import InfoCard from "./InfoCard/InfoCard";
import "./InfoBox.css";

export default function InfoBox({ dataOfCountry = 0 , country = "Afghanistan"}) {
  const NewConfirmed = 0 || dataOfCountry.NewConfirmed;
  const TotalConfirmed = 0 || dataOfCountry.TotalConfirmed;
  const NewDeaths = 0 || dataOfCountry.NewDeaths;
  const TotalDeaths = 0 || dataOfCountry.TotalDeaths;

  return (
    <div className="info-box-country">
      <h3>Number in the {country ? country : 'Afghanistan'}</h3>
      <div className="numberBoxCountry">
        <InfoCard name={`New Confirmed:`} count={NewConfirmed} />
        <InfoCard name={`Total Confirmed:`} count={TotalConfirmed} />
        <InfoCard name={`New Deaths:`} count={NewDeaths} />
        <InfoCard name={`Total Deaths:`} count={TotalDeaths} />
      </div>
    </div>
  );
}
