import { ChevronDown, ChevronUp, CircleFill, Dot } from "react-bootstrap-icons";
import "./PricingPlans.scss";
import { useState } from "react";

const PricingPlans = () => {
  const [openPlans, setOpenPlans] = useState({});

  const togglePlan = (planId) => {
    setOpenPlans((prevState) => ({
      ...prevState,
      [planId]: !prevState[planId],
    }));
  };

  const pricingPlans = [
    {
      id: 1,
      name: "Standard Rate",
      conditions: "Flexible - 18h00, le jour d'arrivée",
      tarif: "Géré par votre Calendrier",
      tauxAnnulation: "Données insuffisantes",
      revenusNets: "1 050,00 €",
    },
    {
      id: 2,
      name: "Non-refundable Rate",
      conditions: "Flexible - 18h00, le jour d'arrivée",
      tarif: "Géré par votre Calendrier",
      tauxAnnulation: "Données insuffisantes",
      revenusNets: "1 050,00 €",
    },
    {
      id: 3,
      name: "Weekly Rate",
      conditions: "Flexible - 18h00, le jour d'arrivée",
      tarif: "Géré par votre Calendrier",
      tauxAnnulation: "Données insuffisantes",
      revenusNets: "1 050,00 €",
    },
  ];
  return (
    <div className="pricing-plans">
      <h2 className="py-15">Plans tarifaires</h2>
      <p>
        Élaborez et ajustez divers plans tarifaires pour répondre aux besoins de
        vos clients.
      </p>
      <div className="head elevated-card flex justify-content-between align-items-center mt-15 p-15">
        <button className="btn-purple">Ajouter un plan tarifaire</button>
        <select name="period" id="period">
          <option value="30 derniers jours">30 derniers jours</option>
          <option value="3 derniers mois">3 derniers mois</option>
          <option value="6 derniers mois">6 derniers mois</option>
          <option value="12 derniers mois">12 derniers mois</option>
        </select>
      </div>
      <div className=" table elevated-card mt-5">
        <table>
          <tr>
            <th></th>
            <th>Nom du plan tarifaire</th>
            <th>Conditions d'annulation</th>
            <th>Tarif</th>
            <th>Taux d'annulation</th>
            <th>Revenus nets</th>
          </tr>
          {pricingPlans.map((plan) => (
            <>
              <tr
                className="primary"
                onClick={() => {
                    togglePlan(plan.id);
                }}
              >
                <td className="icon">
                  {openPlans[plan.id] ? <ChevronUp /> : <ChevronDown />}
                </td>
                <td>
                  <span>{plan.name}</span>
                  <small>ID {plan.id}</small>
                </td>
                <td>{plan.conditions}</td>
                <td>{plan.tarif}</td>
                <td>{plan.tauxAnnulation}</td>
                <td>{plan.revenusNets}</td>
              </tr>
              {openPlans[plan.id] && (
                <tr className="more">
                  <td colSpan={6}>
                    <table>
                      <tr>
                        <th>Types d'hébergement</th>
                        <th>Repas</th>
                        <th>Avantages</th>
                        <th>Séjour minimum</th>
                        <th>Réservable</th>
                      </tr>
                      <tr>
                        <td>
                          <ul className="flex flex-column gap-5">
                            <li className="flex align-items-center gap-5">
                              <CircleFill size={5} /> Chambre Double
                            </li>
                            <li className="flex align-items-center gap-5">
                              <CircleFill size={5} /> Chambre Simple
                            </li>
                          </ul>
                        </td>
                        <td>Aucun repas</td>
                        <td>Pas d'avantages</td>
                        <td>Aucune durée de séjour minimum</td>
                        <td>A tout moment</td>
                      </tr>
                      <tr>
                        <td colSpan={4}></td>
                        <td className=" buttons flex gap-10">
                          <button className="btn- update">Modifier</button>
                          <button className="btn-orange">Supprimer</button>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              )}
            </>
          ))}
        </table>
      </div>
    </div>
  );
};

export default PricingPlans;
