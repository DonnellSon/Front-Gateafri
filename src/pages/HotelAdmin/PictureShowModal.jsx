import { ChevronLeft, ChevronRight, X } from "react-bootstrap-icons";
import "./PictureShowModal.scss";
import CheckBox from "../../components/CheckBox/CheckBox";

const PictureShowModal = () => {
  return (
    <div className="picture-show-modal elevated-card">
      <div className="left">
        <div className="image">
          <div className="banner"></div>
          <img src="/img/other/chambre_1.jpg" alt="" />
        </div>
        <div className="prev-slide-btn">
          <ChevronLeft size={20} />
        </div>
        <div className="next-slide-btn">
          <ChevronRight size={20} />
        </div>
      </div>
      <div className="right">
        <div className="head flex justify-content-end">
          <div className="close">
            <X size={30} />
          </div>
        </div>
        <div className="body">
          <div className="flex gap-5">
            <CheckBox checked={true}/>
            <label htmlFor="">
              Inclure cette photo dans ma galerie principale{" "}
            </label>
          </div>
          <div className="keywords mt-15">
            <h3>
              Associez des mots-clés à cette image pour la décrire au mieux
            </h3>
            <div className="input">
              <input type="text" placeholder="ex: Cuisine, Bibliotheque, Chambre,..."/>
            </div>
          </div>
          <div className="accommodation-type mt-15">
            <h3>Sélectionnez l'hébergement que la photo représente</h3>
            <div className="flex gap-5">
              <CheckBox />
              <label htmlFor="">Chambre Double</label>
            </div>
            <div className="flex gap-5">
              <CheckBox />
              <label htmlFor="">Chambre Simple</label>
            </div>
          </div>
        </div>
        <div className="bottom">
          <button className="btn-purple">Terminer</button>
        </div>
      </div>
    </div>
  );
};

export default PictureShowModal;
