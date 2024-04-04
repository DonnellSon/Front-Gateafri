import React from 'react';
import MultiStepForm from "../../components/MuliStepForm/MultiStepForm";
import "./CreateRoom.scss";
import * as Yup from 'yup';
import BathroomInfoForm from './BathroomInfoForm';
import AccommodationInformationForm from './AccommodationInformationForm';
import AccommodationName from './AccommodationName';
import AccommodationPrice from './AccommodationPrice';


const CreateRoom = () => {
 return (
    <div id="create-room">
      <MultiStepForm
        steps={[
          {
            title: 'Informations sur l\'hébergement',
            initialValues: {
              hebergementType: '',
              hebergementNumber: 1,
              lits: [{ litType: '', litNumber: 1 }], // Initialiser avec un élément vide
              occupation: 1,
            },
            path: 'informations',
            validationSchema: Yup.object().shape({
            //   hebergementType: Yup.string().required('Le type d\'hébergement est obligatoire'),
            //   hebergementNumber: Yup.number().required('Le nombre d\'hébergement est obligatoire'),
            //   lits: Yup.array()
            //   .of(
            //      Yup.object().shape({
            //        litType: Yup.string().required('Le type de lit est obligatoire'),
            //        litNumber: Yup.number().required('Le nombre de lits est obligatoire'),
            //      })
            //   ),
            //   .required('Ajoutez au moins un type de lit'),
            //   occupation: Yup.number().required('Le nombre maximum de personnes est obligatoire'),
            }),
          },
          {
            title: 'Informations sur la salle de bains',
            initialValues: {
              bathroomType: "",
              bathroomEquipments: [],
            },
            path: 'bathroom',
            validationSchema: Yup.object().shape({
              bathroomType: Yup.string().required('Le type de salle de bain est requise'),
              bathroomEquipments: Yup.array()
                .min(1, 'Veuillez sélectionner au moins 1 équipement')
                .required('Veuillez sélectionner au moins 1 équipement'),
            }),
          },
          {
            title: 'Nom de l\'hébergement',
            initialValues: { hebergementName: '' },
            path: 'nom',
            validationSchema: Yup.object().shape({
              hebergementName: Yup.string().required('Le nom de l\'hébergement est requise'),
            }),
          },
          {
            title: 'Tarif de l\'hébergement',
            initialValues: { hebergementTarif: "0" },
            path: 'tarif',
            validationSchema: Yup.object().shape({
              hebergementTarif: Yup.string().required('Veuillez indiquer votre prix.'),
            }),
          }
        ]}
      >
        <AccommodationInformationForm />
        <BathroomInfoForm />
        <AccommodationName />
        <AccommodationPrice />
      </MultiStepForm>
    </div>
 );
};

export default CreateRoom;
