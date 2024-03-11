import React, { useState, useEffect } from 'react';
import './MultiStepForm.scss'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Step from './Step';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

const MultiStepForm = ({ steps, children }) => {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});
    const [validSteps, setValidSteps] = useState(new Array(steps.length).fill(false));
    const [activeStep, setActiveStep] = useState(0)
    const [animationAction, setAnimationAction] = useState('NEXT')
    const navigate = useNavigate()

    useEffect(() => {
        setActiveStep(0)
    }, [])

    useEffect(()=>{
        console.log(formData,'alldata')
    },[formData])

    useEffect(() => {
        const valid = validSteps.every(step => step === true);
        if (valid) {
            // Si toutes les étapes sont valides, réinitialisez les erreurs du formulaire
            setFormErrors({});
        }
    }, [validSteps]);

    const handleStepSubmit = (data, errors, stepIndex) => {
        // Si aucune erreur, mettez à jour les données du formulaire et marquez cette étape comme valide
        const updatedValidSteps = [...validSteps];
        updatedValidSteps[stepIndex] = true;
        setValidSteps(updatedValidSteps);
        const nextStep = stepIndex + 2
        if (nextStep > steps.length) {
            alert('sendToDatabase')
        } else {
            setAnimationAction('NEXT')
            setActiveStep(a => a + 1)
            navigate(`${steps[stepIndex + 1].path}`)
        }
    };

    const handleChange = (data) => {
        setFormData({ ...formData, ...data });
    }



    return (
        <div className='multi-step-form'>
            <div className="top">
                <div className="timeline">
                    {
                        steps.map((s, i) => <div key={i} className={`${activeStep === i ? 'active' : ''}`}></div>)
                    }
                </div>
            </div>
            <div className="center">
                <AnimatePresence>
                    <Routes>
                        {steps.map((step, index) => (
                            <Route key={index} path={step.path} element={index === 0 || validSteps[index - 1] ? <Step
                                {...step}
                                title={step.title}
                                onChange={(data) => handleChange(data)}
                                onSubmit={(data, errors) => handleStepSubmit(data, errors, index)}
                                formData={formData}
                                setFormData={setFormData}
                                formErrors={formErrors}
                                validSteps={validSteps}
                                currentStep={index}
                                setActiveStep={setActiveStep}
                                lastPath={steps[index - 1]?.path}
                                animationAction={animationAction}
                                setAnimationAction={setAnimationAction}
                            >{children[index]}</Step> : <Navigate to={`../${steps[index - 1]?.path}`}/>
                            } />
                        ))}
                    </Routes>
                </AnimatePresence>
            </div>

        </div>
    );
};


export default MultiStepForm;