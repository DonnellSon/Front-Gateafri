import React from 'react'
import SliderNav from '../../components/SliderNav/SliderNav'
import './Music.scss'
import Slider from 'react-slick'
import Avatar from '../../components/Avatar/Avatar'

const Music = () => {

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    arrows: false,
    dots: false
  };
  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    arrows: false,
    dots: false
  };



  return (
    <div className='music-home'>
      <div className="top">
        <div className="music-top-nav">
          <SliderNav>
            <span onClick={() => { }}>Tous</span>
            <span onClick={() => { }}>Populaires</span>
            <span onClick={() => { }}>Nouveaux</span>
            <span onClick={() => { }}>Tous</span>
            <span onClick={() => { }}>Ma musique</span>
            <span onClick={() => { }}>Tous</span>
          </SliderNav>
        </div>
        <div className="top-music-slider">
          <div className="heading">
            <h1>Afrimuz top 10</h1>
          </div>
          <Slider {...settings}>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster1.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/5.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster2.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/3.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster4.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/1.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster2.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/5.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster2.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/5.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
            <div className="top-musique-slide relative" style={{ width: 400, aspectRatio: '16/9' }}>
              <img src='/img/posters/poster2.jpg' />
              <div className="capt">
                <div className="flag-avatar">
                  <Avatar width={40} height={40} src='/img/artists/5.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                <span className='text-ellipsis'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil atque explicabo ex dolor voluptates vero, nostrum voluptatem eius, itaque numquam cum illum? Fugit cumque aliquam minima, quaerat numquam vel.</span>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="top-artist-slider">
        <div className="heading">
          <h1>Artistes populaires</h1>
        </div>
        <Slider {...settings}>
            <div className="top-artist-slide relative" style={{ width: 150}}>
    
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src='/img/artists/5.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                
            </div>
            <div className="top-artist-slide relative" style={{ width: 150}}>
    
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src='/img/artists/3.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                
            </div>
            <div className="top-artist-slide relative" style={{ width: 150}}>
    
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src='/img/artists/2.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                
            </div>
            <div className="top-artist-slide relative" style={{ width: 150}}>
    
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src='/img/artists/1.png' />
                  <img src='/img/flags/Flag_of_Madagascar.svg' />
                </div>
                <h1>Rema-En live</h1>
                
            </div>
            
          </Slider>
      </div>
    </div>
  )
}

export default Music
