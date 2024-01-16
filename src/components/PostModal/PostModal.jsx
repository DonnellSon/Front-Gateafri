import React, { useEffect, useRef, useState } from 'react'
import './PostModal.scss'
import Modal from '../Modal/Modal'
import { BarChart, BodyText, CupHot, FileEarmarkImage, GeoAlt, Hash, ChevronDown, XLg, Globe } from 'react-bootstrap-icons'
import Avatar from '../Avatar/Avatar'
import Tabs from '../Tabs/Tabs'
import Tab from '../Tabs/Tab'
import ContactTag from '../ContactTag/ContactTag'
import MediasSelector from '../MediaSelector/MediasSelector'
import Survey from '../Survey/Survey'
import axios from 'axios'
import { ColorRing } from 'react-loader-spinner'
import PortalSelector from '../PortalSelector/PortalSelector'
import SelectSearch from '../SelectSearch/SelectSearch'
import { getUserCompanies } from '../../api/company'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AuthorSelector from '../AuthorSelector/AuthorSelector'

const PostModal = ({ isOpen = false, setIsOpen = () => { } }) => {

  const { user } = useSelector(store => store.user)
  const [author, setAuthor] = useState(null)
  const [postContent, setPostContent] = useState('')
  const [postMedias, setPostMedias] = useState([])
  const [isLoading, setIsloading] = useState(false)
  const [survey,setSurvey]=useState({})
  const publishPost = () => {

    let postFormData = new FormData()
    if (postContent !== '') {
      postFormData.append('content', postContent)
    }
    if(author){
      postFormData.append('author', author)
    }
    if (postMedias.length > 0) {
      postMedias.forEach((pm) => {
        postFormData.append('file[]', pm)
      })
    }
    if(survey.title!=='' && survey.options.length>0){
      postFormData.append('survey', survey)
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
            {/* <SelectSearch
              className='author-select'
              searchFields={['name']}
              onChange={(p) => { setAuthor(`/api/companies/${p.id}`) }}
              placeholder={<span>Selectionner un portail</span>}
              searchPlaceholder='Rechercher dans vos portails'
              query={(filters) => getUserCompanies(user.id)}
              repoName="userPortalsRepo"
              toPlaceholder={(p) =>
                <div className='flex align-items-center gap-5'>
                  <Avatar height={20} width={20} online={false} src={p.picture} />
                  <span>{p.name}</span>
                </div>}
              objectMapping={(p) => ({
                name: p.name,
                id:p.id,
                value: `/api/companies/${p.id}`,
                picture: p.activeLogo.fileUrl
              })}
              mapping={(p) => <Link>
                <Avatar online={false} src={p.picture} />
                <span>{p.name}</span>
              </Link>}
            /> */}
            <AuthorSelector onSelect={(author)=>setAuthor(`${author.name ? `/api/companies/${author.id}` : `/api/users/${author.id}`}`)}/>
          </>
        }>
          <Tab title={<>
            <BodyText size={18} />
            <span>Text</span>
          </>}>
            <div contentEditable={true} onKeyUp={(e) => { setPostContent(e.target.innerText) }}>Votre texte Ici</div>
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
            <Survey onChange={(survey)=>setSurvey(survey)}/>
          </Tab>
          <Tab title={<>
            <Hash size={18} />
            <span>Tags</span>
          </>}>
            <ContactTag />
          </Tab>
          <Tab title={<>
            <CupHot size={18} />
            <span>domaines</span>
          </>}>
            activity
          </Tab>
          {/* <Tab title={
            <>
              <GeoAlt size={18} />
              <span>Lieu</span>
            </>
          }>
            Location
          </Tab> */}
        </Tabs>

      </div>
      <div className="footer flex align-items-center justify-content-end gap-10">
        <button className="btn-transparent" style={{ width: 120 }}>Annuler</button>
        <button className="btn-purple" disabled={isLoading} style={{ width: 120 }} onClick={publishPost}>{
          !isLoading ? "Publier" : <ColorRing
            visible={true}
            height="25"
            width="25"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#ffffff', '#ffffffcf', '#ffffffab', '#ffffff78', '#ffffff4d']}
          />
        }</button>
      </div>
    </Modal>
  )
}

export default PostModal
