import React from 'react'

import './SelectBox.css'

export default function SelectBox({counties, onChangeCountry}) {

  
  return (
    <div className='select-box'>
     <select className='select-form' onChange={onChangeCountry} >
     <option  value="Choose country">Choose country</option>
       {counties.map((item) => (
         <option key={item.ID} value={item.country}>{item.Country}</option>
       )
       )}
     </select>
    </div>
  )
}
