import React, { useEffect, useState } from "react";
import "./Search.scss";
import Avatar from "../../components/Avatar/Avatar";
import StickySideBar from "../../components/StickySideBar/StickySideBar";
import {
  ArrowRight,
  Award,
  CupHot,
  GeoAlt,
  Water,
  Wifi,
} from "react-bootstrap-icons";
import { useQuery } from "react-query";
import { getInvests } from "../../api/invest";
import Slider from "react-slick";
import GoodDealCard from "../../components/GoodDealCard/GoodDealCard";
import { useSearchParams } from "react-router-dom";
import { getCompanies } from "../../api/company";
import { Link } from "react-router-dom";
import FundingCard from "../../components/FundingCard/FundingCard";
import { getPosts } from "../../api/post";
import PortalsListSkeleton from "./PortalsListSkeleton";
import InvestListSkeleton from "./InvestListSkeleton";
import { Parser } from "html-to-react";
import PostsListSkeleton from "./PostsListSkeleton";
import PostCard from "../../components/PostCard/PostCard";
import ArtistsListSkeleton from "./ArtistsListSkeleton";
import MusiquesListSkeleton from "./MusiquesListSkeleton";
import VideoCard from "../../components/VideoCard/VideoCard";
import Rating from "react-rating";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const htmlToJsx = new Parser();
  const [filters, setFilters] = useState({
    companies: {
      name: null,
      description: null,
    },
    invests: {
      "company.name": null,
    },
    posts: {
      "orAuthorProperties[company.name]": null,
      "orAuthorProperties[company.description]": null,
      "orAuthorProperties[user.firstName]": null,
      "orAuthorProperties[user.lastName]": null,
    },
  });

  useEffect(() => {
    let k = searchParams.get("k");
    setFilters({
      companies: {
        name: k,
      },
      invests: {
        "company.name": k,
      },
      posts: {
        "orAuthorProperties[company.name]": k,
        "orAuthorProperties[company.description]": k,
        "orAuthorProperties[user.firstName]": k,
        "orAuthorProperties[user.lastName]": k,
      },
    });
  }, [searchParams.get("k")]);

  function objToQueryString(obj, parentKey = null) {
    let queryString = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        let encodedKey = parentKey
          ? `${parentKey}.${encodeURIComponent(key)}`
          : encodeURIComponent(key);

        if (typeof value === "object" && value !== null) {
          // If the value is an object or array, recursively convert it
          queryString.push(objToQueryString(value, encodedKey));
        } else if (value !== undefined) {
          // If the value is not undefined, add it to the query string
          queryString.push(`${encodedKey}=${encodeURIComponent(value)}`);
        }
      }
    }

    return queryString.join("&");
  }

  //searchPortals
  const {
    isLoading: portalsLoading,
    error: portalsError,
    data: portals,
  } = useQuery(["repoCompanies", filters.companies], () =>
    getCompanies({ filters: objToQueryString(filters.companies) })
  );

  //searchInvests
  const {
    isLoading: investsLoading,
    error: getInvestError,
    data: invests,
  } = useQuery(["repoInvests", filters.invests], () =>
    getInvests({ filters: objToQueryString(filters.invests) })
  );

  const {
    isLoading: postsLoading,
    error: postsError,
    data: posts,
  } = useQuery(["repoPosts", filters.posts], () =>
    getPosts({ filters: decodeURI(objToQueryString(filters.posts)) })
  );

  useEffect(() => {
    console.log(posts, "POSTSsearch");
  }, [posts]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    variableWidth: true,
    arrows: false,
  };
  const postsData = [
    {
      id: 1,
      author: {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        activeProfilePicture: { fileUrl: "/img/other/avatar.png" },
        domains: [{ title: "Développement" }],
        country: { name: "France", flag: { fileUrl: "url_du_drapeau" } },
      },
      content:
        "Contenu du premier post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus accusantium id suscipit? Nesciunt temporibus ipsa, aliquam itaque neque, sint nostrum, reprehenderit ex nihil libero eligendi quisquam suscipit corrupti. Mollitia, natus      Aperiam maiores exercitationem consequatur illo explicabo omnis quod vero culpa debitis impedit praesentium cum nihil, facere non nulla numquam, quisquam sequi. At exercitationem aliquid, id illum corporis repellat necessitatibus animi Voluptate soluta atque architecto laudantium totam, accusantium quos sint. Fuga hic, molestias dolor dolorum itaque id et alias! Laboriosam repellendus dolorum maiores, adipisci eius repellat laudantium porro nesciunt facilis totam.",
      thumbnails: ["url_image1", "url_image2"],
      createdAt: "2023-04-01T10:00:00Z",
      evaluationCount: 5,
      evaluationSum: 25,
    },
    {
      id: 2,
      author: {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        activeProfilePicture: { fileUrl: "/img/other/avatar.png" },
        domains: [{ title: "Développement" }],
        country: { name: "France", flag: { fileUrl: "url_du_drapeau" } },
      },
      content:
        "Contenu du premier post Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus accusantium id suscipit? Nesciunt temporibus ipsa, aliquam itaque neque, sint nostrum, reprehenderit ex nihil libero eligendi quisquam suscipit corrupti. Mollitia, natus      Aperiam maiores exercitationem consequatur illo explicabo omnis quod vero culpa debitis impedit praesentium cum nihil, facere non nulla numquam, quisquam sequi. At exercitationem aliquid, id illum corporis repellat necessitatibus animi Voluptate soluta atque architecto laudantium totam, accusantium quos sint. Fuga hic, molestias dolor dolorum itaque id et alias! Laboriosam repellendus dolorum maiores, adipisci eius repellat laudantium porro nesciunt facilis totam.",
      thumbnails: ["url_image1", "url_image2"],
      createdAt: "2023-04-01T10:00:00Z",
      evaluationCount: 5,
      evaluationSum: 25,
    },
  ];
  const videosData = [
    {
      img: "/img/video/smaven.PNG",
      title: "SMAVEN - Mahery aligny",
      duration: "03:40",
      user: {
        name: "Hira Gasy",
      },
    },
    {
      img: "/img/video/ckicky.PNG",
      title: "CKICKY - Tsy ahefa",
      duration: "04:00",
      user: {
        name: "Gasitera",
      },
    },
    {
      img: "/img/video/rimka.PNG",
      title: "RIM KA - Lasako",
      duration: "04:20",
      user: {
        name: "DagoZik",
      },
    },
    {
      img: "/img/video/lion.PNG",
      title: "LION HILL - Atovo tonga agny",
      duration: "03:10",
      user: {
        name: "DagoZik",
      },
    },
    {
      img: "/img/video/tsota.PNG",
      title: "TSOTA - Adolatsento",
      duration: "04:20",
      user: {
        name: "DagoZik",
      },
    },
  ];
  const attractionsData = [
    {
      URLImage: "/img/other/rovamanjakamiadana.jpg",
      name: "Rova Manjakamiadana blabalblablalalablbl",
      location: "Antananarivo",
      nbVote: 58,
      type: "Monument",
    },
    {
      URLImage: "/img/other/baobab.webp",
      name: "Allée des Baobab",
      location: "Morondava",
      nbVote: 512,
      type: "Parc",
    },
    {
      URLImage: "/img/other/festival.jpg",
      name: "Tomorrowland",
      location: "Kenya",
      nbVote: 1903,
      type: "Festival",
    },
    {
      URLImage: "/img/other/galerie.jpg",
      name: "Is'Art Galerie",
      location: "Botswana",
      nbVote: 23,
      type: "Galerie d'art",
    },
    {
      URLImage: "/img/other/kayak.jpg",
      name: "Kayak Africa",
      location: "Island",
      nbVote: 695,
      type: "Plei air",
    },
    {
      URLImage: "/img/other/market_analakely.jpg",
      name: "Analakely Market",
      location: "Antanarivo",
      nbVote: 489,
      type: "Marché",
    },
    {
      URLImage: "/img/other/sport.jpg",
      name: "Foot Salle",
      location: "Antananarivo",
      nbVote: 489,
      type: "Sport",
    },
  ];
  return (
    <div id="search-page">
      <div className="left">
        <StickySideBar top={73}>
          <div className="search-nav">
            <h2>100 Resultats pour "{searchParams.get("k")}"</h2>
            <ul>
              <li>
                <Link className="active">Entreprises</Link>
              </li>
              <li>
                <Link>Investissements</Link>
              </li>
              <li>
                <Link>Personnes</Link>
              </li>
              <li>
                <Link>Actualités</Link>
              </li>
              <li>
                <Link>Artistes</Link>
              </li>
              <li>
                <Link>Musiques</Link>
              </li>
              <li>
                <Link>Hôtels</Link>
              </li>
              <li>
                <Link>Attractions</Link>
              </li>
            </ul>
          </div>
        </StickySideBar>
      </div>
      <div className="center">
        <div className="portals-results">
          {portalsLoading ? (
            <PortalsListSkeleton />
          ) : (
            <>
              <div className="top">
                <h2>Entreprises</h2>
              </div>
              <ul className="body">
                {portals &&
                  portals.map((p, i) => (
                    <li key={i} className="flex">
                      <div className="left">
                        <Avatar
                          src={p.activeLogo?.fileUrl}
                          height={50}
                          width={50}
                        />
                      </div>
                      <div className="center">
                        <h1 className="portal-name">
                          <Link to={`/portail/${p.id}`}>{p.name}</Link>
                        </h1>
                        <span className="portal-domains">
                          {p.domains.map((d) => d.title).join(",")}
                        </span>
                        <small>{htmlToJsx.parse(p.description)}</small>
                      </div>
                      <div className="right flex gap-10">
                        <buttton className="btn-purple">Contacter</buttton>
                      </div>
                    </li>
                  ))}
              </ul>
              <div className="footer">
                <button className="btn btn-transparent">Voir plus</button>
              </div>
            </>
          )}
        </div>

        <div className="persons-results ">
          <div className="top">
            <h2>Persons</h2>
          </div>
          <div className="persons-results-list flex flex-column">
            <div className="person flex justify-content-between align-items-center ">
              <div className="flex align-items-center gap-10">
                <Avatar width={50} height={50} />
                <div className="info flex flex-column gap-5">
                  <h3>John Doe</h3>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="right flex gap-10">
                <buttton className="btn-purple">Contacter</buttton>
                <buttton className="btn- recruter">Recruter</buttton>
              </div>
            </div>
            <div className="person flex justify-content-between align-items-center ">
              <div className="flex align-items-center gap-10">
                <Avatar width={50} height={50} />
                <div className="info flex flex-column gap-5">
                  <h3>John Doe</h3>
                  <p>Lorem ipsum</p>
                </div>
              </div>
              <div className="right flex gap-10">
                <buttton className="btn-purple">Contacter</buttton>
                <buttton className="btn- recruter">Recruter</buttton>
              </div>
            </div>
          </div>
        </div>

        {investsLoading ? (
          <InvestListSkeleton />
        ) : (
          invests.length > 0 && (
            <div className="invests-results">
              <div className="top">
                <h2>Investissements</h2>
              </div>

              {invests?.reverse().map((d, i) => (
                <FundingCard key={i} data={d} />
              ))}
              <div className="bottom">
                <b>
                  Voir plus d'investissements liés à "{searchParams.get("k")}"
                </b>
                <div className="arrow">
                  <ArrowRight size={20} />
                </div>
              </div>
            </div>
          )
        )}
        {postsLoading ? (
          <PostsListSkeleton />
        ) : (
          //   posts?.length > 0 && (
          <div className="actualites-results">
            <>
              <div className="top">
                <h2>Actualités</h2>
              </div>
              <div className="posts-results-list flex flex-column gap-10">
                {postsData.map((p, i) => (
                  <PostCard key={i} data={p} onDelete={() => {}} />
                ))}
              </div>
              <div className="footer">
                <button className="btn btn-transparent">Voir plus</button>
              </div>
            </>
          </div>
          //   )
        )}

        <div className="artists-results">
          <div className="top">
            <h2>Artistes</h2>
          </div>
          <div className="artists-results-slider">
            <Slider {...settings}>
              <div className="artists-results-slide relative">
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src="/img/artists/5.png" />
                  <img src="/img/flags/Flag_of_Madagascar.svg" />
                </div>
                <h1>Rema</h1>
              </div>
              <div className="artists-results-slide relative">
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src="/img/artists/3.png" />
                  <img src="/img/flags/Flag_of_Madagascar.svg" />
                </div>
                <h1>Smaven</h1>
              </div>
              <div className="artists-results-slide relative">
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src="/img/artists/2.png" />
                  <img src="/img/flags/Flag_of_Madagascar.svg" />
                </div>
                <h1>Rim Ka</h1>
              </div>
              <div className="artists-results-slide relative">
                <div className="flag-avatar">
                  <Avatar width={100} height={100} src="/img/artists/1.png" />
                  <img src="/img/flags/Flag_of_Madagascar.svg" />
                </div>
                <h1>Rema-En live</h1>
              </div>
            </Slider>
          </div>
          <div className="footer">
            <button className="btn btn-transparent">Voir plus</button>
          </div>
        </div>

        <div className="musiques-results">
          <div className="top">
            <h2>Musiques</h2>
          </div>
          <div className="musiques-results-list flex flex-column gap-15">
            {videosData.map((videoData, i) => (
              <div key={i} className="musique">
                <div className="video flex gap-10">
                  <div className="poster relative">
                    <img
                      src={videoData?.img}
                      alt=""
                      style={{ width: "100%", height: "100%", borderRadius: 5 }}
                    />
                    <div className="length">{videoData?.duration}</div>
                  </div>
                  <div className="capt">
                    <h1 className="text-ellipsis">
                      <Link to="/video/play">{videoData.title}</Link>
                    </h1>
                    <small>
                      <span>200k vues</span> | <span>il y a 3 mois</span>
                    </small>
                    <Link
                      to="/profil"
                      className="artist-info flex align-items-center gap-10 "
                    >
                      <Avatar />
                      <div className="artist-name">{videoData?.user?.name}</div>
                    </Link>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Aliquam, libero aperiam deleniti neque, minus sint
                      temporibus, ad soluta magnam inventore dolore ex rerum cum
                      numquam? Inventore consectetur ullam eius culpa!
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="footer">
            <button className="btn btn-transparent">Voir plus</button>
          </div>
        </div>

        <div className="hotels-results">
          <div className="top">
            <h2>Hôtels</h2>
          </div>
          <div className="hotels-results-list flex flex-column gap-10">
            <div className="hotel flex">
              <div className="hotel-image">
                <Slider
                  {...{
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                    autoplaySpeed: 5000,
                  }}
                >
                  <img src="/img/other/chambre_2.jpg" alt="" />
                  <img src="/img/other/chambre_luxe_2.jpg" alt="" />
                  <img src="/img/other/restaurant.jpg" alt="" />
                </Slider>
              </div>
              <div className="hotel-detail flex flex-column justify-content-between">
                <div className="top">
                  <span>Hôte professionnel</span>
                  <h3>Le Grand Mellis Hôtel & Spa</h3>
                  <span className="flex align-items-center gap-5">
                    <GeoAlt /> Antananarivo
                  </span>
                  <div className="flex">
                    <div className="flex gap-15">
                      <small className="flex align-items-center gap-5 py-5">
                        <CupHot />
                        Petit déjeuner
                      </small>
                      <small className="flex align-items-center gap-5">
                        <Wifi />
                        Wi-Fi inclus
                      </small>
                      <small className="flex align-items-center gap-5">
                        <Water />
                        Piscine
                      </small>
                    </div>
                  </div>
                </div>
                <div className="bottom flex justify-content-between align-items-end">
                  <div className="left ">
                    <div className="cumule flex align-items-center gap-5">
                      <Award size={18} className="icon" />
                      <p>Cumulez des vignettes</p>
                    </div>
                    <div className="avis flex align-items-center gap-5">
                      <div className="note">5.6</div>7 avis
                    </div>
                  </div>
                  <div className="right flex align-items-end flex-column">
                    {/* <div className="reduction"> */}
                    <div className="reduction">-28 %</div>
                    <div className="prix flex gap-5 py-5">
                      <p>129 €</p>
                      <h4>93 €</h4>
                    </div>
                    {/* </div> */}
                    <small>pour 2 nuits</small>
                    {/* <p>47 € par nuit</p> */}
                    <small>taxes et frais compris</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel flex">
              <div className="hotel-image">
                <Slider
                  {...{
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                    autoplaySpeed: 5000,
                  }}
                >
                  <img src="/img/other/chambre_1.jpg" alt="" />
                  <img src="/img/other/vacances.jpg" alt="" />
                  <img src="/img/other/chambre_luxe.jpg" alt="" />
                </Slider>
              </div>
              <div className="hotel-detail flex flex-column justify-content-between">
                <div className="top">
                  <span>Hôte professionnel</span>
                  <h3>Le Grand Mellis Hôtel & Spa</h3>
                  <span className="flex align-items-center gap-5">
                    <GeoAlt />
                    Antananarivo
                  </span>
                  <div className="flex">
                    <div className="flex gap-15">
                      <small className="flex align-items-center gap-5 py-5">
                        <CupHot />
                        Petit déjeuner
                      </small>
                      <small className="flex align-items-center gap-5">
                        <Wifi />
                        Wi-Fi inclus
                      </small>
                      <small className="flex align-items-center gap-5">
                        <Water />
                        Piscine
                      </small>
                    </div>
                  </div>
                </div>
                <div className="bottom flex justify-content-between align-items-end">
                  <div className="left ">
                    <div className="cumule flex align-items-center gap-5">
                      <Award size={18} className="icon" />
                      <p>Cumulez des vignettes</p>
                    </div>
                    <div className="avis flex align-items-center gap-5">
                      <div className="note">5.6</div>7 avis
                    </div>
                  </div>
                  <div className="right flex align-items-end flex-column">
                    <div className="reduction">-28 %</div>
                    <div className="prix flex gap-5 py-5">
                      <p>129 €</p>
                      <h4>93 €</h4>
                    </div>
                    <small>pour 2 nuits</small>
                    <small>taxes et frais compris</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <button className="btn btn-transparent">Voir plus</button>
          </div>
        </div>
        <div className="attractions-results">
          <div className="top">
            <h2>Attractions</h2>
          </div>
          <div className="attractions-results-list mt-10">
            <Slider {...settings}>
              {attractionsData.map((a, i) => (
                <div className="attraction" key={i}>
                  <div className="attraction-image">
                    <img src={a.URLImage} alt={a.name} />
                  </div>
                  <div className="attraction-text">
                    <h3>{a.name}</h3>
                    <span className="location flex align-items-center gap-5">
                      <GeoAlt /> {a.location}
                    </span>
                    <p>{a.type}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="footer">
            <button className="btn btn-transparent">Voir plus</button>
          </div>
        </div>
      </div>

      <div className="right">
        <StickySideBar top={73}>
          <div className="suggest-search-invest">
            <h2>
              Où investir en <br />
              Afrique ?
            </h2>
            <span>
              Trouver des placements sûr pour Investir rapidement et facilement
              dans un continent à fort potentiel.
            </span>
            <img src="/img/other/afrique2.png" alt="" />
            <Link to="/investissements" className="btn btn-gradient">
              Commencer
            </Link>
          </div>
          <div className="square-ad">
            <img src="/img/ads/ad1.png" alt="" />
          </div>
        </StickySideBar>
      </div>
    </div>
  );
};

export default Search;
