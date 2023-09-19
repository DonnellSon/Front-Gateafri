import React from 'react'
import './PageAbout.css'
import { ArrowRight } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import Slider from 'react-slick'

const PageAbout = () => {
    return (
        <div className='page-about'>
            <div className="ent-details elevated-card p-15 mt-15 pt-0">
                <div className="heading2">
                    <h3>Details de l'entreprise</h3>
                </div>
                <h5 className='mb-10'>Description</h5>
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores hic alias ea labore assumenda non et, tenetur debitis soluta? Delectus sequi dolorum porro excepturi quibusdam ipsum voluptatibus, perspiciatis cumque!</p>
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores hic alias ea labore assumenda non et, tenetur debitis soluta? Delectus sequi dolorum porro excepturi quibusdam ipsum voluptatibus, perspiciatis cumque!</p>
                <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa dolores hic alias ea labore assumenda non et, tenetur debitis soluta? Delectus sequi dolorum porro excepturi quibusdam ipsum voluptatibus, perspiciatis cumque!</p>
                <hr />
                <h5 className='mb-10'>Contacts</h5>
                <div className='mb-10'>
                    <h6 className='mb-5'>Adress Email</h6>
                    <span>contact@gatecompany.com</span>
                </div>
                <h6 className='mb-5'>Telephone</h6>
                <span>034 63 431 14 | 032 45 324 14</span>
                <hr />
                <h5 className='mb-10'>Autres</h5>
                <div className="mb-10">
                    <h6 className='mb-5'>Domaines</h6>
                    <span>Education,Numerique,Entreprenariat,Politique...</span>
                </div>
                <div className="mb-10">
                    <h6 className='mb-5'>Localisations</h6>
                    <span>Madagascar,Dubai</span>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.5336493894574!2d47.53252567435297!3d-18.907759007290572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21f07d96ef044b85%3A0x1cb9f973401ca2a4!2sTsenagasy!5e0!3m2!1sfr!2smg!4v1686743681929!5m2!1sfr!2smg" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <hr />
                <h5 className='mb-10'>Juridique</h5>
                <h6 className='mb-5'>NIF/STAT</h6>
                <span>9263562361/SARL</span>
                <button className="btn-outline-purple mt-15">
                    Visiter le site Web <ArrowRight />
                </button>
            </div>
            <div className="ceo elevated-card mt-15 p-15 pt-0">
                <div className="heading2">
                    <h3>Dirigeants</h3>
                </div>
                <Slider {...{
          dots: false,
          arrows: false,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        }}>
          <div className="dirigeant flex flex-column align-items-center gap-5">
            <Avatar height={50} width={50}/>
            <h5 className='text-ellipsis'>Rojo Andrianasolo</h5>
            <span>CEO</span>
          </div>
          <div className="dirigeant flex flex-column align-items-center gap-5">
            <Avatar height={50} width={50}/>
            <h5 className='text-ellipsis'>Claudio Andrianasolo</h5>
            <span>DG</span>
          </div>
        </Slider>
            </div>
            <div className="projects elevated-card mt-15">
            <div className="heading2 border-bottom-light-grey px-15">
                    <h3>Projets</h3>
                </div>
                <nav>
                    <ul className='after-nav flex align-items-center'>
                        <li className='active'>Numérique</li>
                        <li>Construction</li>
                        <li>Education</li>
                    </ul>
                </nav>
                <div className="body">

                </div>
            </div>
            <div className="events elevated-card mt-15">
                <div className="heading2 border-bottom-light-grey px-15">
                    <h3>Evenements</h3>
                </div>
                <nav>
                    <ul className='after-nav flex align-items-center'>
                        <li className='active'>Animations</li>
                        <li>Conferences</li>
                        <li>Sallons</li>
                    </ul>
                </nav>
                <div className="body">

                </div>
            </div>
            <div className="products-and-services elevated-card mt-15">
                <div className="heading2 border-bottom-light-grey px-15">
                    <h3>Produits et services</h3>
                </div>
                <nav>
                    <ul className='after-nav flex align-items-center'>
                        <li className='active'>Produits</li>
                        <li>Services</li>
                    </ul>
                </nav>
                <div className="body">

                </div>
            </div>
        </div>
    )
}

export default PageAbout
