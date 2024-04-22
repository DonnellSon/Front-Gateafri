import React, { useState, useEffect } from 'react'
import './MultiSelectSearch.scss'
import { useQuery } from '@tanstack/react-query'
import { getDomains } from '../../api/domain'
import SelectSearch from './SelectSearch'
import { PlusLg, Trash } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const MultiSelectSearch = ({ query,searchFields=['title'],mapping = (elem)=><Link>{elem.title}</Link>, objectMapping = (elem) => elem, placeholder = 'Choisir une option', searchPlaceholder = 'Rechercher',repoName='optionsRepo', onChange = () => { } }) => {
  const [selected, setSelected] = useState([{}])

  const addOption = () => {
    setSelected([...selected, {}])
  }
  const removeOption = (index) => {
    if (selected?.length > 1) {
      const newOptions = selected.slice()
      setSelected(prev => prev.filter((m, i) => i !== index))
    }
  }
  const editOption = (index, newValue) => {
    const newOptions = selected.slice()
    newOptions[index] = newValue
    setSelected(newOptions)
  }
  

  useEffect(() => {
    onChange(selected)
  }, [selected])

  return (
    <>

      {
        selected?.map((s, i) => (
          <div key={i} className="flex align-items-center gap-10 multi-select-search-item">
            <SelectSearch searchFields={searchFields} repoName={repoName} exclude={selected} mapping={mapping} objectMapping={objectMapping} query={query} placeholder={placeholder} searchPlaceholder={searchPlaceholder} onChange={(option) => { editOption(i,option) }} />
            <button className='btn-outline-light' onClick={() => { removeOption(i) }}><Trash size={16} /></button>
          </div>
        ))
      }
      <button className="btn btn-orange mt-10" onClick={addOption}><PlusLg /></button>
    </>
  )
}

export default MultiSelectSearch
