import React, { useContext, useState, useEffect } from 'react'
import './Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeBannerSlider from '../../components/HomeBannerSlider/HomeBannerSlider';
import PostCard from '../../components/PostCard/PostCard';
import WelcomeBanner from '../../components/WelcomeBanner/WelcomeBanner';
import { Briefcase, PlayFill, Tag, ChevronRight, ChevronLeft, Check2, ArrowRight, BuildingFill, Building, Megaphone } from 'react-bootstrap-icons';
import Avatar from '../../components/Avatar/Avatar';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import StickySideBar from '../../components/StickySideBar/StickySideBar';
import MediaContext from '../../context/MediaContext';
import { DESKTOP, SMARTPHONE, TABLET } from '../../constants/MediaTypeConstants';
import axios from 'axios';
import PostCardLoader from '../../components/SkeletonLoaders/PostCardLoader';
const Home = () => {
  const { deviceType } = useContext(MediaContext)

  const [posts, setPosts] = useState([])
  const [postsLoading, setPostsLoading] = useState(false)
  /**
   * Recuperation des posts
   */
  useEffect(() => {
    setPostsLoading(true)
    axios({
      url: `${process.env.REACT_APP_API_DOMAIN}/api/posts`,
      method: 'get',
      withCredentials: true
    }).then((res) => {
      console.log(res.data)
      setPosts(res.data)
      setPostsLoading(false)

    }).catch((err) => {
      console.log(err.response)

    })
  }, [])


  return (
    <div className='home-page'>
      <WelcomeBanner />
      <HomeBannerSlider />
      <main className="flex gap-20">
        {
          deviceType === DESKTOP ? <div className="left">
            <ul className='left-menu'>
              <li>
                <div className="ico">
                  <Building size={18} />
                </div>
                <span className='text-ellipsis flex-grow-1'>Entreprises</span>
              </li>
              <li><div className="ico"><Briefcase size={18} /></div><span className='text-ellipsis flex-grow-1'>Offre d'emplois</span></li>
              <li><div className="ico"><Megaphone size={18} /></div><span className='text-ellipsis flex-grow-1'>Promotions</span></li>
            </ul>
            <hr style={{ margin: '20px 10px' }} />
            <h3>Mes pages professionnelles</h3>
            <ul className='pages-list'>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /> Vivana Group
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /> Go Invest business tour
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /><span>Leaders Dinamique de Madagascar</span>
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /> AeroSpace
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /> Go Invest business tour
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /><span>Leaders Dinamique de Madagascar</span>
                </Link>
              </li>
              <li>
                <Link to='/page' className='flex gap-10 align-items-center'>
                  <Avatar /> AeroSpace
                </Link>
              </li>
            </ul>
          </div> : ""
        }
        <div className="center">
          <nav className='floatting-nav'>
            <ul className='flex'>
              <li className='active'>Tous</li>
              <li>Actualités</li>
              <li>Industrie</li>
              <li>Politique</li>
              <li>Technologie</li>
              <li>Science</li>
              <li>Education</li>
              <li>Tourisme</li>
            </ul>
          </nav>
          <div className="post-list">
            {
              posts.map((p, i) => (
                <PostCard
                  key={i}
                  data={p}
                  onDelete={(postId) => setPosts(posts.filter(p => p.id !== postId))}
                />
              ))
            }
            {
              postsLoading &&
              <>
                <PostCardLoader />
                <PostCardLoader />
                <PostCardLoader />
              </>
            }
          </div>
        </div>
        {
          deviceType === (DESKTOP || TABLET) ? <div className="right">
            <StickySideBar top={73} className='flex flex-column gap-15'>
              <div className="top-news">
                <h4>GateNews</h4>
                <h5>Route de la Mèque : La Côte d'Ivoire en première pour le plus grand...</h5>
                <div className="news-slider flex gap-5">
                  <div className="slide">
                    <img src="/img/other/1.jpg" alt="" />
                  </div>
                  <div className="slide">
                    <img src="/img/other/2.jpg" alt="" />
                  </div>
                  <div className="slide">
                    <img src="/img/other/3.jpeg" alt="" />
                  </div>
                </div>
                <div className="flex align-items-center justify-content-between py-5">
                  <div className='flex align-items-center gap-5'>
                    <Avatar height={25} width={25} />
                    <span>MarieClaire</span>
                  </div>
                  <Link to='/' className='flex align-items-center'>Voir plus<ChevronRight /></Link>
                </div>
              </div>
              <div className="top-videos">
                <h4>Videos populaires en Afrique</h4>
                <div className="popular-videos-slide-card">
                  <div className="top p-10">
                    <small>Afrimuz.com</small>
                    <br />
                    <b>"Gims en live" : En live show case à Madagascar...</b>
                  </div>
                  <div className="slider relative">
                    <div className="slider-prev-btn"><ChevronLeft size={30} /></div>
                    <div className="slider-next-btn"><ChevronRight size={30} /></div>
                    <Slider {...{
                      dots: false,
                      arrows: false,
                      infinite: true,
                      speed: 500,
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      autoplay: true
                    }}>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                      <div className='slide'>
                        <img src="/img/video/gims.jpeg" alt="" />
                        <div className="list">1/2</div>
                        <span className="paly-video-btn block">
                          <PlayFill size={20} />
                        </span>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="plan-slider">
                <h4>Inscrivez vous</h4>
                <p>Choisissez des maintenant un plan d'abonnement convenant aux besoins de votre entreprise</p>

                <div className='relative'>
                  <div className="floating-btn prev"><ChevronLeft size={21} /></div>
                  <div className="floating-btn next"><ChevronRight size={21} /></div>
                  <Slider {...{
                    dots: false,
                    arrows: false,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                  }}>
                    <div className="plan-card">
                      <div className="top">
                        <h4>GRATUIT</h4>
                        <img src="/img/other/free.svg" alt="" />
                        <h3 className="plan-price">
                          $0
                          <small>/mois</small>
                        </h3>
                      </div>
                      <ul>
                        <li><Check2 /> Accès limité 1 mois</li>
                        <li><Check2 /> 1 page professionnelle</li>
                        <li><Check2 /> 1 entreprise</li>
                        <li><Check2 /> 1 offre d'emplois</li>
                        <li><Check2 /> 1 modele de CV</li>
                        <li><Check2 /> 5 images par publication</li>
                      </ul>
                    </div>
                    <div className="plan-card">
                      <div className="top">
                        <h4>ARGENT</h4>
                        <img src="/img/other/trophy.svg" alt="" />
                        <h3 className="plan-price">
                          $9
                          <small>/mois</small>
                        </h3>
                      </div>
                      <ul>
                        <li><Check2 /> Accès limité 1 mois</li>
                        <li><Check2 /> 1 page professionnelle</li>
                        <li><Check2 /> 1 entreprise</li>
                        <li><Check2 /> 1 offre d'emplois</li>
                        <li><Check2 /> 1 modele de CV</li>
                        <li><Check2 /> 5 images par publication</li>
                      </ul>
                    </div>
                    <div className="plan-card">
                      <div className="top">
                        <h4>OR</h4>
                        <img src="/img/other/winner.svg" alt="" />
                        <h3 className="plan-price">
                          $19
                          <small>/mois</small>
                        </h3>
                      </div>
                      <ul>
                        <li><Check2 /> Accès limité 1 mois</li>
                        <li><Check2 /> 1 page professionnelle</li>
                        <li><Check2 /> 1 entreprise</li>
                        <li><Check2 /> 1 offre d'emplois</li>
                        <li><Check2 /> 1 modele de CV</li>
                        <li><Check2 /> 5 images par publication</li>
                      </ul>
                    </div>
                    <div className="plan-card">
                      <div className="top">
                        <h4>BRONZE</h4>
                        <img src="/img/other/free.svg" alt="" />
                        <h3 className="plan-price">
                          $49
                          <small>/mois</small>
                        </h3>
                      </div>
                      <ul>
                        <li><Check2 /> Accès limité 1 mois</li>
                        <li><Check2 /> 1 page professionnelle</li>
                        <li><Check2 /> 1 entreprise</li>
                        <li><Check2 /> 1 offre d'emplois</li>
                        <li><Check2 /> 1 modele de CV</li>
                        <li><Check2 /> 5 images par publication</li>
                      </ul>
                    </div>
                  </Slider>
                </div>

              </div>
            </StickySideBar>
          </div> : ""
        }
      </main>
    </div>
  )
}

export default Home
