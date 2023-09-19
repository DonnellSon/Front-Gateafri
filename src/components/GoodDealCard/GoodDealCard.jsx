import React from 'react'
import './GoodDealCard.css'
import Avatar from '../Avatar/Avatar'
const GoodDealCard = ({data}) => {
    return (
        <div className='good-deal-card relative'>
            <img src={data.cover} alt="" className='ent-image absolute' />
            <div className='absolute' style={{minWidth:0,width:'100%'}}>
                <div className="flex align-items-center justify-content-between">
                    <Avatar />
                    <img src="/img/flags/Flag_of_Madagascar.svg" alt="" width={30} />
                </div>
                <div className="caption relative">
                    <div className='glass'></div>
                    <h3 className="author-name text-ellipsis relative">{data.author.firstName} {data.author.lastName}</h3>
                    <h1 className="entreprise-name text-ellipsis relative">{data.entrepriseName}</h1>
                    <p className='text-ellipsis relative'>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default GoodDealCard
