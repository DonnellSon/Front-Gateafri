import {Formik,Form,Field} from 'formik';
import ErrorLabel from '../../components/ErrorLabel/ErrorLabel';
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
    <div className="add-hebergement-info">
        <div className="form-group">
            <label htmlFor="">Type d'hébergement</label>
            <Field className='select' as="select" name="hebergementType">
                <option value="double">Double</option>
                <option value="simple">Simple</option>
                <option value="familiale">Familiale</option>
                <option value="triple">Triple</option>
            </Field>
        </div>
        <div className="form-group">
            <label htmlFor="">Nombre d'hébergement de ce type</label>
            <Field type="number" name="hebergementNumber"/>
        </div>
        <hr />

        <div className="form-group">
            <label htmlFor="">Types de lits</label>
            <Field className='select' as="select" name="litType">
                <option value="double">Selectionner un type de lit</option>
                <option value="simple">Lit(s) simple(s) / dimension : 90-130cm</option>
                <option value="familiale">Lit(s) double(s) / dimension : 131-150cm</option>
                <option value="familiale">Lit(s) queen-size / dimension : 151-180cm</option>
                <option value="familiale">Lit(s) king-size / dimension : 181-200cm</option>
                <option value="triple">Lits superposés</option>
            </Field>
            <ErrorLabel error={currentStepErrors.litType}/>
        </div>
        <div className="form-group">
            <label htmlFor="">Nombres de lits de ce type</label>
            <Field type="number" name="litNumber"/>
        </div>
        <hr />

        <div className="form-group">
            <label htmlFor="">Nombre maximum de personnes</label>
            <Field type="number" name="occupation"/>
        </div>
    </div>
  );
};
export default HebergementInformationForm;
