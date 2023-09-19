import React, { useRef } from 'react'
import { FileImageFill, XLg } from 'react-bootstrap-icons'

const SurveyOption = ({ data, surveyOptions = [], setSurveyOptions = () => { }, removeSurveyOption = () => { }, index }) => {
    const editOption = (index, newValue) => {
        const opts = surveyOptions.slice()
        opts[index].title = newValue
        setSurveyOptions(opts)
    }
    const thumbInput = useRef()
    const clickThumbInput=()=>{
        thumbInput.current?.click()
    }
    return (
        <div className="survey-option flex gap-10 align-items-center">

            <div className="thumbnail relative" onClick={clickThumbInput}>
                <input type="file" style={{ display: 'none' }} ref={thumbInput} onChange={(e) => {
                    const newSurveyOptions = [...surveyOptions]
                    newSurveyOptions[index].thumbnail = { url: URL.createObjectURL(e.target.files[0]), file: e.target.files[0] }
                    setSurveyOptions(newSurveyOptions)
                }} />
                {
                    data.thumbnail?.url ?
                        <img src={data.thumbnail?.url} alt="" className='survey-thumbnail' />
                        : <FileImageFill />
                }
            </div>
            <div className="center flex flex-column flex-grow-1 gap-5">
                <input type="text" onChange={(e) => {
                    editOption(index, e.target.value)
                }} value={data.title} placeholder={`Option ${index + 1}`} />
                <div className="progress">
                    <div></div>
                </div>
            </div>
            <div className="remove" onClick={() => { removeSurveyOption(index) }}><XLg size={14} /></div>
        </div>
    )
}

export default SurveyOption
