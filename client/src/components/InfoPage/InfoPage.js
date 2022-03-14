import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import CountryBox from "./InfoBox/CountyBox/CountryBox";
// import axios from "axios";

import InfoBox from "./InfoBox/InfoBox";
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

  const [currentCountry, setCurrentCountry] = useState('')

  function changeSelect(event) {
    setCurrentCountry(event.target.value);
  }


  useEffect(() => {
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

  useEffect(() => {
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
        <InfoBox dataWorld={dataWorld} country={currentCountry} />
      </div>
    </div>
  );
}
