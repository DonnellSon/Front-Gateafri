import React, { useEffect, useRef, useState } from 'react'
import './PostModal.css'
import Modal from '../Modal/Modal'
import { BarChart, BodyText, CupHot, FileEarmarkImage, GeoAlt, Hash, ChevronDown, XLg, Globe } from 'react-bootstrap-icons'
import Avatar from '../Avatar/Avatar'
import Tabs from '../Tabs/Tabs'
import Tab from '../Tabs/Tab'
import ContactTag from '../ContactTag/ContactTag'
import MediasSelector from '../MediaSelector/MediasSelector'
import Survey from '../Survey/Survey'
import axios from 'axios'
const PostModal = ({ isOpen = false, setIsOpen = () => { } }) => {


  const [postContent, setPostContent] = useState('')
  const [postMedias, setPostMedias] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const publishPost = () => {

    let postFormData = new FormData()
    if (postContent !== '') {
      postFormData.append('content', postContent)
    }
    if (postMedias.length > 0) {
      postMedias.forEach((pm) => {
        postFormData.append('file[]', pm)
      })
    }
    setIsloading(true)
    axios({
      method: 'post',
      url: `${process.env.REACT_APP_API_DOMAIN}/api/posts`,
      withCredentials: true,
      data: postFormData
    }).then((res) => {
      console.log(res);
      setIsloading(false)
    }).catch((err) => {
      setIsloading(false)
      console.log(err.response);

    })

    // e.preventDefault()
    //     let formData = new FormData()
    //     videoPosters.forEach((v) => {
    //         formData.append('videoMiniatures[]', v)
    //     })
    //     formData.append('title', videoTitle)
    //     formData.append('description', videoDescription)
    //     setIsloading(true)
    //     axiosJWT({
    //         method: 'post',
    //         url: `http://localhost:8080/api/video/update/${video.uid}`,
    //         withCredentials: true,
    //         data: formData
    //     }).then((res) => {
    //         console.log(res);
    //         onUploaded()
    //         setIsloading(false)
    //     }).catch((err) => {
    //         setIsloading(false)
    //         console.log(err.response);
    //         if (err.response.data?.messages) {
    //             const { title, miniatures } = err.response.data.messages
    //             title && setTitleError(title)
    //             miniatures && setPostersError(miniatures)
    //         }

    //     })
  }

  const mediasInput = useRef()
  const clickMediasInput = () => {
    mediasInput.current.click();
  }
  return (
    <Modal open={isOpen} onClose={(open) => setIsOpen(open)} className='post-modal'>
      <div className="heading flex align-items-center justify-content-between">
        <h3>Publication</h3>
        <XLg onClick={() => {
          setIsOpen(false)
        }} />
      </div>
      <div className="body flex flex-column flex-grow-1">

        <Tabs className='post-modal-tabs' navRight={
          <>
            <div className="audience-choice flex align-items-center gap-5"><Globe /> Public <ChevronDown /></div>
            <div className='portal-choice flex gap-5 align-items-center'>
              <span>Donnell Son</span>
              <Avatar height={25} width={25} />
              <ChevronDown />
            </div>
          </>
        }>
          <Tab title={<>
            <BodyText size={18} />
            <span>Text</span>
          </>}>
            <div contentEditable={true}>Votre texte Ici</div>
          </Tab>
          <Tab title={<div className='li flex flex-column align-items-center'>
            <FileEarmarkImage size={18} />

            <span className='text-ellipsis' style={{ width: '100%' }}>Images/Videos</span>
          </div>
          }>


            <MediasSelector setMediasState={setPostMedias} />



          </Tab>
          <Tab title={<>
            <BarChart size={18} />
            <span>Sondage</span>
          </>}>
            <Survey />
          </Tab>
          <Tab title={<>
            <Hash size={18} />
            <span>Tags</span>
          </>}>
            <ContactTag />
          </Tab>
          <Tab title={<>
            <CupHot size={18} />
            <span>Activité</span>
          </>}>
            activity
          </Tab>
          <Tab title={
            <>
              <GeoAlt size={18} />
              <span>Lieu</span>
            </>
          }>
            Location
          </Tab>
        </Tabs>

      </div>
      <div className="footer flex align-items-center justify-content-end gap-10">
        <button className="btn-transparent" style={{ width: 120 }}>Annuler</button>
        <button className="btn-purple" disabled={isLoading} style={{ width: 120 }} onClick={publishPost}>Publier</button>
      </div>
    </Modal>
  )
}

export default PostModal
