import React from 'react'
import './JobDetails.scss'
import Avatar from '../Avatar/Avatar'
const JobDetails = () => {
  return (
    <div className="job-details">
      <div className="cover relative">
        <img src="/img/entreprises/vy.jpg" className='absolute' alt="" />
      </div>
      <Avatar height={50} width={50} radius='5px' />
      <h1 className='job-title'>Designer et Developpeur Web</h1>
      <p className='job-location'><b className='purple-txt'>Gate Digital</b> | Ampandrana - Antananarivo, Madagascar</p>
      <div className="job-requirements flex justify-content-between">
        <div className='flex flex-column'>
          <span>EXPERIENCE</span>
          <b>2-3 ans</b>
        </div>
        <div className='flex flex-column'>
          <span>GRADE</span>
          <b>Senior</b>
        </div>
        <div className='flex flex-column'>
          <span>TYPE</span>
          <b>Teletravail</b>
        </div>
        <div className='flex flex-column'>
          <span>SALAIRE</span>
          <b>800k - 900k</b>
        </div>
      </div>
      <hr />
      <div className="role">
        <h4>Missions et responsabilites</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum, praesentium fugiat illo, quod veniam repellendus voluptatem aut sapiente veritatis, necessitatibus aliquid reiciendis consequuntur. Dolor consequuntur quos ipsam laudantium eveniet?</p>
      </div>
      <div className="role">
        <h4>Qualification requises</h4>
        <ul>
          <li>Bacc+3 ou Master en Informatique ou domaine eqivatent</li>
          <li>Au moins 2ans d'éxperience en PHP,SYMFONY,LARAVEL</li>
          <li>Connaissance des outils de design(Figma,Photoshop,etc...)</li>
          <li>Bonne connaissance du DevOps et VPS</li>
          <li>Apte a travailler en equipe</li>
          <li>Dynamique,curieux et autonome</li>
          <li>Concevoir et maintenir les sites de nos collaborateurs</li>
        </ul>
      </div>
    </div>
  )
}

export default JobDetails
