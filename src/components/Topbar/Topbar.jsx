import React, { useContext, useEffect, useState } from 'react'
import './Topbar.scss'
import { Link, useNavigate } from 'react-router-dom'
import { HouseDoor, Briefcase, Buildings, PersonVideo2, ChatSquareQuote, Bell, ChevronLeft, Plus, GlobeEuropeAfrica, Person, PlayCircle, PlayBtn } from 'react-bootstrap-icons'
import Searchbar from '../Searchbar/Searchbar'
import Avatar from '../Avatar/Avatar'
import DropDown from '../DropDown/DropDown'
import PostModal from '../PostModal/PostModal'
import DoNavLink from '../DoNavLink/DoNavLink'
import { useSelector } from 'react-redux'
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick'
import SocketIOContext from '../../context/SocketIOContext'
import CaretInput from '../CaretInput/CaretInput'
import CurrencySelector from '../CurrencySelector/CurrencySelector'
import CurrencyContext from '../../context/CurrencyContext'
const Topbar = ({ setOpenRightbar = () => { } }) => {
  const [openPostModal, setOpenPostModal] = useState(false)
  const { user, socket } = useSelector(state => state.user)
  const navigate = useNavigate()



  return (
    <>
      <header id='topbar' className={`flex bottom-shaddow-1${window.location.pathname.startsWith("/landing") ? " transparent" : ""}`}>
        <div className="left flex px-15 align-items-center">
          <Link to="/"><img src="/img/logo/GATEAFR.png" alt="" /></Link>
        </div>
        <nav className='flex align-items-center'>
          <ul className="topbar-menu flex align-items-center">
            <li>
              <DoNavLink to="/" activeClass='active'>
                <HouseDoor style={{ marginTop: 3 }} strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to="/explorer" activeClass='active'>
                <GlobeEuropeAfrica strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li>
            {/* <li>
              <DoNavLink to="/investissements" activeClass='active'>
                <Buildings strokeWidth={0.1} size={23} />
              </DoNavLink>
            </li> */}
            <li>
              <DoNavLink to="/emplois" activeClass='active'>
                <Briefcase style={{ marginTop: 4 }} strokeWidth={0.1} size={24} />
              </DoNavLink>
            </li>

            <li>
              <DoNavLink className='top-to-afrimuz' to="/musique" activeClass='active'>
                <img src='/img/logo/afrimuz2.png' />
              </DoNavLink>
            </li>
            <li className='flex-grow-1'>
              <Searchbar onSubmit={(e) => navigate(`/recherche?k=${e.target.value}`)} />
            </li>
            <li className='ml-10'>
              <DropDown>
                <RequireAuthOnClick>
                  <button className='topbar-mew-btn btn-purple flex align-items-center'><Plus size={26} /></button>
                </RequireAuthOnClick>
                <ul>
                  <li>
                    <Link to='/' onClick={(e) => {
                      e.preventDefault()
                      setOpenPostModal(true)
                    }}>Publication</Link>
                  </li>
                  <li>
                    <Link to='/portail/nouveau'>Portail</Link>
                  </li>
                  <li>
                    <Link to='/investissements/nouveau'>Investissement</Link>
                  </li>
                  <li>
                    <Link to='/emplois/cv'>CV</Link>
                  </li>
                  
                  <li>
                    <Link to='/emplois/nouveau'>Offre Démplois</Link>
                  </li>
                  <li>
                    <Link to='/hotels/nouveau'>Hotel</Link>
                  </li>
                </ul>
              </DropDown>
            </li>
          </ul>
        </nav>
        <div className="right flex px-15 align-items-center justify-content-end">
          <RequireAuthOnClick>
            <Link to="/messages"><ChatSquareQuote size={22} /></Link>
          </RequireAuthOnClick>
          <RequireAuthOnClick>
            <Link to="/notifications"><Bell size={22} /></Link>
          </RequireAuthOnClick>
          <CurrencySelector />
          {
            user ?
              <span className='profile flex gap-5 align-items-center' onClick={() => {
                setOpenRightbar(true)
              }}>
                <Avatar width={35} height={35} src={user?.activeProfilePicture && user?.activeProfilePicture?.fileUrl} />
                <div className="ico">
                  <ChevronLeft />
                </div>
              </span>
              :
              <Link to="/connexion"><Person size={23} /></Link>
          }
        </div>
      </header>
      <PostModal isOpen={openPostModal} setIsOpen={setOpenPostModal} />
    </>

  )
}

export default Topbar
