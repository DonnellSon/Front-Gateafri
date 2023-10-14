import React, { useState, useContext, useEffect, useRef, useLayoutEffect } from 'react'
import './Modal.scss'
import useClickOutside from '../../Hooks/useClickOutside'
import { createPortal } from 'react-dom'
import MediaContext from '../../context/MediaContext'
import { SMARTPHONE } from '../../constants/MediaTypeConstants'

const ModalContentRef = ({ children, closeOnClickOutside = true, onClose = () => { } }) => {


    const { deviceType } = useContext(MediaContext)
    const modalContentRef = useRef()
    useClickOutside(modalContentRef, () => {
        if (closeOnClickOutside) {
            onClose(false)
        }
    })
    const adjustModalHeight = () => {
        if (deviceType === SMARTPHONE) {
            modalContentRef.current.style.height = window.innerHeight + 'px'
            modalContentRef.current.style.alignSelf = 'flex-start'
        }
    }
    
    useLayoutEffect(() => {
        adjustModalHeight()
        window.addEventListener('resize', adjustModalHeight)
        return () => {
            window.removeEventListener('resize', adjustModalHeight)
        }
    }, [])
    return <div className="modalContent" ref={modalContentRef}>
        {
            children
        }
    </div>
}


const Modal = ({ children, open = false, onClose = () => { },onClick=()=>{}, closeOnClickOutside = true, className = null }) => {
    const modalContent = useRef()
    const adjustModalHeight = () => {
        alert(modalContent.current)
    }


    return (
        (open && document.querySelector('#App')) && createPortal(<div className={`modal${className ? ' ' + className : ''}`} onClick={onClick}>
            <ModalContentRef closeOnClickOutside={closeOnClickOutside} onClose={onClose}>
                {
                    children
                }
            </ModalContentRef>
        </div>, document.querySelector('#App'))
    )
}

export default Modal