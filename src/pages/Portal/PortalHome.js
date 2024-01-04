import React, { useContext } from 'react'
import Avatar from '../../components/Avatar/Avatar'
import './PortalHome.scss'
import { Link, useOutletContext } from 'react-router-dom'
import { ArrowRight, BriefcaseFill, ExclamationDiamondFill, FilePostFill, GeoAlt, GraphUpArrow, ChevronLeft, ChevronRight, HouseDoor, HouseDoorFill, PencilSquare, PeopleFill, ThreeDots } from 'react-bootstrap-icons'
import PostCard from '../../components/PostCard/PostCard'
import StickySidebar from '../../components/StickySideBar/StickySideBar'
import LastPosts from '../../components/LastPosts/LastPosts'
import Slider from 'react-slick'
import MediaContext from '../../context/MediaContext'
import { Parser } from 'html-to-react'
const PageHome = () => {
  const { deviceType } = useContext(MediaContext)
  const {company}=useOutletContext()
  const htmlToJsx=new Parser()
  return (

    <>
      <div className="entreprise-resume elevated-card mt-15">
        <div className="px-15">
          <div className="heading2">
            <h3>Resumé de l'entreprise</h3>
          </div>
          <div className='portal-summary'>{htmlToJsx.parse(company?.description)}<Link>En savoir plus</Link></div>
        </div>
        <div className="util-infos p-15">
          <h5>Chiffre d'affaire des 3 dernieres annees</h5>
          <div className="ca-slider flex mt-15 gap-15">
            <div className='radius-5 flex-1 flex flex-column gap-5 p-10'>
              <GraphUpArrow size={20} />
              <span className='orange-txt'>2022</span>
              <b>200 000 000 MGA</b>
            </div>
            <div className='radius-5 flex-1 flex flex-column gap-5 p-10'>
              <GraphUpArrow size={20} />
              <span className='orange-txt'>2021</span>
              <b>180 000 000 MGA</b>
            </div>
            <div className='radius-5 flex-1 flex flex-column gap-5 p-10'>
              <GraphUpArrow size={20} />
              <span className='orange-txt'>2020</span>
              <b>100 000 000 MGA</b>
            </div>
          </div>
        </div>
        <div className="px-15 pb-15">
          <button className="btn-outline-purple">Details <ArrowRight /></button>
        </div>
      </div>
      <div className="offers elevated-card mt-15 p-15">
        <div className="heading2 justify-content-between">
          <h3>Dernières offres d'emplois</h3>
          <div className="flex gap-10 px-15">
            <button className="floating-btn"><ChevronLeft size={18} /></button>
            <button className="floating-btn"><ChevronRight size={18} /></button>
          </div>
        </div>
        <Slider {...{
          dots: false,
          arrows: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          variableWidth: true,
        }}>
          <div className="offer flex flex-column align-items-center gap-5">
            <div className="logo">
              <img src="/img/partenaires/1.png" alt="" />
            </div>
            <h5 className='text-ellipsis'>Developpeur React</h5>
            <span>Temps plein</span>
          </div>
          <div className="offer flex flex-column align-items-center gap-5">
            <div className="logo">
              <img src="/img/partenaires/2.png" alt="" />
            </div>
            <h5 className='text-ellipsis'>Developpeur PHP</h5>
            <span>Stagiare</span>
          </div>
          <div className="offer flex flex-column align-items-center gap-5">
            <div className="logo">
              <img src="/img/partenaires/3.png" alt="" />
            </div>
            <h5 className='text-ellipsis'>Developpeur Symfony</h5>
            <span>Temps plein</span>
          </div>
          <div className="offer flex flex-column align-items-center gap-5">
            <div className="logo">
              <img src="/img/partenaires/4.png" alt="" />
            </div>
            <h5 className='text-ellipsis'>Developpeur React Native</h5>
            <span>Temps partiel</span>
          </div>
          <div className="offer flex flex-column align-items-center gap-5">
            <div className="logo">
              <img src="/img/partenaires/6.png" alt="" />
            </div>
            <h5 className='text-ellipsis'>Animatrice de vente</h5>
            <span>Temps partiel</span>
          </div>
        </Slider>
        <button className="btn-outline-purple mt-15">
          Voir plus <ArrowRight />
        </button>
      </div>
      {/* <LastPosts /> */}
      <div className="partenaires elevated-card mt-15 p-15">
        <div className="heading2 justify-content-between">
          <h3>Partenaires</h3>
          <div className="flex gap-10 px-15">
            <button className="floating-btn"><ChevronLeft size={18} /></button>
            <button className="floating-btn"><ChevronRight size={18} /></button>
          </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum minima autem earum</p>
        <Slider {...{
          dots: false,
          arrows: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
        }}>
          <div className="partenaire flex flex-column align-items-center">
            <div className="logo">
              <img src="/img/partenaires/1.png" alt="" />
            </div>
            <h5>AC Energy</h5>
            <span>Energie Renouvelable</span>
          </div>
          <div className="partenaire flex flex-column align-items-center">
            <div className="logo">
              <img src="/img/partenaires/2.png" alt="" />
            </div>
            <h5>Actu.mg</h5>
            <span>Actualité</span>
          </div>
          <div className="partenaire flex flex-column align-items-center">
            <div className="logo">
              <img src="/img/partenaires/3.png" alt="" />
            </div>
            <h5>AELI</h5>
            <span>Education</span>
          </div>
          <div className="partenaire flex flex-column align-items-center">
            <div className="logo">
              <img src="/img/partenaires/4.png" alt="" />
            </div>
            <h5>ARC</h5>
            <span>Textile</span>
          </div>
          <div className="partenaire flex flex-column align-items-center">
            <div className="logo">
              <img src="/img/partenaires/6.png" alt="" />
            </div>
            <h5>Emedia</h5>
            <span>Education</span>
          </div>
        </Slider>
        <div className="flex mt-15 gap-10">
          <button className="btn-outline-purple">
            Voir tout <ArrowRight />
          </button>
          <button className="btn-outline-grey">
            Rechercher des partenaires
          </button>
        </div>
      </div>
      <div className="flex align-items-center justify-content-center p-20">
        <Link to='/page/a-propos' className="btn-outline-grey">
          Plus de détails sur l'entreprise <ArrowRight />
        </Link>
      </div></>

  )
}

export default PageHome
