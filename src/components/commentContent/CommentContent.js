import React, { useState, useRef, useContext } from 'react'
import './commentContent.scss';
import CommentForm from '../commentForm/CommentForm';
import Avatar from '../Avatar/Avatar';
import { Gem, ThreeDots } from 'react-bootstrap-icons';
import moment from '../../moment'
import { useSelector } from 'react-redux';
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick';
import DropDown from '../DropDown/DropDown';
import { Link } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { deleteComment } from '../../api/comment';
import { flatInfiniteQuery, chunckArray } from '../../functions';
import { useQueryClient } from '@tanstack/react-query';

const CommentContent = ({ id, children, queryKey = [], sender, commentDate, parentId = null, onReplied = () => { } }) => {

    const [cmtFormShown, setCmtFormShown] = useState(false);
    const { user } = useSelector(store => store.user)
    const queryClient = useQueryClient()

    const cmtContent = useRef();
    const toggleCmtForm = (e) => {
        e.preventDefault()
        setCmtFormShown(!cmtFormShown)
        cmtFormShown ? cmtContent.current.classList.remove("cmtFormShown") : cmtContent.current.classList.add("cmtFormShown")
    }

    const {
        mutate: deleteCommentFn,
        error: deleteCommentErr,
        isPending: deleteCommentLoading } = useMutation({
            mutationFn: () => deleteComment(id),
            onSuccess: (deletedComment) => {
                const newData = flatInfiniteQuery()
                queryClient.setQueryData(queryKey, (old) => {
                    const newArray = flatInfiniteQuery(old).filter((c, i) => c.id !== id)
                    return {
                        ...old,
                        pages: chunckArray([...newArray], 5).map((data, i) => ({
                            data,
                            nextPage: i + 2,
                            totalItems: old.pages[0].data.totalItems - 1
                        }))
                    }
                })
            },
        })

        const {
            mutate: addReplyFn,
            error: addReplyErr,
            isPending: addReplyLoading } = useMutation({
                mutationFn: () => deleteComment(id),
                onSuccess: (newReply) => {
                    const newData = flatInfiniteQuery()
                    queryClient.setQueryData(['commentReplies',parentId ?? id], (old) => {
                        
                    })
                },
            })

    return (
        <>
            <div className={`comment-content comment-content-light flex`} ref={cmtContent}>
                <div className="comment-content-avatar-parent">
                    <Avatar h={32} w={32} src={sender?.activeProfilePicture?.fileUrl} />
                </div>

                <div className="relative" style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex' }}>
                        <div className="comment-body relative">
                            <div className="triangle"></div>
                            <div className="flex j-between gap-10">
                                <p className={`commenter-name m-0 light-txt-color-1`}>{sender?.firstName}{sender?.lastName && " " + sender?.lastName}</p>
                                <small className="comment-date">{moment(commentDate).fromNow()}</small>
                            </div>
                            <p className={`comment-txt m-0 light-txt-color-2 txt-medium`}>
                                {children}
                            </p>

                        </div>
                        <div className='comment-content-left flex flex-column justify-content-between align-items-center'>
                            <span role="button" className={`light-txt-color-1`}><Gem size={20} /></span>
                            <DropDown placement='bottom-start'>
                                <span className='com-more-btn pointer'><ThreeDots size={18} /></span>
                                <ul>
                                    <li>
                                        <Link onClick={(e)=>{
                                            e.preventDefault()
                                            deleteCommentFn()
                                        }}>Supprimer</Link>
                                    </li>
                                    <li>
                                        <Link>Signaler</Link>
                                    </li>
                                </ul>
                            </DropDown>
                        </div>

                    </div>
                    <div className="com-footer flex gap-10">
                        <RequireAuthOnClick><a href="#" onClick={toggleCmtForm} className={`light-txt-color-1`}>Repondre</a></RequireAuthOnClick>
                    </div>
                </div>

            </div>
            {
                cmtFormShown &&
                <div className="cmtForm" style={{ marginBottom: 10 }}>
                    <CommentForm parent={parentId ? `/comments/${parentId}` : null} focusOnShown={true} onSended={
                        (data) => {
                            onReplied(data)
                        }
                    } />
                </div>
            }
        </>
    )
}

export default CommentContent
