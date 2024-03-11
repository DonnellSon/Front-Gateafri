import React from 'react'
import { Field, ErrorMessage } from 'formik';
import AmountInput from '../../components/AmountInput/AmountInput';

const ParkingOptions = () => {
  return (
    <div className='parking-options'>
      <div className="form-group">
        <label htmlFor="">Le clients a-t-il accès à un parking/guarage ?</label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>Gratuit</span>
        </label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>Avec supplément</span>
        </label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={false} />
          <span>Non</span>
        </label>
      </div>
      <hr />
      <div className="form-group">
        <label htmlFor="">Tarif pour le parking</label>
        <div className="flex align-items-center gap-10">
          <AmountInput/>
          <span>/voiture/jour</span>
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Nombre de parking disponible</label>
        <div className="flex gap-5">
          <Field className="inpt" type="number" name='hotelParkingNumber' />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="">Emplacement du parking</label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>Sur place</span>
        </label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>A proximité</span>
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="">Type de parking</label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>Public</span>
        </label>
        <label className='flex align-items-center gap-5'>
          <Field type="radio" name="includeBreakFast" value={true} />
          <span>Privé</span>
        </label>
      </div>
    </div>
  )
}

export default ParkingOptions
