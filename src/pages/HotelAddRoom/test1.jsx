import { Form, Field } from "formik";
import ErrorLabel from "../../components/ErrorLabel/ErrorLabel";
import { useState, useEffect } from "react";

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
 const [additionalElements, setAdditionalElements] = useState([]);
 const [uniqueId, setUniqueId] = useState(0); // Générateur d'ID unique

 useEffect(() => {
    // Initialiser les champs supplémentaires avec des valeurs par défaut si nécessaire
    // setAdditionalElements([{ id: uniqueId++, content: ... }]);
 }, []);

 const addAdditionalElement = () => {
    setAdditionalElements((prevElements) => [
      ...prevElements,
      {
        id: uniqueId++, // Utiliser un ID unique pour chaque élément
        content: (
          <div key={uniqueId} className="additional-element">
            {/* Contenu de l'élément supplémentaire */}
          </div>
        ),
      },
    ]);
 };

 const removeAdditionalElement = (id) => {
    setAdditionalElements((prevElements) =>
      prevElements.filter((element) => element.id !== id)
    );
 };

 return (
    <div className="add-hebergement-info">
      {/* Formulaire principal */}
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
      <div className="lits">
        <div className="form-group">
          <label htmlFor="">Types de lits</label>
          <Field className="select" as="select" name="litType">
            <option value="double">Selectionner un type de lit</option>
            <option value="simple">
              Lit(s) simple(s) / dimension : 90-130cm
            </option>
            <option value="0">Lit(s) double(s) / dimension : 131-150cm</option>
            <option value="1">Lit(s) queen-size / dimension : 151-180cm</option>
            <option value="2">Lit(s) king-size / dimension : 181-200cm</option>
            <option value="superposes">Lits superposés</option>
          </Field>
          <ErrorLabel error={currentStepErrors.litType} />
        </div>
        <div className="form-group">
          <label htmlFor="">Nombres de lits de ce type</label>
          <Field type="number" name="litNumber" />
        </div>
      </div>
      {/* Affichage des éléments supplémentaires */}
      {additionalElements.map((element) => (
        <div key={element.id}>
          {element.content}
          <button onClick={() => removeAdditionalElement(element.id)}>
            Supprimer
          </button>
        </div>
      ))}
      {/* Bouton pour ajouter un nouvel élément */}
      <button className="btn-orange" onClick={addAdditionalElement}>
        Ajouter un autre type de lit
      </button>
      <hr />
      <div className="form-group">
        <label htmlFor="">Nombre maximum de personnes</label>
        <Field type="number" name="occupation" />
      </div>
    </div>
 );
};

export default HebergementInformationForm;
