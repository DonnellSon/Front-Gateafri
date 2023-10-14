import React from 'react'
import './JobFindingSearchbar.scss'
import { Search, PinMapFill, BriefcaseFill, GeoAltFill } from 'react-bootstrap-icons'

const JobFindingSearchBar = () => {
    return (
        <div className="job-finding-searchbar flex justify-content-center">
            <div className='flex flex-column'>
                <h2>Trouver votre job de reve</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus beatae voluptas sed nulla eveniet voluptatibus reiciendis, officia deserunt error molestiae</p>
                <div className='search-form'>
                    <div className="job-title">
                        <span className='fake-placeholder flex align-items-center gap-15' style={{display:"block",width:'100%'}}>
                            <Search />
                            <span className='text-ellipsis' style={{width:'100%',display:'block'}}>Titre du job,Entreprise ou mot clé</span>
                        </span>
                    </div>
                    <div className="job-location">
                        <span className='fake-placeholder flex align-items-center gap-15'>
                            <GeoAltFill/>
                            <span>Localisation</span>
                        </span>
                    </div>
                    <div className="job-type">
                        <span className='fake-placeholder flex align-items-center gap-15'>
                            <BriefcaseFill />
                            <span>Type</span>
                        </span>
                    </div>
                    <div className="salary">
                        <span className='fake-placeholder flex align-items-center gap-15'>
                            <Search />
                            <span>Salaire</span>
                        </span>
                    </div>
                    <div className="job-search-btn">
                        <button className='btn-orange'>Rechercher</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobFindingSearchBar
