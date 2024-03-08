import React from 'react'
import './AddHotel.scss'
import AddHotelIdentity from "./HotelIdentityForm";
import MultiStepForm from "../../components/MuliStepForm/MultiStepForm";
import * as Yup from 'yup';
import HotelIdentityForm from "./HotelIdentityForm";
import HotelLocationForm from "./HotelLocationForm";
import HotelEquipmentsForm from "./HotelEquipmentsForm";
import BreakFastForm from './BreakFastForm';
import ParkingOptions from './ParkingOptions';

const AddHotel = () => {
    return (
        <div id='add-hotel-page'>
            <MultiStepForm
                steps={[
                    {
                        title: 'Informations sur votre hotel',
                        initialValues: { hotelName: '', hotelStars: '1' },
                        path: 'informations',
                        validationSchema: Yup.object().shape({
                            hotelName: Yup.string().required('Le nom de l\'hotel est obligatoire'),
                            hotelStars: Yup.string().required('Le nombre d\'étoile est obligatoire'),
                        }),
                    },
                    {
                        title: 'Localisation de votre hotel',
                        initialValues: {
                            hotelCity: '', streetName: '', hotelLocation: {
                                lat: '',
                                lng: ''
                            }
                        },
                        path: 'localisation',
                        validationSchema: Yup.object().shape({
                            hotelCity: Yup.string().required('La ville est requise'),
                            streetName: Yup.string().required('Le nom de la rue est requis'),
                            // hotelLocation: Yup.object().shape({
                            //     lat: Yup.string().required('La latitude est requise'),
                            //     lng: Yup.string().required('La longitude est requise')
                            // }),
                        }),
                    },
                    {
                        title: 'Équipements proposé par votre hotel',
                        initialValues: { hotelEquipments: [] },
                        path: 'equipements',
                        validationSchema: Yup.object().shape({
                            hotelEquipments: Yup.array()
                                .min(1, 'Veuillez sélectionner au moins 1 équipement')
                                .required('Veuillez sélectionner au moins 1 équipement'),
                        }),

                    },
                    {
                        title: 'Petit déjeuner',
                        initialValues: { includeBreakFast: "0", breakFastWithSupplement: "0", breakFastSupplement: '' },
                        path: 'petit-dejeuner',
                        validationSchema: Yup.object().shape({
                            breakFastSupplement: Yup.string().when('breakFastWithSupplement',(breakFastWithSupplement,schema)=>{
                                if(parseInt(breakFastWithSupplement)===1){
                                    return schema.required('Le tarif ne doit pas etre vide')
                                }
                                return schema.nullable()
                            }),
                        }),
                    },
                    {
                        title: 'Le clients a-t-il accès à un parking/guarage ?',
                        initialValues: { includeParking: '' },
                        path: 'parking',
                    },


                ]}
            >
                <HotelIdentityForm />
                <HotelLocationForm />
                <HotelEquipmentsForm />
                <BreakFastForm />
                <ParkingOptions />
            </MultiStepForm>
        </div>
    )
}

export default AddHotel
