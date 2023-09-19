import React from 'react'
import './WelcomeBanner.css'
import { XLg, Plus } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
const WelcomeBanner = () => {
    return (
        <div className='welcome-banner relative'>
            <div className="text relative">
                <h6>Bonjour Donnell</h6>
                <h4>Bienvenue sur GATE AFRI,le reseau des acteurs economiques en Afrique</h4>
                <p>Veuillez créer une page professionnelle pour promouvoir vos activités.</p>
                <div className="flex gap-10">
                    <button><Plus size={26} /> Créer un portail</button>
                    <Link to="/inscription" className="register-btn">S'inscrire</Link>
                </div>
            </div>
            <div className="close absolute">
                <XLg size={20} />
            </div>
        </div>
    )
}

export default WelcomeBanner
