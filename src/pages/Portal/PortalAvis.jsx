import {
  App,
  ArrowLeft,
  ArrowRight,
  CheckSquareFill,
} from "react-bootstrap-icons";
// import StarRating from "../../components/StarRating/StarRating";
import "./PortalAvis.scss";
import { useState } from "react";
import CheckBox from "../../components/CheckBox/CheckBox";

const PortalEvaluation = () => {
  const [checked, setChecked] = useState(false);
  const res = [
    "Détendue",
    "Palpitante",
    "Stressante",
    "Collaborative", 
    "Compétitive",
    "Paisible",
    "Je ne sais pas",
  ];
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <div className="portal-avis">
      <div className="questions">
        <div className="yesOrNo elevated-card mt-5 px-15 pb-15">
          <div className="head">
            <div className="heading2">
              <h3>Perception</h3>
            </div>
            <p>
              Chaque avis partagé est une pierre précieuse qui contribue à bâtir
              une meilleure compréhension de notre entreprise pour nos
              visiteurs.
            </p>
          </div>
          <div className="question mt-20">
            <h2>Recommanderiez-vous a un ami de travailler chez Design?</h2>
            <div className="btn">
              <button>Oui</button>
              <button>Non</button>
            </div>
          </div>
          <div className="question">
            <h2>Recommanderiez-vous a un ami de travailler chez Design?</h2>
            <div className="btn">
              <button>Oui</button>
              <button>Non</button>
            </div>
          </div>
          <div className="question">
            <h2>Recommanderiez-vous a un ami de travailler chez Design?</h2>
            <div className="btn">
              <button>Oui</button>
              <button>Non</button>
            </div>
          </div>
        </div>
        <div className="choix elevated-card mt-5 px-15 pb-15">
          <div className="description-culture category">
            <div className="heading2">
              <h3>Description de la culture d'entreprise</h3>
            </div>
            <p>Choix multiple possible:</p>
            <div className="responses">
              {res.map((value, i) => (
                <div className="option" key={i}>
                  <CheckBox id={value} name={value} />
                  <label htmlFor={value}>{value}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="category elevated-card mt-5 px-15 pb-15">
          <div className="heading2">
            <h3>Entreprise</h3>
          </div>
          <div className="question">
            <div className="section">
              <h3>Note Globale</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
            <div className="section">
              <h3>Équilibre vie professionnelle/personnelle</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
            <div className="section">
              <h3>Salaire/Avantages</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
            <div className="section">
              <h3>Sécurité de l'emploi/Évolution de carrière</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
            <div className="section">
              <h3>Direction</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
            <div className="section">
              <h3>Culture d'entreprise</h3>
              {/* <StarRating color="red" size={15} /> */}
            </div>
          </div>
        </div>
        <div className="category avis elevated-card mt-5 px-15 pb-15">
          <div className="heading2">
            <h3>Soumettre un avis</h3>
          </div>
          <p>
            Nous vous invitons à partager votre avis sur votre expérience avec
            nous. Votre retour est précieux pour nous aider à améliorer nos
            services.
          </p>
          <div className="titre">
            <label htmlFor="titre">Titre de l'avis</label>
            <input
              id="titre"
              name="titre"
              type="text"
              placeholder="Exemple: Salaire satisfaisante"
            />
          </div>
          <div className="corps">
            <label htmlFor="corps">Votre avis</label>
            <div className="points-a-dire">
              <p>Donnez-nous votre avis sur:</p>
              <ul>
                <li>Environnement de travail</li>
                <li>Communication et collaboration</li>
                <li>Culture d'entreprise</li>
                <li>Développement professionnel</li>
                <li>Relations interpersonnelles</li>
                <li>Satisfaction globale</li>
              </ul>
            </div>
            <textarea name="corps" id="corps"></textarea>
          </div>
          <div className="valider ">
            <button className="btn-">Valider</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortalEvaluation;
