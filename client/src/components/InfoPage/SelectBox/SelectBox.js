import React, {useState} from 'react'
import './SelectBox.css'

export default function SelectBox({counties, onChangeCountry}) {

  
  return (
    <div className='select-box'>
     <select className='select-form' onChange={onChangeCountry} >
       {counties.map((item, index) => (
         <option key={index} value={item.country}>{item.country}</option>
       )
       )}
     </select>
    </div>
  )
}
