import { ArrowDownCircle, Printer } from "react-bootstrap-icons";
import "./NoteReservations.scss";
import { Link } from "react-router-dom";
import CheckBox from "../../components/CheckBox/CheckBox";
const NoteReservations = () => {
  return (
    <div className="note-reservations mt-15">
      <h2>Relevés de réservations</h2>
      <div className="container elevated-card">
        <div className="periode flex">
            <span>Période</span>
            <select name="" id="">
                <option value="2024-03">2024-03</option>
            </select>
        </div>
        <div className="button flex gap-15 p-15">
            <button className="btn-purple flex align-items-center"><span><ArrowDownCircle/></span>Télécharger en XLS</button>
            <button className="btn-purple flex align-items-center"><span><ArrowDownCircle/></span>Télécharger en CSV</button>
            <button className="btn-purple flex align-items-center"><span><Printer/></span>Imprimer cette page</button>
        </div>
        <div className="reservation-lists px-15">
          <table>
            <tr className="title">
              <th>Numéro de reservation</th>
              <th className="name">Nom du client</th>
              <th>Arivée</th>
              <th>Depart</th>
              <th>Nuitées</th>
              <th>
                Commission <br />
                (%)
              </th>
              <th>Statut</th>
              <th>Montant initial</th>
              <th>Montant final</th>
              <th>Montant de commission</th>
              <th>Contester le montant de la commission</th>
            </tr>
            <tr>
              <td>
                <Link to="/hotels/:hoteID/hotel-admin/reservation/:reservationID">12315546</Link>
              </td>
              <td>
                <Link>John Doe</Link>
                <span>2 personnes</span>
              </td>
              <td>19 mars 2024</td>
              <td>21 mars 2024</td>
              <td className="numeral">1</td>
              <td className="numeral">15</td>
              <td>Séjournée</td>
              <td className="numeral">$ 150</td>
              <td className="numeral">$ 150</td>
              <td className="numeral">$ 22,50</td>
              <td className="contestation">
                <CheckBox />
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/hotels/:hoteID/hotel-admin/reservation/:reservationID">12315546</Link>
              </td>
              <td>
                <Link>John Doe</Link>
                <span>2 personnes</span>
              </td>
              <td>19 mars 2024</td>
              <td>21 mars 2024</td>
              <td className="numeral">1</td>
              <td className="numeral">15</td>
              <td>Séjournée</td>
              <td className="numeral">$ 150</td>
              <td className="numeral">$ 150</td>
              <td className="numeral">$ 22,50</td>
              <td className="contestation">
                <CheckBox />
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bottom elevated-card p-15">
        <span>Total :</span>
        <div>
          <span>Commission : $ 157,50</span>
          <span className="total">Montant final : $ 1 050</span>
        </div>
      </div>
    </div>
  );
};

export default NoteReservations;
