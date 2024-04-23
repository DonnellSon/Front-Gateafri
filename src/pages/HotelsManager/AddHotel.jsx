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
import HotelImagesForm from './HotelImagesForm';

const AddHotel = () => {
    return (
        <div id='add-hotel-page'>
            <MultiStepForm
                onSubmitData={({ hotelName, hotelStars, streetName, hotelEquipments }) => {
                    // setHotel({
                    //     name: hotelName,
                    //     rating: hotelStars,
                    //     adress: streetName,
                    //     equipments: hotelEquipments,
                    // })
                }}
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
                        title: 'Équipements et services proposés par votre hotel',
                        initialValues: { hotelEquipments: [],hotelServices:[] },
                        path: 'equipements',
                        validationSchema: Yup.object().shape({
                            hotelEquipments: Yup.array()
                                .min(1, 'Veuillez sélectionner au moins 1 équipement')
                                .required('Veuillez sélectionner au moins 1 équipement'),
                                hotelServices: Yup.array()
                                .min(1, 'Veuillez sélectionner au moins 1 service')
                                .required('Veuillez sélectionner au moins 1 service'),
                        }),

                    },
                    {
                        title: 'Petit déjeuner',
                        initialValues: { includeBreakFast: "0", breakFastWithSupplement: "0", breakFastSupplement: '' },
                        path: 'petit-dejeuner',
                        validationSchema: Yup.object().shape({
                            breakFastSupplement: Yup.string().when('breakFastWithSupplement', (breakFastWithSupplement, schema) => {
                                if (parseInt(breakFastWithSupplement) === 1) {
                                    return schema.required('Le tarif ne doit pas etre vide')
                                }
                                return schema.nullable()
                            }),
                        }),
                    },
                    {
                        title: 'Ajouter des images de votre Hotel',
                        initialValues: {
                            hotelImages: []
                        },
                        validationSchema: Yup.object().shape({
                            hotelImages: Yup.array()
                                .min(5, 'Selectinnez au moins 5 images')
                                
                        }),
                        path: 'images',
                    },
                    {
                        title: 'Le clients a-t-il accès à un parking/guarage ?',
                        initialValues: {
                            includeParking: '0',
                            parkingWithSupplement: 0,
                            parkingSupplement: 0,
                            numberOfPlaces: 0,
                            parkingLocation: '',
                            parkingType: ''
                        },
                        path: 'parking',
                        validationSchema: Yup.object().shape({
                            parkingSupplement: Yup.string().when('parkingWithSupplement', (parkingWithSupplement, schema) => {
                                if (parseInt(parkingWithSupplement) === 1) {
                                    return schema.required('Le tarif ne doit pas etre vide')
                                }
                                return schema.nullable()
                            }),
                            numberOfPlaces: Yup.string().when('includeParking', (includeParking, schema) => {
                                if (parseInt(includeParking) === 1) {
                                    return schema.required('Le nombre de place disponible est requis.')
                                }
                                return schema.nullable()
                            }),
                            parkingLocation: Yup.string().when('includeParking', (includeParking, schema) => {
                                if (parseInt(includeParking) === 1) {
                                    return schema.required('L\'emplacement du parking est requis.')
                                }
                                return schema.nullable()
                            }),
                            parkingType: Yup.string().when('includeParking', (includeParking, schema) => {
                                if (parseInt(includeParking) === 1) {
                                    return schema.required('Le type de parking est requis.')
                                }
                                return schema.nullable()
                            })
                        }),
                    }


                ]}
            >
                <HotelIdentityForm />
                <HotelLocationForm />
                <HotelEquipmentsForm />
                <BreakFastForm />
                <HotelImagesForm/>
                <ParkingOptions />
            </MultiStepForm>
        </div>
    )
}

export default AddHotel
