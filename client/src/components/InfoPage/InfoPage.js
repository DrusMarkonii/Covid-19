import React, {useState, useEffect} from "react";
import Header from "../Header/Header";
import CountryBox from "./InfoBox/CountyBox/CountryBox";
// import axios from "axios";

import InfoBox from "./InfoBox/InfoBox";
import "./InfoPage.css";

export default function InfoPage() {
  const [data, setData] = useState({
    error: null,
    isLoaded: false,
    items:[],
  });

  useEffect(() => {
    fetch('https://api.covid19api.com/summary')
    .then(res => res.json())
    .then(res => setData({
      error: null,
      isLoaded: true,
      items: res.Global
    }))
  }, [])

  

  return (
    <div className="infoPage">
      <Header />
      <InfoBox data={data}/>
      <CountryBox />
    </div>
  );
}
