import React, { useState } from 'react'
import './ExplorerNavBar.scss'
import { GrSearch } from "react-icons/gr";
import { MdAirplanemodeActive } from "react-icons/md";
import { GiCableStayedBridge } from "react-icons/gi";
import { LuLogIn } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import { GlobeAmericas, GlobeEuropeAfrica, HouseDoor } from 'react-bootstrap-icons';

const ExplorerNavBar = () => {
    const [openRightbar, setOpenRightbar] = useState(false)

    return (
        <>
            <div className='navbar-explorer' >

                <div className='item'>
                    <div className='item-left'><img src='/img/logo/GATEAFR.png' width='100px' alt='logo' /></div>
                </div>

                <div className='item-center-navbar'>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <div className='svg'><HouseDoor /></div>
                        </div>
                    </div>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <div className='svg'><GlobeEuropeAfrica /></div>
                        </div>
                    </div>

                    <div className='item-center'>
                        <div className='svg-container'>
                            <div className='svg'><GiCableStayedBridge /></div>
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