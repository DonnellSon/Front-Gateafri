import React, { useState } from 'react'
import './Topbar.css'
import { Link } from 'react-router-dom'
import { HouseDoor, Briefcase, Buildings, PersonVideo2, ChatSquareQuote, Bell, ChevronLeft, Plus, GlobeEuropeAfrica } from 'react-bootstrap-icons'
import Searchbar from '../Searchbar/Searchbar'
import Avatar from '../Avatar/Avatar'
import DropDown from '../DropDown/DropDown'
import PostModal from '../PostModal/PostModal'
import DoNavLink from '../DoNavLink/DoNavLink'
const Topbar = ({ setOpenRightbar = () => { } }) => {
  const [openPostModal, setOpenPostModal] = useState(false)
  return (
    <>
      <header id='topbar' className='flex'>
        <div className="left flex px-15 align-items-center">
          <Link to="/"><img src="/img/logo/logo.jpg" alt="" /></Link>
        </div>
        <nav className='flex align-items-center'>
          <ul className="topbar-menu flex align-items-center">
            <li>
              <DoNavLink to="/" activeClass='active'>
                <HouseDoor style={{ marginTop: 3 }} strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/investissements" activeClass='active'>
                <Buildings strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/emplois" activeClass='active'>
                <Briefcase style={{ marginTop: 4 }} strokeWidth={0.1} size={24} />
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/explorer" activeClass='active'>
                <GlobeEuropeAfrica strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/video" activeClass='active'>
                <PersonVideo2 style={{ marginTop: 4 }} strokeWidth={0.1} size={24} />
              </DoNavLink>
            </li>
            <li className='flex-grow-1'>
              <Searchbar />
            </li>
            <li className='ml-10'>
              <DropDown>
                <button className='topbar-mew-btn btn-purple flex align-items-center'><Plus size={26} /></button>
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
            </li>
          </ul>
        </nav>
        <div className="right flex px-15 align-items-center justify-content-end">
          <Link to="/messages"><ChatSquareQuote size={22} /></Link>

          <span><Bell size={22} /></span>


          <span className='flex gap-5 align-items-center' onClick={() => {
            setOpenRightbar(true)
          }}>
            <Avatar />
            <ChevronLeft size={16} />
          </span>
        </div>
      </header>
      <PostModal isOpen={openPostModal} setIsOpen={setOpenPostModal} />
    </>

  )
}

export default Topbar
