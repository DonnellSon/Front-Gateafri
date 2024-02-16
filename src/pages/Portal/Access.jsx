import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import {
  InfoCircleFill,
  QuestionCircle,
  QuestionLg,
  ThreeDots,
  Trash,
  X,
} from "react-bootstrap-icons";
import "./Access.scss";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

const ModalAccess = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className="blue" onClick={() => setOpen(true)}>
        Ajouter
      </span>

      <Modal open={open} className={"modal-access"}>
        <div className="modal-access-container">
          <div className="head flex justify-content-between">
            <h1>Accès a mon portail</h1>
            <div className="close" onClick={() => setOpen(false)}>
              <div className="close"><X size={25} /></div>
            </div>
          </div>
          <div className="corps">
            <div className="selectionner flex justify-content-between align-items-center">
              <div className="person flex align-items-center mt-10">
                <Avatar width={60} height={60} />
                <div className="apropos">
                  <h2 className="nom">Harena Andrian's</h2>
                  <p>-- Developpeur React</p>
                </div>
              </div>
              <div className="trash">
                <Trash size={20} />
              </div>
            </div>
            <div className="roles">
              <div className="questions flex align-items-center">
                <p>Attribuer un rôle d'administrateur </p>
                <span>
                  <QuestionLg />
                </span>
              </div>
              <div className="items">
                <div className="item">
                  <div className="circle active"></div>
                  <div className="text">
                    <h2>Super administrateur</h2>
                    <p>
                      Ce role permet de tout gerer sur la Page. C'est le seul
                      role qui peut modifier la Page et gerer tous les
                      administrateurs.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="circle"></div>
                  <div className="text">
                    <h2>Administrateur de contenu</h2>
                    <p>
                      Ce role publie et gere le contenu et les commentaires en
                      tant que Page et exporte les statiques.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="circle"></div>
                  <div className="text">
                    <h2>Analyste</h2>
                    <p>
                      Ce role peut uniquement consulter et exporter les
                      statistiques sur LinkedIn et aura un acces limite sur les
                      outils partenaires tiers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="foot">
            <button>Enregistrer</button>
          </div>
        </div>
      </Modal>
    </>
  );
};

const Access = () => {
  return (
    <div id="portal-access">
      <h1>Accès a mon portail</h1>
      <div className="access-container mt-15">
        <div className="flex justify-content-between">
          <h2>
            Personne avec un accès a ce Portail{" "}
            <span className="ml-10">
              <InfoCircleFill size={15} />
            </span>
          </h2>
          <ModalAccess />
        </div>
        <div className="person-item flex align-items-center justify-content-between">
          <div className="person flex align-items-center mt-10">
            <Avatar width={60} height={60} />
            <div className="apropos">
              <h2 className="nom">Harena Andrian's</h2>
              <p>
                Suppression de la Page, Autorisations, Contenu, Messages et
                appels, Activité de la communauté, Publicités, Statistiques
              </p>
            </div>
          </div>
          <div className="dot3">
            <ThreeDots size={25} />
          </div>
        </div>
      </div>
      <div className="access-tache">
        <div className="flex justify-content-between">
          <h2>
            Personne avec accès par tâche{" "}
            <span className="ml-10">
              <InfoCircleFill size={15} />
            </span>
          </h2>
          <div className="py-10"></div>
          <span className="blue">Ajouter</span>
        </div>
      </div>
      <div className="community-managers flex justify-content-between mt15">
        <div className="community-manager-content">
          <h2 className="community-managers-title">Community managers</h2>
          <p>
            Les community managers peuvent modérer les commentaires des
            discussions, suspendre ou supprimer les personnes qui enfreignet les
            Standards de la communauté et voir tous les admins de cette Page.
          </p>
        </div>
        <span className="blue">Gérer</span>
      </div>
    </div>
  );
};

export default Access;
