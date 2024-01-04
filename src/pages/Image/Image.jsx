import React, { useEffect, useRef, useState } from 'react'
import { ChevronBarLeft, ChevronLeft, ChevronRight, Download, Fullscreen, PencilSquare, Plus, PlusLg, ZoomIn, ZoomOut } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import CommentForm from '../../components/commentForm/CommentForm'
import CommentList from '../../components/commentList/CommentList'
import './Image.scss'
import { Gem, ChatLeft, Share, Clipboard } from 'react-bootstrap-icons'
import Tab from '../../components/Tabs/Tab'
import Tabs from '../../components/Tabs/Tabs'
import { useLocation } from 'react-router-dom';

import axios from 'axios'
import RequireAuthOnClick from '../../components/RequireAuthOnclick/RequireAuthOnClick'
import millify from 'millify'
import { useQuery } from 'react-query'
import { getComments } from '../../api/comment'
import { getPost } from '../../api/post'
import moment from '../../moment'
import { Link } from 'react-router-dom'
import { useParams, useSearchParams } from "react-router-dom";
import CircleLoader from '../../components/CircleLoader/CircleLoader'
import { useSelector } from 'react-redux'
import { useInfiniteQuery } from 'react-query'
import EvaluationItem from '../../components/Evaluation/EvaluationItem'

const Image = () => {
    const { image_id } = useParams()
    const { user } = useSelector(store => store.user)
    const img = useRef()
    let [searchParams, setSearchParams] = useSearchParams();

    const [width, setImgWidth] = useState(0)
    const [height, setImgHeight] = useState(0)
    const [image, setImage] = useState(null)

    const location = useLocation();
    const currentURL = window.location.origin + location.pathname + location.search;

    const [tmpComment, setTmpComment] = useState('')

    const { data: post, error: postError, isLoading: postLoading } = useQuery(['imagePostRepo', searchParams.get('p')], () => getPost(searchParams.get('p')))


    const { data: comments, error: commentsError, isLoading: commentsLoading, refetch: refetchComments } = useQuery(['imageComsRepo', image_id], () => getComments(image_id))

    /**
     * Fetching image Evaluations
     */
    const fetchEvaluations = ({ pageParam = 1 }) => {
        return axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/images/${image_id}/evaluations?ipp=10&page=${pageParam}`,
            method: 'get',
            responseType: "json",
            headers: {
                'Accept': 'application/json+ld'
            },
            withCredentials: true
        }).then((res) => {
            return { data: res.data['hydra:member'], totalItems: res.data['hydra:totalItems'], nextPage: res.data['hydra:view']['hydra:next'] ? parseInt(res.data['hydra:view']['hydra:next'].match(/page=(\d+)/)[0].split('=')[1]) : undefined }
        })
    }

    const {
        data: evalsList,
        error,
        fetchNextPage,
        hasNextPage: evalsListNextPage,
        isFetching,
        isFetchingNextPage: evalsListFetchingNextPage,
        status: evalsLoadingStatus,
        refetch,
        refetchPage,
        totalItems
    } = useInfiniteQuery({
        queryKey: ['evals', image_id],
        queryFn: fetchEvaluations,
        getNextPageParam: (lastPage, pages) => lastPage.nextPage
    })

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

    }, [])


    const [editDescription, setEditDescription] = useState(false)
    const [tmpDescription, setTmpDescription] = useState(image?.description ? image?.description : '')
    const [loadingSendDescription, setLoadingSendDescription] = useState(false)
    const sendTmpDescription = () => {
        if (tmpDescription && tmpDescription.length > 0) {
            setLoadingSendDescription(true)
            axios({
                url: `${process.env.REACT_APP_API_DOMAIN}/api/images/${image_id}`,
                data: { description: tmpDescription },
                headers: {
                    'Content-Type': 'application/merge-patch+json',
                },
                method: 'patch',
            }).then((res) => {
                setImage(prev => ({ ...prev, description: res.data.description }))
                setLoadingSendDescription(false)
                setEditDescription(false)
            }).catch((err) => {
                console.log(err.response)

            })
        }
    }





    return (
        <div id="image-page" className='flex'>
            <div className="left flex flex-column flex-grow-1">
                <div className="top relative">
                    <img src={image?.imageEntity.fileUrl} alt="" className="background-post-img absolute" />
                    <div className="background-post-img-glass absolute flex align-items-center justify-content-center">
                        <img ref={img} src={image?.imageEntity.fileUrl} alt="" className="single-post-img absolute" style={{ maxWidth: "100% !important", height: "100% !important" }} />
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
                </div>
            </div>
            <div className="right">
                <div className="header flex justify-content-between p-10">
                    <div className="left flex gap-10">
                        <Avatar height={40} width={40} src={(post?.author.activeProfilePicture?.fileUrl || post?.author.activeLogo?.fileUrl)} />

                        <div className="author-info">
                            <h4><Link to={`${post?.author.firstName ?
                                `/profil/${post?.author.id}` : post?.author.name ? `/portail/${post?.author.id}` : null}`
                            }>{(post?.author.firstName || post?.author.name)}{post?.author.lastName ? " " + post?.author.lastName : ""}</Link></h4>
                            <span>{moment(post?.createdAt).fromNow()}</span>
                        </div>
                    </div>
                    <div className="right flex gap-10">
                        {
                            post?.author.country &&
                            <div className="flag">
                                <img src={post?.author.country?.flag.fileUrl} height={30} alt="" />
                            </div>
                        }

                        <button className='post-plus-btn'>
                            <Plus size={28} />
                        </button>
                    </div>
                </div>
                <div className="body">
                    <div className='p-10'>
                        {
                            editDescription && (user?.id === post?.author.id || post?.author.author?.id) ?
                                <div className='description-edit-inpt'>
                                    <textarea className="mb-10 inpt" placeholder="Description de l'image" onChange={(e) => setTmpDescription(e.target.value)} name="" value={tmpDescription} id="" cols="30" rows="10"></textarea>
                                    <button className="btn btn-purple" onClick={sendTmpDescription}>
                                        {
                                            !loadingSendDescription ? 'Publier' :
                                                <CircleLoader />
                                        }
                                    </button>
                                </div> : ''
                        }
                        {
                            !editDescription ?
                                image?.description ?
                                    <>
                                        <div className="post-content">
                                            <p>{image?.description}</p>
                                        </div>
                                        {
                                            (user?.id === post?.author.id || user?.id === post?.author.author?.id) &&
                                            <button className="btn btn-transparent" onClick={() => setEditDescription(true)}><PencilSquare /> Modifier la déscription</button>
                                        }
                                    </>
                                    :
                                    (user?.id === post?.author.id || user?.id === post?.author.author?.id) &&
                                    <button className="btn btn-transparent" onClick={() => setEditDescription(true)}><PencilSquare /> Ajouter une déscription</button>
                                : ''
                        }
                    </div>
                    <div className="px-10">
                        <div className="link-input flex">
                            <input readOnly className="link flex-grow-1" value={currentURL} />
                            <button><Clipboard /></button>
                        </div>
                    </div>
                    <div className="post-comments p-10">
                        <Tabs className='post-comments-tabs'>
                            <Tab title={<span>Commentaires ({millify(comments?.length)})</span>}>
                                {
                                    commentsLoading ? <CircleLoader /> :
                                        comments && <CommentList comments={comments} />
                                }
                            </Tab>
                            <Tab title={<span>Evaluations {totalItems}</span>}>
                                {
                                    evalsLoadingStatus === 'loading' ? (
                                        <h1>loading...</h1>
                                    ) : evalsLoadingStatus === 'error' ? (
                                        <p>Error: {error.message}</p>
                                    ) : evalsList?.pages?.length > 0 ? evalsList?.pages?.map((group, i) => (
                                        <React.Fragment key={i}>
                                            {group.data.map((evaluation) => (
                                                <EvaluationItem data={evaluation} />
                                            ))}
                                        </React.Fragment>

                                    )) : <div className="empty-eval">
                                        <h1>Aucune évaluation à afficher</h1>
                                    </div>
                                }
                                {evalsListFetchingNextPage
                                    ? <h1>Loading</h1>
                                    : evalsListNextPage
                                        ? ''
                                        : ''}
                            </Tab>
                        </Tabs>
                    </div>

                </div>
                <div className="footer">
                    <div className="top">
                        <CommentForm commentable={`/api/images/${image_id}`} onSended={(data) => {
                            setImage(prev => ({ ...prev, comments: [...prev.comments, data] }))
                            refetchComments()
                        }} />
                    </div>
                    <div className="bottom flex gap-10">
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <Gem size={19} /><span>Evaluer</span><div className="badge purple">50</div>
                            </span>
                        </RequireAuthOnClick>
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <ChatLeft size={19} /><span>Commenter</span><div className="badge">50</div>
                            </span>
                        </RequireAuthOnClick>
                        <RequireAuthOnClick>
                            <span className='flex align-items-center gap-10 no-wrap-text'>
                                <Share size={19} /><span>Partager</span><div className="badge">50</div>
                            </span>
                        </RequireAuthOnClick>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Image
