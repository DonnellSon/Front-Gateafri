import React from 'react'

const HotelPolicies = ({ formData, setFormData, initialFields, setInitialFields = () => { }, handleChange = () => { }, currentStepValues, currentStepErrors, touched }) => {
    useEffect(() => {
        setInitialFields(currentStepValues)
    }, [currentStepValues])
   
    return (
        <div className='add-hotel-identity'>

            <div className="form-group">
                <label htmlFor="">Politique d</label>
                <Field className="inpt" type="text" as="textarea" name='hotelName' placeholder='Quel est le nom de votre hotel ?' />
                <small>Les utilisateurs verront ce nom lors de leur recherche</small>
                <ErrorLabel error={currentStepErrors.hotelName} />
            </div>
            <hr />

            <div className="form-group">
                <label htmlFor="">Nombre d'étoiles</label>
                <ul className='stars-number'>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="null" />
                            <span>Non Applicable</span>
                        </label>
                    </li>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="1" checked={initialFields.hotelStars == "1"} />
                            <span>1 étoile</span><span><StarFill /></span>
                        </label>
                    </li>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="2" checked={initialFields.hotelStars == "2"} />
                            <span>2 étoiles</span><span><StarFill /><StarFill /></span>
                        </label>
                    </li>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="3" checked={initialFields.hotelStars == "3"} />
                            <span>3 étoiles</span><span><StarFill /><StarFill /><StarFill /></span>
                        </label>
                    </li>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="4" checked={initialFields.hotelStars == "4"} />
                            <span>4 étoiles</span><span><StarFill /><StarFill /><StarFill /><StarFill /></span>
                        </label>
                    </li>
                    <li className='flex align-items-center gap-5'>
                        <label className='flex align-items-center gap-5'>
                            <Field type="radio" name="hotelStars" value="5" checked={initialFields.hotelStars == "5"} />
                            <span>5 étoiles</span><span><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></span>
                        </label>
                    </li>
                </ul>
                <ErrorLabel error={currentStepErrors.hotelStars} />
            </div>
        </div>
    )
}

export default HotelPolicies
