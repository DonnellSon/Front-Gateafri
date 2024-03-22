import { ChevronDown } from 'react-bootstrap-icons'
import './HotelAdminReservation.scss'
import { Link } from 'react-router-dom'

const HotelAdminReservation = ()=>{
    return(
        <div className='hotel-admin-reservation mt-15'>
            <h2>Réservations</h2>
            <form action="" className='search elevated-card flex p-15 gap-15 mt-15'>
                <div className='trie'>
                    <label htmlFor="">Date de</label>
                    <div className='flex align-items-center gap-20'>
                        <p>Arrivées</p>
                        <ChevronDown size={13}/>
                    </div>
                </div>
                <div>
                    <label htmlFor="debut">Du</label>
                    <input type="date" name="debut" id="debut" />
                </div>
                <div>
                    <label htmlFor="fin">Au</label>
                    <input type="date" name="fin" id="fin" />
                </div>
                <div className="btn-purple">Voir</div>
            </form>
            <div className="reservation-lists elevated-card px-15 mt-5">
                <table>
                    <tr>
                        <th>Nom du client</th>
                        <th>Arivée</th>
                        <th>Depart</th>
                        <th>Hébergements</th>
                        <th>Réservé le</th>
                        <th>Status</th>
                        <th>Tarif</th>
                        <th>Commission</th>
                        <th>Numéro de reservation</th>
                    </tr>
                    <tr>
                        <td>
                            <Link>John Doe</Link>
                            <span>2 personnes</span>
                        </td>
                        <td>19 mars 2024</td>
                        <td>21 mars 2024</td>
                        <td>Chambre double</td>
                        <td>17 mars 2024</td>
                        <td className='status'>OK</td>
                        <td>$ 150</td>
                        <td>$ 22,50</td>
                        <td><Link>12315546</Link></td>
                    </tr>
                    <tr>
                        <td>
                            <Link>John Doe</Link>
                            <span>2 personnes</span>
                        </td>
                        <td>19 mars 2024</td>
                        <td>21 mars 2024</td>
                        <td>Chambre double</td>
                        <td>17 mars 2024</td>
                        <td className='status'>OK</td>
                        <td>$ 150</td>
                        <td>$ 22,50</td>
                        <td><Link>12315546</Link></td>
                    </tr>
                </table>
            </div>
            <div className="bottom elevated-card p-15">
                <span>Commission : $ 57,50</span>
                <span className='total'>Montant total : $ 506</span>
            </div>
        </div>
    )
}

export default HotelAdminReservation