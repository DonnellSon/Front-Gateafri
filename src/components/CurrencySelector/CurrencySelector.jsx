import React from 'react'
import { useState } from 'react'
import Modal from '../Modal/Modal'
import './CurrencySelector.scss'

const CurrencySelector = () => {
  const [selected,setSelected]=useState(null)
  return (
    <Modal className='currency-selector-modal'>
        <div className="top">
            <h4>Selectionner votre dévise</h4>
            <p>Choisissez dans quel devise afficher les montants sur GateAfri</p>
        </div>
        <div className="body">
            <ul>
                <li></li>
            </ul>
        </div>
    </Modal>
  )
}

export default CurrencySelector
