import React, { useContext, useEffect, useState } from 'react'
import './JobFindingHome.scss'
import { Search, PinMap, Briefcase } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import JobCard from '../../components/JobCard/JobCard'
import { Plus } from 'react-bootstrap-icons'
import { Link, useParams } from 'react-router-dom'
import JobFindingSearchBar from '../../components/JobFindingSearchbar/JobFindingSearchbar'
import JobDetails from '../../components/JobDetails/JobDetails'
import MediaContext from '../../context/MediaContext'
import { DESKTOP } from '../../constants/MediaTypeConstants'
import CheckBox from '../../components/CheckBox/CheckBox'
import { useQuery } from 'react-query'
import { getJobGrades, getJobOffers, getJobTypes } from '../../api/job'
import millify from 'millify'
import RequireAuthOnClick from '../../components/RequireAuthOnclick/RequireAuthOnClick'
import { useNavigate } from 'react-router-dom'
import SortableList from '../../components/SortableList/SortableList'


const JobFindingHome = () => {
    const { deviceType } = useContext(MediaContext)
    const { jobOfferId } = useParams()
    const navigate=useNavigate()
    const [activeJob, setActiveJob] = useState(null)
    const { data: jobOffers, error: jobOffersError, isLoading: jobOffersLoading } = useQuery(['repoJobOffer'], getJobOffers)
    useEffect(() => {
        if(jobOffers && jobOffers.length>0){
            setActiveJob(jobOffers[0])
            navigate(`/emplois/${jobOffers[0].id}`)
        }
    }, [jobOffers])
    useEffect(() => {
        setActiveJob(jobOffers?.find((j) => j.id == jobOfferId))
        console.log(jobOffers, 'OFFRE')
    }, [jobOffers, jobOfferId])
    return (
        <>
            <JobFindingSearchBar onChange={search=>console.log(search,'SEARCH')}/>
            <main className='job-finding-home flex justify-content-between gap-5'>
                {
                    deviceType === DESKTOP ?
                        <div className="left">
                            <form action="" onSubmit={(e)=>{
                                e.preventDefault()
                            }}>
                                <h4>Creer une offre d'emplois</h4>
                                <span>Trouver des préstataires en publiant une offre d'emplois</span>
                                <input type="text" className="add-job-input" placeholder='Titre' />
                                <RequireAuthOnClick>
                                    <Link to='/emplois/nouveau' className='btn-purple'><Plus size={25} /> Creer une offre d'emplois</Link>
                                </RequireAuthOnClick>
                            </form>
                            <SortableList allowSearch={false} query={(keyword) => getJobTypes()} mapping={(jobType) => <><CheckBox id={jobType.title} value={jobType.title} name='jobTypes' onChange={(e) => { }} /> <label htmlFor={jobType.title}>{jobType.title}</label></>} repoName='repoJobTypes' title={<label htmlFor="">Type de travail</label>} />
                            <SortableList allowSearch={false} query={(keyword) => getJobGrades()} mapping={(jobGrade) => <><CheckBox id={jobGrade.title} value={jobGrade.title} name='jobGrades' onChange={(e) => { }} /> <label htmlFor={jobGrade.title}>{jobGrade.title}</label></>} repoName='repoJobGrades' title={<label htmlFor="">Grade</label>} />
                            <h4>Pretention Salariale</h4>
                            <ul>
                                <li><CheckBox /> Temps plein</li>
                                <li><CheckBox /> Temps partiel</li>
                                <li><CheckBox /> Teletravail</li>
                                <li><CheckBox /> Stage</li>
                            </ul>
                        </div> : ""
                }
                <div className="center">
                    <div className="job-list">
                        {
                            jobOffers?.map((jo) => <JobCard active={activeJob === jo} data={jo} />)
                        }

                    </div>
                </div>
                {
                    deviceType === DESKTOP ?
                        <div className="right">
                            {
                                activeJob && <JobDetails data={activeJob} />
                            }
                        </div> : ""
                }

            </main>
        </>
    )
}

export default JobFindingHome
