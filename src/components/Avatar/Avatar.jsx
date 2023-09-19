import React from 'react'
import './Avatar.css'
const Avatar = ({online=true,height=30,width=30,radius='50%',src="/img/man.png",style={}}) => {
  return (
    <div className='avatar relative' style={{borderRadius:radius,width,height,...style}}>
      <img src={src} alt="" style={{borderRadius:radius,width,height}}/>
      {
        online ? <div className="online"></div> : ''
      }
    </div>
  )
}

export default Avatar
