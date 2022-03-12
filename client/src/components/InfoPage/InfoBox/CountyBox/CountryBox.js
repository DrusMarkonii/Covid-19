import React from "react";
import "./CountryBox.css";
import SelectBox from "./SelectBox/SelectBox";

export default function CountryBox() {
  return (
    <div className="CountryPanel">
      <div className="countryBox">CountryBox</div>
      <SelectBox />
    </div>
  );
}
