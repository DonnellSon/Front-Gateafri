import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Explorer.scss";
import { ChevronRight, ChevronLeft, Globe, Hourglass, Signpost, Translate, InfoSquare, PlayCircle, PlayFill, ArrowLeft, ArrowRight, Bank, Coin, Wallet, CurrencyEuro, Safe } from "react-bootstrap-icons";
import Avatar from './../../components/Avatar/Avatar';
import { CustomNextArrow, CustomPrevArrow } from "../../components/Arrows/Arrows";
import { CarreSlider, CountrySlider } from "../../components/Slider/Slider";
import StickySideBar from "../../components/StickySideBar/StickySideBar";

const ReservationCarouseulSlide = ({ imagesUrls, priceReservation = null }) => {
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
      <div className="item-top-price">
        <p>{priceReservation} MGA</p>
      </div>
      <CustomNextArrow children={<ArrowRight size={25} />} onClick={carouseulItem.current?.slickNext} />
      <CustomPrevArrow children={<ArrowLeft size={25} />} onClick={carouseulItem.current?.slickPrev} />
      <Slider ref={carouseulItem} {...settingsItemCarouseul} className="sliderTop">
        {
          imagesUrls?.map((c, i) => (
            <div className="carouseulItem relative">
              <img key={i} src={c} alt="image" />
            </div>
          ))
        }
      </Slider>
    </>
  )

}

const Explorer = () => {
  const devertisementSlide = useRef()
  const villeSlide = useRef()
  const videoSlide = useRef()
  const reservationSlide = useRef()
  const carouseulItem = useRef()
  const settingsItemCarouseul = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }



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
    draggable: false,

  };



  return (
    <div id="explorer-container">
      {/* <div className="content-overlay">
        <h1>Lorem, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, illum.</p>
      </div> */}

      <div className="country-slide relative">

        <CountrySlider titleSlider={[
          {
            contains: 'Madagascar',
            country: 'Afrique',
            image: 'https://www.alibabuy.com/photos/library/1500/10311.jpg'
          },
          {
            contains: 'Madagascar',
            country: 'Afrique',
            image: 'https://photo.comptoir.fr/asset/guide/107/646647-1260x630-village-typique-pres-du-parc-national-andringitra-madagascar.jpg'
          }
          ,
          {
            contains: 'Madagascar',
            country: 'Afrique',
            image: '/img/other/baobab.webp'
          }
        ]} />
      </div>


      <div className="divertisement">

        <div className="invest">
          <StickySideBar top={20}>
            <div className="invest-content">
              <h1 className='h1-text'>Pourquoi investir à Madagascar?</h1>
              <div className="invest-gride">
                <div className="invest-gride-item">
                  <div className="invest-gride-svg ">
                    <Bank />
                  </div>
                  <p>Paysage diversifié, opportunités d'affaires, secteur touristique en plein essor.</p>
                </div>

                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Coin />
                  </div>
                  <p>Réglementation favorable, stabilité politique, facilité d'accès aux marchés régionaux.</p>
                </div>

                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Wallet />
                  </div>
                  <p>Main-d'œuvre qualifiée, coûts compétitifs, infrastructures en développement constant.</p>
                </div>

                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Wallet />
                  </div>
                  <p>Programme gouvernemental pour attirer les investissements étrangers, climat d'investissement positif.</p>
                </div>

                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Safe />
                  </div>
                  <p>Culture diversifiée et riche, destination touristique prisée, opportunités dans l'industrie hôtelière.</p>
                </div>

                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Safe />
                  </div>
                  <p>Avantages fiscaux, incitations gouvernementales, zones franches attractives pour les entreprises.</p>
                </div>
                <div className="invest-gride-item">
                  <div className="invest-gride-svg">
                    <Safe />
                  </div>
                  <p>Accords commerciaux internationaux, hub maritime stratégique dans la région.</p>
                </div>
              </div>
            </div>

            <div className="invest-text">
              <h1>7 BONNES RAISONS DE CHOISIR MADAGASCAR</h1>

              <div className="invest-text-content">
                <div className="invest-text-item">

                  <ul className="invest-ul">
                    <li className="invest-li">
                      <img src="/img/other/un.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS
                        </h1>
                        <p>Madagascar est membre de la Communauté de développement de l’Afrique australe (SADC), COMESA (Marché commun pour l’Afrique orientale et australe) et la COI (Commission de l’océan Indien), des organisations régionales de libre-échange totalisant plus de 600 millions de consommateurs potentiels. Investir à Madagascar donnera aux investisseurs un accès – en plus des avantages concurrentiels du pays – à ces zones de libre-échange à fort potentiel. En juillet, Madagascar a signé l’Accord tripartite de libre-échange (TFTA), qui combine SADC, COMESA et la Communauté de l’Afrique de l’Est (EAC), qui comprend 57% de la population africaine totale</p>
                      </div>
                    </li>

                    <li className="invest-li">
                      <img src="/img/other/deux.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS
                        </h1>
                        <p>Madagascar est doté d’un potentiel minier, agricole, énergétique, de pêche. Particulièrement dense et variée, qui doit être exploitée. L’unicité et la richesse de sa biodiversité (le taux de biodiversité est de 90% (n ° 1 en Afrique) et le taux d’endémicité est le plus élevé au monde) sont également un atout pour les investissements touristiques.</p>
                      </div>
                    </li>


                    <li className="invest-li">
                      <img src="/img/other/trois.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS
                        </h1>

                        <p>L’éligibilité de Madagascar à la Loi sur la croissance et les opportunités en Afrique (AGOA) avec les États-Unis et la signature de l’accord de partenariat économique (EPA) avec l’Union européenne permettent aux entreprises du pays d’exporter vers ces marchés sans droits de douane. Cela se reflète dans une forte dynamique commerciale entre Madagascar et les deux pays, les exportations de Madagascar vers les États-Unis augmentant de 12,8% en 2016 et de l’Union européenne de 44,6% en 2016.</p>
                      </div>
                    </li>


                    <li className="invest-li">
                      <img src="/img/other/quatre.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS</h1>
                        <p>Madagascar met en œuvre des réformes juridiques, procédurales et administratives importantes visant à faciliter les pratiques commerciales et à encourager les investissements locaux et étrangers. D’ici 2016, plus de 20 réformes ont été mises en œuvre dans les domaines du droit des affaires, la justice commerciale, import-export, le démarrage d’une entreprise, la facilitation du crédit, la fiscalité, etc. Diverses lois favorisant les investissements ont été promulgués, notamment la loi sur les Free Zones and Companies, qui permet aux sociétés à part entière de bénéficier d’exonérations de droits de douane et de TVA sur les importations; et les impôts sur le revenu pour les 15 premières années.

                        </p>
                      </div>
                    </li>


                    <li className="invest-li">
                      <img src="/img/other/cinq.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS</h1>
                        <p>Madagascar est membre de la Communauté de développement de l’Afrique australe (SADC), COMESA (Marché commun pour l’Afrique orientale et australe) et la COI (Commission de l’océan Indien), des organisations régionales de libre-échange totalisant plus de 600 millions de consommateurs potentiels. Investir à Madagascar donnera aux investisseurs un accès – en plus des avantages concurrentiels du pays – à ces zones de libre-échange à fort potentiel. En juillet, Madagascar a signé l’Accord tripartite de libre-échange (TFTA), qui combine SADC, COMESA et la Communauté de l’Afrique de l’Est (EAC), qui comprend 57% de la population africaine totale</p>
                      </div>
                    </li>


                    <li className="invest-li">
                      <img src="/img/other/six.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS</h1>
                        <p>Madagascar est membre de la Communauté de développement de l’Afrique australe (SADC), COMESA (Marché commun pour l’Afrique orientale et australe) et la COI (Commission de l’océan Indien), des organisations régionales de libre-échange totalisant plus de 600 millions de consommateurs potentiels. Investir à Madagascar donnera aux investisseurs un accès – en plus des avantages concurrentiels du pays – à ces zones de libre-échange à fort potentiel. En juillet, Madagascar a signé l’Accord tripartite de libre-échange (TFTA), qui combine SADC, COMESA et la Communauté de l’Afrique de l’Est (EAC), qui comprend 57% de la population africaine totale</p>
                      </div>
                    </li>

                    <li className="invest-li">
                      <img src="/img/other/sept.png" alt="image" />
                      <div>
                        <h1 className="purple-text-gradient">
                          ACCÈS POTENTIEL À UN MARCHÉ DE 600 MILLIONS DE CONSOMMATEURS</h1>
                        <p>Madagascar est membre de la Communauté de développement de l’Afrique australe (SADC), COMESA (Marché commun pour l’Afrique orientale et australe) et la COI (Commission de l’océan Indien), des organisations régionales de libre-échange totalisant plus de 600 millions de consommateurs potentiels. Investir à Madagascar donnera aux investisseurs un accès – en plus des avantages concurrentiels du pays – à ces zones de libre-échange à fort potentiel. En juillet, Madagascar a signé l’Accord tripartite de libre-échange (TFTA), qui combine SADC, COMESA et la Communauté de l’Afrique de l’Est (EAC), qui comprend 57% de la population africaine totale</p>
                      </div>
                    </li>



                  </ul>
                </div>
              </div>
            </div>

          </StickySideBar>
        </div>

        <div className="travel">

          <StickySideBar top={20}>
            <div className="top-destination">
              <h1>Découvrez des destinations qui éveilleront vos sens</h1>
              <p><a href="#">Afficher plus</a></p>
              <div className="travel-caroseul relative">
                <CarreSlider donneSlider={[
                  {
                    Title: 'Toamasina',
                    data1: 'Musée pirate',
                    data2: 'ports de Toamasina',
                    image: '/img/other/tamatave_4.jpg'
                  },
                  {
                    Title: 'Andasibe',
                    data1: 'Parc Forrestier',
                    data2: 'Parc Botanique',
                    image: '/img/other/paysage_10.webp'
                  },
                  {
                    Title: 'Nosy Be',
                    data1: 'Croisiere Catamaran',
                    data2: '',
                    image: '/img/other/nosybe.jpg'
                  },
                  {
                    Title: 'Fianarantsoa',
                    data1: 'Analakely Market',
                    data2: 'Musée des pirates Antananarivo...',
                    image: '/img/other/fianarantsoa.jpg'
                  },
                  {
                    Title: 'Analakely',
                    data1: 'Analakely Market',
                    data2: 'Musée des pirates Antananarivo...',
                    image: '/img/other/antananarivo.jpg'
                  },
                  {
                    Title: 'Isalo',
                    data1: 'Parc national Isalo',
                    data2: '',
                    image: '/img/other/madagascar.jpg'
                  }
                ]}
                />
              </div>
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
                    <p>la beauté de la faune</p>
                  </div>
                </div>


                <div class="grille-item">
                  <img src="/img/other/vue-du-ciel-calypso-tamatave.jpg" alt="image" />
                  <div className="grille-item-content">
                    <p>Les plus belles plages.</p>
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

                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/paysage_2.jpg",
                          "/img/other/paysage.jpg"]}
                          priceReservation={"400 000"}

                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Hotel Carlton
                        </h1>
                        <p>4 Etolie</p>
                      </div>
                    </div>


                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/paysage_3.png",
                          "/img/other/paysage_4.jpg"]}
                          priceReservation={"400 000"}

                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Hotel Colbert
                        </h1>
                        <p>3 Etoile.</p>
                      </div>
                    </div>

                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/paysage_8.jpg",
                          "/img/other/paysage_10.webp"]}
                          priceReservation={"400 000"}

                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Hotel Tsika.
                        </h1>
                        <p>1 Etoile.</p>
                      </div>
                    </div>


                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/plage.jpg",
                          "/img/other/plage_3.jpg"]}
                          priceReservation={"400 000"}

                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Restaurant Tsara dia.
                        </h1>
                        <p>3 Etoile.</p>
                      </div>
                    </div>


                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/tamatave_4.jpg",
                          "/img/other/vue-du-ciel-calypso-tamatave.jpg"]}
                          priceReservation={"400 000"}

                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Hotel Gate.
                        </h1>
                        <p>Lorem, ipsum.</p>
                      </div>
                    </div>


                    <div className="item-carouseul">
                      <div className="item-top relative">
                        <ReservationCarouseulSlide imagesUrls={[
                          "/img/other/tamatave_4.jpg",
                          "/img/other/vue-du-ciel-calypso-tamatave.jpg"]}
                          priceReservation={"400 000"}
                        />
                      </div>
                      <div className="item-bottom">
                        <h1>Ny soa Hotel.
                        </h1>
                        <p>5 Etoile.</p>
                      </div>
                    </div>


                  </Slider>
                </div>
              </div>

            </div>
          </StickySideBar>
        </div>
      </div>
      <div className="country-details">

        <div className="country-details-section-right">

          <StickySideBar top={75}>
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
          </StickySideBar>

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

    </div>
  );
};

export default Explorer;
