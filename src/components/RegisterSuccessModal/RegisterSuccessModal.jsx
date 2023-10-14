import React from 'react'
import { Plus, PlusLg, XLg, X, Search } from 'react-bootstrap-icons'
import Modal from '../Modal/Modal'
import './RegisterSuccessModal.css'

const RegisterSuccessModal = ({open,setIsOpen=()=>{},onClose=()=>{}}) => {
    return (
        <Modal open={open}>
            <div className='register-success-modal'>
                <div className="top relative">
                    <img src="/img/wired-flat-1103-confetti.gif" alt="" />
                    <h3>Inscription réussi</h3>
                    <span>Ajoutez vos domaines préférés pour être au courant des dernières actualités concernant ces domaines </span>
                     <small>&bull; Par défaut <strong>GateAfri</strong> vous suggère les domaines les plus populaires</small>
                    <div className='close-modal' onClick={()=>{
                        setIsOpen(false)
                        onClose()
                    }}><XLg /></div>
                </div>
                <div className="body p-15">
                    <div className="flex gap-10">
                        <div className="floating-li">Industrie  <XLg size={13} /></div>
                        <div className="floating-li">Energie  <XLg size={13} /></div>
                        <div className="floating-li">Aeronautique <XLg size={13} /></div>
                        <div className="floating-li">Commerce  <XLg size={13} /></div>
                        <div className="floating-li">Education  <XLg size={13} /></div>
                        <div className="floating-li">Sport <XLg size={13} /></div>
                        <div className="floating-li">Cinéma <XLg size={13} /></div>
                        <div className="floating-li">Musique  <XLg size={13} /></div>
                        <div className="flex align-items-center domain-search-inpt">
                            <Search size={13}/>
                            <input type="text" className='inpt' placeholder='Tapez un domaine' />
                        </div>
                    </div>
                </div>
                <div className="footer gap-10">
                    <button className="btn btn-transparent">Plus tard</button>
                    <button className='btn btn-purple'><PlusLg /> Ajouter</button>
                </div>
            </div>
        </Modal>
    )
}

export default RegisterSuccessModal
