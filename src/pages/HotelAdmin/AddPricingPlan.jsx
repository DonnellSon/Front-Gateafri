import { Link } from "react-router-dom";
import "./AddPricingPlan.scss";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalPricingPlan from "./ModalPricingPlan";
import { Alarm, Ban, BuildingGear, Calendar3, Calendar3Week, Shuffle } from "react-bootstrap-icons";

const AddPricingPlan = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="add-pricing-plan">
      <div className="head flex justify-content-between">
        <h2 className="flex align-items-center">
          Ajoutez un nouveau plan tarifaire
        </h2>
        <Link to="/hotels/:hotelID/hotel-admin/plans-tarifaires">
          <button className="btn-orange">Retour</button>
        </Link>
      </div>
      <section>
        <h3>Boostez vos réservations et réduisez vos annulations</h3>
        <p>
          Ces plans tarifaires vous donneront de bonnes bases pour votre
          stratégie de prix.
        </p>
        <div className="list mt-15">
          <div className="pricing-plan-card elevated-card p-15">
            <div className="icon">
              <Shuffle size={20} />
            </div>
            <h3>Extra flexible</h3>
            <p>
              Permettez l'annulation gratuite pour booster vos réservations et
              vos revenus.
            </p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
          <div className="pricing-plan-card elevated-card p-15">
          <div className="icon">
              <Ban size={20} />
            </div>
            <h3>Non remboursable</h3>
            <p>
              Réduisez vos annulations en attirant les clients sûrs de leurs
              dates de séjour.
            </p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Attirez différents types de clients</h3>
        <p>
          Ces plans tarifaires pourront vous aider à développer les bases que
          vous avez définies et à rendre votre hébergement plus attractif auprès
          des meilleurs groupes d'utilisateurs.
        </p>
        <div className="list mt-15">
          <div className="pricing-plan-card elevated-card p-15">
          <div className="icon">
              <Calendar3Week size={20} />
            </div>
            <h3>À la semaine</h3>
            <p>
              Démarquez-vous auprès des clients qui recherchent des séjours de
              plus de 1 semaine.
            </p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
          <div className="pricing-plan-card elevated-card p-15">
          <div className="icon">
              <Calendar3 size={20} />
            </div>
            <h3>Au mois</h3>
            <p>
              Gagnez des revenus plus stables grâce aux clients qui effectuent
              des séjours d'au moins 28 nuits.
            </p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
          <div className="pricing-plan-card elevated-card p-15">
          <div className="icon">
              <Alarm size={20} />
            </div>
            <h3>Réservation anticipée</h3>
            <p>
              Recevez plus de réservations anticipées en attirant les voyageurs
              qui prévoient leurs séjours à l'avance.
            </p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h3>Personnalisez un plan tarifaire</h3>
        <p>
          Configurez un plan tarifaire adapté à votre hébergement et à vos
          objectifs commerciaux.
        </p>
        <div className="list mt-15">
          <div className="pricing-plan-card elevated-card p-15">
          <div className="icon">
              <BuildingGear size={20} />
            </div>
            <h3>Option personnalisable</h3>
            <p>Personnalisez un plan tarifaire répondant à vos besoins.</p>
            <div>
              <div className="btn-" onClick={() => setOpenModal(true)}>
                Ajouter ce plan tarifaire
              </div>
              <Modal open={openModal}>
                <ModalPricingPlan
                  handleCloseModal={setOpenModal}
                  action="create"
                />
              </Modal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddPricingPlan;
