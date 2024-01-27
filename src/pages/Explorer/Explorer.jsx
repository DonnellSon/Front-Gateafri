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
              <p><b>Madagascar</b> (en <a href="/wiki/Malgache" title="Malgache">malgache</a>&nbsp;: <span class="lang-mg" lang="mg"><i>Madagasikara</i></span>), en forme longue <b>république de Madagascar</b> (en <a href="/wiki/Malgache" title="Malgache">malgache</a>&nbsp;: <span class="lang-mg" lang="mg"><i>Repoblikan'i Madagasikara</i></span>), est un <a href="/wiki/%C3%89tat_insulaire" title="État insulaire">État insulaire</a> situé dans l'<a href="/wiki/Oc%C3%A9an_Indien" title="Océan Indien">océan Indien</a> et géographiquement rattaché au <a href="/wiki/Afrique" title="Afrique">continent africain</a>, dont il est séparé par le <a href="/wiki/Canal_du_Mozambique" title="Canal du Mozambique">canal du Mozambique</a>. Longue de 1&nbsp;580&nbsp;<abbr class="abbr" title="kilomètre">km</abbr> et large de 580&nbsp;<abbr class="abbr" title="kilomètre">km</abbr>, Madagascar couvre une superficie de 587&nbsp;000&nbsp;<abbr class="abbr" title="kilomètre carré">km<sup>2</sup></abbr> qui la classe <a href="/wiki/Liste_d%27%C3%AEles_par_superficie" title="Liste d'îles par superficie">quatrième île du monde</a>, après le <a href="/wiki/Groenland" title="Groenland">Groenland</a>, la <a href="/wiki/Nouvelle-Guin%C3%A9e" title="Nouvelle-Guinée">Nouvelle-Guinée</a> et <a href="/wiki/Born%C3%A9o" title="Bornéo">Bornéo</a>. Sa capitale est <a href="/wiki/Antananarivo" title="Antananarivo">Antananarivo</a><sup id="cite_ref-:3_7-0" class="reference"><a href="#cite_note-:3-7"><span class="cite_crochet">[</span>7<span class="cite_crochet">]</span></a></sup> et le pays a pour monnaie l'<a href="/wiki/Ariary" title="Ariary">ariary</a>. Ses habitants, les <a href="/wiki/Malgaches" title="Malgaches">Malgaches</a>, sont un peuple associant un mélange de populations d'origines <a href="/wiki/Austron%C3%A9siens" title="Austronésiens">austronésiennes</a> et <a href="/wiki/Afrique_de_l%27Est" title="Afrique de l'Est">est-africaines</a>, mais parlant une <a href="/wiki/Langues_malayo-polyn%C3%A9siennes" title="Langues malayo-polynésiennes">langue malayo-polynésienne</a>&nbsp;: le <a href="/wiki/Malgache" title="Malgache">malgache</a>. Le pays est entouré par d'autres îles et archipels&nbsp;: les <a href="/wiki/Mascareignes" title="Mascareignes">Mascareignes</a> (dont <a href="/wiki/La_R%C3%A9union" title="La Réunion">La Réunion</a> et <a href="/wiki/%C3%8Ele_Maurice" title="Île Maurice">Maurice</a>), les <a href="/wiki/Archipel_des_Comores" title="Archipel des Comores">Comores</a> (dont <a href="/wiki/Mayotte" title="Mayotte">Mayotte</a>) et les <a href="/wiki/Seychelles" title="Seychelles">Seychelles</a>.
              </p>
              <p>Durant la majeure partie du <abbr class="abbr" title="19ᵉ siècle"><span class="romain">XIX</span><sup style={{fontSize:'72%'}}>e</sup></abbr>&nbsp;siècle, l'île est administrée par le <a href="/wiki/Royaume_de_Madagascar" title="Royaume de Madagascar">royaume de Madagascar</a>, cette administration s'exerce dans le cadre du <a href="/wiki/Protectorat_fran%C3%A7ais_de_Madagascar" title="Protectorat français de Madagascar">protectorat français de Madagascar</a> après 1883, à la suite de la première <a href="/wiki/Exp%C3%A9dition_de_Madagascar" title="Expédition de Madagascar">expédition de Madagascar</a>. Considérant que le protectorat est peu appliqué par le gouvernement malgache, la <a href="/wiki/France" title="France">France</a> organise une deuxième expédition militaire à partir de 1895. Les établissements français de <a href="/wiki/Antsiranana" title="Antsiranana">Diego-Suarez</a>, de <a href="/wiki/Nosy_Be" title="Nosy Be">Nosy Be</a> et de l'<a href="/wiki/%C3%8Ele_Sainte-Marie" title="Île Sainte-Marie">Île Sainte-Marie</a> sont rattachés au protectorat le <time class="nowrap" datetime="1896-01-28" data-sort-value="1896-01-28">28 janvier 1896</time>. Les troubles consécutifs à l'intervention militaire française conduiront, en 1897, à la fin de l'autonomie malgache, à l'annexion de l'île par la <a href="/wiki/France" title="France">France</a> et à la <a href="/wiki/La_R%C3%A9union" title="La Réunion">réunion</a> de l'ancien protectorat et d'autres territoires français au sein de la <a href="/wiki/Colonie_de_Madagascar_et_d%C3%A9pendances" title="Colonie de Madagascar et dépendances">colonie de Madagascar et dépendances</a>. Le premier gouvernement autonome malgache revoit le jour le <time class="nowrap" datetime="1958-10-14" data-sort-value="1958-10-14">14 octobre 1958</time> lorsque la république de Madagascar est proclamée sur le territoire de l'ancien protectorat (territoire de l'ancien <a href="/wiki/Royaume_de_Madagascar" title="Royaume de Madagascar">Royaume mérina</a> et des anciens établissements français de Diego-Suarez, de <a href="/wiki/Nosy_Be" title="Nosy Be">Nosy Be</a> et de l'île Sainte-Marie) tout en restant membre de la <a href="/wiki/Communaut%C3%A9_fran%C3%A7aise_(Cinqui%C3%A8me_R%C3%A9publique)" title="Communauté française (Cinquième République)">Communauté française</a>. En <a href="/wiki/1960" title="1960">1960</a>, la République malgache accède à l'indépendance, ce qui fait du pays l'un des premiers à devenir souverain dans cette zone de l'<a href="/wiki/Oc%C3%A9an_Indien" title="Océan Indien">océan Indien</a>.
              </p>
              <p><b>Madagascar</b> (en <a href="/wiki/Malgache" title="Malgache">malgache</a>&nbsp;: <span class="lang-mg" lang="mg"><i>Madagasikara</i></span>), en forme longue <b>république de Madagascar</b> (en <a href="/wiki/Malgache" title="Malgache">malgache</a>&nbsp;: <span class="lang-mg" lang="mg"><i>Repoblikan'i Madagasikara</i></span>), est un <a href="/wiki/%C3%89tat_insulaire" title="État insulaire">État insulaire</a> situé dans l'<a href="/wiki/Oc%C3%A9an_Indien" title="Océan Indien">océan Indien</a> et géographiquement rattaché au <a href="/wiki/Afrique" title="Afrique">continent africain</a>, dont il est séparé par le <a href="/wiki/Canal_du_Mozambique" title="Canal du Mozambique">canal du Mozambique</a>. Longue de 1&nbsp;580&nbsp;<abbr class="abbr" title="kilomètre">km</abbr> et large de 580&nbsp;<abbr class="abbr" title="kilomètre">km</abbr>, Madagascar couvre une superficie de 587&nbsp;000&nbsp;<abbr class="abbr" title="kilomètre carré">km<sup>2</sup></abbr> qui la classe <a href="/wiki/Liste_d%27%C3%AEles_par_superficie" title="Liste d'îles par superficie">quatrième île du monde</a>, après le <a href="/wiki/Groenland" title="Groenland">Groenland</a>, la <a href="/wiki/Nouvelle-Guin%C3%A9e" title="Nouvelle-Guinée">Nouvelle-Guinée</a> et <a href="/wiki/Born%C3%A9o" title="Bornéo">Bornéo</a>. Sa capitale est <a href="/wiki/Antananarivo" title="Antananarivo">Antananarivo</a><sup id="cite_ref-:3_7-0" class="reference"><a href="#cite_note-:3-7"><span class="cite_crochet">[</span>7<span class="cite_crochet">]</span></a></sup> et le pays a pour monnaie l'<a href="/wiki/Ariary" title="Ariary">ariary</a>. Ses habitants, les <a href="/wiki/Malgaches" title="Malgaches">Malgaches</a>, sont un peuple associant un mélange de populations d'origines <a href="/wiki/Austron%C3%A9siens" title="Austronésiens">austronésiennes</a> et <a href="/wiki/Afrique_de_l%27Est" title="Afrique de l'Est">est-africaines</a>, mais parlant une <a href="/wiki/Langues_malayo-polyn%C3%A9siennes" title="Langues malayo-polynésiennes">langue malayo-polynésienne</a>&nbsp;: le <a href="/wiki/Malgache" title="Malgache">malgache</a>. Le pays est entouré par d'autres îles et archipels&nbsp;: les <a href="/wiki/Mascareignes" title="Mascareignes">Mascareignes</a> (dont <a href="/wiki/La_R%C3%A9union" title="La Réunion">La Réunion</a> et <a href="/wiki/%C3%8Ele_Maurice" title="Île Maurice">Maurice</a>), les <a href="/wiki/Archipel_des_Comores" title="Archipel des Comores">Comores</a> (dont <a href="/wiki/Mayotte" title="Mayotte">Mayotte</a>) et les <a href="/wiki/Seychelles" title="Seychelles">Seychelles</a>.
              </p>
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
