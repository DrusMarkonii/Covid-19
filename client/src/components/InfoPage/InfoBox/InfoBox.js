import React from 'react'
import InfoCard from './InfoCard/InfoCard'
import './InfoBox.css'

export default function InfoBox() {
  return (
    <div className='info-box'>
        <InfoCard props='NewConfirmed'/>
        <InfoCard props='TotalConfirmed'/>
        <InfoCard props='NewDeaths'/>
        <InfoCard props='TotalDeaths'/>
    </div>
  )
}
