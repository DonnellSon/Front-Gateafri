import React, { Fragment, useState, useRef, useEffect } from 'react';
import './MediasSelector.scss';
import SelectorMedia from '../selectorMedia/SelectorMedia';
import { FileEarmarkImage } from 'react-bootstrap-icons';

const MediasSelector = ({ gap = 10, col = 5,setMediasState=()=>{} }) => {
    const [tmpMediasList, setTmpMediasList] = useState([]);

    useEffect(()=>{
        setMediasState(tmpMediasList.map(tmp=>tmp.file))
    },[tmpMediasList])

    const mediasInput = useRef()
    const removeTmpMedia = (index) => {
        const medias = tmpMediasList.slice();
        const med = medias.filter((m, i) => i !== index);
        setTmpMediasList(med);
    }
    const addMedias = (fileArray) => {
        const files = [...tmpMediasList];
        for (let i = 0; i < fileArray.length; i++) {
            files.push({ type: fileArray[i].type, url: URL.createObjectURL(fileArray[i]), file: fileArray[i], delay: i, index: i });
        }
        setTmpMediasList(files);
    }
    const clickMediasInput = () => {
        mediasInput.current.click();
    }
    return (

        <Fragment>


            <div className={"medias-selector square-grid"} style={{ gridTemplateColumns: `repeat(${col},1fr)`, gridGap: gap + "px" }}>

                {
                    tmpMediasList.length > 0 ? tmpMediasList.map((m, i) => {

                        return (
                            <div key={i} style={{ animation: `scaleIn .1s ${m.delay / 10}s forwards` }} className="m-parent scaleIn">
                                {/* <div className="relative">
                                            {
                                                
                                                    (/^image/.test(m.type)) ?
                                                    <img src={m.url} alt="go" />
                                                    : ((/^video/.test(m.type)) ?
                                                        <video src={m.url}></video>
                                                        : ''
                                                    )

                                            }
                                            
                                            <div onClick={()=>{removeMedia(i)}} className="remove">&times;</div>
                                        </div> */}
                                <SelectorMedia media={m} removeSelf={() => { removeTmpMedia(i) }} />
                            </div>
                        )
                    }) : ''
                }
                <div onClick={clickMediasInput} className="fake-image-selector-input" style={{ minWidth: 0 }}>
                    <div>
                        <div><FileEarmarkImage /></div>
                        <span>Selectionner</span>
                    </div>
                    <input multiple ref={mediasInput} type="file" onChange={(e) => {
                        addMedias(e.target.files);
                    }}
                        style={{ display: 'none' }} />
                </div>
            </div>

        </Fragment >

    )
}

export default MediasSelector;