import React, { useState } from 'react'
import './MobileTopbar.css'
import { Link } from 'react-router-dom'
import { HouseDoor, Briefcase, Buildings, PersonVideo2, ChatSquareQuote, Bell, ChevronLeft, Plus, GlobeEuropeAfrica, JustifyRight } from 'react-bootstrap-icons'
import Searchbar from '../Searchbar/Searchbar'
import Avatar from '../Avatar/Avatar'
import DropDown from '../DropDown/DropDown'
import PostModal from '../PostModal/PostModal'
import DoNavLink from '../DoNavLink/DoNavLink'
const MobileTopbar = ({ setOpenRightbar = () => { } }) => {
  const [openPostModal, setOpenPostModal] = useState(false)
  return (
    <>
      <header id='m-topbar' className='flex px-10 gap-10'>
        <div className="left flex align-items-center">
          <Link to="/"><img src="/img/logo/logo.jpg" alt="" /></Link>
        </div>
        <div className="center">
            <Searchbar />
        </div>
        <div className="right flex align-items-center justify-content-end gap-10">
          <DropDown>
                <button className='mobile-topbar-new-btn btn-purple flex align-items-center'><Plus size={26} /></button>
                <ul>
                  <li>
                    <Link to='/' onClick={(e) => {
                      e.preventDefault()
                      setOpenPostModal(true)
                    }}>Publication</Link>
                  </li>
                  <li>
                    <Link to='/'>Portail</Link>
                  </li>
                  <li>
                    <Link to='/emplois/cv'>CV</Link>
                  </li>
                  <li>
                    <Link to='/emplois/nouveau'>Offre Démplois</Link>
                  </li>
                </ul>
              </DropDown>
              <Link to="#" onClick={() => {
            setOpenRightbar(true)
          }}><JustifyRight size={20}/></Link>
        </div>
      </header>
      <PostModal isOpen={openPostModal} setIsOpen={setOpenPostModal} />
    </>

  )
}

export default MobileTopbar
