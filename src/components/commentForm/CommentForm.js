import React, { useEffect, useRef, useContext } from 'react'
import DoDinamicTextarea from '../doDinamicTextarea/DoDinamicTextarea';
import './commentForm.css';
import { EmojiSmile, Image, Sticky, GeoAlt, Mic, SendFill } from 'react-bootstrap-icons';
const CommentForm = ({ focusOnShown = false, onKeyup = () => { }, value = '',onSend=()=>{} }) => {
    const cmtForm = useRef();
    return (

        <div className="comment-form" ref={cmtForm}>

            <DoDinamicTextarea
                value={value}
                onKeyup={(e) => {
                    onKeyup(e)
                }}
                next={
                    (
                        <>
                            <button><EmojiSmile size={18} /></button>

                            <button><Image size={18} /></button>
                            <button><Sticky size={18} /></button>
                            <button><GeoAlt size={18} /></button>
                            <button><Mic size={18} /></button>
                            <button className="comment-send-btn" onClick={onSend} disabled={value.length <= 0}>
                                <SendFill />
                            </button>
                        </>
                    )
                } />
        </div>
    )
}

export default CommentForm
