import React, { useState, useEffect, useContext } from "react";
import Header from "../Header/Header";
import CountryBox from "./InfoBox/CountyBox/CountryBox";
import {UserContext} from '../../context'
// import axios from "axios";

import InfoBox from "./InfoBox/InfoBox";
import InfoBoxOfCountry from "./InfoBox/InfoBoxOfCountry"
import "./InfoPage.css";

export default function InfoPage() {
  const [dataWorld, setDataWorld] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const [data, setData] = useState({
    error: null,
    isLoaded: false,
    items: [],
  });

  const [context, setContext] = useContext(UserContext);
  const dataOfCountry = data.items.filter(country => country.Country === context)
  // console.log(dataOfCountry[0])
  const objCountry = dataOfCountry[0]


  useEffect( () => {
     fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) =>
        setDataWorld({
          error: null,
          isLoaded: true,
          items: res.Global,
        })
      );
  }, []);

  useEffect( () => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((res) =>
        setData({
          error: null,
          isLoaded: true,
          items: res.Countries,
        })
      );
  }, []);
  // console.log(data.items)

  return (
    <div className="infoPage">
      <Header />
      <InfoBox dataWorld={dataWorld} country={"World"} />
      <div className="countryPanelBox">
        <CountryBox data={data}  />
        <InfoBoxOfCountry dataOfCountry={objCountry} country={context} />
      </div>
    </div>
  );
}
