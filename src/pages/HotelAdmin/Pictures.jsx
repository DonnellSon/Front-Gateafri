import React, { useEffect } from "react";
import { CardImage, Eye, ThreeDots } from "react-bootstrap-icons";
import "./Pictures.scss";
import CheckBox from "../../components/CheckBox/CheckBox";
import { Link } from "react-router-dom";
import DropDown from "../../components/DropDown/DropDown";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import PictureShowModal from "./PictureShowModal";
const PictureCard = ({ path, checked, onChange, onClick }) => {
  return (
    <div className="picture-card" onClick={onClick}>
      <div className="banner"></div>
      <div className="img">
        <img src={path} alt="chambre" />
      </div>
      <div className="actions">
        <div className="top">
          <CheckBox checked={checked} onChange={onChange} />
          <DropDown>
            <Link>
              <div className="options">
                <ThreeDots size={20} />
              </div>
            </Link>
            <ul>
              <li>
                <Link>Modifier</Link>
              </li>
              <li>
                <Link>Definir comme photo d'accroche préférée</Link>
              </li>
              <li>
                <Link>Supprimer</Link>
              </li>
            </ul>
          </DropDown>
        </div>
        <div className="center">
          <Eye size={30} />
        </div>
      </div>
    </div>
  );
};
const AddPictureCard = () => {
  return (
    <div className="add-picture-card flex align-items-center justify-content-center flex-column gap-15">
      <div className="banner"></div>
      <div className="icon">
        <CardImage size={30} />
      </div>
      <span>Ajouter</span>
    </div>
  );
};

const Pictures = () => {
  const [states, setStates] = useState({
    doubleRoom: [
      { path: "/img/other/chambre_0.jpg", checked: false },
      { path: "/img/other/chambre_1.jpg", checked: false },
    ],
    singleRoom: [{ path: "/img/other/chambre_2.jpg", checked: false }],
    other: [
      { path: "/img/other/chambre_3.jpg", checked: false },
      { path: "/img/other/chambre_4.jpg", checked: false },
      { path: "/img/other/chambre_5.jpg", checked: false },
      { path: "/img/other/chambre_6.jpg", checked: false },
      { path: "/img/other/chambre_7.jpg", checked: false },
    ],
  });
  const handleCheckChange = (type, index) => {
    setStates((prevState) => {
      const newState = { ...prevState };
      newState[type][index].checked = !newState[type][index].checked;
      return newState;
    });
};
const [openModal, setOpenModal] = useState({open:false, src:""})
const handleClickShow = (path)=>{
    setOpenModal({open:true , src:path})
}
useEffect(()=>{
    console.log(openModal, "open MOdal content");
},[openModal])
  return (
    <div id="galery-pictures">
        <Modal open={openModal.open}>
            <PictureShowModal srcImg={openModal.src} handleCloseModal={setOpenModal}/>
        </Modal>
      <h2 className="py-15">Photos de l'établissement</h2>
      <div className="elevated-card p-15">
        <div className="head">
          <h3>Galerie principale</h3>
          <div className="menu">
            <ul>
              <li>Sélectionner tout</li>
              <li>Désélectionner tout</li>
              <li>Supprimer</li>
            </ul>
          </div>
        </div>
        <div className="Gallery-container flex flex-wrap gap-15 mt-15">
          {Object.entries(states).map(([key, value]) => (
            <React.Fragment key={key}>
              {value.map((image, index) => (
                <PictureCard
                  key={index}
                  path={image.path}
                  checked={image.checked}
                  onChange={() => handleCheckChange(key, index)}
                  onClick={()=>handleClickShow(image.path)}
                />
              ))}
            </React.Fragment>
          ))}
          <AddPictureCard />
        </div>
      </div>
      <div className="elevated-card mt-15 p-15">
        <div className="head">
          <h3>Chambre Double</h3>
          <div className="menu">
            <ul>
              <li>Sélectionner tout</li>
              <li>Désélectionner tout</li>
              <li>Supprimer</li>
            </ul>
          </div>
        </div>
        <div className="accommodation-gallery flex flex-wrap gap-15 mt-15">
          {states.doubleRoom.map((picture, index) => (
            <PictureCard
              key={index}
              path={picture.path}
              checked={picture.checked}
              onClick={()=>handleClickShow(picture.path)}

            />
          ))}
          {states.doubleRoom.length < 4 ? (
            Array.from(
              { length: 4 - states.doubleRoom.length },
              (_, index) => index
            ).map((number) => (
              <React.Fragment key={number}>
                <AddPictureCard />
              </React.Fragment>
            ))
          ) : (
            <AddPictureCard />
          )}
        </div>
      </div>
      <div className="elevated-card mt-15 p-15">
        <div className="head">
          <h3>Chambre Simple</h3>
          <div className="menu">
            <ul>
              <li>Sélectionner tout</li>
              <li>Désélectionner tout</li>
              <li>Supprimer</li>
            </ul>
          </div>
        </div>
        <div className="accommodation-gallery flex flex-wrap gap-15 mt-15">
          {states.singleRoom.map((picture, index) => (
            <PictureCard
              key={index}
              path={picture.path}
              checked={picture.checked}
              onClick={()=>handleClickShow(picture.path)}
            />
          ))}
          {states.singleRoom.length < 4 ? (
            Array.from(
              { length: 4 - states.singleRoom.length },
              (_, index) => index
            ).map((number) => (
              <React.Fragment key={number}>
                <AddPictureCard />
              </React.Fragment>
            ))
          ) : (
            <AddPictureCard />
          )}
        </div>
      </div>
    </div>
  );
};
export default Pictures;
