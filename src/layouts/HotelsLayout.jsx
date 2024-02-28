import React from 'react'
import { Outlet } from 'react-router-dom';
import { LuParkingSquare } from 'react-icons/lu';
import { FaMoneyBill } from "react-icons/fa6";
import { CarFrontFill, CartDash, Check, Check2Square, ChevronBarDown, Wallet2, Wifi, ChevronDown } from "react-bootstrap-icons";
import './HotelsLayout.scss'
const HotelsLayout = () => {
  return (
    <div id='hotelsLayout'>
      <nav></nav>

      <div className="hotelsPayement-content">
        <div className="hotelsPayement-Header">
          <div className="item">
            <div className="svg">
              <Check color="white" size={25} />
            </div>
            <div className="text">
              <span>Votre selection</span>
            </div>
          </div>
          <div className="item">
            <div className="number"><span>2</span></div>
            <div className="text"><span>Vos information</span></div>
          </div>
          <div className="item">
            <div className="number-2"><span>3</span></div>
            <div className="text"><span>Dérnier étapes</span></div>
          </div>
        </div>

        <div className="hotelsPayement-body">

          <div className="hotelsPayement-left">

            <div className="hotelsPayement-card">
              <div className="title">
                <p>Maison d'Hotes Mandrosoa</p>
              </div>
              <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quo itaque expedita quibusdam ab odit.</p>
                <p>Trés bon emplacement - 8.9</p>
                <div className="card-item">
                  <span>8.8</span>
                  <span>superbe</span>
                  <span>412 commentaires</span>
                </div>
                <div className="card-gride">
                  <div className="item-card">
                    <div className="svg"><Wifi /></div>
                    <div className="text"><span>wifi</span></div>
                  </div>
                  <div className="item-card">
                    <div className="svg"><CartDash /></div>
                    <div className="text"><span>Navette</span></div>
                  </div>
                  <div className="item-card">
                    <div className="svg"><LuParkingSquare /></div>
                    <div className="text"><span>Parking</span></div>
                  </div>

                </div>
              </div>
            </div>

            <div className="hotelsPayement-card-details">
              <div className="title"><p>Les détail de votre réservation</p></div>

              <div className="content-details">
                <div className="item-details">
                  <p>Arrivé</p>
                  <p>Jeu. 4 mars 2024</p>
                  <p>13h30 - 14h00</p>
                </div>
                <div className="item-details">
                </div>
                <div className="item-details">
                  <p>Départs</p>
                  <p>Jeu. 4 mars 2024</p>
                  <p>13h30 - 14h00</p>
                </div>
              </div>

              <div className="footer-details">
                <p>Durée total du séjours :</p>
                <p>1 nuit</p>
              </div>

            </div>

            <div className="hotelsPayement-card-price">
              <div className="title"><p>Récapitulatif du montant</p></div>
              <div className="montant">
                <div className="montant-left">
                  <span>Montant</span>
                </div>
                <div className="montant-right">
                  <p>124 $</p>
                  <p>+taxes et frais :$ 3</p>
                </div>
              </div>
              <div className="info" >
                <p><b>Information sur le tarif</b></p>
                <ul>
                  <li>
                    <div className="svg"><FaMoneyBill /></div>
                    <div className="text"><p>Taxes et faris de $ 12.35 compris</p></div>
                  </li>
                  <li>
                    <div className="svg"><FaMoneyBill /></div>
                    <div className="text"><p>Taxes et faris de $ 12.35 non compris</p></div>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div className="hotelsPayement-right">
            <Outlet/>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default HotelsLayout
