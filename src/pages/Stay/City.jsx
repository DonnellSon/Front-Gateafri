import React from 'react'
import './City.scss';
import Slider from 'react-slick'
import { MapContainer, TileLayer, UseMap, Marker, Popup } from 'react-leaflet';
import { Alarm, CaretRight, Cloud, CloudSleet, Diamond, Gem, GeoAltFill, Globe, Heart, Phone, Search, Shop, Speaker, X, XLg } from 'react-bootstrap-icons';
import { CustomNextArrow, CustomPrevArrow } from '../../components/Arrows/Arrows';
import { useRef, useState } from 'react';
import Modal from '../../components/Modal/Modal'
import { ChevronRight, ChevronLeft, GeoAlt } from "react-bootstrap-icons";
import { AlertLink, CloseButton } from 'react-bootstrap';
import { useEffect } from 'react';
import Rating from 'react-rating';
import StickySideBar from './../../components/StickySideBar/StickySideBar';


const AttractionSlider = () => {
  const attractionSlider = useRef()
  return (
    <div className='relative'>
      <CustomNextArrow onClick={() => { attractionSlider.current.slickNext() }} />
      <CustomPrevArrow onClick={() => { attractionSlider.current.slickPrev() }} />
      <Slider {...{
      }} className='active-attraction-slider' ref={attractionSlider} >

        <div className='active-attraction-slide relative'>
          <img src='/img/other/plage_3.jpg' className='absolute' />
        </div>
        <div className='active-attraction-slide relative'>
          <img src='/img/other/tamatave_4.jpg' className='absolute' />
        </div>
        <div className='active-attraction-slide relative'>
          <img src='/img/other/madagascar.jpg' className='absolute' />
        </div>
      </Slider>
    </div>
  )
}

const Attraction = ({ dataAttraction }) => {
  const [open, setOpen] = useState(false)


  return (
    <>
      <div className='city-item relative' onClick={() => setOpen(true)}>
        <img src={dataAttraction?.image} alt="" />
        <ul className='city-item-content'>
          <li>{dataAttraction?.city}</li>
          <li>
            <div className='svg'>
              <p><Shop /></p>
              <p>{dataAttraction?.title}</p>
            </div>
          </li>
          <li>{dataAttraction?.attraction}</li>
        </ul>
      </div>

      <Modal open={open} className="attraction-modal" >
        <div className="top flex justify-content-between align-items-center relative">
          <div className='logo-gate'>
            <img src='/img/logo/GATEAFR.png' alt=''/>
          </div>
          <nav className='attraction-modal-nav flex align-items-center absolute'>
            <ul className='flex align-item-center gap-20'>
              <li className='active'>Tout</li>
              <li>Entreprise</li>
              <li>Musées</li>
              <li>Historique</li>
              <li>Culture</li>
              <li>Chateau</li>
            </ul>
          </nav>
          <div className="close-modal" onClick={() => setOpen(false)} >
            <XLg size={20} />
          </div>
        </div>

        <div className="body flex">
          <div className="left p-10">

            <div>
              <img src='/img/other/antananarivo.jpg' alt='' />
              <div className='text-img'>
                <span>Analakely</span>
              </div>
            </div>

            <div>
              <img src='/img/other/baobab.jpg' alt='' />
              <div className='text-img'>
                <span>Tsimbazaza</span>
              </div>
            </div>

            <div>
              <img src='/img/other/madagascar_antananarivo.jpg' alt='' />
              <div className='text-img'>
                <span>Rova Manjakamiadana</span>
              </div>
            </div>
            <div>
              <img src='/img/other/maki.jpg' alt='' />
              <div className='text-img'>
                <span>Tsimbazaza</span>
              </div>
            </div>
            <div>
              <img src='/img/other/maki_2.png' alt='' />
              <div className='text-img'>
                <span>Tsimbazaza</span>
              </div>
            </div>
            <div>
              <img src='/img/other/nosybe.jpg' alt='' />
              <div className='text-img'>
                <span>Tsimbazaza</span>
              </div>
            </div>
          </div>
          <div className="center flex">
            <div className="center-left">
              <StickySideBar top={70}>
                <AttractionSlider />
              </StickySideBar>
            </div>
            <div className="center-right">

              <div className="top flex ">
                <div className="top-left">
                  <h1>Musée de la pirate de Madagascar</h1>
                  <p>Traivasion</p>
                </div>
                <div className="top-right">
                  <Gem />
                </div>
              </div>

              <div className="body">
                <section className="attraction-description">
                  <p>Learn about pirates and their particular way of life at Pirate Museum of Antananarivo. Read stories, view photographs, and listen to the myths of these fearless people that once ruled the area. Inspect the modest array of artifacts showcasing the pirates' weapons, treasures, and tools used during raids. A few ship models recreate their vessels, giving a sense of how massive and powerful they were.
                  </p>
                </section>
                <section className='attraction-info'>
                  <ul>
                    <li className='flex align-items-center gap-15'>
                      <GeoAlt />
                      <span>103, rue de Liège, Antananarivo</span>
                    </li>
                    <li className='flex align-items-center gap-15'>
                      <Phone />
                      <span>+261 20 22 625 27</span>
                    </li>
                    <li className='flex align-items-center gap-15'>
                      <Globe />
                      <span>www.test.com</span>
                    </li>
                    <li className='flex align-items-center gap-15'>
                      <Alarm />
                      <span>Horraire <b>Jeudi</b></span>
                      <span>8:00 AM - 15:00 PM</span>
                    </li>
                  </ul>
                </section>

                <section className='attraction-tabs'>
                  <div className="top flex align-items-center">
                    <ul className='flex align-items-center gap-15'>
                      <li>Avis/Commentaires</li>
                      <li>Articles</li>
                    </ul>
                  </div>

                  <div className="body py-15">
                    <div className="attraction-notice">
                      <div className="top">

                        <div className="note flex gap-15">
                          <h1>3.0</h1>
                          <div className="gems">

                            <Rating
                              readonly
                              initialRating={3.5}
                              onChange={(value) => { }}
                              fractions={2}
                              emptySymbol={<img src="/img/icons/diamond_grey.png" className="icon rating-diamond-img" />}
                              fullSymbol={<img src="/img/icons/diamond.png" className="icon rating-diamond-img" />}
                            />
                            <p>237 evaluations</p>
                          </div>
                        </div>

                        <div className="evaluation-cart">
                          <ul>
                            <li className='flex gap-10 align-items-center'>
                              <span>5 étoile</span>
                              <div className='evaluation-progres'>
                                <div></div>
                              </div>
                              <span>18%</span>
                            </li>

                            <li className='flex gap-10 align-items-center'>
                              <span>5 étoile</span>
                              <div className='evaluation-progres'>
                                <div></div>
                              </div>
                              <span>18%</span>
                            </li>

                            <li className='flex gap-10 align-items-center'>
                              <span>5 étoile</span>
                              <div className='evaluation-progres'>
                                <div></div>
                              </div>
                              <span>18%</span>
                            </li>

                            <li className='flex gap-10 align-items-center'>
                              <span>5 étoile</span>
                              <div className='evaluation-progres'>
                                <div></div>
                              </div>
                              <span>18%</span>
                            </li>

                            <li className='flex gap-10 align-items-center'>
                              <span>5 étoile</span>
                              <div className='evaluation-progres'>
                                <div></div>
                              </div>
                              <span>18%</span>
                            </li>
                          </ul>
                        </div>

                        <div className='article-cart py-10'>
                          <h1>Gourmand2021bis</h1>
                          <div className='article-item flex align-items-center gap-15 py-10'>
                            <Rating
                              readonly
                              initialRating={3.5}
                              onChange={(value) => { }}
                              fractions={2}
                              emptySymbol={<img src="/img/icons/diamond_grey.png" className="icon rating-diamond-img" />}
                              fullSymbol={<img src="/img/icons/diamond.png" className="icon rating-diamond-img" />}
                            />
                            <span>August 23, 2023</span>
                          </div>
                          <div className="description-article">
                            <p>Immense parc floral au cœur de la ville, avec des plantes magnifiques et c’est l’endroit dans lequel les familles jouent et viennent pique-niquer ! Des groupes d’amis viennent chanter et jouer de la musique. Plus que le zoo, c’est la joie de vivre au sein de ce parc qui est magnifique !</p>
                            <span>Avis complet</span>
                          </div>
                        </div>

                        <div className='article-cart py-10'>
                          <h1>nadlotus</h1>
                          <div className='article-item flex align-items-center gap-15 py-10'>
                            <Rating
                              readonly
                              initialRating={3.5}
                              onChange={(value) => { }}
                              fractions={2}
                              emptySymbol={<img src="/img/icons/diamond_grey.png" className="icon rating-diamond-img" />}
                              fullSymbol={<img src="/img/icons/diamond.png" className="icon rating-diamond-img" />}
                            />
                            <span>August 23, 2023</span>
                          </div>
                          <div className="description-article">
                            <p>ILe guide ne parlait pas bien le français et ne donnait pas suffisamment d’explication durant notre visite. L’éclairage dans le vivarium était défectueux. Pensez à prendre un anti-moustique. Cependant très intéressant avec une faune et une flore diversifiées. Une très belle expérience qui permet une immersion!</p>
                            <span>Avis complet</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className="right">
            <StickySideBar top={65}>
              <div className="attraction-location-map">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}  >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
                  </Marker>
                </MapContainer>
              </div>
            </StickySideBar>
          </div>
        </div>
      </Modal>
    </>

  )
}

const City = () => {

  const citySlider = useRef()
  const setting = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div id='city-page'>

      <div className='city-slider relative'>
        <Slider arrows={false} fade={true}>
          <div className='city-slider-container'>
            <img src="/img/other/plage_3.jpg" alt="image" />

            <div className='city-slider-text'>
              <h1>Antananarivo</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit rem earum nesciunt dolorem aperiam consequatur numquam amet quaerat modi nihil....</p>
            </div>
          </div>
          <div className='city-slider-container'>
            <img src="/img/other/plage.jpg" alt="image" />
            <div className='city-slider-text'>
              <h1>Antananarivo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequuntur harum a, ratione ut quisquam maxime maiores assumenda nemo. Tempore.....</p>
            </div>
          </div>

          <div className='city-slider-container'>
            <img src="https://www.booking-hotel-madagascar.com/wp-content/uploads/2019/07/Analakely-antananarivo.jpg" alt="image" />
            <div className='city-slider-text'>
              <h1>Antananarivo</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores omnis facere autem aperiam dolor eaque soluta repellat neque natus eos?....</p>
            </div>
          </div>
        </Slider>
      </div>

      <div className='city-content'>

        <div className='city-about'>
          <div className='city-about-item'>
            <h1>À propos de cet endroit</h1>
            <p>Antananarivo ou Tananarive dans sa version francisée est la capitale économique et politique de Madagascar, de la province d'Antananarivo et de la région Analamanga. Ses habitants s'appellent les Antananariviens, ou Tananariviens. Sa population dépasse 1,6 millions d'habitants, et son agglomération approche les 3,6 millions d'habitants. La ville est divisée en six arrondissements et 192 fokontany.</p>
          </div>

          <div className='caption'>
            <div className='caption-item'>
              <div className='caption-item-text'>
                <ul>
                  <li><h1>VOYAGE À ANTANANARIVO</h1></li>
                  <li><p>Durée moyenne de séjour</p></li>
                  <li><span>6 jours</span></li>
                </ul>
              </div>
            </div>

            <div className='caption-map'>
              <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>

        <div className='city-view relative'>
          <div className='city-view-title'>
            <h1>A voir et à faire</h1>
          </div>
          <div className='carousel-city relative'>
            <CustomNextArrow onClick={citySlider.current?.slickNext} />
            <CustomPrevArrow onClick={citySlider.current?.slickPrev} />

            <Slider ref={citySlider} {...setting}>
              <Attraction dataAttraction={{
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/La_for%C3%AAt_de_la_colline_royale_d%27Ambohimanga_Rova%2C_Antananarivo_Madagascar..jpg',
                city: 'Ananakely',
                title: 'Tsena Analakely',
                attraction: 'Shooping'
              }
              }
              />

              <Attraction dataAttraction={{
                image: 'https://upload.wikimedia.org/wikipedia/commons/2/24/La_for%C3%AAt_de_la_colline_royale_d%27Ambohimanga_Rova%2C_Antananarivo_Madagascar..jpg',
                city: 'Ananakely',
                title: 'Tsena Analakely',
                attraction: 'Shooping'
              }
              } />

              <Attraction dataAttraction={{
                image: 'https://voyage-madagascar.org/wp-content/uploads/Palais-de-59ha.jpg',
                city: 'Ananakely',
                title: 'Tsena Analakely',
                attraction: 'Shooping'
              }
              } />

              <Attraction dataAttraction={{
                image: 'https://www.booking-hotel-madagascar.com/wp-content/uploads/2019/07/Analakely-antananarivo.jpg',
                city: 'Ananakely',
                title: 'Tsena Analakely',
                attraction: 'Shooping'
              }
              } />


              <Attraction dataAttraction={{
                image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/0d/9e/5e/analakely-market.jpg?w=1200&h=-1&s=1',
                city: 'Ananakely',
                title: 'Tsena Analakely',
                attraction: 'Shooping'
              }
              } />

            </Slider>
          </div>
        </div>
      </div >
    </div >
  )
}
export default City