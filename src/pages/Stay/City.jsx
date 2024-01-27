import React from 'react'
import './City.scss'
import { CitySlider } from '../../components/Slider/Slider'
const City = () => {
  return (
    <div id='city-page'>
      <div className='city-slider relative'>
        <CitySlider />
      </div>
    </div>
  )
}

export default City