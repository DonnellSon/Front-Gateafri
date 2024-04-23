import React, { useEffect, useState } from 'react'
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel'
import MediasSelector from '../../components/MediaSelector/MediasSelector'

const HotelImagesForm = ({ formData, initialFields, setFormData, currentStepErrors, currentStepValues, setInitialFields }) => {
    const [images, setImages] = useState(formData?.hotelImages || [])
   
    useEffect(() => {
        setFormData(prev => ({ ...prev, hotelImages: images }))
        setInitialFields(prev => ({ ...prev, hotelImages: images }))
    }, [images,formData])
    return (
        <div id='hotel-images-form'>
            <p className='mb-15'><strong>Vous devez ajouter au moins 5 photos </strong>
                pour bien présenter votre hotel et les différents service que vous proposez.</p>
            <div className="form-group">
                <MediasSelector animate={false} defaultState={images} col={3} setMediasState={setImages} />
            </div>
            <div className="form-group">
                <ErrorLabel error={currentStepErrors.hotelImages} />
            </div>
        </div>
    )
}

export default HotelImagesForm
