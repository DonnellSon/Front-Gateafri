import React, { useEffect, useRef, useState } from 'react'
import './Tabs.css'
const Tabs = ({ children, navRight = "", className = "" }) => {
  const [tabs, setTabs] = useState([])
  const [openedTab, setOpenedTab] = useState(0)
  const body = useRef()
  const [bodyWidth, setBodyWidth] = useState(0)
  useEffect(() => {
    setTabs(children.map((c, i) =>{
      return ({ title: c.props.title, content: c.props.children })
    }  
    ))
  }, [children])
  useEffect(() => {
    setBodyWidth(body.current.offsetWidth)
  }, [])
  

  return (
    <div className={`tabs ${className}`}>
      <div className='top flex justify-content-between align-items-center'>
        <ul className="tabs-heading">
          {
            tabs.map((t, i) => <li key={i} onClick={() => setOpenedTab(i)} className={openedTab === i ? "active" : ""}>{t.title}</li>)
          }
        </ul>
        <div className="flex align-items-center gap-5">
          {
            navRight
          }
        </div>
      </div>
      <div ref={body} className='tabs-body'>
        <div className='flex' style={{ width: bodyWidth * tabs.length }}>
          {
            tabs.map((t, i) => <div key={i} className={openedTab === i ? "opened" : ""} style={{ width: bodyWidth }}>{t.content}</div>)
          }
        </div>
      </div>
    </div>
  )
}

export default Tabs
