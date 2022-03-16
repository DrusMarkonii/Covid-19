import React, { useMemo } from "react";

import "./SelectBox.css";

export function SelectBox({ counties, onChangeCountry }) {
  const COUNTRIES = useMemo(
    () =>
      counties.map((item) => (
        <option key={item.ID} value={item.country}>
          {item.Country}
        </option>
      )),
    [counties]
  );
  return (
    <div className="select-box">
      <select className="select-form" onChange={onChangeCountry}>
        <option value="Choose country">Choose country</option>
        {COUNTRIES}
      </select>
    </div>
  );
}
