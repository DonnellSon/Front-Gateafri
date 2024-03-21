import MultiStepForm from "../../components/MuliStepForm/MultiStepForm";
import BreakFastForm from "../HotelsManager/BreakFastForm";
import HotelEquipmentsForm from "../HotelsManager/HotelEquipmentsForm";
import ParkingOptions from "../HotelsManager/ParkingOptions";
import "./CreateRoom.scss";
import * as Yup from 'yup';
import HebergementInformationForm from "./HebergementInformationForm";
import BathroomInfoForm from "./BathroomInfoForm";

const CreateRoom = () => {
  return (
    <div id="create-room">
      <MultiStepForm
                steps={[
                    {
                        title: 'Informations sur l\'hébergement',
                        initialValues: { hebergementType: 'Double', hebergementNumber: '1', litType:'', litNumber:"1", occupation:"1" },
                        path: 'informations',
                        validationSchema: Yup.object().shape({
                            litType: Yup.string().required('Le type de lit est obligatoire'),
                            // hotelStars: Yup.string().required('Le nombre d\'étoile est obligatoire'),
                        }),
                    },
                    {
                        title: 'Informations sur la salle de bains',
                        initialValues: {
                            hotelCity: '', streetName: '', hotelLocation: {
                                lat: '',
                                lng: ''
                            }
                        },
                        path: 'bathroom',
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
                <HebergementInformationForm />
                <BathroomInfoForm />
                <HotelEquipmentsForm />
                <BreakFastForm />
                <ParkingOptions />
            </MultiStepForm>
    </div>
  );
};

export default CreateRoom;
