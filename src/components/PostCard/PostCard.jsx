import React, { useContext, useEffect } from 'react'
import './PostCard.css'
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

const PostCard = ({ noComment = false, data, onDelete = () => { } }) => {
  const { deviceType } = useContext(MediaContext)
  const deletePost = (e) => {
    e.preventDefault()
    const topVideos = axios.delete(`${process.env.REACT_APP_API_DOMAIN}/api/posts/${data.id}`, {}, { withCredentials: true }).then(function (response) {
      onDelete(data.id)
    }).catch(function (err) {
      console.log(err.response, 'ntay')
    })
  }

  return (
    <div className='post-card'>
      <div className="top flex justify-content-between" style={{
        top: deviceType === DESKTOP ? 'var(--topbar-height)' : 0,
        position: deviceType === DESKTOP ? 'sticky !important' : 'statique !important',
        padding: '8px 10px',
      }}>
        <div className="left flex gap-10">
          <Avatar height={40} width={40} src={data.author.profilePictures[0]?.fileUrl} />
          <div className="author-info">
            <h1>{data.author.firstName}{data.author.lastName ? " " + data.author.lastName : ""}</h1>
            <span>{moment(data.createdAt).fromNow()}</span>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flag">
            <img src="/img/flags/Flag_of_Algeria.svg" height={30} alt="" />
          </div>
          <DropDown>
            <div className="plus-btn"><Plus size={28} style={{ display: 'block' }} /></div>
            <ul>
              <li>
                <Link to='/'>Modifier la publication</Link>
              </li>
              <li>
                <Link to='/' onClick={deletePost}>Suprimer</Link>
              </li>
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
        data.content && <div className="body"><p>{data.content}</p></div>
      }

      <PostImagesGrid images={data.thumbnails} />
      {/* <div className="imgs">
        <div>
          <img src="/img/entreprises/d.jpg" alt="" />
        </div>
        <div>
          <img src="/img/entreprises/d.jpg" alt="" />
        </div>
        <div>
          <img src="/img/entreprises/d.jpg" alt="" />
        </div>
        <div>
          <img src="/img/entreprises/d.jpg" alt="" />
        </div>
      </div> */}
      {
        !noComment &&
        <div className="post-comment-list p-10">
          <CommentList comments={data.comments} />
        </div>
      }
      <div className="footer flex align-items-center gap-15">
        <span className='flex align-items-center gap-10 no-wrap-text'>
          <Gem size={19} /><span>Evaluer</span>
        </span>
        <span className='flex align-items-center gap-10 no-wrap-text'>
          <ChatLeft size={19} /><span>Commenter</span>
        </span>
        <span className='flex align-items-center gap-10 no-wrap-text'>
          <Share size={19} /><span>Partager</span>
        </span>
      </div>
    </div>
  )
}

export default PostCard
