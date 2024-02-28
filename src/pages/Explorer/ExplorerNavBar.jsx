import React, { useState } from 'react'
import './ExplorerNavBar.scss'
import { GrSearch } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";
import { GiCableStayedBridge } from "react-icons/gi";
import { LuLogIn } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { GlobeAmericas, GlobeEuropeAfrica, HouseDoor } from 'react-bootstrap-icons';
import DoNavLink from '../../components/DoNavLink/DoNavLink';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useMatch } from 'react-router-dom';
const ExplorerNavBar = () => {
    const [openRightbar, setOpenRightbar] = useState(false)
    const [top,setTop]=useState(true)

    useEffect(()=>{
        const onScroll=()=>{
            if(scollingElem.scrollTop <= 0){
                setTop(true)
            }else{
                setTop(false)
            }
        }
        const scollingElem=document.getElementById('App')
        scollingElem?.addEventListener('scroll',onScroll)
        return ()=>{
            scollingElem?.removeEventListener('scroll',onScroll)
        }
    },[])

    const match=useMatch('/explorer')

    return (
        <>
            <div className={`navbar-explorer${top && !Boolean(match) ? ' top' : ''}`}  style={{ background: 'linear-gradient(rgba(14, 14, 14, 0.979) -40%, rgba(14, 14, 14, 0.014) 95%),url(/img/other/hotelbanner.jpg)' }}>

                <div className='item'>
                    <Link to='/' className='item-left topbar-logo'><img src='/img/logo/GATEAFR.png' width='100px' alt='logo'/></Link>
                </div>

                <div className='item-center-navbar'>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <DoNavLink className='svg' activeClass='active' to='/'>
                            <HouseDoor size={22}/>
                            <span>Accueil</span>
                            </DoNavLink>
                        </div>
                    </div>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <DoNavLink className='svg' activeClass='active' end={false} to='/explorer'>
                            <GlobeEuropeAfrica size={22}/>
                            <span>Explorer</span>
                            </DoNavLink>
                        </div>
                    </div>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <DoNavLink className='svg' activeClass='active' end={false} to='/hotels'>
                            <GiCableStayedBridge size={22}/>
                            <span>Hotels</span>
                            </DoNavLink>
                        </div>
                    </div>

                </div>

                <div className='item-right'>
                    <div className='container-right' style={{ fontSize: '12px' }}>
                        Connection
                    </div>
                    <div className='container-right' style={{ fontSize: '14px' }}>
                        {<LuLogIn />}
                    </div>
                    <div className='container-right' onClick={()=>setOpenRightbar(true)}>
                        {<GiHamburgerMenu />}
                    </div>
                </div>

            </div>
            <RightSidebar opened={openRightbar} setOpened={setOpenRightbar} />
        </>
    )
}

export default ExplorerNavBar