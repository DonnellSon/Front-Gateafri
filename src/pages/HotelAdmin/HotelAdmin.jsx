import {
  Calendar2Week,
  ChevronDown,
  Envelope,
  FileEarmarkText,
  House,
  ListUl,
  Pencil,
} from "react-bootstrap-icons";
import DoNavLink from "../../components/DoNavLink/DoNavLink";
import "./HotelAdmin.scss";
import { Link } from "react-router-dom/dist";

const HotelAdmin = () => {
  return (
    <div id="hotel-admin">
      <div className="nav"></div>
      <div className="hotel-admin-container">
        <div className="hotel-admin-nav elevated-card">
          <ul>
            <li>
              <DoNavLink activeClass="active" to={`actu`}>
                <House size={16} />
                <small>Accueil</small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={`sdfsd`}>
                <Calendar2Week />
                <small>Tarif et disponibilités <ChevronDown/></small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={`sfsdfs`}>
                <ListUl />
                <small>Reservation</small>
              </DoNavLink>
            </li>
            <li>
              <Link>
                <Pencil />
                <small>Etablissement</small>
              </Link>
            </li>
            <li>
              <DoNavLink to={"sdfsdf"}>
                <Envelope />
                <small>Boite de reception</small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={"fdsfsdf"}>
                <FileEarmarkText />
                <small>Comptabilité</small>
              </DoNavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HotelAdmin;
