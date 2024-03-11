import React,{useEffect} from 'react'
import './AddHotel.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import LocationSelector from '../../components/LocationSelector/LocationSelector';
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';

const HotelLocationForm = ({formData,setFormData,setInitialFields=()=>{},initialFields,currentStepValues,currentStepErrors}) => {
  
  useEffect(()=>{
    console.log(currentStepErrors,'currentFormErrors')
  },[currentStepErrors])
  useEffect(()=>{
    setInitialFields(currentStepValues)
  },[currentStepValues])
  useEffect(()=>{
    console.log(currentStepValues,'page2')
  },[])
  return (
    <div className='hotel-location-form'>
      <div className="form-group">
        <label htmlFor="">Votre ville</label>
        <Field as="select" className="inpt" name='hotelCity'>
          <option value="red">Morondava</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <ErrorLabel error={currentStepErrors.hotelCity}/>
      </div>
      <div className="form-group">
        <label htmlFor="">Nom de la rue</label>
        <Field className="inpt" type="text" name='streetName' placeholder='Quel est le nom de la rue ?' />
        <ErrorLabel error={currentStepErrors.streetName}/>
      </div>
      <div className="location-pin form-group">
        <label htmlFor="">Selectionnez sur la carte</label>
        <small>Cette adresse s'affiche sur la carte interactive lorsque les utilisateurs recherchent des hotels sur GateAfri</small>
        <LocationSelector onSelect={({Lat:lat,Lng:lng})=>{
          setInitialFields(prev=>({...prev,hotelLocation:{lat,lng}}))
        }}/>
        <div className="flex gap-5">
          <div>
            <label htmlFor="lat">Latitude :</label>
            <Field readonly type="text" id="lat" name="hotelLocation.lat" />
            <ErrorMessage name="hotelLocation.lat" component="div" />
          </div>
          <div>
            <label htmlFor="lng">Longitude :</label>
            <Field type="text" id="lng" name="hotelLocation.lng" />
            <ErrorMessage name="hotelLocation.lng" component="div" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default HotelLocationForm
