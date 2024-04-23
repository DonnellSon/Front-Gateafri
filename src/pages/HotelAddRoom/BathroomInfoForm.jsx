import { Field, ErrorMessage } from "formik";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";
import { useEffect } from "react";
const BathroomInfoForm = ({
  currentStepValues,
  initialFields,
  setInitialFields,
  currentStepErrors
}) => {      
    useEffect(() => {
        setInitialFields(prev=>({...prev,...currentStepValues}))
    }, [currentStepValues])
  useEffect(() => {
    setInitialFields(currentStepValues);
  }, [currentStepValues]);
  return (
    <div className="bathroom-info">
      <div className="form-group">
        <label htmlFor="">Type de salle de bains.</label>
        <ul>
          <li className="flex gap-5">
            <Field
              type="radio"
              name="bathroomType"
              value={1}
              checked={(initialFields.bathroomType == "1")}
            />
            <span> Privée</span>
          </li>
          <li className="flex gap-5">
            <Field
              type="radio"
              name="bathroomType"
              value={0}
              checked={(initialFields.bathroomType == "0")}
            />
            <span> Partagée</span>
          </li>
        </ul>
        <ErrorLabel error={currentStepErrors.bathroomType} />

      </div>
      <div className="form-group">
        <label htmlFor="">Equipements disponibles</label>
        <div
          className="form-group grid"
          role="group"
          aria-labelledby="checkbox-group"
        >
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="Papier toilette" />
              <span>Papier toilette</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field
                type="checkbox"
                name="bathroomEquipments"
                value="Douche"
              />
              <span>Douche</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="1" />
              <span>Toilettes</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="2" />
              <span>Sèche-cheveux</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="3" />
              <span>Baignoire</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="4" />
              <span>Articles de toilette gratuits</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="5" />
              <span>Bidet</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="6" />
              <span>Chaussons</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="7" />
              <span>Peignoir</span>
            </label>
          </div>
          <div>
            <label className="flex align-items-center gap-5">
              <Field type="checkbox" name="bathroomEquipments" value="8" />
              <span>Baignoire spa</span>
            </label>
          </div>
        </div>
        <div className="form-group">
          <ErrorLabel error={currentStepErrors.bathroomEquipments} />
        </div>
      </div>
    </div>
  );
};

export default BathroomInfoForm;
