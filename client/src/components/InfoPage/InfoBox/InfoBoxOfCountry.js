import React from "react";

import { InfoCard } from "./InfoCard/InfoCard";

import "./InfoBox.css";

export function InfoBoxOfCountry({
  dataOfCountry = 0,
  country = "Afghanistan",
}) {
  const dataArray = [
    { data: dataOfCountry.NewConfirmed ?? 0, name: `New Confirmed:` },
    { data: dataOfCountry.TotalConfirmed ?? 0, name: `Total Confirmed:` },
    { data: dataOfCountry.NewDeaths ?? 0, name: `New Deaths:` },
    { data: dataOfCountry.TotalDeaths ?? 0, name: `Total Deaths:` },
  ];
  const NewConfirmed = dataOfCountry.NewConfirmed ?? 0;
  const TotalConfirmed = dataOfCountry.TotalConfirmed ?? 0;
  const NewDeaths = dataOfCountry.NewDeaths ?? 0;
  const TotalDeaths = dataOfCountry.TotalDeaths ?? 0;

  return (
    <div className="info-box-country">
      <h3>Number in the {country ? country : "Afghanistan"}</h3>
      <div className="numberBoxCountry">
        {dataArray.map((item) => (
          <InfoCard name={item.name} count={item.data} key={item} />
        ))}
      </div>
    </div>
  );
}
