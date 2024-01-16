import React from 'react'
import TextEditor from '../../components/TextEditor/TextEditor'

const ProfileDetails = () => {
  return (
    <>
            <section className="biography">
                <div className="flex justify-content-between align-items-center">
                    <h4>Biographie</h4>
                    <TextEditor/>
                </div>
            </section>
            <hr />
            <section className="names mb-15">
                <div className="flex justify-content-between align-items-center">
                    <h4>Surnoms</h4>
                    <div className="btn add-study-btn flex align-items-center gap-10"><button className='btn btn-transparent'><PlusLg /> <span>Ajouter un Surnom</span></button></div>
                </div>
                <ul id="names-list" className="studies-list mt-15">
                    <li className='flex align-items-center gap-5'>Donnelly</li>
                    <li className='flex align-items-center gap-5'>Donnelly</li>
                    <li className='flex align-items-center gap-5'>Donnelly</li>
                </ul>
            </section>
        </>
  )
}

export default ProfileDetails
