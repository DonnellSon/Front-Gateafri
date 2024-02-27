import React from 'react'
import './AddHotel.scss'
import { ArrowLeftShort, ArrowRightShort, StarFill } from 'react-bootstrap-icons'

const AddHotelIdenty = () => {
  return (
    <div className='add-hotel-identity'>
      <h2>Information sur votre hotel</h2>
      <form action="">
        <div className="body">
          <div className="form-group">
            <label htmlFor="">Nom de l'hotel</label>

            <input type="text" className="inpt" placeholder='Quel est le nom de votre hotel ?' />
            <small>Les utilisateurs verront ce nom lors de leur recherche</small>
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="">Nombre d'étoiles</label>
            <ul className='stars-number'>
              <li className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor="" className='flex align-items-center gap-5'><span>1 étoile</span> <StarFill /></label>
              </li>
              <li className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor="" className='flex align-items-center gap-5'><span>2 étoiles</span> <StarFill /><StarFill /></label>
              </li>
              <li className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor="" className='flex align-items-center gap-5'><span>3 étoiles</span> <StarFill /><StarFill /><StarFill /></label>
              </li>
              <li className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor="" className='flex align-items-center gap-5'><span>4 étoiles</span> <StarFill /><StarFill /><StarFill /><StarFill /></label>
              </li>
              <li className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor="" className='flex align-items-center gap-5'><span>5 étoiles</span> <StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></label>
              </li>
            </ul>
          </div>
          <hr />

          <div className="form-group">
            <label htmlFor="">Êtes vous une société ?</label>
            <div className="flex gap-10">
              <div className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor=""> Oui</label>
              </div>
              <div className='flex align-items-center gap-5'>
                <input type="radio" name="" id="" /><label htmlFor=""> Non</label>
              </div>
            </div>
          </div>
        </div>



        <div className="footer">
          <div className="flex justify-content-between gap-5">
            <div>
              <button className="btn btn-transparent"><ArrowLeftShort size={30} /> Précédent</button>
            </div>
            <div>
              <button className="btn btn-purple">Suivant <ArrowRightShort size={30} /></button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddHotelIdenty
