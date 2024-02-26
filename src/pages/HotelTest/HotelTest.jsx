import React from 'react'
import { ChevronBarDown, ChevronBarUp, MenuApp } from 'react-bootstrap-icons'
import { GiHamburger, GiTopHat } from 'react-icons/gi'
import './HotelTest.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState, useRef } from 'react';
import { CloseButton } from 'react-bootstrap';
import { useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import DropDown from './../../components/DropDown/DropDown';
const HotelTest = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const [opentest, setOpenTest] = useState(false)
    const [openAccordeon, setAccordeon] = useState(false)
    const [isSelect, setIsSelect] = useState('choisir votre choix')
    const refTest = useRef()
    const [dropDown, setDropDown] = useState(false)
    const Data = ["react", "vue"];
    const testRef = () => {
        console.log(refTest.current)
    }
    const myRef = useRef(null);

    const handleClick = () => {
        console.log(myRef.current);
    };
    const width = window.innerWidth;
    const height = window.innerHeight;

    console.log(`Largeur de la fenêtre : ${width}, Hauteur de la fenêtre : ${height}`);

    useEffect(() => {
        const handleResize = () => {
            const largeur = window.innerWidth;
            const hauteur = window.innerHeight;
            console.log('Nouvelle taille de l\'écran - Largeur :', largeur, ', Hauteur :', hauteur);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <main className='relative'>
            <nav className='testa'>
                <ul className='flex relative'>
                    <li>Acceui</li>
                    <li>Profil</li>
                    <li>Contact</li>
                    <li>Emplacement</li>
                    <li className={`menu ${openMenu ? 'test' : ''}`} onClick={() => setOpenMenu(true)} >
                        <GiHamburgerMenu />
                    </li>
                </ul>
            </nav>




            <div className={`side-nav absolute${openMenu ? ' open' : ''}`}>
                <ul>
                    <li onClick={() => setOpenMenu(false)}>Close</li>
                    <li>Acceui</li>
                    <li>Profil</li>
                    <li>Contact</li>
                    <li>Emplacement</li>
                </ul>
            </div>
            <p onClick={testRef}>a</p>
            <div className='content-test' ref={refTest}>

                <p>Ceci est une test</p>
                <p onClick={() => setOpenTest(true)}>Plus</p>

                <div className={`contenu-item ${opentest ? ' azert' : ''}`}>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatibus accusantium adipisci provident nihil exercitationem tenetur illum quas fugit quibusdam.
                    </p>
                </div>
            </div>

            <div>
                <div ref={myRef}>
                    <p>Ceci est mon composant</p>
                </div>
                <button onClick={handleClick}>Afficher les propriétés</button>
            </div>

            <div className='accordeon '>
                <div className="accordeon-title flex algin-items-center gap-15">
                    <p>Accordion 1</p>
                    <div onClick={() => { setAccordeon(true) }}>
                        <GiTopHat />
                    </div>

                </div>
                <div className={`accordeon-content${openAccordeon ? ' open' : ''}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates neque perferendis corporis facilis id voluptate corrupti ipsum veritatis ullam velit.
                    <p onClick={() => setAccordeon(false)}>--</p>
                </div>

            </div>


            <div class="img">
                <div class="hover-container">
                    <img src='/img/other/chambre_0.jpg' alt='' />
                </div>
            </div>

            <div className="progress-bar"></div>
            <div className='dropdown'>
                <div className="dropdown-btn" onClick={() => setDropDown(!dropDown)}>
                    <div className="dropdown-btn-icone">{isSelect}</div>
                    <div className="dropdown-btn-icone"> {dropDown ?<ChevronBarUp /> : <ChevronBarDown/>}
                    </div>
                </div>
                {dropDown && (
                   <Dropdown Data={Data} isSelect={isSelect} setIsSelect={setIsSelect} setDropDown={setDropDown} dropDown={dropDown}/>
                    )}
            </div>


        </main>
    )
}

export default HotelTest


const Dropdown = ({Data,setIsSelect,setDropDown,dropDown}) => {
    return (
        <>
            <div className='dropdown-content' onClick={(e) => {
                setIsSelect(e.target.outerText)
                setDropDown(!dropDown)
            }} on>
                {Data.map((e, i) => (<div className="dropdown-item" key={i} >{e}</div>))}
            </div>
        </>
    )
}