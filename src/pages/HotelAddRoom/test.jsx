import { Formik, Form, Field, FieldArray } from "formik";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";
import { useState } from "react";

const HebergementInformationForm = ({
  formData,
  setFormData,
  initialFields,
  setInitialFields = () => {},
  handleChange = () => {},
  currentStepValues,
  currentStepErrors,
  touched,
}) => {
  return (
    <Formik
      initialValues={initialFields}
      onSubmit={(values) => {
        // Gérer la soumission du formulaire
        console.log(values);
      }}
      
    >
      {({ values }) => (
        <>
          <div className="add-hebergement-info">
            {/* Autres champs du formulaire */}
            <div className="form-group">
              <label htmlFor="">Type d'hébergement</label>
              <Field className="select" as="select" name="hebergementType">
                <option value="double">Double</option>
                <option value="simple">Simple</option>
                <option value="familiale">Familiale</option>
                <option value="triple">Triple</option>
              </Field>
            </div>
            <div className="form-group">
              <label htmlFor="">Nombre d'hébergement de ce type</label>
              <Field type="number" name="hebergementNumber" />
            </div>
            <hr />
            <FieldArray name="lits">
              {({ push, remove }) => (
                <div>
                  {values.lits.map((lit, index) => (
                    <div key={index}>
                      <div className="form-group">
                        <div className="head flex justify-content-between align-items-center">
                        <label htmlFor={`litType-${index}`}>
                          {index > 0 ?'Autre types de lits' :'Types de lits'}
                        </label>
                        {index > 0 && (
                        <span className="supprime" type="button" onClick={() => remove(index)}>
                          Supprimer
                        </span>
                      )}
                      </div>
                        <Field
                          className="select"
                          as="select"
                          name={`lits.${index}.litType`}
                          id={`litType-${index}`}
                        >
                          {/* Options */}
                          <option value="double">
                            Selectionner un type de lit
                          </option>
                          <option value="simple">
                            Lit(s) simple(s) / dimension : 90-130cm
                          </option>
                          <option value="0">
                            Lit(s) double(s) / dimension : 131-150cm
                          </option>
                          <option value="1">
                            Lit(s) queen-size / dimension : 151-180cm
                          </option>
                          <option value="2">
                            Lit(s) king-size / dimension : 181-200cm
                          </option>
                          <option value="superposes">Lits superposés</option>
                        </Field>
                        <ErrorLabel error={currentStepErrors.lits && currentStepErrors.lits[index] && currentStepErrors.lits[index].litType} />
                      </div>
                      <div className="form-group">
                        <label htmlFor={`litNumber-${index}`}>
                          Nombres de lits de ce type
                        </label>
                        <Field
                          type="number"
                          name={`lits.${index}.litNumber`}
                          id={`litNumber-${index}`}
                        />
                      </div>                      
                    </div>
                  ))}
                  <button
                    className="btn-orange"
                    type="button"
                    onClick={() =>
                      push({
                        litType: "",
                        litNumber: "",
                      })
                    }
                  >
                    Ajouter un autre type de lit
                  </button>
                </div>
              )}
            </FieldArray>
            <hr />
            <div className="form-group">
              <label htmlFor="">Nombre maximum de personnes</label>
              <Field type="number" name="occupation" />
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default HebergementInformationForm;
