import React from 'react'
import './CreateJob.css'
import Avatar from './../../components/Avatar/Avatar'
import JobDetails from '../../components/JobDetails/JobDetails'
import Accordion from '../../components/Accordion/Accordion'
const CreateJob = () => {
  return (
    <div className='create-job flex'>
      <div className="left">
        <div className="body">
          <h2 className='mt-20 px-15'>Offre d'emplois</h2>
          <section className='about-sect'>
            <Accordion isOpen={true}>
              <h4>A propos de poste</h4>
              <div className="about-form">
                <div className="form-group">

                  <label htmlFor="">Titre du poste</label>
                  <input type="text" className='inpt' placeholder='Ajouter un titre' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Nom de l'entreprise</label>
                  <input type="text" className='inpt' placeholder='Entreprise' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Experience</label>
                  <input type="text" className='inpt' placeholder='ex:2-3ans' />
                </div>
                <div className="flex justify-content-stretch gap-10">
                  <div className="form-group">
                    <label htmlFor="">Grade</label>
                    <select className='inpt' name="" id="">
                      <option value="">Etudiant</option>
                      <option value="">Junior</option>
                      <option value="">Senior</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Type</label>
                    <select className='inpt' name="" id="">
                      <option value="">Temps plein</option>
                      <option value="">Temps partiel</option>
                      <option value="">Teletravail</option>
                      <option value="">Stage</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Description du poste</label>
                  <textarea name="" className='inpt' id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </Accordion>
            <Accordion>
              <h4>Qualifications requises</h4>
              <div className="about-form">
                <div className="form-group">

                  <label htmlFor="">Titre du poste</label>
                  <input type="text" className='inpt' placeholder='Ajouter un titre' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Nom de l'entreprise</label>
                  <input type="text" className='inpt' placeholder='Entreprise' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Experience</label>
                  <input type="text" className='inpt' placeholder='ex:2-3ans' />
                </div>
                <div className="flex justify-content-stretch gap-10">
                  <div className="form-group">
                    <label htmlFor="">Grade</label>
                    <select className='inpt' name="" id="">
                      <option value="">Etudiant</option>
                      <option value="">Junior</option>
                      <option value="">Senior</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Type</label>
                    <select className='inpt' name="" id="">
                      <option value="">Temps plein</option>
                      <option value="">Temps partiel</option>
                      <option value="">Teletravail</option>
                      <option value="">Stage</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Description du poste</label>
                  <textarea name="" className='inpt' id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </Accordion>
            <Accordion>
              <h4>Remuneration et avantages</h4>
              <div className="about-form">
                <div className="form-group">

                  <label htmlFor="">Titre du poste</label>
                  <input type="text" className='inpt' placeholder='Ajouter un titre' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Nom de l'entreprise</label>
                  <input type="text" className='inpt' placeholder='Entreprise' />
                </div>
                <div className="form-group">
                  <label htmlFor="">Experience</label>
                  <input type="text" className='inpt' placeholder='ex:2-3ans' />
                </div>
                <div className="flex justify-content-stretch gap-10">
                  <div className="form-group">
                    <label htmlFor="">Grade</label>
                    <select className='inpt' name="" id="">
                      <option value="">Etudiant</option>
                      <option value="">Junior</option>
                      <option value="">Senior</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="">Type</label>
                    <select className='inpt' name="" id="">
                      <option value="">Temps plein</option>
                      <option value="">Temps partiel</option>
                      <option value="">Teletravail</option>
                      <option value="">Stage</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="">Description du poste</label>
                  <textarea name="" className='inpt' id="" cols="30" rows="10"></textarea>
                </div>
              </div>
            </Accordion>
          </section>
        </div>
        <div className="footer">
          <button className="btn-transparent">Annuler</button>
          <button className="btn-purple">Publier</button>
        </div>

      </div>
      <div className="content">
        <JobDetails />
      </div>
    </div>
  )
}

export default CreateJob
