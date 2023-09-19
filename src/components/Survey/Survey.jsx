import React, { useRef, useState } from 'react'
import './Survey.css'
import { FileImageFill, Nut, Plus, PlusLg, X, XLg } from 'react-bootstrap-icons'
import SurveyOption from './SurveyOption'

const Survey = ({ options = [{},{},{}], setOptions = () => { }, readOnly = false }) => {

    const [surveyOptions, setSurveyOptions] = useState(options)
    
    const addSurveyOption = () => {
        setSurveyOptions([...surveyOptions, {title:''}])
    }
    const removeSurveyOption = (index) => {
        const options = surveyOptions.slice()
        setSurveyOptions(options.filter((m, i) => i !== index))
    }

    return (
        <div className='survey'>
            <input type="text" className='survey-title' placeholder='Votre question/titre ?'/>
            {
                surveyOptions.map((o, i) => (
                    <SurveyOption 
                        key={i}
                        index={i}
                        data={o}
                        surveyOptions={surveyOptions}
                        setSurveyOptions={setSurveyOptions}
                        removeSurveyOption={removeSurveyOption}
                    />
                ))
            }
            <div className="bottom flex justify-content-between">
                <button className="btn btn-purple" onClick={addSurveyOption}><PlusLg/></button>
                <button className="btn btn-transparent"><Nut/></button>
            </div>
        </div>
    )
}

export default Survey
