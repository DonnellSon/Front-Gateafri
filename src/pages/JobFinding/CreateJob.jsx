import React, { useState, useEffect, useContext } from 'react'
import './CreateJob.scss'
import JobDetails from '../../components/JobDetails/JobDetails'
import Accordion from '../../components/Accordion/Accordion'
import { useQuery } from 'react-query'
import { getUserCompanies } from '../../api/company'
import { useSelector } from 'react-redux'
import CheckBox from "../../components/CheckBox/CheckBox"
import { PlusLg } from 'react-bootstrap-icons'
import TextEditor from '../../components/TextEditor/TextEditor'
import MultiInputs from '../../components/MultiInputs/MultiInputs'
import SalaryInputs from '../../components/SalaryInputs/SalaryInputs'
import { Link, useNavigate } from 'react-router-dom'
import SelectSearch from '../../components/SelectSearch/SelectSearch'
import axios from 'axios'
import CircleLoader from '../../components/CircleLoader/CircleLoader'
import { getJobGrades, getJobTypes } from '../../api/job'
import CreateJobSkeleton from './CreateJobSkeleton'
import Skeleton from '../../components/Skeleton/Skeleton'
import AuthorSelector from '../../components/AuthorSelector/AuthorSelector'
import CurrencyContext from '../../context/CurrencyContext'

const CreateJob = () => {
  const [initialData, setInitialData] = useState(null)

  const { user } = useSelector((store) => store.user)
  const {currency} = useContext(CurrencyContext)
  const [activePortal, setActivePortal] = useState(null)
  const [addJobLoading, setAddJobLoading] = useState(false)
  const navigate = useNavigate()

  const [jobOffer, setJobOffer] = useState({
    title: null,
    xp: null,
    summary: null,
    description: null,
    salary: null,
    author: null,
    qualifications: [],
    qualities: [],
    languages: []
  })

  const handleChangeInput = (e) => {
    setJobOffer(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addJobOffer = () => {
    const toSend = { 
      ...jobOffer, 
      type: jobOffer.type.value, 
      grade: jobOffer.grade.value,
      author:`/api/authors/${jobOffer.author.id}`,
      salary: JSON.stringify({ 
        ...jobOffer.salary, 
        currency: jobOffer.salary ? 
          `/api/currencies/${jobOffer.salary.currency.id}` : `/api/currencies/${currency.id}` 
      }) 
    }
    const data = new FormData()
    for (var key in toSend) {
      if (Array.isArray(toSend[key])) {
        toSend[key].forEach(v => {
          data.append(`${key}[]`, v)
        });
      } else {
        data.append(`${key}`, toSend[key])
      }
    }
    setAddJobLoading(true)
    axios({
      url: `${process.env.REACT_APP_API_DOMAIN}/api/job_offers`,
      data,
      method: 'post', withCredentials: true
    })
      .then((res) => {
        console.log(res.data)
        setAddJobLoading(false)
        navigate('/emplois')
      })
      .catch((err) => {
        setAddJobLoading(false)
        console.log(err.response)

      })
  }

  const {
    data: userCompanies,
    error: userCompaniesError,
    isLoading: userCompaniesLoading
  } = useQuery(['repoUserPortals', user.id], () => getUserCompanies(user.id))



  return (
    <div className='create-job flex'>
      <div className="left">
        <div className="body">
          <h2 className='mt-20 px-15'>Offre d'emplois</h2>
          {
            userCompaniesLoading ?
              <CreateJobSkeleton /> :
              userCompanies?.length > 0 ?
                (
                  <section className='about-sect'>
                    <Accordion isOpen={true}>
                      <h4>A propos de poste</h4>
                      <div className="about-form">
                        <div className="form-group">

                          <label htmlFor="">Titre du poste</label>
                          <input type="text" className='inpt' name='title' placeholder='Ajouter un titre' onChange={handleChangeInput} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Nom de l'entreprise</label>
                          <AuthorSelector withUser={false} onSelect={(p)=>{
                            setJobOffer(prev => ({ ...prev, author: p }))
                          }}/>
                          {/* {
                            userCompanies && <SelectSearch
                              searchFields={['name']}
                              onChange={(p) => { setJobOffer(prev => ({ ...prev, author: p.value })) }}
                              placeholder='Selectionner un portail'
                              searchPlaceholder='Rechercher dans vos portails'
                              query={(filters) => getUserCompanies(user.id)}
                              repoName="userPortalsRepo"
                              toPlaceholder={(elem) => elem.name}
                              objectMapping={(p) => ({ name: p.name, value: `/api/companies/${p.id}` })}
                              mapping={(p) => <Link>
                                <span>{p.name}</span>
                              </Link>}
                            />
                          } */}
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Experience</label>
                          <input type="text" className='inpt' name='xp' onChange={handleChangeInput} placeholder='ex:2-3ans' />
                        </div>
                        <div className="flex justify-content-stretch gap-10">
                          <div className="form-group">
                            <label htmlFor="">Grade</label>
                            <SelectSearch
                              searchFields={['title']}
                              onChange={(g) => { setJobOffer(prev => ({ ...prev, grade: g })) }}
                              placeholder='Selectionner un grade'
                              searchPlaceholder='Rechercher un grade'
                              query={(filters) => getJobGrades()}
                              repoName="jobGradesRepo"
                              toPlaceholder={(elem) => elem.title}
                              objectMapping={(g) => ({ title: g.title, value: `/api/job_grades/${g.id}` })}
                              mapping={(g) => <Link>
                                <span>{g.title}</span>
                              </Link>}
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="">Type</label>
                            <SelectSearch
                              searchFields={['title']}
                              onChange={(t) => { setJobOffer(prev => ({ ...prev, type: t })) }}
                              placeholder='Selectionner un type'
                              searchPlaceholder='Rechercher un type'
                              query={(filters) => getJobTypes()}
                              repoName="jobTypesRepo"
                              toPlaceholder={(elem) => elem.title}
                              objectMapping={(t) => ({ title: t.title, value: `/api/job_types/${t.id}` })}
                              mapping={(t) => <Link>
                                <span>{t.title}</span>
                              </Link>}
                            />
                          </div>

                        </div>
                        <div className="form-group">
                          <label htmlFor="">Début</label>
                          <input type="date" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Résumé</label>
                          <textarea name="summary" onChange={handleChangeInput} className='inpt' id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Description du poste</label>
                          <TextEditor onChange={({ text, html, bbcode }) => {
                            console.log(bbcode, 'BBCODE')
                            setJobOffer(prev => ({ ...prev, description: html }))
                          }} />
                        </div>

                      </div>
                    </Accordion>
                    <Accordion>
                      <h4>Qualifications requises</h4>
                      <div className="about-form">
                        <div className="form-group">
                          <label htmlFor="">Diplôme/Niveau d'études/Compétence</label>
                          <MultiInputs onChange={(qualifications) => setJobOffer(prev => ({ ...prev, qualifications }))} placeholder="Diplôme ou compétence" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Qualités et aptitudes</label>
                          <MultiInputs onChange={(qualities) => setJobOffer(prev => ({ ...prev, qualities }))} placeholder='Qualité requise' />
                        </div>
                        <div className="form-group">
                          <label htmlFor="">Exigences linguistiques</label>
                          <MultiInputs onChange={(languages) => setJobOffer(prev => ({ ...prev, languages }))} placeholder='Langue' />
                        </div>
                      </div>
                    </Accordion>
                    <Accordion>
                      <h4>Remuneration et avantages</h4>
                      <div className="about-form">
                        <div className="form-group salary-form">

                          <label htmlFor="">Salaire</label>
                          <SalaryInputs onChange={(salary) => setJobOffer(prev => ({ ...prev, salary }))} />

                        </div>
                        <div className="form-group">
                          <label htmlFor="">Primes et endemnités</label>
                          <ul className="check-grid">
                            <li><CheckBox /> Primes</li>
                            <li><CheckBox /> 13ème mois inclus</li>
                            <li><CheckBox /> Pourboires</li>
                            <li><CheckBox /> Commissions</li>
                            <li><CheckBox /> Heures sup rémunérés</li>
                          </ul>
                          <div className="mt-10">
                            <button className="btn btn-orange"><PlusLg /></button>
                          </div>
                        </div>

                        <div className="form-group">
                          <label htmlFor="">Avantages</label>
                          <ul className="check-grid">
                            <li><CheckBox /> Transport</li>
                            <li><CheckBox /> RTT</li>
                            <li><CheckBox /> Déjeuner</li>
                            <li><CheckBox /> Horaire très flexible</li>
                            <li><CheckBox /> Vehicule à disposition</li>
                          </ul>
                          <div className="mt-10">
                            <button className="btn btn-orange"><PlusLg /></button>
                          </div>
                        </div>

                      </div>
                    </Accordion>
                  </section>
                ) : <div className='flex justify-content-center flex-column align-items-center flex-grow-1' style={{ textAlign: 'center', height: 'calc(100% - 50px)' }}>
                  <div className='flex justify-content-center flex-column align-items-center gap-15' style={{ maxWidth: '70%' }}>
                    <h5>Vous devez creer un portail entreprise pour publier une offre d'emplois</h5>
                    <button className="btn btn-purple">Créer un portail</button>
                  </div>
                </div>
          }
        </div>
        <div className="footer flex">
          {
            userCompaniesLoading ?
            <>
              <Skeleton height={38} width={70}/>
              <Skeleton height={38} width={70}/>
            </>
            :
              userCompanies.length > 0 &&
              <>
                <button className="btn-transparent">Annuler</button>
                <button className="btn-purple" onClick={addJobOffer}>
                  {
                    !addJobLoading ? "Publier" : <CircleLoader />
                  }
                </button>
              </>
          }
        </div>

      </div>
      <div className="content">
        <JobDetails data={jobOffer} />
      </div>
    </div>
  )
}

export default CreateJob
