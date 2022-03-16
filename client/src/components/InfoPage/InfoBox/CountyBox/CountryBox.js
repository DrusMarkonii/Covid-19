import React, { useCallback, useContext } from "react";
import { SelectBox } from "../../SelectBox/SelectBox";
import { UserContext } from "../../../../context";

import "./CountryBox.css";

export function CountryBox({ data }) {
  const arrOfCountries = data.items;
  const [context, setContext] = useContext(UserContext);

  const changeSelect = useCallback((e) => setContext(e.target.value));

  return (
    <div className="CountryPanel">
      <SelectBox counties={arrOfCountries} onChangeCountry={changeSelect} />
    </div>
  );
}
