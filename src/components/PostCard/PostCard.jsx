import React, { useContext, useEffect, useState } from 'react'
import './PostCard.scss'
import { Plus, Diamond, Gem, ChatLeft, Share } from 'react-bootstrap-icons'
import Avatar from '../Avatar/Avatar'
import CommentList from '../commentList/CommentList'
import MediaContext from '../../context/MediaContext'
import { DESKTOP, SMARTPHONE, TABLET } from '../../constants/MediaTypeConstants'
import PostImagesGrid from '../PostImagesGrid/PostImagesGrid'
import { Link } from 'react-router-dom'
import DropDown from '../DropDown/DropDown'
import axios from 'axios'
import moment from '../../moment'
import RequireAuthOnClick from '../RequireAuthOnclick/RequireAuthOnClick'
import Rating from 'react-rating'
import twemoji from 'twemoji'
import PostViewModal from '../PostViewModal/PostViewModal'
import { addPostEvaluation } from '../../api/post'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { getRandomNumber } from '../../functions'
import millify from 'millify'
import TextViewMore from '../TextViewMore/TextViewMore'

const PostCard = ({ noComment = false, data, onDelete = () => { } }) => {
  const { deviceType } = useContext(MediaContext)
  const [showPostModal, setShowPostModal] = useState(false)
  const { user } = useSelector((store) => store.user)
  const deletePost = (e) => {
    e.preventDefault()
    axios({
      url:`${process.env.REACT_APP_API_DOMAIN}/posts/${data.id}`,
      method:'delete',
      withCredentials: true,
      headers:{
        'Authorization':`Bearer ${Cookies.get('BEARER')}`
      }
    }).then(function (response) {
      onDelete(data.id)
    }).catch(function (err) {
      console.log(err.response, 'ntay')
    })
    
}

const addPostEvaluation = (postId, note) => {
  return axios({
    url: `${process.env.REACT_APP_API_DOMAIN}/evaluations`,
    data: { evaluable: `/posts/${postId}`, note },
    method: 'post', withCredentials: true,
  }).then((res) => {
    console.log(res.data)
  }).catch((err) => console.log(err.response))
}
useEffect(() => {
  console.log(data, data.id)
}, [data])

return (
  <div className='post-card'>
    <div className="top flex justify-content-between" style={{
      top: deviceType === DESKTOP ? 'var(--topbar-height)' : 0,
      position: deviceType === DESKTOP ? 'sticky !important' : 'statique !important',
      padding: '8px 10px',
    }}>
      <div className="left flex gap-10">
        <Avatar height={40} width={40} src={data.author.activeProfilePicture?.fileUrl || data.author.activeLogo?.fileUrl} />
        <div className="author-info">
          <h1><Link to={`${data.author.firstName ?
            `/profil/${data.author.id}` : data.author.name ? `/portail/${data.author.id}` : null}`
          }>{data.author.firstName || data.author.name}{data.author.lastName ? " " + data.author.lastName : ""}</Link></h1>
          {
            (data.author.domains && data.author.domains.length > 0) &&
            <Link className='author-domains'>{data.author.domains?.map((d) => d.title).join(',')}</Link>
          }
          <span>{moment(data.createdAt).fromNow()}</span>
        </div>
      </div>
      <div className="flex gap-10">
        {
          data.author.country &&
          <div className="flag">
            <Link to='/explorer' title={data.author.country.name}><img src={data.author.country.flag.fileUrl} height={30} alt="" /></Link>
          </div>
        }

        <DropDown>
          <div className="plus-btn"><Plus size={28} style={{ display: 'block' }} /></div>
          <ul>
            {
              (data.author.id === user?.id || data.author.author?.id === user?.id) &&
              <>
                <li>
                  <Link to='/'>Modifier la publication</Link>
                </li>
                <li>
                  <Link to='/' onClick={deletePost}>Suprimer</Link>
                </li>
              </>
            }
            <li>
              <Link to='/emplois/cv'>Enregistrer</Link>
            </li>
            <li>
              <Link to='/emplois/nouveau'>Alerter les activités</Link>
            </li>
          </ul>
        </DropDown>
      </div>
    </div>

    {
      data.content && <div className="body">

        <TextViewMore>{data.content}</TextViewMore></div>
    }

    <PostImagesGrid postId={data.id} images={data.thumbnails} />
    {/* {
        !noComment &&
        <div className="post-comment-list p-10">
          <CommentList comments={data.comments} />
        </div>
      } */}

    <div className="footer flex align-items-center gap-15">
      <RequireAuthOnClick>
        <div className='relative evaluation-btn'>
          <div className="evaluation-container absolute px-10">
            <Rating
              onChange={(value) => addPostEvaluation(data.id, value)}
              fractions={2}
              emptySymbol={<img src="/img/icons/diamond_grey.png" className="icon rating-diamond-img" />}
              fullSymbol={<img src="/img/icons/diamond.png" className="icon rating-diamond-img" />}
            />
          </div>

          <span className='flex align-items-center gap-10 no-wrap-text'>
            <Gem size={19} /><span>Evaluer</span>
            {
              data.evaluationCount > 0 &&
              <div className="badge purple">{(data.evaluationSum / data.evaluationCount).toFixed(1)}/5</div>
            }
          </span>
        </div>
      </RequireAuthOnClick>
      <span onClick={() => setShowPostModal(true)} className='flex align-items-center gap-10 no-wrap-text'>
        <ChatLeft size={19} /><span>Commenter</span><div className="badge">{millify(getRandomNumber(100,10000))}</div>
      </span>
      <RequireAuthOnClick>
        <span className='flex align-items-center gap-10 no-wrap-text'>
          <Share size={19} /><span>Partager</span><div className="badge">{millify(getRandomNumber(100,10000))}</div>
        </span>
      </RequireAuthOnClick>
    </div>
    {
      showPostModal && <PostViewModal postId={data.id} open={showPostModal} author={data.author} setOpen={setShowPostModal} />
    }
  </div>
)
}

export default PostCard
