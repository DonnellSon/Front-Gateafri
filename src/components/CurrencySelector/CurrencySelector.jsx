import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Check2, X } from 'react-bootstrap-icons'
import Modal from '../Modal/Modal'
import './CurrencySelector.scss'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'
import CaretInput from '../CaretInput/CaretInput'
import Skeleton from '../Skeleton/Skeleton'
import CurrencyContext from '../../context/CurrencyContext'
import { useContext } from 'react'

const CurrencySelector = () => {
  const { currency, setCurrency } = useContext(CurrencyContext)
  const [openModal, setOpenModal] = useState(false)
  const {
    data: currenciesList,
    flatData: currenciesListFlat,
    error,
    hasNextPage: currenciesNextPage,
    isFetching: currenciesFetching,
    isFetchingNextPage: currenciesFetchingNextPage,
    status: currenciesLoadingStatus,
    refetch,
    refetchPage
  } = useInfiniteScroll({
    url: `${process.env.REACT_APP_API_DOMAIN}/currencies`,
    ipp: 100,
    queryKey: ['currencies'],
    transformResult: (result) => {
      return { data: result['hydra:member'], nextPage: result['hydra:view']['hydra:next'] ? parseInt(result['hydra:view']['hydra:next'].match(/page=(\d+)/)[0].split('=')[1]) : undefined }
    }
  })

  useEffect(() => {
    console.log(currenciesListFlat, 'CURRENCYFLAT')
  }, [currenciesListFlat])

  useEffect(() => {
    console.log(currency, 'JSONCURRENCY')
  }, [currency])


  return (
    <>

      <CaretInput className='currency-selector-inpt' value={currency} showValue={(value) => value?.code} onClick={() => setOpenModal(true)} active={openModal} />

      <Modal className='currency-selector-modal' open={openModal}>
        <div className='flex flex-column'>
          <div className="top relative">
            <h4>Selectionner votre dévise</h4>
            <p>Choisissez dans quel devise afficher les montants sur GateAfri</p>
            <div className="close-modal" onClick={() => { setOpenModal(false) }}>
              <X size={28} />
            </div>
          </div>
          <div className="body flex-grow-1">

            <ul>


              {
                currenciesLoadingStatus === 'loading' ? [...new Array(30)].map((_, i) =>
                (<li key={i} className='flex flex-column gap-10 p-5'>
                  <Skeleton radius={2} height={10} width='60%' />
                  <Skeleton radius={2} height={10} width='20%' />
                </li>)
                ) : currenciesLoadingStatus === 'error' ? (
                  <p>Error: {error.message}</p>
                ) : (currenciesList?.pages[0]?.data?.length > 0 ? currenciesList?.pages?.map((group, i) => (
                  <React.Fragment key={i}>
                    {group.data.map((c, i) => (
                      <li key={i} onClick={() => {
                        setCurrency(c)
                        setOpenModal(false)
                      }} className={`flex gap-5 p-10${c.id === currency?.id ? ` selected` : ''}`}>
                        <div className="check-radio">
                          <Check2 size={20} />
                        </div>
                        <div>
                          <span>{c.name}</span>
                          <p>{c.code}</p>
                        </div>
                      </li>
                    ))}
                  </React.Fragment>

                )) : <div className="empty-timeline">
                  <h1>Aucune Devise disponible</h1>
                </div>)
              }
              {currenciesFetchingNextPage
                ? [...new Array(5)].map(() =>
                (<li className='flex flex-column gap-10 p-5'>
                  <Skeleton radius={2} height={10} width='60%' />
                  <Skeleton radius={2} height={10} width='20%' />
                </li>)
                )
                : currenciesNextPage
                  ? ''
                  : ''}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default CurrencySelector
