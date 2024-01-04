import React, { useEffect,useState, useRef, useContext } from 'react'
import DoDinamicTextarea from '../doDinamicTextarea/DoDinamicTextarea';
import './commentForm.scss';
import { EmojiSmile, Image, Sticky, GeoAlt, Mic, SendFill } from 'react-bootstrap-icons'
import EmojiPicker from '../EmojiPicker/EmojiPicker'
import DropDown from '../DropDown/DropDown'
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick';
import axios from 'axios';


const CommentForm = ({ commentable,parent=null, focusOnShown = false, onKeyup = () => { }, value = '', onSended = () => { } }) => {
    const cmtForm = useRef();
    const [tmpComment,setTmpComment]=useState('')
    const [emptyMessageForm, setEmptyMessageForm] = useState(false)

    const sendComment = () => {
        axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/comments`,
            method: 'post',
            data: {
                content: tmpComment,
                commentable,
                parent
            },
            withCredentials: true
        }).then((res) => {
            onSended(res.data);
            console.log(res.data, 'comment_send_success')

        }).catch((err) => {
            console.log(err.response, 'comment_send_err')

        })
    }
    return (

        <div className="comment-form" ref={cmtForm}>

            <DoDinamicTextarea
                value={value}
                emptied={emptyMessageForm} setEmptied={setEmptyMessageForm}
                onKeyup={(e) => {
                    onKeyup(e)
                    setTmpComment(e.target.innerText)
                }}
                next={
                    (
                        <>
                            <DropDown className="emoji-picker-dropdown" closeOnclickInside={false}>
                                <RequireAuthOnClick>
                                    <button><EmojiSmile size={18} /></button>
                                </RequireAuthOnClick>

                                {/* <EmojiPicker /> */}
                            </DropDown>

                            <RequireAuthOnClick>
                                <button><Image size={18} /></button>
                            </RequireAuthOnClick>
                            <RequireAuthOnClick>
                                <button><Sticky size={18} /></button>
                            </RequireAuthOnClick>
                            <RequireAuthOnClick>
                                <button><GeoAlt size={18} /></button>
                            </RequireAuthOnClick>
                            <RequireAuthOnClick>
                                <button><Mic size={18} /></button>
                            </RequireAuthOnClick>
                            <RequireAuthOnClick>
                                <button className="comment-send-btn" onClick={(e)=>{
                                    sendComment()
                                    setEmptyMessageForm(true)
                                }} disabled={tmpComment.length <= 0}>
                                    <SendFill />
                                </button>
                            </RequireAuthOnClick>
                        </>
                    )
                } />
        </div>
    )
}

export default CommentForm
