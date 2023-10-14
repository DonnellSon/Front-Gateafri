import React from 'react'
import './Searchbar.scss'
import { Search } from 'react-bootstrap-icons'
const Searchbar = ({placeholder='Rechercher sur GateAFRI'}) => {
  return (
    <div className='searchbar flex align-items-center'>
      <div className="icon-left"><Search/></div>
      <input type="text" placeholder={placeholder}/>
    </div>
  )
}

export default Searchbar
