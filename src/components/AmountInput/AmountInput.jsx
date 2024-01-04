import React, { useState, useEffect } from 'react'
import SelectSearch from '../SelectSearch/SelectSearch'
import { Link } from 'react-router-dom'
import { getCurrenciesList } from '../../api/coutry'

const AmountInput = ({ placeholder,currency=null,readOnlyCurrency=false, onChange = () => { } }) => {
    const [amount, setAmount] = useState(null)
    useEffect(() => {
        onChange(amount)
    }, [amount])
    return (
        <div className='amount-input flex gap-5'>
            <input type="number" name="" id="" className="inpt" onChange={
                (e) => setAmount(prev=>({...prev,value:e.target.value}))
            } placeholder={placeholder} />
            <SelectSearch
                value={currency}
                readOnly={readOnlyCurrency}
                searchFields={['name']}
                onChange={(c) => { setAmount(prev => ({ ...prev, currency: c })) }}
                placeholder='Selectionner une devise'
                searchPlaceholder='Rechercher un devise'
                query={(filters) => getCurrenciesList({filters})}
                repoName="currenciesRepo"
                toPlaceholder={(elem) => elem.code}
                objectMapping={(c) => ({ ...c,name: c.name, value: `/api/currencies/${c.id}` })}
                mapping={(c) => <Link>
                    <span>{c.code}</span>
                </Link>}
            />
        </div>
    )
}

export default AmountInput
