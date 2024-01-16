import React from 'react'
import './VideoCard.scss'
import { Link } from 'react-router-dom'
import Avatar from '../Avatar/Avatar'

const VideoCard = () => {
  return (
    <div className='video-card'>
      <div className="poster relative">
        <img src="" alt="" />
        <div className="length">03:40</div>
      </div>
      <div className="capt">
        <h1><Link to='/video/play'>Titre de ma video</Link></h1>
        <p><span>200k vues</span>|<span>30 diamonds</span></p>
        <Link to='/profil' className="artist-info flex align-items-center gap-10 ">
            <Avatar/>
            <div className="artist-name">Kopa Lana</div>
        </Link>
      </div>
    </div>
  )
}

export default VideoCard
