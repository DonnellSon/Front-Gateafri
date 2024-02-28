import React from "react";
import './HotelsInfo.scss'
import { CarFrontFill, CartDash, Check, Check2Square, ChevronBarDown, Wallet2, Wifi, ChevronDown } from "react-bootstrap-icons";

const HotelsInfo = () => {
    return (
        <>
            <div className="information">
                <div className="title">
                    <p>Informations</p>
                </div>
                <div className="input-type-gride">
                    <div className="item">
                        <label>Nom</label>
                        <input type="text" />
                    </div>
                    <div className="item">
                        <label>Prenom</label>
                        <input type="text" />
                    </div>
                    <div className="item">
                        <label>Veuillez indiquer votre adresse e-mail</label>
                        <input type="email" />
                    </div>
                    <div className="pays-region">
                        <label>pays-region</label>
                        <div className="input-region">
                            <span>Madagascar</span>
                            <ChevronDown />
                        </div>
                    </div>
                    <div className="number">
                        <label>Numero</label>

                        <div className="input-region">
                            <span>+ 261</span>
                        </div>
                    </div>
                </div>

                <div className="checkbox-info">
                    <input type="checkbox" />
                    <div className="label">
                        <p>Oui, je souhaite recevoir une confirmation numérique gratuite (recommandé)</p>
                        <p>Nous allons vous envoyer un lien de téléchargement de l'appli par SMS.</p></div>
                </div>

                <div className="reserve">
                    <ul className="reserve-checkbox">
                        <li className="item flex align-items-center gap-5">
                            <input type="checkbox" />
                            <label>Je suis le client principal</label>
                        </li>
                        <li className="item flex align-items-center gap-5">
                            <input type="checkbox" />
                            <label>Je réserve pour un autre client</label>
                        </li>
                    </ul>
                </div>


            </div>

            <div className="savoir">
                <div className="title">
                    <p>A Savoir :</p>
                </div>
                <div className="item-savoir">
                    <div className="svg">
                        <Wallet2 color="purple" />
                    </div>
                    <div className="text">
                        <p>Aucune carte de crédit nécessaire !</p>
                    </div>
                </div>
                <div className="item-savoir">
                    <div className="svg" color="purple">
                        <Check2Square color="purple" />
                    </div>
                    <div className="text">
                        <p>Aucun paiement n'est nécessaire aujourd'hui. Vous paierez pendant votre séjour.</p>
                    </div>
                </div>
            </div>

            <div className="payement-details">
                <div className="title">
                    <p>Options à ajouter à votre séjour</p>
                </div>
                <div className="item-details flex ">
                    <div className="text flex ">
                        <div className="checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="text-details">
                            <p><b>Je souhaite profiter de la navette aéroport</b></p>
                            <p>Nous ferons part de votre intérêt à l'établissement pour qu'il puisse vous donner plus de renseignements et vous indiquer le montant de cette prestation.</p>
                        </div>
                    </div>
                    <div className="svg">
                        <CarFrontFill size={30} color="purple" />
                    </div>
                </div>
                <div className="item-details flex ">
                    <div className="text flex ">
                        <div className="checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="text-details">
                            <p><b>Je souhaite louer une voiture</b></p>
                            <p>Profitez pleinement de votre séjour et consultez des options de location de voitures sur votre confirmation de réservation.</p>
                        </div>
                    </div>
                    <div className="svg">
                        <CarFrontFill size={30} color="purple" />
                    </div>
                </div>
            </div>


            <div className="appointment-details">
                <div className="title">
                    <p>Votre heure d'arrivée</p>
                </div>
                <div className="item-details flex ">
                    <div className="text flex ">
                        <div className="checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="text-details">
                            <p>Vous pouvez effectuer l'enregistrement entre 12h00 et 20h30.</p>
                        </div>
                    </div>

                </div>
                <div className="item-details flex ">
                    <div className="text flex ">
                        <div className="checkbox">
                            <input type="checkbox" />
                        </div>
                        <div className="text-details">
                            <p>Réception ouverte 24h/24 - Une aide à toute heure !</p>
                        </div>
                    </div>

                </div>
                <div className="appointment-item">
                    <p>Ajoutez votre heure d'arrivée prévue </p>
                    <div className="appointment-input flex align-items-center ">
                        <span>Veuillez selection</span>
                        <ChevronDown />

                    </div>
                </div>
            </div>

            <div className="regle-details">
                <div className="title">
                    <p>Consultez les règles de la maison</p>
                </div>
                <div className="item-details flex ">
                    <div className="svg">
                        •                                 </div>
                    <div className="text flex ">
                        <div className="text-details">
                            <p>Pas de fêtes/d'événements</p>
                        </div>
                    </div>
                </div>
                <div className="item-details flex ">
                    <div className="svg">
                        •
                    </div>
                    <div className="text flex ">
                        <div className="text-details">
                            <p>Les animaux domestiques ne sont pas acceptés</p>
                        </div>
                    </div>
                </div>
                <div className="text-footer">
                    <p><b>En allant à l'étape suivante, vous acceptez les règles de la maison.</b></p>
                </div>
            </div>

            <div className="footer-button">
                <button className="btn-button">
                    <span>Prochaine étapes > </span>
                </button>
            </div>

        </>
    )
}

export default HotelsInfo;