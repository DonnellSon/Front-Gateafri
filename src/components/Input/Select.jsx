import React, { useEffect, useState } from 'react'
import './Select.scss'
import { CaretDown, CaretDownFill } from 'react-bootstrap-icons'
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom'


const Select = ({ placeholder = null, selectedValue = null, selectList = [
    { title: 'Select 1' },
    { title: 'Select 2' },
    { title: 'Select 3' },
    { title: 'Select 4' }],
    onChange = () => { } }) => {
    const [selected, setSelected] = useState(selectedValue)
    useEffect(() => {
        onChange(selected)
    }, [selected])
    return (
        <div className='select-inpt'>
            <DropDown>
                <div className="fk-select-inpt inpt relative flex align-items-center">
                    <div className='placeholder flex-grow-1'><span className='text-ellipsis'>{selected?.title ?? (selectList.find((s) => s.defaultChecked === true) && selectList.find((s) => s.defaultChecked === true).title) ?? placeholder ?? "Selectionner"}</span></div>
                    <div className="caret flex align-items-center justify-content-center"><CaretDownFill /></div>
                </div>
                <ul>
                    {
                        selectList.map((s, i) =>
                            <li key={i}>
                                <Link className={`${(selected?.title === s.title) ? 'active' : ''}`} onClick={() => { setSelected(s) }}>{s.title}</Link>
                            </li>
                        )
                    }
                </ul>
            </DropDown>


        </div>
    )
}

export default Select
