import React, { useContext, useEffect, useRef, useState, useMemo } from 'react'
import './Message.scss'
import { ThreeDots } from 'react-bootstrap-icons'
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom'
import MessageAudioVisualiser from '../MessageAudioVisualizer/MessageAudioVisualiser'
import { WaveSurfer } from 'wavesurfer-react'
import NavigableList from '../Input/NavigableList/NavigableList'
import MediaContext from '../../context/MediaContext'
import { SMARTPHONE, TABLET } from '../../constants/MediaTypeConstants'

const Message = ({ children, medias = [], audio = null }) => {
    const msgImgList = useRef()
    const right = useRef()
    const [width, setWidth] = useState(500)
    const [mediaList, setMediaList] = useState(medias)
    const {deviceType}=useContext(MediaContext)
    useEffect(()=>{
        setMediaList(medias)
    },[medias])
    useEffect(() => {
        console.log(audio, 'Audio')
    }, [audio])
    useEffect(()=>{
        if (right.current && msgImgList.current) {
            const col=mediaList.length>1 ? (deviceType === SMARTPHONE ? 2 : (deviceType===TABLET ? 3 : 4)) : 4
            msgImgList.current.style.width = mediaList.length>1 ? `${(((mediaList.length >= col ? col : mediaList.length) * (col * 100)) / col) - ((col * (mediaList.length >= col ? col : mediaList.length)) + 6)}px` : 'auto'
            msgImgList.current.style.gridTemplateColumns = `repeat(${(mediaList.length >= col ? col : mediaList.length)},1fr)`
        }
    },[mediaList.length,deviceType])
    
    return (
        <div className="message">
            <div className="left">
                {
                    children && <p>{children}</p>
                }
                {
                    
                    // <div className="audio">


                    //     <MessageAudioVisualiser url='https://localhost:8000/upload/audio/msgAudios/65f299928439b_SpotifyMate.com - Oublie-le - Dadju.mp3'/>
                    // </div>
                }
                {
                    mediaList.length > 0 &&
                    <>
                    
                    <div className={`imgs${mediaList.length<2 ? ' simple' : ''}`} ref={msgImgList}>
                            
                            {
                                mediaList.map((m, i) =>
                                (
                                    <div key={i} className="div aspect-ratio-1">
                                        <img className='aspect-ratio-1' src={m.fileUrl} alt="" />
                                    </div>
                                )
                                )
                            }
                        </div>
                    </>
                    
                }
            </div>
            <div className="right" ref={right}>
                <DropDown>
                    <button><ThreeDots /></button>
                    <NavigableList startIndex={0}>
                        <Link>Repondre</Link>
                        <Link>Modifier</Link>
                        <Link>transferer</Link>
                        <Link>Suprimer</Link>
                    </NavigableList>
                </DropDown>
            </div>
        </div>
    )
}

export default Message
