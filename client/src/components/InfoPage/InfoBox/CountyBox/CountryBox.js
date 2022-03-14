import React, {useState} from "react";
import "./CountryBox.css";
import SelectBox from "../../SelectBox/SelectBox";


export default function CountryBox({data}) {
  
    const arrOfCountries = data.items

    // const [counties, setCounty] = useState([
    //     {country: "Choose country"},
    //     {country: "Albania"},
    //     {country: "Algeria"},
    //     {country: "Andorra"},
    //     {country: "Armenia"},
    //   ])
    const [currentCountry, setCurrentCountry] = useState('')
    

    function changeSelect(event) {
        setCurrentCountry(event.target.value)
        
    }


  return (
    <div className="CountryPanel">
      <div className="countryBox">{currentCountry ? currentCountry: "Choose country" }</div>
      <SelectBox counties={arrOfCountries}  onChangeCountry = {changeSelect}/>
    </div> 
  );
}
