import React, { useState, useRef, useContext } from 'react'
import './commentContent.css';
import CommentForm from '../commentForm/CommentForm';
import Avatar from '../Avatar/Avatar';
import { Gem,ThreeDots } from 'react-bootstrap-icons';
import moment from '../../moment'
const CommentContent = ({ children,sender,commentDate }) => {
    const [cmtFormShown, setCmtFormShown] = useState(false);
    const cmtContent = useRef();
    const toggleCmtForm = (e) => {
        e.preventDefault();
        setCmtFormShown(!cmtFormShown);
        cmtFormShown ? cmtContent.current.classList.remove("cmtFormShown") : cmtContent.current.classList.add("cmtFormShown");
    }
    return (
        <>
            <div className={`comment-content comment-content-light flex`} ref={cmtContent}>
                <div className="comment-content-avatar-parent">
                    <Avatar h={32} w={32} />
                </div>

                <div className="relative" style={{display:'flex',flexDirection:'column'}}>
                    <div style={{display:'flex'}}>
                        <div className="comment-body relative">
                            <div className="triangle"></div>
                            <div className="flex j-between gap-10">
                                <p className={`name-medium m-0 light-txt-color-1`}>{sender?.firstName}{sender?.lastName && " "+sender?.lastName}</p>
                                <small className="comment-date">{moment(commentDate).fromNow()}</small>
                            </div>
                            <p className={`comment-txt m-0 light-txt-color-2 txt-medium`}>
                                {children}
                            </p>

                        </div>
                        <span className='com-more-btn'><ThreeDots size={18}/></span>
                    </div>
                    <div className="com-footer flex gap-10">
                        <a href="#" className={`light-txt-color-1`}><Gem size={20}/></a>
                        <a href="#" onClick={toggleCmtForm} className={`light-txt-color-1`}>Repondre</a>
                    </div>
                </div>

            </div>
            {
                cmtFormShown &&
                <div className="cmtForm" style={{ marginBottom:10 }}>
                    <CommentForm focusOnShown={true} />
                </div>
            }
        </>
    )
}

export default CommentContent
