import { Field, ErrorMessage } from "formik";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";
import AmountInput from "../../components/AmountInput/AmountInput";
const AccommodationPrice = ({
  formData,
  setFormData,
  setInitialFields = () => {},
  initialFields,
  currentStepValues,
  currentStepErrors,
}) => {
  return (
    <div className="accommodation-price">
      <div className="form-group">
        <label htmlFor="">Tarif pour une nuit</label>
        <div className="flex align-items-center gap-10">
          <AmountInput/>
          <span>/nuit</span>
        </div>
        {/* <ErrorLabel error={currentStepErrors.hebergementTarif} /> */}
      </div>
      <hr />
      <span>
        N'ayez aucune crainte, vous aurez la possibilité de le modifier à tout
        moment. Vous pourrez également ajuster les tarifs en fonction des jours
        de la semaine, des week-ends ou des saisons, vous permettant ainsi de
        maintenir une maîtrise totale sur vos revenus
      </span>
    </div>
  );
};

export default AccommodationPrice;
