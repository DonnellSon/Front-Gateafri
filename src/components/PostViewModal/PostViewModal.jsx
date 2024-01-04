import React, { useEffect } from 'react'
import './PostViewModal.scss'
import { X, XLg } from 'react-bootstrap-icons'
import PostCard from '../PostCard/PostCard'
import { useQuery } from 'react-query'
import Modal from '../Modal/Modal'
import { getPost } from '../../api/post'
import { useState } from 'react'
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick'
import CommentForm from '../commentForm/CommentForm'
import { Gem, ChatLeft, Share } from 'react-bootstrap-icons'
import PostCardSkeleton from '../PostCard/PostCardSkeleton'

const PostViewModal = ({ postId, open = false, setOpen = () => { }, author }) => {

    const { data: post, error: postError, isLoading: postLoading } = useQuery(['repoPost',postId], () => getPost(postId))
    return (
        <Modal open={open} closeOnClickOutside={true} className='post-view-modal'>
            <div className="top">
                <h2>Posté par {(author.firstName || author.name)}</h2>
                <div className="close pointer" onClick={() => { setOpen(false) }}>
                    <XLg size={18} />
                </div>
            </div>
            <div className="body">
                {
                    postLoading ? <PostCardSkeleton /> :
                    post && <PostCard data={post} />
                }
            </div>
            {
                !postLoading && <div className="footer">
                    <div className="top">

                        <CommentForm onKeyup={(e) => {
                            // setTmpComment(e.target.innerText)
                        }} />
                    </div>
                    <div className="bottom flex gap-10">
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <Gem size={19} /><span>Evaluer</span>
                            </span>
                        </RequireAuthOnClick>
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <ChatLeft size={19} /><span>Commenter</span>
                            </span>
                        </RequireAuthOnClick>
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <Share size={19} /><span>Partager</span>
                            </span>
                        </RequireAuthOnClick>
                    </div>
                </div>
            }

        </Modal>
    )
}

export default PostViewModal
