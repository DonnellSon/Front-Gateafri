import React, { useState, useEffect } from 'react'
import './DomainsSelector.scss'
import { PlusLg, X, XLg } from 'react-bootstrap-icons'
import Modal from '../Modal/Modal'
import Searchbar from '../Searchbar/Searchbar'
import { getDomains } from '../../api/domain'
import { useQuery } from '@tanstack/react-query'
import SliderNav from '../SliderNav/SliderNav'
import axios from 'axios'
import { useSelector } from 'react-redux'
import CircleLoader from '../CircleLoader/CircleLoader'
const DomainsSelector = ({ open, onClose }) => {
    const { user } = useSelector(store => store.user)
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState([])
    const [onSave, setOnSave] = useState(false)

    const removeSelected = (index) => {
        const newSelected = [...selected]
        setSelected(prev => prev.filter((m, i) => m.id !== index))
    }

    const saveDomains = () => {
        if (selected.length > 0) {
            setOnSave(true)
            axios({
                url: `${process.env.REACT_APP_API_DOMAIN}/users/${user.id}`,
                method: 'patch',
                data: { domains: selected.map((s) => `/domains/${s.id}`) },
                headers: {
                    'Content-Type': 'application/merge-patch+json'
                },
                withCredentials: 'true'
            }).then((res) => {
                setOnSave(false)
                setIsOpen(false)
            }).catch((err) => {
                setOnSave(false)
                console.log(err.response)
            })
        }
    }

    useEffect(() => {
        setIsOpen(open)
    }, [open])

    const {
        status,
        fetchStatus,
        data: domains,
    } = useQuery({
        queryKey: ['repoDomainsList'],
        queryFn: () => getDomains()
    })



    return (
        <Modal open={isOpen} className="domains-selector-modal">
            <div className="top">
                <h1>Domaines</h1>
                <div className="close" onClick={() => {
                    onClose()
                    setIsOpen(false)
                }}><XLg /></div>
            </div>
            <div className="body">
                <p className='text-center'><span>Ajoutez vos domaines préférés pour être au courant des dernières actualités concernant ces domaines </span>
                    <small>&bull; Par défaut <strong>GateAfri</strong> vous suggère les domaines les plus populaires</small></p>
                <div className='searchbar-sticky'>
                    <Searchbar placeholder='Rechercher un domaine' />
                </div>
                {
                    domains &&
                    <ul className='domains-list'>
                        {
                            domains.filter((d) => !selected.find((s) => s.id === d.id)).map((d, i) => <li key={i} onClick={() => setSelected(prev => [...prev, d])}><PlusLg /> {d.title}</li>)
                        }
                    </ul>
                }
            </div>
            <div className="footer">

                {
                    selected.length > 0 &&
                    <>
                        <h5>Sélectionnés</h5>
                        <SliderNav activatable={false}>
                            {
                                selected.map((s, i) => <div key={i} onClick={() => removeSelected(s.id)}><span>{s.title}</span><div className='ico'><X size={20} /></div></div>)
                            }
                        </SliderNav>
                    </>
                }

                <div className='bottom flex justify-content-end gap-10'>
                    <button className="btn btn-transparent">Annuler</button>
                    <button className="btn btn-purple" onClick={saveDomains}>{
                        !onSave ? 'Enregistrer' : <CircleLoader />
                    }</button>
                </div>
            </div>
        </Modal>
    )
}

export default DomainsSelector
