import React from 'react';
import MultiStepForm from "../../components/MuliStepForm/MultiStepForm";
import "./CreateRoom.scss";
import * as Yup from 'yup';
import BathroomInfoForm from './BathroomInfoForm';
import AccommodationInfoForm from './AccommodationInfoForm';
import AccommodationName from './AccommodationName';
import AccommodationPrice from './AccommodationPrice';


const CreateRoom = () => {
  const handleSubmit = (data) => {
    // Convertir les données du formulaire en chaîne JSON pour l'affichage dans l'alerte
    const formDataString = JSON.stringify(data, null, 2);
    alert(`Données du formulaire:\n${formDataString}`);
  };
 return (
    <div id="create-room">
      <MultiStepForm
        onSubmitData={handleSubmit}
        steps={[
          {
            title: 'Informations sur l\'hébergement',
            initialValues: {
              accommodationType: '',
              accommodationNumber: '',
              beds: [{ bedType: '', bedNumber: '' }], // Initialiser avec un élément vide
              occupation: '',
            },
            path: 'informations',
            validationSchema: Yup.object().shape({
                accommodationType: Yup.string().required('Le type d\'hébergement est obligatoire'),
                accommodationNumber: Yup.number().required('Le nombre d\'hébergement est obligatoire'),
                beds: Yup.array()
                .of(
                   Yup.object().shape({
                     bedType: Yup.string().required('Le type de lit est obligatoire'),
                     bedNumber: Yup.number().required('Le nombre de lits est obligatoire'),
                   })
                )
                .required('Ajoutez au moins un type de lit'),
                occupation: Yup.number().required('Le nombre maximum de personnes est obligatoire'),
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
            initialValues: { accommodationName: '' },
            path: 'nom',
            validationSchema: Yup.object().shape({
              accommodationName: Yup.string().required('Le nom de l\'hébergement est requise'),
            }),
          },
          {
            title: 'Tarif de l\'hébergement',
            initialValues: { accommodationTarif: [{value:"0", currency:{}}] },
            path: 'tarif',
            validationSchema: Yup.object().shape({
              accommodationTarif: Yup.object().shape({
                value: Yup.string().required('Veuillez indiquer votre prix.'),
                currency: Yup.object().shape({
                  id: Yup.string(),
                  code: Yup.string(),
                  name: Yup.string(),
                  symbol: Yup.string(),
                }).notRequired(),
              }),
            }),
          }
        ]}
      >
        <AccommodationInfoForm />
        <BathroomInfoForm />
        <AccommodationName />
        <AccommodationPrice />
      </MultiStepForm>
    </div>
 );
};

export default CreateRoom;
