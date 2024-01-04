import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { getCommentReplies } from '../../api/comment';
import CommentContent from '../commentContent/CommentContent';
import './comment.css'
const Comment = ({ data }) => {
    const {
        data: replies,
        error: repliesError,
        isLoading: repliesLoading,refetch } = useQuery(['commentReplyRepo',data.id], () => getCommentReplies(data.id))
    return (
        <div className={`comment comment-light flex relative`}>
            <div style={{ width: "100%" }}>
                <div className="comment-parent">
                    <CommentContent onReplied={refetch} parentId={data.id} commentDate={data.createdAt} sender={data.author}>{data.content}</CommentContent>
                </div>
                <div className="rep-list">
                    {
                        replies && replies.reverse().map((r)=><CommentContent onReplied={refetch} parentId={data.id} commentDate={r.createdAt} sender={r.author}>{r.content}</CommentContent>)
                    }
                    
                </div>
            </div>
        </div>
    )
}

export default Comment

