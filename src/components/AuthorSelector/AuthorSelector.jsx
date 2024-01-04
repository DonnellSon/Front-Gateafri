import React, { useEffect, useState } from 'react'
import './AuthorSelector.scss'
import Modal from '../Modal/Modal'
import Avatar from '../Avatar/Avatar'
import { CaretDownFill, XLg } from 'react-bootstrap-icons'
import { useQuery } from 'react-query'
import { useSelector } from 'react-redux'
import { getUserCompanies } from '../../api/company'

const AuthorSelector = ({ onSelect = () => { },onStart=()=>{} }) => {
    const [open, setOpen] = useState(false)
    const { user } = useSelector(store => store.user)
    const [selected,setSelected]=useState(user)

    const { data: portals, error: PortalsError, isLoading: loadingPortals } = useQuery(['authorSelector', user?.id], () => getUserCompanies(user?.id))

    useEffect(() => {
        onStart(user)
    }, [user])

    return (
        <>
            <div className="author-selector">
                <div className="author-selector-inpt inpt" onClick={() => setOpen(true)}>
                    <div className="left">
                        <Avatar height={25} width={25} src={selected?.activeLogo?.fileUrl || selected?.activeProfilePicture?.fileUrl}/>
                        <span>{selected?.name || `${selected?.firstName}${selected?.lastName && ' ' + selected?.lastName}`}</span>
                    </div>
                    <div className="caret">
                        <CaretDownFill />
                    </div>
                </div>
                <Modal className="author-selector-modal" open={open}>
                    <div className="close" onClick={() => { setOpen(false) }}>
                        <XLg />
                    </div>
                    <div className="top relative">
                        <h2>Publier en tant que</h2>
                        <span>Choisir un autheur pour effectuer cette action</span>

                    </div>
                    <div className="body">
                        <ul>
                            <li onClick={
                                () => {
                                    setOpen(false)
                                    setSelected(user)
                                    onSelect(user)
                                }
                            }>
                                <Avatar src={user?.activeProfilePicture?.fileUrl} height={60} width={60} />
                                <p>{user?.firstName}{' ' + user?.lastName || ''}</p>
                            </li>
                            {
                                portals?.map((p, i) => (
                                    <li onClick={
                                        () => {
                                            setOpen(false)
                                            setSelected(p)
                                            onSelect(p)
                                        }
                                    }>
                                        <Avatar src={p.activeLogo?.fileUrl} height={60} width={60} />
                                        <p>{p.name}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Modal>
            </div>

        </>

    )
}

export default AuthorSelector
