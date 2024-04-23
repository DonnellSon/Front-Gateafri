import { Formik, Form, Field, FieldArray } from "formik";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";
import { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons";

const AccommodationInformationForm = ({
  formData,
  setFormData,
  initialFields,
  setInitialFields = () => {},
  handleChange = () => {},
  currentStepValues,
  currentStepErrors,
  touched,
}) => {
  const [bedList, setBedList] = useState([{ bedType: "", bedNumber: "" }]);

  const addBed = () => {
    setBedList([...bedList, { bedType: "", bedNumber: "" }]);
  };

  const removeBed = (index) => {
    const newBedList = [...bedList];
    newBedList.splice(index, 1);
    setBedList(newBedList);
  };
  useEffect(() => {
    setInitialFields((prev) => ({ ...prev, ...currentStepValues }));
  }, [currentStepValues]);

  return (
    <>
      <div className="add-accommodation-info">
        <div className="flex gap-10">
          <div className="select-container">
            <label htmlFor="">Type d'hébergement</label>
            <Field className="select" as="select" name="accommodationType">
              <option value="">Sélectionner votre type d'hébergement</option>
              <option value="double">Double</option>
              <option value="simple">Simple</option>
              <option value="familiale">Familiale</option>
              <option value="triple">Triple</option>
            </Field>
            <ErrorLabel error={currentStepErrors.accommodationType} />
          </div>
          <div className="form-group">
            <label htmlFor="">Nombre d'hébergement de ce type</label>
            <Field type="number" name="accommodationNumber" />
            <ErrorLabel error={currentStepErrors.accommodationNumber} />
          </div>
        </div>
        <hr />
        <div>
          {bedList.map((bed, index) => (
            <div
              key={index}
              className="flex gap-10"
              style={{ marginTop: index > 0 && "20px" }}
            >
              <div className="select-container">
                <div className="flex align-items-center justify-content-between">
                  <label>
                    {index > 0 ? "Autre Type de lit" : "Type de lit"}
                  </label>
                </div>
                <Field as="select" name={`beds[${index}].bedType`}>
                  <option value="">Sélectionner un type de lit</option>
                  <option value="simple">Lit(s) simple(s)</option>
                  <option value="double">Lit(s) double(s)</option>
                </Field>
                <ErrorLabel
                  error={
                    currentStepErrors.beds &&
                    currentStepErrors.beds[index]?.bedType
                  }
                />
              </div>
              <div>
                <label>Nombre de lits de ce type</label>
                <Field type="number" name={`beds[${index}].bedNumber`} />
                <ErrorLabel
                  error={
                    currentStepErrors.beds &&
                    currentStepErrors.beds[index]?.bedNumber
                  }
                />
              </div>
              {index > 0 ? (
                <div
                  className="delete"
                  type="button"
                  onClick={() => removeBed(index)}
                >
                  <Trash size={20} />
                </div>
              ) : (
                <div className="disabled">
                  <Trash size={20} />
                </div>
              )}
            </div>
          ))}
          <button className="btn-orange mt-10" type="button" onClick={addBed}>
            Ajouter un autre type de lit
          </button>
        </div>
        <hr />
        <div className="form-group">
          <label htmlFor="">Nombre maximum de personnes</label>
          <Field type="number" name="occupation" />
          <ErrorLabel error={currentStepErrors.occupation} />
        </div>
      </div>
    </>
  );
};

export default AccommodationInformationForm;
