import React from 'react'
import './Discussion.css'
import Avatar from '../Avatar/Avatar'
import { ThreeDots,Check2Square } from 'react-bootstrap-icons'
const Discussion = () => {
  return (
    <div className="discussion flex gap-10">
                    <Avatar height={45} width={45}/>
                    <div className="info">
                        <div className='top flex align-items-center'>
                            <div className="name flex-grow-1">Donnell Rajemson Randriamanantenarivo</div>
                            <div className='flex gap-5 align-items-center'>
                                <Check2Square/>
                                <button className="more-btn"><ThreeDots/></button>
                            </div>
                        </div>
                        <div className='bottom flex'>
                        <span className='txt'>Salut les gens</span>
                        <span className='date'>&nbsp;10:32&nbsp;</span>
                        </div>
                        
                    </div>
                </div>
  )
}

export default Discussion
