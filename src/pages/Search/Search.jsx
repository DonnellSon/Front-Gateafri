import React, { useEffect, useState } from 'react'
import './Search.scss'
import Avatar from '../../components/Avatar/Avatar'
import StickySideBar from '../../components/StickySideBar/StickySideBar'
import { ArrowRight, Eye } from 'react-bootstrap-icons'
import { useQuery } from 'react-query'
import { getInvests } from '../../api/invest'
import Slider from 'react-slick'
import GoodDealCard from '../../components/GoodDealCard/GoodDealCard'
import { useSearchParams } from 'react-router-dom'
import { getCompanies } from '../../api/company'
import { Link } from 'react-router-dom'
import FundingCard from '../../components/FundingCard/FundingCard'
import { getPosts } from '../../api/post'
import PortalsListSkeleton from './PortalsListSkeleton'
import InvestListSkeleton from './InvestListSkeleton'
import { Parser } from 'html-to-react'

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const htmlToJsx=new Parser()
    const [filters, setFilters] = useState({
        companies: {
            name: null,
            description: null,
        },
        invests: {
            'company.name': null
        },
        posts: {
            'orAuthorProperties[company.name]': null,
            'orAuthorProperties[company.description]': null,
            'orAuthorProperties[user.firstName]': null,
            'orAuthorProperties[user.lastName]': null
        }
    })

    useEffect(() => {
        let k = searchParams.get('k')
        setFilters({
            companies: {
                name: k,
            },
            invests: {
                'company.name': k
            },
            posts: {
                'orAuthorProperties[company.name]': k,
                'orAuthorProperties[company.description]': k,
                'orAuthorProperties[user.firstName]': k,
                'orAuthorProperties[user.lastName]': k
            }
        })
    }, [searchParams.get('k')])

    function objToQueryString(obj, parentKey = null) {
        let queryString = [];

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                let encodedKey = parentKey ? `${parentKey}.${encodeURIComponent(key)}` : encodeURIComponent(key);

                if (typeof value === 'object' && value !== null) {
                    // If the value is an object or array, recursively convert it
                    queryString.push(objToQueryString(value, encodedKey));
                } else if (value !== undefined) {
                    // If the value is not undefined, add it to the query string
                    queryString.push(`${encodedKey}=${encodeURIComponent(value)}`);
                }
            }
        }

        return queryString.join('&');
    }

    //searchPortals
    const {
        isLoading: portalsLoading,
        error: portalsError,
        data: portals
    } = useQuery(['repoCompanies', filters.companies], () => getCompanies({ filters: objToQueryString(filters.companies) }))



    //searchInvests
    const {
        isLoading: investsLoading,
        error: getInvestError,
        data: invests
    } = useQuery(['repoInvests', filters.invests], () => getInvests({ filters: objToQueryString(filters.invests) }))


    const {
        isLoading: postsLoading,
        error: postsError,
        data: posts
    } = useQuery(['repoPosts', filters.posts], () => getPosts({ filters: decodeURI(objToQueryString(filters.posts)) }))

    useEffect(() => {
        console.log(posts, 'POSTSsearch')
    }, [posts])


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        variableWidth: true,
        arrows: false
    };


    return (
        <div id="search-page">
            <div className="left">
                <StickySideBar top={73}>
                    <div className="search-nav">
                        <h2>100 Resultats pour "{searchParams.get('k')}"</h2>
                        <ul>
                            <li>
                                <Link className='active'>Entreprises</Link>
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
                        </ul>
                    </div>
                </StickySideBar>
            </div>
            <div className="center">
                <div className="portals-results">
                    {
                        portalsLoading ?
                            <PortalsListSkeleton /> :
                            <>
                                <div className="top">
                                    <h2>Entreprises</h2>
                                </div>
                                <ul className='body'>
                                    {
                                        portals &&
                                        portals.map((p, i) => (
                                            <li key={i} className='flex'>
                                                <div className="left">
                                                    <Avatar src={p.activeLogo?.fileUrl} height={50} width={50} />
                                                </div>
                                                <div className="center">
                                                    <h1 className='portal-name'><Link to={`/portail/${p.id}`}>{p.name}</Link></h1>
                                                    <span className='portal-domains'>{p.domains.map((d) => d.title).join(',')}</span>
                                                    <small>{htmlToJsx.parse(p.description)}</small>
                                                </div>
                                                <div className="right flex gap-10">
                                                    <buttton className="btn-purple">Contacter</buttton>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <div className="footer">
                                    <button className="btn btn-transparent">Voir plus</button>
                                </div>
                            </>
                    }

                </div>
                {
                    investsLoading ?
                        <InvestListSkeleton /> :
                        invests.length > 0 &&
                        <div className="invests-results">
                            <div className="top">
                                <h2>Investissements</h2>
                            </div>

                            {
                                invests?.reverse().map((d, i) => <FundingCard key={i} data={d} />)
                            }
                            <div className="bottom">
                                <b>Voir plus d'investissements liés à "{searchParams.get('k')}"</b>
                                <div className="arrow">
                                    <ArrowRight size={20} />
                                </div>
                            </div>

                        </div>

                }

            </div>
            <div className="right">
                <StickySideBar top={73}>
                    <div className="suggest-search-invest">
                        <h2>Où investir en <br />Afrique ?</h2>
                        <span>Trouver des placements sûr pour Investir rapidement et facilement dans un continent à fort potentiel.</span>
                        <img src="/img/other/afrique2.png" alt="" />
                        <Link to="/investissements" className="btn btn-gradient">Commencer</Link>
                    </div>
                    <div className="square-ad">
                        <img src="/img/ads/ad1.png" alt="" />
                    </div>
                </StickySideBar>
            </div>
        </div>
    )
}

export default Search
