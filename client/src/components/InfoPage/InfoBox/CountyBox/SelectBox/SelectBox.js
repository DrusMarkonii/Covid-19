import React from 'react'
import './SelectBox.css'

export default function SelectBox() {
  return (
    <div className='select-box'>
     <select className='select-form'>
       <option value='world' selected> world</option>
       <option value=''></option>
       <option value=''></option>
       <option value=''></option>
       <option value=''></option>
       <option value=''></option>
       <option value=''></option>
     </select>
    </div>
  )
}
