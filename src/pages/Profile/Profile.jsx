import React from 'react'
import './Profile.css'
import { ThreeDots } from 'react-bootstrap-icons'
import PostCard from '../../components/PostCard/PostCard'
import Avatar from '../../components/Avatar/Avatar'
import { FilePostFill, HouseDoorFill, ExclamationDiamondFill, BriefcaseFill, PeopleFill } from 'react-bootstrap-icons'
import DoNavLink from '../../components/DoNavLink/DoNavLink'
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <div id='profile-page'>
            <div className="top">
                <div className="p-10">
                    <div className="profile-cover">
                        <img src="/img/entreprises/tab.jpg" alt="" />
                    </div>
                    <div className='body relative'>
                        <div className="left">
                            kkkk
                        </div>
                        <div className="center">
                            <Avatar width={90} height={90} />
                            <h1 className='profile-name'>Donnell Son</h1>
                            <span>Developpeur Web</span>
                        </div>
                        <div className="right flex justify-content-end gap-5">
                            <button className="btn btn-purple">Suivre</button>
                            <button className="btn btn-transparent"><ThreeDots /></button>
                        </div>
                    </div>
                </div>
                <nav className='default-nav'>
                    <ul className='flex align-items-center'>
                        <li>
                            <DoNavLink to="accueil" activeClass='active'><HouseDoorFill size={20} /><span>Accueil</span></DoNavLink>
                        </li>
                        <li>
                            <DoNavLink to='a-propos' activeClass='active'><ExclamationDiamondFill size={18} stroke='3px' /><span>Apropos</span></DoNavLink>
                        </li>
                        <li>
                            <DoNavLink to='actualite' activeClass='active'>
                                <FilePostFill size={18} /><span>Actualité</span>
                            </DoNavLink>
                        </li>
                        <li><Link><BriefcaseFill size={20} /><span>Offre d'emplois</span></Link></li>
                        <li><Link><PeopleFill size={20} /><span>Emloyés</span></Link></li>
                    </ul>
                </nav>
            </div>

            <div className="content">
                <div className="bottom flex gap-15">
                    <div className="left">
                        <PostCard />
                        <PostCard />
                        <PostCard />
                        <PostCard />
                    </div>
                    <div className="right">
                        <div className="profile-photos"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
