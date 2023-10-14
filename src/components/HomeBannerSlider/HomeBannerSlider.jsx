import React from 'react'
import './HomeBannerSlider.scss'
import Slider from 'react-slick';
import GoodDealCard from '../GoodDealCard/GoodDealCard';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
const HomeBannerSlider = () => {
    const goodDeals = [
        {
            id: 1,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/a.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 1,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/b.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 2,
            author: {
                firstName: 'Ivan',
                lastName: 'Delion'
            },
            cover: 'img/entreprises/j.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 3,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/ent1.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 4,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/d.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 5,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/vy.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
        {
            id: 6,
            author: {
                firstName: 'Rannelle',
                lastName: 'Son'
            },
            cover: 'img/entreprises/vache.jpg',
            entrepriseName: 'Solima',
            description: 'Notre entreprise exerce dans l\'industrie et l\'exploitation du petrole'
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        variableWidth: true,
        infinite: true,
        arrows:false
    };
    return (
        <div className='home-banner-slider'>
            <div>
                <div className="home-banner-top flex align-items-center justify-content-between">
                    <div className='heading'>
                        <h1>Les bonnes Affaires</h1>
                    </div>
                    <div className="flex align-items-center gap-10">
                        <button className="floating-btn"><ChevronLeft size={21}/></button>
                        <button className="floating-btn"><ChevronRight size={21}/></button>
                    </div>
                </div>
                <Slider {...settings}>
                    {
                        goodDeals.map((d,i) => <div key={i} style={{width:230,aspectRatio:1}}>
                            <GoodDealCard data={d} />
                        </div>)
                    }
                </Slider>
            </div>
        </div>
    )
}

export default HomeBannerSlider
