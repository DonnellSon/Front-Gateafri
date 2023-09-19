import React,{useContext} from 'react'
import CommentContent from '../commentContent/CommentContent';
import './comment.css'
const Comment = ({data}) => {
    return (
        <div className={`comment comment-light flex relative`}>
            <div style={{width:"100%"}}>
                <div className="comment-parent">
                    <CommentContent commentDate={data.createdAt} sender={data.author}>{data.content}</CommentContent>
                </div>
                {/* <div className="rep-list">
                    <CommentContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, ut? Ducimus quae</CommentContent>
                </div> */}
            </div>
        </div>
    )
}

export default Comment

