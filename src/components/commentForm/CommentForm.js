import React, { useEffect, useState, useRef, useContext } from 'react'
import DoDinamicTextarea from '../doDinamicTextarea/DoDinamicTextarea';
import './commentForm.scss';
import { EmojiSmile, Image, Sticky, GeoAlt, Mic, SendFill } from 'react-bootstrap-icons'
import EmojiPicker from '../EmojiPicker/EmojiPicker'
import DropDown from '../DropDown/DropDown'
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick';
import axios from 'axios';
import CircleLoader from '../CircleLoader/CircleLoader';
import { useMutation } from '@tanstack/react-query';
import { sendComment } from '../../api/comment';

const CommentForm = ({ commentable, parent = null, focusOnShown = false, onKeyup = () => { }, value = '', onSended = () => { } }) => {
    const cmtForm = useRef();
    const [tmpComment, setTmpComment] = useState('')
    const [emptyMessageForm, setEmptyMessageForm] = useState(false)

    const {
        mutate: addCommentFn,
        error: addCommentErr,
        isPending: addCommentLoading } = useMutation({
            mutationFn: () => sendComment(tmpComment, commentable, parent),
            onSuccess: (newComment) => {
                onSended(newComment)
            },
        })

    // const sendComment = () => {
    //     setIsLoading(true)
    //     axios({
    //         url: `${process.env.REACT_APP_API_DOMAIN}/comments`,
    //         method: 'post',
    //         data: {
    //             content: tmpComment,
    //             commentable,
    //             parent
    //         },
    //         withCredentials: true
    //     }).then((res) => {
    //         onSended(res.data);
    //         setIsLoading(false)
    //         console.log(res.data, 'comment_send_success')
    //         return res.data

    //     }).catch((err) => {
    //         setIsLoading(false)
    //         console.log(err.response, 'comment_send_err')
    //     })
    // }
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
                            {/* <DropDown className="emoji-picker-dropdown" closeOnclickInside={false}>
                                <RequireAuthOnClick>
                                    <button><EmojiSmile size={18} /></button>
                                </RequireAuthOnClick>

                                {/* <EmojiPicker />
                            </DropDown> */}
                            <button><Image size={18} /></button>
                            <button><Sticky size={18} /></button>
                            <button><GeoAlt size={18} /></button>
                            <button><Mic size={18} /></button>
                            <button className="comment-send-btn" onClick={(e) => {
                                addCommentFn()
                                setEmptyMessageForm(true)
                            }} disabled={tmpComment.length <= 0}>
                                {
                                    addCommentLoading ? <CircleLoader /> : <SendFill />
                                }
                            </button>
                        </>
                    )
                } />
        </div>
    )
}

export default CommentForm
