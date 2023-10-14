import React, { useState,useContext } from 'react'
import './Discussion.scss'
import Avatar from '../Avatar/Avatar'
import { ThreeDots, Check2Square } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import MediaContext from '../../context/MediaContext'
import { SMARTPHONE } from '../../constants/MediaTypeConstants'



const Discussion = ({ data: { id: discuId, discuName, members }, className = null, active = false }) => {
    const navigate = useNavigate()
    const { user } = useSelector((store) => store.user.user)
    const [profilePictures, setProfilePictures] = useState(null)
    const { deviceType } = useContext(MediaContext)

    useEffect(() => {
        console.log(members, 'MEMBER')
        setProfilePictures(members
            ?.filter((m) => m.user.id !== user?.id && m.user.activeProfilePicture)
            .map((m) => m.user.activeProfilePicture))
    }, [members])


    // const contacts=
    return (
        <Link to={`/messages/${discuId}`} className={`discussion flex gap-10${className ? " " + className : ""}${active ? " active" : ""}`}>
            {
                profilePictures?.length === 1 ?
                    <Avatar height={45} width={45} src={profilePictures[0].fileUrl} />
                    : <Avatar height={45} width={45} />
            }
            {
                (deviceType !== SMARTPHONE) &&
                <div className="info">
                    <div className='top flex align-items-center'>
                        <div className="name flex-grow-1">{discuName}</div>
                        <div className='flex gap-5 align-items-center'>
                            <Check2Square size={16} />
                            <button className="more-btn"><ThreeDots size={18} /></button>
                        </div>
                    </div>
                    <div className='bottom flex'>
                        <span className='txt'>Salut les gens</span>
                        <span className='date'>&nbsp;10:32&nbsp;</span>
                    </div>

                </div>
            }
        </Link>
    )
}

export default Discussion
