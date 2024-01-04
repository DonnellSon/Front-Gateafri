import React, { useEffect } from 'react'
import './HomeBannerSlider.scss'
import Slider from 'react-slick';
import GoodDealCard from '../GoodDealCard/GoodDealCard';
import { ChevronLeft, ChevronRight, PlusLg } from 'react-bootstrap-icons';
import { useQuery } from 'react-query';
import { getInvests } from '../../api/invest';
import GoodDealCardSkeleton from '../GoodDealCard/GoodDealCardSkeleton';
import { Link } from 'react-router-dom';
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick';
const HomeBannerSlider = () => {

    const {
        isLoading: investsLoading,
        error: getInvestError,
        data: invests
    } = useQuery(['repoInvests'], () => getInvests({ ipp: 10 }))

    console.log(invests, 'invests')


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        variableWidth: true,

        arrows: false
    };
    return (
        <div className='home-banner-slider'>
            <div>
                <div className="home-banner-top flex align-items-center justify-content-between">
                    <div className='heading'>
                        <h1>Les bonnes Affaires</h1>
                    </div>
                    <div className="flex align-items-center gap-10">
                        <button className="floating-btn"><ChevronLeft size={21} /></button>
                        <button className="floating-btn"><ChevronRight size={21} /></button>
                    </div>
                </div>
                {
                    investsLoading ?
                        <Slider {...settings}>
                            {
                                [...new Array(7)].map((d, i) => <div key={i} style={{ width: 230, aspectRatio: 1 }}>
                                    <GoodDealCardSkeleton />
                                </div>)
                            }
                        </Slider>
                        :
                        <Slider {...settings}>
                            {
                                [
                                        <RequireAuthOnClick>
                                            <Link to="/investissements/nouveau" className='add-invest' style={{ width: 230, aspectRatio: 1,display:'block' }}>
                                            <div>
                                                <div>
                                                    <div className="ico"><PlusLg size={22} /></div>
                                                    <span>Créer un Investissement</span>
                                                </div>
                                            </div>
                                        </Link>
                                        </RequireAuthOnClick>
                                    , ...invests?.reverse().map((d, i) => <div key={i} style={{ width: 230, aspectRatio: 1 }}>
                                        <GoodDealCard data={d} />
                                    </div>)
                                ]
                            }
                        </Slider>
                }
            </div>
        </div>
    )
}

export default HomeBannerSlider
