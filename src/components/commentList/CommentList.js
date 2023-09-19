import React, { useContext, useEffect } from 'react';
import { ArrowClockwise, ChevronDown } from 'react-bootstrap-icons';
import Comment from '../comment/Comment';
import CommentForm from '../commentForm/CommentForm';
import './commentList.css';
const CommentList = ({comments}) => {
    return (
        <div className={`comment-list comment-list-light`}>
            <div className='comment-list-top flex align-items-center justify-content-between'>
                <h4>Commentaires</h4>
                <span className='flex align-items-center gap-5'>Les plus pertinents <ChevronDown /></span>
            </div>
            <span className='flex align-items-center gap-5 py-15'><ArrowClockwise /> Voir plus de commentaires</span>
            <div className="comment-list-list">
                {
                    comments?.map((c,i)=><Comment key={i} data={c}/>)
                }
            </div>
            {/* <div className='comment-list-bottom-form'>
                <CommentForm />
            </div> */}
        </div>

    )
}

export default CommentList