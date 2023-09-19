import React, { useContext } from 'react'
import './Funding.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import { ChevronDown, ChevronRight, GeoAlt, ListTask, UiRadiosGrid } from 'react-bootstrap-icons'
import StickySideBar from '../../components/StickySideBar/StickySideBar'
import { DESKTOP } from '../../constants/MediaTypeConstants'
import MediaContext from '../../context/MediaContext'
const Funding = () => {
  const { deviceType } = useContext(MediaContext)
  const position = [-8.783195, 34.508523]
  return (
    <div id='funding-page' className='flex' style={{ flexDirection: deviceType === DESKTOP ? 'row' : "column" }}>
      {
        deviceType === DESKTOP ?
          <div className="left p-15">
            <StickySideBar top={73}>
              <h3>Investissements</h3>
              <small>Trouvez de potentiels investissements en Afrique</small>
              <div className="form-group">
                <label htmlFor="">Pays</label>
                <input type="text" className="inpt" placeholder='pays' />
              </div>
              <div className="form-group">
                <label htmlFor="">Type d'entreprise</label>
                <ul>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> Entreprise Individuelle</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> EURL</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SARL</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SA</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SASU</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SNC</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SCOP</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SCA</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> SCS</li>
                </ul>
              </div>
              <div className="form-group">
                <label htmlFor="">Taille d'entreprise</label>
                <ul>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> Micro-entreprise</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> Petite Entreprise</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> Moyenne Entreprise</li>
                  <li className='flex gap-5 align-items-center'><input type="checkbox" /> Grande Entreprise</li>
                </ul>
              </div>
              <div className="form-group">
                <label htmlFor="">Budget</label>
                <input type="text" className="inpt" placeholder='Mon budget' />
              </div>
            </StickySideBar>

          </div> : ""
      }
      <div className="center flex-grow-1">
        <div className="top flex align-items-center justify-content-between px-15 gap-10">
          <select name="" id="" className="inpt">
            <option value="">Date</option>
            <option value="">Domaine</option>
            <option value="">Pays</option>
            <option value="">Chiffres</option>
          </select>
          <div className="layout-btns flex align-items-center gap-5">
            <button className='btn-outline-light'>
              <ListTask />
            </button>
            <button className='btn-outline-light'>
              <UiRadiosGrid />
            </button>
          </div>
        </div>
        <div className="funding-list p-15">
          <div className="funding-card elevated-card p-10 mb-15">
            <div className="top flex gap-10">
              <div className="left flex-grow-1">
                <div className="head flex justify-content-between">
                  <h4>Société n2133445555633322</h4>
                  <img className='fund-flag' src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div>
                  <span className="stat">94736/SARL</span>
                </div>
                <div>
                  <strong className="domain">Energie</strong>
                </div>
                <div>
                  <span className="orange-txt flex align-items-center"><GeoAlt /> Madagascar</span>
                </div>
              </div>
              <div className="img">
                <img src="/img/entreprises/d.jpg" alt="" />
              </div>
            </div>
            <hr style={{ margin: '8px 0' }} />
            <table className="ca">
              <tr>
                <td><strong>2022</strong></td>
                <td>1 000 000 $</td>
              </tr>
              <tr>
                <td><strong>2021</strong></td>
                <td>700 000 $</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>100 000 $</td>
              </tr>
            </table>
            <div className="foot flex justify-content-between align-items-center">
              <div className="be flex align-items-center gap-10"><span className='orange-text'>100k $</span><button className="btn btn-purple">Investir</button></div>
              <Link className='flex align-items-center gap-5'>En savoir plus <ChevronRight /></Link>
            </div>
          </div>
          <div className="funding-card elevated-card p-10 mb-15">
            <div className="top flex gap-10">
              <div className="left flex-grow-1">
                <div className="head flex justify-content-between">
                  <h4>Société n2133445555633322</h4>
                  <img className='fund-flag' src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div>
                  <span className="stat">94736/SARL</span>
                </div>
                <div>
                  <strong className="domain">Energie</strong>
                </div>
                <div>
                  <span className="orange-txt flex align-items-center"><GeoAlt /> Madagascar</span>
                </div>
              </div>
              <div className="img">
                <img src="/img/entreprises/d.jpg" alt="" />
              </div>
            </div>
            <hr style={{ margin: '8px 0' }} />
            <table className="ca">
              <tr>
                <td><strong>2022</strong></td>
                <td>1 000 000 $</td>
              </tr>
              <tr>
                <td><strong>2021</strong></td>
                <td>700 000 $</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>100 000 $</td>
              </tr>
            </table>
            <div className="foot flex justify-content-between align-items-center">
              <div className="be flex align-items-center gap-10"><span className='orange-text'>100k $</span><button className="btn btn-purple">Investir</button></div>
              <Link className='flex align-items-center gap-5'>En savoir plus <ChevronRight /></Link>
            </div>
          </div>
          <div className="funding-card elevated-card p-10 mb-15">
            <div className="top flex gap-10">
              <div className="left flex-grow-1">
                <div className="head flex justify-content-between">
                  <h4>Société n2133445555633322</h4>
                  <img className='fund-flag' src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div>
                  <span className="stat">94736/SARL</span>
                </div>
                <div>
                  <strong className="domain">Energie</strong>
                </div>
                <div>
                  <span className="orange-txt flex align-items-center"><GeoAlt /> Madagascar</span>
                </div>
              </div>
              <div className="img">
                <img src="/img/entreprises/d.jpg" alt="" />
              </div>
            </div>
            <hr style={{ margin: '8px 0' }} />
            <table className="ca">
              <tr>
                <td><strong>2022</strong></td>
                <td>1 000 000 $</td>
              </tr>
              <tr>
                <td><strong>2021</strong></td>
                <td>700 000 $</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>100 000 $</td>
              </tr>
            </table>
            <div className="foot flex justify-content-between align-items-center">
              <div className="be flex align-items-center gap-10"><span className='orange-text'>100k $</span><button className="btn btn-purple">Investir</button></div>
              <Link className='flex align-items-center gap-5'>En savoir plus <ChevronRight /></Link>
            </div>
          </div>
          <div className="funding-card elevated-card p-10 mb-15">
            <div className="top flex gap-10">
              <div className="left flex-grow-1">
                <div className="head flex justify-content-between">
                  <h4>Société n2133445555633322</h4>
                  <img className='fund-flag' src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div>
                  <span className="stat">94736/SARL</span>
                </div>
                <div>
                  <strong className="domain">Energie</strong>
                </div>
                <div>
                  <span className="orange-txt flex align-items-center"><GeoAlt /> Madagascar</span>
                </div>
              </div>
              <div className="img">
                <img src="/img/entreprises/d.jpg" alt="" />
              </div>
            </div>
            <hr style={{ margin: '8px 0' }} />
            <table className="ca">
              <tr>
                <td><strong>2022</strong></td>
                <td>1 000 000 $</td>
              </tr>
              <tr>
                <td><strong>2021</strong></td>
                <td>700 000 $</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>100 000 $</td>
              </tr>
            </table>
            <div className="foot flex justify-content-between align-items-center">
              <div className="be flex align-items-center gap-10"><span className='orange-text'>100k $</span><button className="btn btn-purple">Investir</button></div>
              <Link className='flex align-items-center gap-5'>En savoir plus <ChevronRight /></Link>
            </div>
          </div>
          <div className="funding-card elevated-card p-10 mb-15">
            <div className="top flex gap-10">
              <div className="left flex-grow-1">
                <div className="head flex justify-content-between">
                  <h4>Société n2133445555633322</h4>
                  <img className='fund-flag' src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div>
                  <span className="stat">94736/SARL</span>
                </div>
                <div>
                  <strong className="domain">Energie</strong>
                </div>
                <div>
                  <span className="orange-txt flex align-items-center"><GeoAlt /> Madagascar</span>
                </div>
              </div>
              <div className="img">
                <img src="/img/entreprises/d.jpg" alt="" />
              </div>
            </div>
            <hr style={{ margin: '8px 0' }} />
            <table className="ca">
              <tr>
                <td><strong>2022</strong></td>
                <td>1 000 000 $</td>
              </tr>
              <tr>
                <td><strong>2021</strong></td>
                <td>700 000 $</td>
              </tr>
              <tr>
                <td><strong>2020</strong></td>
                <td>100 000 $</td>
              </tr>
            </table>
            <div className="foot flex justify-content-between align-items-center">
              <div className="be flex align-items-center gap-10"><span className='orange-text'>100k $</span><button className="btn btn-purple">Investir</button></div>
              <Link className='flex align-items-center gap-5'>En savoir plus <ChevronRight /></Link>
            </div>
          </div>
        </div>
      </div>
      <div id="funding-map">
        <MapContainer center={position} zoom={4} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {/* <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
    </Marker>*/}
        </MapContainer>
      </div>
    </div>
  )
}

export default Funding
