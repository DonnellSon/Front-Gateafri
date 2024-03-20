import React, { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import AmountInput from '../AmountInput/AmountInput'
import './SalaryInputs.scss'

const EXACT = "Montant exact"
const INTERVAL = "Fourchette"

const SalaryInputs = ({onChange=()=>{}}) => {
    const [salary, setSalary] = useState({
        amount:null,
        currency:null
    })
    const min=useRef()
    const max=useRef()
    const amount=useRef()

    const [layout, setLayout] = useState(EXACT)
    useEffect(()=>{
        onChange(salary);
        console.log(salary,'SALARY')
    },[salary])
    return (
        <div className='salary-inputs'>
            <div className="flex gap-10 flex-wrap">
                <div>
                    <span>Afficher par</span>
                    <select name="" onChange={(e)=>setLayout(e.target.value)} id="">
                        <option value={EXACT}>Montant exact</option>
                        <option value={INTERVAL}>Fourchette</option>
                    </select>
                </div>
                {
                    layout === INTERVAL ? <div className='flex gap-10' style={{ width: '100%' }}>
                        <div className="form-group">
                            <span>Minimum</span>
                            <AmountInput onChange={({value,currency})=>setSalary(prev=>({...prev,min:parseInt(value),currency}))} placeholder='Salaire minimum'/>
                        </div>
                        <div className="form-group">
                            <span>Maximum</span>
                            <AmountInput onChange={({value,currency})=>setSalary(prev=>({...prev,max:parseInt(value),currency}))} placeholder='Salaire maximale'/>
                        </div>
                    </div> :
                        <div className="form-group">
                            <span>Montant</span>
                            <AmountInput onChange={({value,currency})=>setSalary({amount:parseInt(value),currency})} placeholder='Montant du salaire'/>
                        </div>
                }

            </div>
        </div>
    )
}

export default SalaryInputs
