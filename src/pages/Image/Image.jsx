import React, { useEffect, useRef, useState } from 'react'
import { ChevronBarLeft, ChevronLeft, ChevronRight, Download, Fullscreen, Plus, PlusLg, ZoomIn, ZoomOut } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import CommentForm from '../../components/commentForm/CommentForm'
import CommentList from '../../components/commentList/CommentList'
import './Image.scss'
import { Gem, ChatLeft, Share, Clipboard } from 'react-bootstrap-icons'
import Tab from '../../components/Tabs/Tab'
import Tabs from '../../components/Tabs/Tabs'
import { useLocation } from 'react-router-dom';

import axios from 'axios'
import { useParams } from 'react-router-dom'
import RequireAuthOnClick from '../../components/RequireAuthOnclick/RequireAuthOnClick'

const Image = () => {
    const { image_id } = useParams()
    const img = useRef()
    const [width, setImgWidth] = useState(0)
    const [height, setImgHeight] = useState(0)
    const [image, setImage] = useState(null)

    const location = useLocation();
    const currentURL = window.location.origin + location.pathname + location.search;

    const [tmpComment, setTmpComment] = useState('')

    useEffect(() => {
        if (img.current.naturalWidth < img.current.naturalHeight) {
            setImgWidth('100%')
            setImgHeight('auto')
        } else if (img.current.naturalWidth > img.current.naturalHeight) {
            setImgWidth('auto')
            setImgHeight('100%')
        } else {
            setImgHeight('100%')
        }
    })

    const sendComment = () => {
        axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/comments`,
            method: 'post',
            data: {
                content: tmpComment,
                commentable: `/api/images/${image_id}`
            },
            withCredentials: true
        }).then((res) => {
            console.log(res.data, 'comment_send_success')

        }).catch((err) => {
            console.log(err.response, 'comment_send_err')

        })
    }

    //Get image Info
    useEffect(() => {
        axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/images/${image_id}`,
            method: 'get',
        }).then((res) => {
            console.log(res.data.comments, 'resdata')
            setImage(res.data)

        }).catch((err) => {
            console.log(err.response)

        })

        // axios({
        //     url: `${process.env.REACT_APP_API_DOMAIN}/api/images/${image_id}/comments`,
        //     method: 'get',
        // }).then((res) => {
        //     console.log(res.data)



        // }).catch((err) => {
        //     console.log(err)

        // })
    }, [])





    return (
        <div id="image-page" className='flex'>
            <div className="left flex flex-column flex-grow-1">
                <div className="top relative">
                    <img src={image?.imageEntity.fileUrl} alt="" className="background-post-img absolute" />
                    <div className="background-post-img-glass absolute flex align-items-center justify-content-center">
                        <img ref={img} src={image?.imageEntity.fileUrl} alt="" className="single-post-img absolute" style={{ width, height }} />
                    </div>
                    <div className="post-imgs-slide-actions absolute flex gap-10">
                        <div className="zoom-in-btn">
                            <ZoomIn size={16} />
                        </div>
                        <div className="zoom-out-btn">
                            <ZoomOut size={16} />
                        </div>
                        <div className="full-screen-btn">
                            <Fullscreen size={16} />
                        </div>
                        <div className="download-btn">
                            <Download size={16} />
                        </div>
                    </div>
                    <div className="prev-slide-btn">
                        <ChevronLeft size={20} />
                    </div>
                    <div className="next-slide-btn">
                        <ChevronRight size={20} />
                    </div>
                    <div className="post-imgs-preview flex gap-10">
                        <div className="thumb relative">
                            <img src="/img/entreprises/vache.jpg" alt="" />
                        </div>
                        <div className="thumb relative">
                            <img src="/img/entreprises/vy.jpg" alt="" />
                        </div>
                        <div className="thumb relative">
                            <img src="/img/entreprises/d.jpg" alt="" />
                        </div>
                        <div className="thumb relative">
                            <img src="/img/entreprises/ent1.jpg" alt="" />
                        </div>
                        <div className="thumb relative">
                            <img src="/img/entreprises/j.jpg" alt="" />
                        </div>
                        <div className="thumb relative">
                            <img src="/img/entreprises/b.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="header flex justify-content-between p-10">
                    <div className="left flex gap-10">
                        <Avatar height={38} width={38} />
                        <div className="author-info">
                            <h4>Donnell Son</h4>
                            <span>il y a 1 heure</span>
                        </div>
                    </div>
                    <div className="right flex gap-10">
                        <div className="flag">
                            <img src="/img/flags/Flag_of_Algeria.svg" height={30} alt="" />
                        </div>
                        <button className='post-plus-btn'>
                            <Plus size={28} />
                        </button>
                    </div>
                </div>
                <div className="body">
                    <div className="post-content p-10">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis mollitia rem beatae magni molestias, non asperiores vel saepe illum ab debitis eligendi? Molestiae cupiditate error deleniti accusantium, quisquam minus delectus?</p>
                    </div>
                    <div className="px-10">
                        <div className="link-input flex">
                            <input readOnly className="link flex-grow-1" value={currentURL}/>
                            <button><Clipboard /></button>
                        </div>
                    </div>
                    <div className="post-comments p-10">
                        <Tabs className='post-comments-tabs'>
                            <Tab title={<span>Commentaires (200k)</span>}>
                                <CommentList comments={image?.comments} />
                            </Tab>
                            <Tab title={<span>Evaluations</span>}>
                                contenu
                            </Tab>
                        </Tabs>
                    </div>

                </div>
                <div className="footer">
                    <div className="top">
                        <RequireAuthOnClick>
                            <CommentForm value={tmpComment} onSend={sendComment} onKeyup={(e) => {
                                setTmpComment(e.target.innerText)
                            }} />
                        </RequireAuthOnClick>
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
            </div>
        </div>
    )
}

export default Image
