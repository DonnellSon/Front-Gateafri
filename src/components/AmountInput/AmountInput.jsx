import React, { useState, useEffect, useContext } from 'react'
import SelectSearch from '../SelectSearch/SelectSearch'
import './AmountInput.scss'
import { Link } from 'react-router-dom'
import { getCurrenciesList } from '../../api/coutry'
import CurrencyContext from '../../context/CurrencyContext'

const AmountInput = ({ placeholder, readOnlyCurrency = false, onChange = () => { },field }) => {
    const [amount, setAmount] = useState(null)
    const { currency } = useContext(CurrencyContext)
    useEffect(() => {
        onChange(amount)
    }, [amount])
    return (
        <div className='amount-input flex align-items-center relative'>
            <input type="number" name="" id="" className="inpt" {...{...field,onChange:
                (e) => {
                    field.onChange(e)
                    setAmount(prev => ({ ...prev, value: e.target.value }))
                }
            }} placeholder={placeholder} />
            <div className="currency">
                <span>{currency.code}</span>
            </div>
        </div>
    )
}

export default AmountInput
