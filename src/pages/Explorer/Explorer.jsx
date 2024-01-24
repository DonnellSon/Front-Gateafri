import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Explorer.scss";
import { ChevronRight, ChevronLeft, Globe, Hourglass, Signpost, Translate, InfoSquare, PlayCircle, PlayFill, ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import Avatar from './../../components/Avatar/Avatar';

function CustomNextArrow({ onClick, className = null, children = <ChevronRight size="25" /> }) {
  return (
    <div className={`custom-right p-10${className ? ' ' + className : ''}`} onClick={onClick}>
      {
        children
      }
    </div>
  );
}

function CustomPrevArrow({ onClick, className = null, children = <ChevronLeft size="25" />,
}) {
  return (
    <div className={`custom-left p-10${className ? ' ' + className : ''}`} onClick={onClick}>
      {
        children
      }
    </div>
  );
}

const ReservationCarouseulSlide = ({ imagesUrls }) => {
  const carouseulItem = useRef()
  const settingsItemCarouseul = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,

  };
  return (
    <>
      <CustomNextArrow children={<ArrowRight size={25} />} onClick={carouseulItem.current?.slickNext} />
      <CustomPrevArrow children={<ArrowLeft size={25} />} onClick={carouseulItem.current?.slickPrev} />
      <Slider ref={carouseulItem} {...settingsItemCarouseul} className="carouseul-item-reservation">
        {
          imagesUrls?.map((c, i) => (
            <div className="carouseul-image relative">
              <img key={i} src={c} alt="image" />
            </div>
          ))
        }
      </Slider>
    </>
  )

}

const Explorer = () => {
  const countrySlide = useRef();
  const devertisementSlide = useRef()
  const villeSlide = useRef()
  const videoSlide = useRef()
  const reservationSlide = useRef()

  const settings = {
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,

  };

  const settingsDivertisement = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1
  };

  const settingsVille = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const settingsVideo = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  const settingsReservation = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false
  };



  return (
    <div id="explorer-container">
      {/* <div className="content-overlay">
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, illum.</p>
      </div> */}

      <div className="country-slide relative">
        <CustomNextArrow onClick={() => countrySlide.current?.slickNext()} />
        <CustomPrevArrow onClick={() => countrySlide.current?.slickPrev()} />

        <Slider ref={countrySlide} {...settings}>
          <div className="country-slide-item">
            <img src="/img/other/baobab.webp" alt="image" />
            <div className="country-slide-container">
              <h1 >Morondava</h1>
              <p>Des hôtels de tourisme assez simples jusqu'au 3 étoiles, certains de type bungalows, se sont installés au sud en bord de mer ou de lagune depuis quelques années, à partir des bases-vie ....<a href="#">En savoir plus</a></p>
            </div>
          </div>
          <div className="country-slide-item">
            <img src="/img/other/madagascar.jpg" alt="image" />
            <div className="country-slide-container">
              <h1>Isalo</h1>
              <p>Le Parc National Terrestre Isalo est une représentation écologique unique au sein du réseau Parcs Nationaux Madagascar : un massif ruiniforme de grès continental datant du jurassique avec sa géomorphologie typique et sa végétation rupicole endémique (Aloès, Euphorbes, Pachypodes...<a href="#">En savoir plus</a></p>
            </div>
          </div>
        </Slider>
      </div>

      <div className="country-details">

        <div className="country-details-section-right">

          <div className="country-details-heading">Sommaire</div>

          <div className="country-details-list">
            <ul>
              <li>
                <div className="country-details-item">
                  <InfoSquare />
                </div>
                A propos
              </li>

              <li>
                <div className="country-details-item">
                  <Globe />
                </div>
                Géographie
              </li>
              <li>
                <div className="country-details-item">
                  <Hourglass />
                </div>
                Histoire
              </li>
              <li>
                <div className="country-details-item">
                  <Signpost />
                </div>Politique et société
              </li>
            </ul>
          </div>
        </div>

        <div className="country-details-section-center">

          <div className="country-details-navbar">
            <div className="country-details-navbar-item"><h1>À propos</h1> </div>
            <div className="country-details-navbar-item-left">
              <div className="country-detail-navbar-item-svg">
                <Translate />
              </div>
              <div className="country-detail-navbar-item-content">
                Traduction
              </div>
            </div>
          </div>

          <div className="country-details-content">
            <div className="country-detail-content-item-right">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nisi laboriosam at necessitatibus culpa, hic illo! Libero accusantium dolores excepturi debitis modi nihil tempora quibusdam! Nemo non reiciendis voluptatem eum sapiente? Optio enim deleniti, neque commodi ut laboriosam ducimus eveniet id totam cumque dolores quae, vel tempora esse. Quod in optio veniam quo porro debitis doloremque quidem voluptatibus mollitia cupiditate aut fuga iste dolorum harum quam cumque facere impedit, nisi odit nobis reprehenderit dicta explicabo?</p>
            </div>
            <div className="country-detail-content-item-left">
              <img src="/img/other/baobab.webp" alt="image" />
            </div>

          </div>



          <div className="geographie-detail-content">
            <div className="geographie-detail-title">
              <h1> Géographie
              </h1>
            </div>

            <div className="geographie-detail-item">
              <div className="geographie-detail-left">

                <div className="geographie-detail-left-item">
                  <h3>Toponymie</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat natus rerum nam velit eaque laudantium tempore eius nesciunt suscipit perferendis sequi in facere, doloremque quo, quod eveniet. Explicabo provident, nihil exercitationem beatae aspernatur ducimus quos natus rem rerum, aliquid amet eum molestiae? Ex ullam a explicabo rerum obcaecati, perferendis deleniti reiciendis iusto. Reprehenderit, voluptatibus ducimus deleniti eaque quas perferendis. Natus nam molestias aliquid numquam aut facilis suscipit, mollitia ducimus, dicta, minus totam rerum laudantium vero laborum labore explicabo? Libero asperiores natus quisquam illo ab animi veniam omnis ea veritatis in, corporis voluptates placeat officiis, provident officia aperiam magnam dolorum?
                  </p>
                </div>

                <div className="geographie-detail-left-item">
                  <h3>Situation, délimitation</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat natus rerum nam velit eaque laudantium tempore eius nesciunt suscipit perferendis sequi in facere, doloremque quo, quod eveniet. Explicabo provident, nihil exercitationem beatae aspernatur ducimus quos natus rem rerum, aliquid amet eum molestiae? Ex ullam a explicabo rerum obcaecati, perferendis deleniti reiciendis iusto. Reprehenderit, voluptatibus ducimus deleniti eaque quas perferendis. Natus nam molestias aliquid numquam aut facilis suscipit, mollitia ducimus, dicta, minus totam rerum laudantium vero laborum labore explicabo? Libero asperiores natus quisquam illo ab animi veniam omnis ea veritatis in, corporis voluptates placeat officiis, provident officia aperiam magnam dolorum?
                  </p>
                </div>
                <div className="geographie-detail-left-item">
                  <h3>Relief</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quaerat natus rerum nam velit eaque laudantium tempore eius nesciunt suscipit perferendis sequi in facere, doloremque quo, quod eveniet. Explicabo provident, nihil exercitationem beatae aspernatur ducimus quos natus rem rerum, aliquid amet eum molestiae? Ex ullam a explicabo rerum obcaecati, perferendis deleniti reiciendis iusto. Reprehenderit, voluptatibus ducimus deleniti eaque quas perferendis. Natus nam molestias aliquid numquam aut facilis suscipit, mollitia ducimus, dicta, minus totam rerum laudantium vero laborum labore explicabo? Libero asperiores natus quisquam illo ab animi veniam omnis ea veritatis in, corporis voluptates placeat officiis, provident officia aperiam magnam dolorum?
                  </p>
                </div>
              </div>

              <div className="geographie-detail-right">
                <img src="/img/other/Madagascar-carte.png" alt="image" />
              </div>

            </div>

          </div>

        </div>
      </div>

      <div className="divertisement">
        <div>
          <h1>Découvrez des destinations qui éveilleront vos sens</h1>
          <p><a href="#">Afficher plus</a></p>

          <div className="divertisement-caroseul relative">
            <CustomNextArrow onClick={devertisementSlide.current?.slickNext} />
            <CustomPrevArrow onClick={devertisementSlide.current?.slickPrev} />

            <Slider ref={devertisementSlide} {...settingsDivertisement}>
              <div className="divertisement-item-caroseul">
                <img src="/img/other/tamatave_4.jpg" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Toamasina</h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span> Musée pirate
                    <span class="custom-bullet">&#8226;</span>  ports de Toamasina
                  </p>
                </div>
              </div>

              <div className="divertisement-item-caroseul">
                <img src="/img/other/paysage_10.webp" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Andasibe</h1>  
                  <p>
                    <span class="custom-bullet">&#8226;</span>Parc Forrestier 
                    <span class="custom-bullet">&#8226;</span>Parc Botanique
                  </p>
                </div>
              </div>

              <div className="divertisement-item-caroseul">
                <img src="/img/other/nosybe.jpg" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Nosy Be </h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span>Croisiere Catamaran
                  </p>
                </div>

              </div>
              <div className="divertisement-item-caroseul">
                <img src="/img/other/fianarantsoa.jpg" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Fianarantsoa </h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span>Fahaleovantena Tribes Monument
                    <span class="custom-bullet">&#8226;</span>Cathédrale ...

                  </p>
                </div>
              </div>
              <div className="divertisement-item-caroseul">
                <img src="/img/other/antananarivo.jpg" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Analakely</h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span>Analakely Market
                    <span class="custom-bullet">&#8226;</span>Musée des pirates Antananarivo...

                  </p>
                </div>
              </div>
              <div className="divertisement-item-caroseul">
                <img src="/img/other/baobab.webp" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Madagascar </h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span>Allée des baobabs
                  </p>
                </div>
              </div>
              <div className="divertisement-item-caroseul">
                <img src="/img/other/madagascar.jpg" alt="image" />
                <div className="divertisement-item-text">
                  <h1>Isalo </h1>
                  <p>
                    <span class="custom-bullet">&#8226;</span>Parc national Isalo
                  </p>
                </div>

              </div>
            </Slider>

          </div>

          <div className="ville">
            <div className="ville-title">
              <div>
                <h1>Trouvez des idées pour votre prochain voyage
                </h1>
              </div>
              <div>
                <p><a href="#">Plus</a></p>
              </div>
            </div>
            <div className="ville-carouseul relative">
              <CustomNextArrow onClick={() => villeSlide.current?.slickNext()} />
              <CustomPrevArrow onClick={() => villeSlide.current?.slickPrev()} />
              <Slider ref={villeSlide} {...settingsVille}>
                <div className="ville-item-premier relative">
                  <img src="/img/other/baobab.webp" alt="image" />
                  <div >
                    <p>Explorez la beauté unique de Morondava à Madagascar</p>
                    <p>Explorez la ville de Morondava </p>

                  </div>
                </div>

                <div className="ville-item relative">
                  <img src="/img/other/tamatave_4.jpg" alt="image" />
                  <div>
                    <p>Explorez Tamatave, un joyau côtier de Madagascar</p>
                    <p>Découvrez la beauté côtière de Tamatave, une destination exceptionnelle à Madagascar...</p>
                  </div>
                </div>
                <div className="ville-item relative">
                  <img src="/img/other/antananarivo.jpg" alt="image" />
                  <div>
                    <p>Fianarantsoa est une charmante ville de Madagascar, nichée au cœur des collines.</p>
                    <p>Explorez les ruelles pittoresques, découvrez l'histoire captivant...</p>

                  </div>
                </div>
                <div className="ville-item relative">
                  <img src="/img/other/fianarantsoa.jpg" alt="image" />
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum!</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="ville-item relative">
                  <img src="/img/other/nosybe.jpg" alt="image" />
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum!</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
                <div className="ville-item relative">
                  <img src="/img/other/vue-du-ciel-calypso-tamatave.jpg" alt="image" />
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum!</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>

                <div className="ville-item relative">
                  <img src="/img/other/tamatave_4.jpg" alt="image" />
                  <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, dolorum!</p>
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>

              </Slider>
            </div>

          </div>


          <div className="nature">
            <div className="nature-title">
              <h1>Explorez nos catégories de voyages</h1>
            </div>

            <div class="grille-item-nature">

              <div class="grille-item">
                <img src="/img/other/paysage_3.png" alt="image" />
                <div className="grille-item-content">
                  <p>Découvrez la beauté de la faune .</p>
                </div>
              </div>


              <div class="grille-item">
                <img src="/img/other/vue-du-ciel-calypso-tamatave.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Détendez-vous sur les plus belles plages.</p>
                </div>
              </div>
              <div class="grille-item">
                <img src="/img/other/nosybe.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Plage et iles.</p>
                </div>
              </div>

              <div class="grille-item">
                <img src="/img/other/fianarantsoa.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Arts et culture.</p>
                </div>
              </div>

              <div class="grille-item">
                <img src="/img/other/antananarivo.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Romantique.</p>
                </div>
              </div>

              <div class="grille-item">
                <img src="/img/other/paysage_8.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Paysage.</p>
                </div>
              </div>

              <div class="grille-item">
                <img src="/img/other/paysage_10.webp" alt="image" />
                <div className="grille-item-content">
                  <p>Faune et flore.</p>
                </div>

              </div>

              <div class="grille-item">
                <img src="/img/other/plage.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Aventure.</p>
                </div>
              </div>

              <div class="grille-item">
                <img src="/img/other/paysage_4.jpg" alt="image" />
                <div className="grille-item-content">
                  <p>Coucher de soleil.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="video">
            <div className="video-title">
              <div>
                <h1>Video court metrage
                </h1>
              </div>
              <div>
                <p><a href="#">Plus</a></p>
              </div>
            </div>
            <div className="video-carouseul relative">
              <CustomNextArrow onClick={() => videoSlide.current?.slickNext()} />
              <CustomPrevArrow onClick={() => videoSlide.current?.slickPrev()} />
              <Slider ref={videoSlide} {...settingsVideo}>
                <div className="video-item relative">

                  <div className="video-item-text">
                    <Avatar src={"/img/other/2.webp"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/tamatave_4.jpg" alt="image" />
                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>


                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/avatar.png"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/tamatave_4.jpg" alt="image" />

                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/avatar.jpg"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/antananarivo.jpg" alt="image" />
                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/avatar_2.png"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/fianarantsoa.jpg" alt="image" />
                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/avatar_4.jpg"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/nosybe.jpg" alt="image" />
                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/2.webp"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/vue-du-ciel-calypso-tamatave.jpg" alt="image" />

                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

                <div className="video-item relative">
                  <div className="video-item-text">
                    <Avatar src={"/img/other/2.webp"} online={false} />
                    <p>Lorem ipsum </p>
                  </div>

                  <img src="/img/other/tamatave_4.jpg" alt="image" />
                  <div className="video-item-svg">
                    <PlayFill />
                  </div>
                </div>

              </Slider>
            </div>
          </div>

          <div className="reservation">
            <div className="reservation-title">
              <h1>Réservation d'Hôtel</h1>
              <p><a href="#">Afficher plus</a></p>
            </div>

            <div className="reservation-content">

              <div className="reservation-item-left">
                <div>
                  <PlayFill size={50} style={{ color: "white" }} />

                  <h1>Réservez des hôtels pour rester.</h1>
                  <p>pendant que vous êtes à Madagascar</p>
                </div>
              </div>

              <div className="reservation-carouseul relative">

                <CustomNextArrow onClick={reservationSlide.current?.slickNext} />
                <CustomPrevArrow onClick={reservationSlide.current?.slickPrev} />

                <Slider ref={reservationSlide} {...settingsReservation}>

                  <div className="reservation-item-caroseul">
                    <div className="carouseul-item relative">
                      <ReservationCarouseulSlide imagesUrls={[
                        'https://media-cdn.tripadvisor.com/media/photo-s/0b/04/e9/52/hotel-soafia.jpg',
                        'https://madagascar-tourisme.com/wp-content/uploads/2021/08/H%C3%B4tep-Pietra-Fianaratsoa.jpg',
                        'https://www.booking-hotel-madagascar.com/wp-content/uploads/2018/10/Lac-Hotel-a-Fianarantsoa.jpg'
                      ]} />
                    </div>

                    <div className="carouseul-item">
                      <h1>Pietra Hotel</h1>
                      <p>3 étoile</p>
                    </div>
                  </div>

                  <div className="reservation-item-caroseul">
                    <div className="carouseul-item relative">
                      <ReservationCarouseulSlide
                        imagesUrls={[
                          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/ac/91/94/pool.jpg?w=1200&h=-1&s=1',
                          'https://www.hotel.de/de/media/image/af/68/2d/Louvre_Hotel_SPA-Antananarivo-Hotel_outdoor_area-1-615409.jpg',
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyAfc9Zu_0PLNejZBzztF5Zeg86GogyKYOQ&usqp=CAU'
                        ]}
                      />
                    </div>

                    <div className="carouseul-item">
                      <h1>
                        Le Grand Hotel - Diego Suarez
                      </h1>
                      <p>3 étoile</p>
                    </div>
                  </div>

                  <div className="reservation-item-caroseul">
                    <div className="carouseul-item relative">
                      <ReservationCarouseulSlide
                        imagesUrls={[
                          'https://lh3.googleusercontent.com/proxy/H7dJApMLFBMBk6MmaSvA-HVxCXKfxn3hToA71u0ncD2OKxnCLVkdBM7rWdI_O8RLAlzI2MkXowtvNsVcRuyf1Bh1V1f7xOB9rM6QuZBMb7veepUBlqP1BrVMxI9REhmCffX4x_4Xu9seCIysq4fWWlCV1OebX-MwSsX1jwDJEcgM9YGWvSUKrwwVZ2IpTssBFfHXsHAWlRVCJAJDNfjJXAPDMl3OK5bhEmzL5Yw5ypr5uX0zLUHMoR-J2WwdGG-TVldPFJkIIxYdDqFa9k7aQLKdhqRIh5XX5aKDeZKRtuCAlZp1jh9pcB-gdY4qDHwc2rBtYDp80fWDCg',
                          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/07/42/3f/sharon-hotel-tamatave.jpg?w=700&h=-1&s=1',
                          'https://madagascar-hotels-online.com/wp-content/uploads/2019/04/chambre-familiale-java-hotel-tamatave-toamasina.jpg'
                        ]} />
                    </div>

                    <div className="carouseul-item">
                      <h1>Ikopa Hôtel Madagascar</h1>
                      <p>3 étoile</p>
                    </div>
                  </div>

                  <div className="reservation-item-caroseul">
                    <div className="carouseul-item relative">
                      <ReservationCarouseulSlide
                        imagesUrls={[
                          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/a9/a4/f0/piscine.jpg?w=700&h=-1&s=1',
                          'https://media-cdn.tripadvisor.com/media/photo-s/01/50/11/c4/grand-hotel.jpg',
                          'https://madagascar-hotels-online.com/wp-content/uploads/2019/04/grand-hotel-colbert-4.jpg'
                        ]}
                      />
                    </div>

                    <div className="carouseul-item">
                      <h1>Le Centell Hotel & Spa</h1>
                      <p>3 étoile</p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explorer;
