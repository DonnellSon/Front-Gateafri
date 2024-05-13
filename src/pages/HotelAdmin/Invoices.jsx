import { Link } from "react-router-dom";
import "./Invoices.scss";
import { Download } from "react-bootstrap-icons";
const Invoices = () => {
  return (
    <div className="invoices">
      <h2>Factures</h2>
      <div className="elevated-card">
        <h3>Montants à payer</h3>
        <div className="container-table px-15">
          <table>
            <tr className="title">
              <th>Nom du document</th>
              <th>Numéro</th>
              <th>Date</th>
              <th>Période</th>
              <th>Actions</th>
              <th>Statut</th>
              <th>Montant</th>
            </tr>
            <tr>
              <td>Commission</td>
              <td>2254534131</td>
              <td>19 mars 2024</td>
              <td>1 mars - 31 mars</td>
              <td className="actions">
                <Link to="#">
                  PDF <Download />
                </Link>{" "}
                <span>|</span>{" "}
                <Link to="/hotels/:hotelId/hotel-admin/relever-reservations">
                  Voir le relevé
                </Link>
              </td>
              <td className="danger">Impayée (date limite : 16 avr. 2024)</td>
              <td className="danger bold">€ 157,50</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="bottom elevated-card p-15">
        <span className="total">Montant à payer : € 157,50</span>
      </div>
      <div className="elevated-card mt-20">
      <div className="periode flex">
            <span>Période</span>
            <select name="" id="">
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
            </select>
        </div>
        <div className="container-table px-15">
          <table>
            <tr className="title">
              <th>Nom du document</th>
              <th>Numéro</th>
              <th>Date</th>
              <th>Période</th>
              <th>Actions</th>
              <th>Statut</th>
              <th>Montant</th>
            </tr>
            <tr>
              <td>Commission</td>
              <td>2254534131</td>
              <td>19 mars 2024</td>
              <td>1 mars - 31 mars</td>
              <td className="actions">
                <Link to="#">
                  PDF <Download />
                </Link>{" "}
                <span>|</span>{" "}
                <Link to="/hotels/:hotelId/hotel-admin/relever-reservations">
                  Voir le relevé
                </Link>
              </td>
              <td className="success">Payée</td>
              <td className=" bold">€ 157,50</td>
            </tr>
            <tr>
              <td>Commission</td>
              <td>2254534131</td>
              <td>19 mars 2024</td>
              <td>1 mars - 31 mars</td>
              <td className="actions">
                <Link to="#">
                  PDF <Download />
                </Link>{" "}
                <span>|</span>{" "}
                <Link to="/hotels/:hotelId/hotel-admin/relever-reservations">
                  Voir le relevé
                </Link>
              </td>
              <td className="success">Payée</td>
              <td className=" bold">€ 157,50</td>
            </tr>
            <tr>
              <td>Commission</td>
              <td>2254534131</td>
              <td>19 mars 2024</td>
              <td>1 mars - 31 mars</td>
              <td className="actions">
                <Link to="#">
                  PDF <Download />
                </Link>{" "}
                <span>|</span>{" "}
                <Link to="/hotels/:hotelId/hotel-admin/relever-reservations">
                  Voir le relevé
                </Link>
              </td>
              <td className="success">Payée</td>
              <td className=" bold">€ 157,50</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
