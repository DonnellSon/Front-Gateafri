import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import './RequireAuthOnClick.scss'
import { Facebook, Google, Twitter, XLg } from 'react-bootstrap-icons'

const RequireAuthOnClick = ({ children }) => {
    const { user } = useSelector(state => state.user)

    const [isModalOpen, setModalOpen] = useState(false);

    const handleClick = (e) => {
        if (!user) {
            e.preventDefault()
            e.stopPropagation()
            setModalOpen(true);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const child = React.cloneElement(children, { onClick: handleClick });

    return (
        <>
            <div onClick={handleClick}>
                {child}
            </div>

            {isModalOpen &&
                <Modal open={isModalOpen} onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <div className="disconnectedModal">
                        <div className="top p-15">
                            <h2>Connectez vous !</h2>
                            <div className="close-modal" onClick={()=>{setModalOpen(false)}}>
                                <XLg/>
                            </div>
                        </div>
                        <div className="body p-15">
                            <p>
                                <strong>Note:</strong><span> vous devez vous authentifier pour acceder à cette fonctionnalité.</span>
                            </p>
                            <Link to="connexion" className="auth-with-gate-btn" onClick={()=>{setModalOpen(false)}}>
                            <img src="/img/logo/GATEAFR.png" height={25} alt="" /> Utiliser un compte GateAfri
                            </Link>
                            <div className="conn-method flex justify-content-center gap-10">
                                <span className='fb'><Facebook size={22} /></span>
                                <span className='google'><Google size={18} /></span>
                                <span className='twitter'><Twitter size={20} /></span>
                            </div>
                        </div>
                        <div className="bottom p-15">
                            <p>Si vous n'avez pas de compte <b><Link to="inscription" onClick={()=>{setModalOpen(false)}}>S'inscrire</Link></b></p>
                        </div>

                    </div>
                </Modal>
            }
        </>
    );

    // return (

    //     // <>
    //     //     <children[0]/>
    //     //     {/* <Component {...props} onClick={handleClick} />
    //     //     {isModalOpen && <Modal open={isModalOpen}>
    //     //         <div className="disconnectedModal">
    //     //             <h1>Vous devez vous connecter</h1>
    //     //             <button className="btn btn-purple" onClick={closeModal}>Fermer</button>
    //     //         </div>
    //     //     </Modal>} */}
    //     // </>
    // );
}

export default RequireAuthOnClick
