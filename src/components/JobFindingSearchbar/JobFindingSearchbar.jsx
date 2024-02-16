import React, { useContext } from 'react'
import './JobFindingSearchbar.scss'
import { Search, PinMapFill, BriefcaseFill, GeoAltFill } from 'react-bootstrap-icons'
import SuggestInput from '../SuggestInput/SuggestInput'
import { getJobTitles } from '../../api/job'
import { Link } from 'react-router-dom'
import { getCitiesList } from '../../api/coutry'
import SelectSearch from '../SelectSearch/SelectSearch'
import { getJobTypes } from '../../api/job'
import { useEffect } from 'react'
import { useState } from 'react'
import MediaContext from '../../context/MediaContext'
import { DESKTOP } from '../../constants/MediaTypeConstants'


const JobFindingSearchBar = ({ onChange = () => { } }) => {
    const [search, setSearch] = useState({
        title: null,
        location: null,
        type: null,
        salary: null,
    })
    const { deviceType } = useContext(MediaContext)
    useEffect(() => {
        onChange(search)
    }, [search])
    return (
        <div className="job-finding-searchbar flex justify-content-center">
            <div className='flex flex-column'>
                <h2>Trouver votre job de reve</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae voluptas sed nulla eveniet voluptatibus reiciendis, officia deserunt error molestiae</p>
                <div className='search-form'>
                    <div className="job-title">
                        <span className='fake-placeholder flex align-items-center' style={{ display: "block", width: '100%' }}>
                            <Search />
                            <SuggestInput onChange={(title) => setSearch(prev => ({ ...prev, title }))} searchProperty='title' repoName='repoJobTitles' placeholder="Titre du poste,mot clé ou entreprise" query={(keyword) => getJobTitles(keyword)} mapping={(jo) => <Link className='text-ellipsis'>{jo.title}</Link>} />
                        </span>
                    </div>
                    <div className="job-location">
                        <span className='fake-placeholder flex align-items-center'>
                            <GeoAltFill />
                            <SuggestInput onChange={(location) => setSearch(prev => ({ ...prev, location }))} placeholder="Votre ville" repoName='repoCities' query={(keyword) => getCitiesList(keyword)} mapping={(c) => <Link className='text-ellipsis'>{c.name}</Link>} />
                        </span>
                    </div>
                    <div className="job-type">
                        <span className='fake-placeholder flex align-items-center'>
                            <BriefcaseFill />
                            <SelectSearch
                                searchFields={['title']}
                                onChange={(type) => setSearch(prev => ({ ...prev, type }))}
                                placeholder='Type'
                                searchPlaceholder='Rechercher un type'
                                query={(filters) => getJobTypes()}
                                repoName="jobTypesRepo"
                                toPlaceholder={(elem) => elem.title}
                                objectMapping={(t) => ({ title: t.title, value: `/api/job_types/${t.id}` })}
                                mapping={(t) => <Link>
                                    <span>{t.title}</span>
                                </Link>}
                            />
                        </span>
                    </div>
                    <div className="salary">
                        <span className='fake-placeholder flex align-items-center gap-15'>
                            <Search />
                            <span>Salaire</span>
                        </span>
                    </div>
                    <div className="job-search-btn">
                        <button className='btn-orange'>{deviceType === DESKTOP ? 'Rechercher' : <Search />}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobFindingSearchBar
