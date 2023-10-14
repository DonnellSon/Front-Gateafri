import React, { useEffect, useRef, useState } from 'react'
import './Message.scss'
import {  ThreeDots } from 'react-bootstrap-icons'
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom'

const med = [
    'img/video/gims.jpeg',
    'img/entreprises/d.jpg',
    'img/entreprises/j.jpg',
]

const Message = ({ children, medias = [] }) => {
    const msgImgList = useRef()
    const right = useRef()
    const [width, setWidth] = useState(500)
    const [mediaList, setMediaList] = useState(medias)
    useEffect(() => {
        if (right.current && msgImgList.current) {
            msgImgList.current.style.width = `${(((mediaList.length >= 4 ? 4 : mediaList.length) * 400) / 4) - ((4 * (mediaList.length >= 4 ? 4 : mediaList.length)) + 6)}px`
            msgImgList.current.style.gridTemplateColumns = `repeat(${(mediaList.length >= 4 ? 4 : mediaList.length)},1fr)`
        }
    }, [medias])
    return (
        <div className="message">
            <div className="left">
                <p>{children}</p>
                {
                    mediaList.length > 0 ?
                        <div className="imgs" ref={msgImgList}>
                            {
                                medias.map((m, i) =>
                                (
                                    <div key={i} className="div">
                                        <div>
                                            <img src={m} alt="" />
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                        : ''
                }
            </div>
            <div className="right" ref={right}>
                <DropDown>
                    <button><ThreeDots /></button>
                    <ul>
                        <li>
                            <Link>Repondre</Link>
                        </li>
                        <li>
                            <Link>Modifier</Link>
                        </li>
                        <li>
                            <Link>transferer</Link>
                        </li>
                        <li>
                            <Link>Suprimer</Link>
                        </li>
                    </ul>
                </DropDown>
            </div>
        </div>
    )
}

export default Message
