import { GeoAltFill, PlusLg, ThreeDots } from "react-bootstrap-icons";
import "./Residences.scss";

const Residences = () => {
  return (
    <>
      <section className="contacts">
        <div className="flex align-items-center justify-content-between">
          <h4>Lieux de residence</h4>
          {/* <button className="btn btn-transparent">
            <PlusLg size={16} />
          </button> */}
        </div>
        <div className="btn add-study-btn flex align-items-center gap-10"><button className='btn btn-transparent'><PlusLg /> <span>Ajouter une ville</span></button></div>

        <ul>
          <li className="flex gap-10">
            <div className="ico">
              <GeoAltFill size={16}/>
            </div>
            <div className="flex-grow-1 flex gap-10">
              <div className="flex-grow-1">
                <small>Ville d'origine</small>
                <p>Antananarivo</p>
              </div>
              <div>
                <button className="btn btn-transparent">
                  <ThreeDots size={16} />
                </button>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Residences;
