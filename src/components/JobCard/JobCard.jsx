import React from 'react'
import './JobCard.css'
import Avatar from '../Avatar/Avatar'
import { Eye } from 'react-bootstrap-icons'
const JobCard = () => {
    return (
        <div className="job-card">
            <div className="top">
                <div className='flex gap-10'>
                    <Avatar width={45} height={45} />
                    <div className="job-info">
                        <h2>Developpeur UI/UX</h2>
                        <span><span className='purple-txt'>Solania</span> | Anosy - Atananarivo, Madagascar</span>
                        <br />
                        <small>Il y a 1 min</small>
                    </div>
                </div>
                <h5>800k - 900k MGA</h5>
            </div>
            <div>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ad nostrum explicabo reprehenderit fugiat? Est velit assumenda ratione ea! Accusamus fugit labore officia sequi soluta facilis pariatur non voluptatibus? Autem.</p>
                <div className="bottom flex gap-10">
                    <button className="btn-transparent orange-txt">Postuler</button>
                    <button className="btn-transparent purple-txt"><Eye /></button>
                </div>
            </div>
        </div>
    )
}

export default JobCard
