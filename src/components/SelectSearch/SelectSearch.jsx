import React from 'react'
import './SelectSearch.scss'
import Searchbar from '../Searchbar/Searchbar'
import DropDown from '../DropDown/DropDown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CaretDown, CaretDownFill } from 'react-bootstrap-icons'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { filtersToURL } from '../../functions'

const SelectSearch = ({
    className=null,
    placeholder = 'Choisir une option',
    searchPlaceholder = 'Rechercher',
    searchFields = ['title'],
    value = null,
    readOnly = false,
    toPlaceholder = (elem) => elem.title,
    repoName = 'repoOptions',
    exclude = [],
    query,
    mapping = (elem) => <Link>{elem.title}</Link>,
    objectMapping = (elem) => elem,
    onChange = () => { } }) => {
    const [defaultValue, setDefaultValue] = useState(placeholder)
    const [filters, setFilters] = useState({})
    const [keyword, setKeyword] = useState('')
    const { data: optionsList, error: optionsListErr, isLoading: getOptionsListLoading, refetch, isRefetching } = useQuery({
        queryKey:[repoName], 
        queryFn:() => query(filtersToURL(filters))})


    useEffect(() => {
        if (searchFields?.length > 0) {
            const newFilters = { ...filters }
            searchFields.forEach((sf) => {
                newFilters[sf] = keyword
            })
            setFilters(newFilters)
        }
    }, [keyword])

    useEffect(() => {
        refetch()
    }, [filters])


    return (
        <div className={`select-search flex-grow-1${className ? ' '+className : ''}`}>
            <DropDown togglable={!readOnly} className='fake-select'>
                <div className='fake-input'>
                    <div type="text" className="inpt">
                        {value || defaultValue}
                    </div>
                    <div className="chevron">
                        <CaretDownFill size={13} />
                    </div>
                </div>
                <div className="select-search-dropdown-menu">
                    <Searchbar onChange={(val) => setKeyword(val)} placeholder={searchPlaceholder} />
                    <ul className="select-search-list">
                        {
                            optionsList?.map((opt) => objectMapping(opt)).filter((d) => !exclude.find((s) => s.value === d.value)).map((o, i) => <li key={i} onClick={(e) => {
                                setDefaultValue(toPlaceholder(o))
                                onChange(o)
                            }}>{mapping(o)}</li>)
                        }
                    </ul>
                </div>
            </DropDown>

        </div>
    )
}

export default SelectSearch
