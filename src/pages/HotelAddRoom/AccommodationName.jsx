import { Formik, Form, Field } from "formik";
import { useEffect } from "react";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";

const AccommodationName = ({
  formData,
  setFormData,
  setInitialFields = () => {},
  initialFields,
  currentStepValues,
  currentStepErrors,
}) => {
  useEffect(() => {
    setInitialFields(currentStepValues);
  }, [currentStepValues]);
  return (
    <div className="accommodation-name">
      <span>
        C'est le nom que les clients verront sur la page de votre hébergement.
        Optez pour un nom qui correspond le mieux à cet hébergement.
      </span>
      <div className="form-group mt-20">
        <label htmlFor="">Nom de l'hebergement</label>
        <Field as="select" name="hebergementName">
          <option value="Selectionez un nom pour cet hébergement">
            Selectionez un nom pour cet hébergement
          </option>
          <option value="chambre double">Chambre Double</option>
          <option value="chambre double">Chambre Double(avec terasse)</option>
        </Field>
        <ErrorLabel error={currentStepErrors.hebergementName} />
      </div>
    </div>
  );
};

export default AccommodationName;
