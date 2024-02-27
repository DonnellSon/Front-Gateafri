import React from 'react'
import './AddHotelLayout.scss'
import { Outlet } from 'react-router-dom'

const AddHotelLayout = () => {
    return (
        <div id='add-hotel-layout'>
            <div className="top">
                <div className="multi-page-step-timeline">
                    <div>
                    </div>
                    <div className='active'>
                    </div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
            <div className="center">
                <Outlet />
            </div>
        </div>
    )
}

export default AddHotelLayout
