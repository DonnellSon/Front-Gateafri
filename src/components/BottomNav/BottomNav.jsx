import React, { useState } from 'react'
import './BottomNav.scss'
import { Link } from 'react-router-dom'
import { HouseDoor, Briefcase, Buildings, PersonVideo2, ChatSquareQuote, Bell, ChevronLeft, Plus, GlobeEuropeAfrica } from 'react-bootstrap-icons'
import Searchbar from '../Searchbar/Searchbar'
import Avatar from '../Avatar/Avatar'
import DropDown from '../DropDown/DropDown'
import PostModal from '../PostModal/PostModal'
import DoNavLink from '../DoNavLink/DoNavLink'
const BottomNav = ({ setOpenRightbar = () => { } }) => {
  const [openPostModal, setOpenPostModal] = useState(false)
  return (
    <>
      <div id='bottom-nav' className='flex px-10'>
        <nav className='flex align-items-center'>
          <ul className="topbar-menu flex align-items-center">
            <li>
              <DoNavLink to="/" activeClass='active'>
                <HouseDoor strokeWidth={0.1} size={25} />
                <span>Accueil</span>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/investissements" activeClass='active'>
                <Buildings strokeWidth={0.1} size={25} />
                <span>Fonds</span>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/emplois" activeClass='active'>
                <Briefcase strokeWidth={0.1} size={25} />
                <span>Emplois</span>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/explorer" activeClass='active'>
                <GlobeEuropeAfrica strokeWidth={0.1} size={25} />
                <span>Explorer</span>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/video" activeClass='active'>
                <PersonVideo2 strokeWidth={0.1} size={25} />
                <span>Regarder</span>
              </DoNavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>

  )
}

export default BottomNav
