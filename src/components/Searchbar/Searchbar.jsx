import React, { useState,useRef } from 'react'
import './Searchbar.scss'
import { Search } from 'react-bootstrap-icons'
import useClickOutside from '../../Hooks/useClickOutside'
const Searchbar = ({ placeholder = 'Rechercher sur GateAFRI', expandable = false,onChange=()=>{},onSubmit=()=>{} }) => {
  const [expand, setExpand] = useState(false)
  const self=useRef()
  const inpt=useRef()
  useClickOutside(self,()=>{
    setExpand(false)
  })
  const handleEnterKey = (e) => {
    if (e.keyCode === 13) {
      onSubmit(e)
    }
  }
  return (
    <div ref={self} onClick={()=>{
      if(expandable && !expand){
        setExpand(true)
        inpt.current?.focus()
      }
    }} className={`searchbar flex flex-column align-items-center${expandable ? ' expandable' : ''}${(expandable && expand) ? ' expanded' : ''}`}>
      <div className="input flex align-items-center">
        <div className="icon-left"><Search /></div>
        <input onChange={(e)=>{
          onChange(e.target.value)
        }} type="text" ref={inpt} placeholder={placeholder} onKeyUp={handleEnterKey}/>
      </div>
      <div className="suggests">
      </div>
    </div>
  )
}

export default Searchbar
