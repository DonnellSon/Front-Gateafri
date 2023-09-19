import React, { useContext } from 'react'
import { Gear, X, XLg } from 'react-bootstrap-icons'
import Avatar from '../Avatar/Avatar'
import { Link } from 'react-router-dom'
import './RightSidebar.css'
import MediaContext from '../../context/MediaContext'
import { SMARTPHONE } from '../../constants/MediaTypeConstants'

const RightSidebar = ({ opened = false, setOpened = () => { } }) => {
  const { deviceType } = useContext(MediaContext)
  return (
    <div className={`right-sidebar flex flex-column ${opened ? 'opened' : 'closed'}`}>
      <div className="top p-10">
        <button className="close btn-outline-light" onClick={() => { setOpened(false) }}><XLg /></button>
        <div className="cover"></div>
        <Avatar height={45} width={45} />
      </div>
      <div className="body p-10">
        <ul>
          <li>
            <Link to="profil">Mon profil</Link>
          </li>
          {
            deviceType === SMARTPHONE ?
              <>
                <li>Messages</li>
                <li>Notifications</li>
              </>
              : ""
          }
          <li>Entreprises</li>
          <li>Placements</li>
          <li>Levée de fonds</li>
          <li>GateAfri business</li>
          <li>Aide</li>
        </ul>
      </div>
      <div className="footer flex align-items-center gap-10">
        <button className="btn-outline-light"><Gear /></button>
        <button className='btn-transparent flex-grow-1'>Deconnexion</button>
      </div>
    </div>
  )
}

export default RightSidebar
