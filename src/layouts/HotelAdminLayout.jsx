import {
  Calendar2Week,
  ChevronDown,
  ChevronExpand,
  Envelope,
  FileEarmarkText,
  House,
  ListUl,
  Pencil,
} from "react-bootstrap-icons";
import DoNavLink from "../components/DoNavLink/DoNavLink";
import "./HotelAdminLayout.scss";
import { Link, Outlet } from "react-router-dom/dist";

const HotelAdminLayout = () => {
  return (
    <div id="hotel-admin">
      <div className="nav"></div>
      <div className="hotel-admin-container">
        <div className="hotel-admin-nav elevated-card flex align-items-center justify-content-between">
          <ul>
            <li>
              <DoNavLink activeClass="active" to={`home`}>
                <House size={16} />
                <small>Accueil</small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={`sdfsd`}>
                <Calendar2Week size={16} />
                <small>
                  Tarif et disponibilités <ChevronDown />
                </small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={`reservation`}>
                <ListUl size={16} />
                <small>Reservation</small>
              </DoNavLink>
            </li>
            <li>
              <Link>
                <Pencil size={16} />
                <small>Etablissement</small>
              </Link>
            </li>
            <li>
              <DoNavLink to={"sdfsdf"}>
                <Envelope size={16} />
                <small>Boite de reception</small>
              </DoNavLink>
            </li>
            <li>
              <DoNavLink to={"fdsfsdf"}>
                <FileEarmarkText size={16} />
                <small>Comptabilité</small>
              </DoNavLink>
            </li>
          </ul>
          <div className="hotel-name">
            <h1>Gate Hotel </h1>
            <ChevronExpand/>
          </div>
        </div>
        <div className="bottom">
            <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default HotelAdminLayout;
