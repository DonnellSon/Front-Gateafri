import React, { useEffect, useState } from 'react'
import { Field, ErrorMessage } from 'formik';
import AmountInput from '../../components/AmountInput/AmountInput';
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';
import { useLocation } from 'react-router-dom';

const BreakFastForm = ({ formData: { includeBreakFast, breakFastWithSupplement },initialFields, setFormData, currentStepErrors, currentStepValues, setInitialFields }) => {
    useEffect(()=>{
        setInitialFields(prev=>({...prev,includeBreakFast:"0"}))
      },[currentStepValues])
    useEffect(() => {
        setInitialFields(prev=>({...prev,...currentStepValues}))
    }, [currentStepValues])
    return (
        <div className='breakfast-form'>
            <div className="form-group">
                <label>Proposez-vous un petit déjeuner ?</label>
                <label className='flex align-items-center gap-5'>
                    <Field type="radio" value={1} checked={initialFields.includeBreakFast=="1"} name='includeBreakFast' />
                    {/* <input
                        
                        value='1'
                        checked={includeBreakFast === '1'}
                        onChange={(e) => { setFormData(prev => ({ ...prev, includeBreakFast: e.target.value })) }}
                        name='includeBreakFast'
                    /> */}
                    <span>Oui</span>
                </label>
                <label className='flex align-items-center gap-5'>
                    <Field type="radio" value={0} checked={initialFields.includeBreakFast=="0"} name='includeBreakFast' />
                    {/* <input
                        type="radio"
                        value='0'
                        checked={includeBreakFast === '0'}
                        onChange={(e) => { setFormData(prev => ({ ...prev, includeBreakFast: e.target.value })) }}
                        name='includeBreakFast'
                        defaultChecked
                    /> */}
                    <span>Non</span>
                </label>
            </div>
            {
                currentStepValues.includeBreakFast == 1 &&
                <>
                    <div className="form-group">
                        <label>Est-il inclus dans le tarif ?</label>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" value={0} checked={initialFields.breakFastWithSupplement=="0"} name='breakFastWithSupplement' />
                            {/* <input
                                type="radio"
                                value='0'
                                checked={breakFastWithSupplement === '0'}
                                onChange={(e) => { setFormData(prev => ({ ...prev, breakFastWithSupplement: e.target.value })) }}
                                name='breakFastWithSupplement'
                                defaultChecked
                            /> */}
                            <span>Oui</span>
                        </label>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" value={1} checked={initialFields.breakFastWithSupplement=="1"} name='breakFastWithSupplement' />
                            {/* <input
                                type="radio"
                                value='1'
                                checked={breakFastWithSupplement === '1'}
                                onChange={(e) => { setFormData(prev => ({ ...prev, breakFastWithSupplement: e.target.value })) }}
                                name='withSupplement'
                                defaultChecked
                            /> */}
                            <span>Non, avec un suplément</span>
                        </label>

                        {
                            currentStepValues.breakFastWithSupplement == 1 &&
                            <div className='form-group'>
                                <label htmlFor="">Tarif petit déjeuner par personne par jour</label>
                                <div className="">
                                    <Field name="breakFastSupplement">
                                        {({ field, form, meta }) => (
                                            <AmountInput field={field} />
                                        )}
                                    </Field>
                                    <ErrorLabel error={currentStepErrors.breakFastSupplement} />
                                </div>
                                <ErrorMessage name='hotelName' component="div" />
                            </div>
                        }


                    </div>
                    <hr />
                    <div className="form-group">
                        <label>Type de petit déjeuner</label>
                    </div>
                </>
            }
        </div>
    )
}

export default BreakFastForm
