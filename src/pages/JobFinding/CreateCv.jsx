import React, { useContext, useEffect, useState } from 'react'
import Avatar from '../../components/Avatar/Avatar'
import './CreateCv.css'
import Cv from './Cv'
import { Camera, Sliders, Save, Forward, SkipBackward, PaintBucket, Type, Plus, ChevronUp, Columns, Fonts, Check2, Trash2, Trash, Eye } from 'react-bootstrap-icons'
import Accordion from '../../components/Accordion/Accordion'
import TextEditor from '../../components/TextEditor/TextEditor'
import DropDown from '../../components/DropDown/DropDown'
import ColorPicker from '../../components/ColorPicker/ColorPicker'
import { Link } from 'react-router-dom'
import MediaContext from '../../context/MediaContext'
import { SMARTPHONE } from '../../constants/MediaTypeConstants'
const CreateCv = () => {
    const { deviceType } = useContext(MediaContext)
    const [cvData, setCvData] = useState({
        personnalInfo: {
            firstName: 'Nom',
            lastName: 'Prénom',
            speciality: 'Votre specialité',
            email: 'Votre Adresse Email',
            telephone: 'Votre numéro de telephone',
            city: 'Dans quelle ville residez-vous',
            postalCode: 'Votre code postal',
            adress: 'Votre lieu de residence'
        }
    })
    const [description, setDescription] = useState('Votre description')
    const changeInputValue = (inputName, value) => {
        const newData = { ...cvData, personnalInfo: { ...cvData.personnalInfo, [inputName]: value } }
        setCvData(newData)
    }
    return (
        <div className='create-cv flex'>
            <div className="left">
                <div className="body">
                    <h2 className='mt-20 px-15'>Mon CV</h2>

                    <Accordion isOpen={true}>
                        <h4>Informations personnels</h4>
                        <div>
                            <div className="form-group">
                                <label htmlFor="">Photo</label>
                                <div className="photo-opts flex gap-10">
                                    <Avatar height={70} width={70} />
                                    <button className="change-photo-btn">
                                        <Camera size={18} />
                                    </button>
                                    <button className="edit-photo-btn">
                                        <Sliders size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="flex gap-10">
                                <div className="form-group">
                                    <label htmlFor="">Nom</label>
                                    <input type="text" className='inpt' onChange={(e) => {
                                        changeInputValue('firstName', e.target.value)
                                    }} value={cvData.personnalInfo.firstName} placeholder='Votre nom' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Prenom</label>
                                    <input type="text" className='inpt' onChange={(e) => {
                                        changeInputValue('lastName', e.target.value)
                                    }} value={cvData.personnalInfo.lastName} placeholder='Votre prenom' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Métier/Specialité</label>
                                <input type="text" className='inpt' onChange={(e) => {
                                    changeInputValue('speciality', e.target.value)
                                }} value={cvData.personnalInfo.speciality} placeholder='Votre metier ou domaine' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Description</label>
                                <TextEditor onChange={({ text, html }) => {
                                    setDescription(html)
                                }} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Adresse email</label>
                                <input type="text" className='inpt' onChange={(e) => {
                                    changeInputValue('email', e.target.value)
                                }} value={cvData.personnalInfo.email} placeholder='ex:gateafri@contact.com' />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Telephone</label>
                                <input type="text" className='inpt' onChange={(e) => {
                                    changeInputValue('telephone', e.target.value)
                                }} value={cvData.personnalInfo.telephone} placeholder='ex:gateafri@contact.com' />
                            </div>
                            <div className="flex justify-content-stretch gap-10">
                                <div className="form-group">
                                    <label htmlFor="">Ville</label>
                                    <input type="text" className='inpt' onChange={(e) => {
                                        changeInputValue('city', e.target.value)
                                    }} value={cvData.personnalInfo.city} placeholder='ex:gateafri@contact.com' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Code Postal</label>
                                    <input type="text" className='inpt' onChange={(e) => {
                                        changeInputValue('postalCode', e.target.value)
                                    }} value={cvData.personnalInfo.postalCode} placeholder='ex:gateafri@contact.com' />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Adresse</label>
                                <input type="text" className='inpt' onChange={(e) => {
                                    changeInputValue('adress', e.target.value)
                                }} value={cvData.personnalInfo.adress} placeholder='ex:gateafri@contact.com' />
                            </div>
                        </div>
                    </Accordion>

                    <div className="formation-sect">
                        <Accordion>
                            <h4>Formation et études</h4>
                            <div className="experience-form p-10">
                                <h4 className='py-5'>Diplôme/Certificat/Titre</h4>
                                <div className="flex gap-10">
                                    <div className="form-group">
                                        <label htmlFor="">Etablissement/Universitéggggg</label>
                                        <input type="text" className="inpt" placeholder='Votre centre de formation' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Ville</label>
                                        <input type="text" className="inpt" placeholder="ville" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-content-between">
                                        <h5>Dates</h5>
                                        <div className='flex gap-5'>
                                            <input type="checkbox" name="" id="" /> <label htmlFor="">Maintenant</label>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="form-group">
                                            <label htmlFor="">Début</label>
                                            <input type="text" className="inpt" placeholder="Debut de travail" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Fin</label>
                                            <input type="text" className="inpt" placeholder="Fin de travail" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Déscription de la formation</label>
                                    <TextEditor />
                                </div>
                                <div className='flex gap-10'>
                                    <button className='btn-outline-light'><Trash size={18} /></button>
                                    <button className='btn-orange'><Check2 size={20} /></button>
                                </div>
                            </div>
                        </Accordion>
                    </div>

                    <section className="experience-sect">
                        <Accordion>
                            <h4>Experience professionnelle</h4>
                            <div className="experience-form p-10">
                                <h4 className='py-5'>Poste occupé</h4>
                                <div className="flex gap-10">
                                    <div className="form-group">
                                        <label htmlFor="">Employeur/Entreprise</label>
                                        <input type="text" className="inpt" placeholder='Votre employeur' />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Localisation</label>
                                        <input type="text" className="inpt" placeholder="Adresse de l'entreprise" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-content-between">
                                        <h5>Dates</h5>
                                        <div className='flex gap-5'>
                                            <input type="checkbox" name="" id="" /> <label htmlFor="">Maintenant</label>
                                        </div>
                                    </div>
                                    <div className="flex gap-10">
                                        <div className="form-group">
                                            <label htmlFor="">Début</label>
                                            <input type="text" className="inpt" placeholder="Debut de travail" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="">Fin</label>
                                            <input type="text" className="inpt" placeholder="Fin de travail" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Déscription du poste</label>
                                    <TextEditor />
                                </div>
                                <div className='flex gap-10'>
                                    <button className='btn-outline-light'><Trash size={18} /></button>
                                    <button className='btn-orange'><Check2 size={20} /></button>
                                </div>
                            </div>
                        </Accordion>
                    </section>
                    <section className="skills-sect">
                        <Accordion>
                            <h4>Skills</h4>
                            <div className="skill-form p-10">
                                <div className="form-group">
                                    <label htmlFor="">Competence</label>
                                    <input type="text" className="inpt" placeholder='ex:Developpeur PHP' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Niveau</label>
                                    <input type="range" />
                                </div>
                                <div className='flex gap-10'>
                                    <button className='btn-outline-light'><Trash size={18} /></button>
                                    <button className='btn-orange'><Check2 size={20} /></button>
                                </div>
                            </div>
                        </Accordion>
                    </section>
                    <section className="lang-sect">
                        <Accordion>
                            <h4>Langues</h4>
                            <div className="lang-form p-10">
                                <div className="form-group">
                                    <label htmlFor="">Langue</label>
                                    <input type="text" className="inpt" placeholder='ex:Malagasy' />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="">Niveau</label>
                                    <input type="range" />
                                </div>
                                <div className='flex gap-10'>
                                    <button className='btn-outline-light'><Trash size={18} /></button>
                                    <button className='btn-orange'><Check2 size={20} /></button>
                                </div>
                            </div>
                        </Accordion>
                    </section>
                    <section className="hobby-sect">
                        <Accordion>
                            <h4>Centres d'interêts</h4>
                            <div className="hobby-form p-10">
                                <div className="form-group">
                                    <label htmlFor="">Interet</label>
                                    <input type="text" className="inpt" placeholder='ex:Malagasy' />
                                </div>
                                <div className='flex gap-10'>
                                    <button className='btn-outline-light'><Trash size={18} /></button>
                                    <button className='btn-orange'><Check2 size={20} /></button>
                                </div>
                            </div>
                        </Accordion>
                    </section>
                    <div className="p-15">
                        <button className="btn-orange"><Plus size={24} /> Nouvelle section</button>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn-transparent">Annuler</button>
                    <button className="btn-purple"><Save /> Enregistrer</button>
                    {
                        deviceType === SMARTPHONE ?
                            <button className="btn-transparent"><Eye size={20} /> Voir</button>
                            : ""
                    }
                </div>
            </div>
            <div className="content">
                <div className="body">
                    <Cv data={{ ...cvData, description }} />
                </div>
                <div className="footer">
                    <div className='flex align-items-center'>

                        <button>
                            <Columns size={24} />
                            <ChevronUp size={15} />
                        </button>
                        <button>
                            <Type size={24} />
                            <ChevronUp size={15} />
                        </button>

                        <DropDown placement='top'>
                            <button>
                                <Fonts size={24} />
                                <ChevronUp size={15} />
                            </button>
                            <div>
                                <h3 className='p-10'>Taille du text</h3>
                                <ul>
                                    <li>
                                        <Link>XS</Link>
                                    </li>
                                    <li>
                                        <Link>S</Link>
                                    </li>
                                    <li>
                                        <Link>M</Link>
                                    </li>
                                    <li>
                                        <Link>L</Link>
                                    </li>
                                    <li>
                                        <Link>XL</Link>
                                    </li>
                                </ul>
                            </div>
                        </DropDown>
                        <DropDown placement='top' className='cv-main-color-drop-down'>
                            <button>
                                <PaintBucket size={24} />
                                <ChevronUp size={15} />
                            </button>
                            <div>
                                <ColorPicker />
                            </div>
                        </DropDown>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateCv
