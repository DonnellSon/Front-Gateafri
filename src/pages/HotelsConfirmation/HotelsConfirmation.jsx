import React from 'react'
import './HotelsConfirmation.scss'
import { CartDash } from 'react-bootstrap-icons'

const HotelsConfirmation = () => {
    return (
        <div className='HotelsConfirmation'>
            <div className='info'>
                <div className="content">
                    <p>Aucune information de paiement requise</p>
                    <p>Votre paiement sera traité par l'établissement Corto Novo Maison d'hôtes-Camping. Vous n'avez donc pas besoin de saisir vos informations de paiement pour cette réservation.</p>
                </div>
                <div className="img">
                    <img src='/img/other/money.png' />
                </div>
            </div>

            <div className="checkbox">
                <div className="checkbox-item flex gap-5">
                    <input type='checkbox' />
                    <p>J'accepte de recevoir des e-mails marketing de la part de Booking.com contenant notamment des promotions, des récompenses, des expériences de voyage, et des informations sur les produits et services de Booking.com</p>
                </div>
                <div className="checkbox-item flex gap-5">
                    <input type='checkbox' />
                    <p>J'accepte de recevoir des e-mails marketing de la part de Booking.com contenant notamment des promotions, des récompenses, des expériences de voyage, et des informations sur les produits et services de Booking.com</p>
                </div>
                <div className="footer-text">
                <p>Vous pouvez vous désabonner à tout moment. Veuillez consulter notre <a>charte de confidentialité</a></p>
                
                <p>Votre réservation s'effectue directement auprès de l'établissement Corto Novo Maison d'hôtes-Camping. En réservant, vous acceptez les conditions de réservation, <a>les conditions générales d'utilisation</a> et <a>la charte de confidentialité.</a></p>
                </div>
                

            </div>

            <div className="footer-button gap-5">
                <div className="btn-button">
                    <span>Vérifier les informations
                    </span>
                </div>
                <div className="btn-button">
                    <span>Finaliser la réservation</span>
                </div>

            </div>

        </div>
    )
}

export default HotelsConfirmation