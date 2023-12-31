import React, { useContext, useEffect } from 'react'
import "../pages/Portal/Portal.scss"
import { BriefcaseFill, ExclamationDiamondFill, FilePostFill, GeoAlt, HouseDoorFill, PencilSquare, PeopleFill, ThreeDots, Building, FileEarmarkPerson, Gem, House, ExclamationCircle, ChevronDown } from 'react-bootstrap-icons'
import { Outlet, useParams } from 'react-router-dom'
import Avatar from '../components/Avatar/Avatar'
import { Link } from 'react-router-dom'
import StickySidebar from '../components/StickySideBar/StickySideBar'
import DoNavLink from '../components/DoNavLink/DoNavLink'
import MediaContext from '../context/MediaContext'
import { DESKTOP } from '../constants/MediaTypeConstants'
import Rating from 'react-rating'
import { useQuery } from 'react-query'
import { getCompany } from '../api/company'
const PortalLayout = () => {
    const { deviceType } = useContext(MediaContext)
    const { portalId } = useParams()

    const { data: company, error: companyErr, isLoading: companyLoading } = useQuery(['repoCompany',portalId], () => getCompany(portalId))
    useEffect(()=>{
        console.log(company?.domaine,'DOM')
    },[company])
    return (
        <div className='portal-page'>
            <div className="top">
                <div className="left">
                    <div className="banner"></div>
                    <div className="portal-info">
                        <div className="top flex align-items-end gap-10">
                            <Avatar src={company?.activeLogo ? company?.activeLogo.fileUrl : null} height={60} width={60} />
                            <img src={company?.country.flag.fileUrl} width={35} alt="" />
                        </div>
                        <div className="bottom flex justify-content-between">
                            <div className="left">
                                <div className="flex align-items-center gap-10">
                                    <h1>{company?.name}</h1>
                                    <span className='flex align-items-center'><GeoAlt /> {company?.adress}</span>
                                </div>
                                <div className="evaluation flex align-items-center gap-5">
                                    <div className="moy">4.5</div>
                                    <Rating
                                        readonly
                                        initialRating={3.5}
                                        className='portal-note'
                                        fractions={2}
                                        emptySymbol={<img src="/img/icons/diamond_grey.png" className="icon rating-diamond-img" />}
                                        fullSymbol={<img src="/img/icons/diamond.png" className="icon rating-diamond-img" />}
                                    />
                                    <span className='orange-txt flex align-items-center gap-5'>500K evaluations <ChevronDown /></span>
                                </div>
                                <span className='portal-domains'>{
                                    company?.domains.map((d) => d.title).join(',')
                                }</span>
                            </div>
                            <div className="right">
                                <button className="btn btn-purple">Prise de contact</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="portal-nav">
                <ul>
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
                    <li><Link><BriefcaseFill size={20} /><span>Emplois</span></Link></li>
                    <li><Link><PeopleFill size={20} /><span>Emloyés</span></Link></li>
                </ul>
            </div>
            <div className="bottom">
                <div className="left">
                    <Outlet context={{company}}/>
                </div>
            </div>
        </div >
    )
}
export default PortalLayout