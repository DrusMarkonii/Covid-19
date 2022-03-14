import React, { useState, useContext } from "react";
import "./CountryBox.css";
import SelectBox from "../../SelectBox/SelectBox";
import {UserContext} from '../../../../context'

export default function CountryBox({ data }) {
  const arrOfCountries = data.items;
  const [currentCountry, setCurrentCountry] = useState(""); 
  const [context, setContext] = useContext(UserContext)

  function changeSelect(event) {
    setContext(event.target.value);
  }

  return (
    <div className="CountryPanel">
      <SelectBox counties={arrOfCountries} onChangeCountry={changeSelect} />
    </div>
  );
}
