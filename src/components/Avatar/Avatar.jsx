import React from 'react'
import { Camera } from 'react-bootstrap-icons'
import './Avatar.scss'
const Avatar = ({ online = true, height = 30, width = 30, radius = '50%', src = null, style = {}, editable = false }) => {
  return (
    <div className='avatar relative' style={{ borderRadius: radius, width, height, ...style }}>
      <img src={src!==null ? src : "/img/man.png"} alt="" style={{ borderRadius: radius, width, height }} />
      {
        online ? <div className="online"></div> : ''
      }
      {
        editable && <div className="avatar-edit-btn">
          <Camera size={18} />
        </div>
      }
    </div>
  )
}

export default Avatar
