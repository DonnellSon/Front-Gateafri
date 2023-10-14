import React, { useRef, useState } from 'react'
import { CheckLg } from 'react-bootstrap-icons'
import './CheckBox.scss'
const CheckBox = ({checked=false,value=""}) => {
  const [check,setCheck]=useState(checked)
  const original=useRef()
  const clickOriginal=()=>{
    original.current.click()
  }
  return (
    <div className={`checkBox${check ? ' checked' : ""}`} onClick={clickOriginal}>
        <div className="checkMark">
            <CheckLg size={18}/>
        </div>
        <input ref={original} type="checkbox" checked={check} onChange={(e)=>{setCheck(e.target.checked)}} value={value}/>
    </div>
  )
}

export default CheckBox