import { useState, useEffect } from 'react'
import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'

const useInfiniteScroll = ({
    url,
    queryKey = ['infiniteScroll'],
    queryString = null,
    ipp = 5,
    enabled,
    scrollingElement = document.getElementById('App'),
    transformResult = (result) => {
        return { data: result['hydra:member'], totalItems: result['hydra:totalItems'], nextPage: result['hydra:view']['hydra:next'] ? parseInt(result['hydra:view']['hydra:next'].match(/page=(\d+)/)[0].split('=')[1]) : undefined }
    }
}) => {
    const fetchData = ({ pageParam = 1 }) => {
        return axios({
            url: `${url}?ipp=${ipp}&page=${pageParam}${queryString ? `&${queryString}` : ''}`,
            method: 'get',
            responseType: "json",
            headers: {
                'Accept': 'application/json+ld'
            },
            withCredentials: true
        }).then((res) => {
            console.log(res.data, 'useInfiniteScroll')
            return transformResult(res.data)
        })
    }

    const {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        refetch,
        refetchPage
    } = useInfiniteQuery({
        queryKey,
        queryFn: fetchData,
        getNextPageParam: (lastPage, pages) => lastPage.nextPage,
        enabled,
    })
    // useEffect(()=>{
    //     scrollingElement?.addEventListener('scroll', ()=>console.log('SCROLLLLL'))
    // },[scrollingElement])
    useEffect(() => {
        
        if (scrollingElement) {
            if (!isFetchingNextPage && !isFetching) {
                const { scrollHeight, scrollTop, clientHeight } = scrollingElement
                console.log('externScroll1')
                if (scrollHeight - scrollTop <= clientHeight + 50) {
                    console.log('goscroll')
                    fetchNextPage()
                }
            }
            const onScroll = (e) => {
                if (!isFetchingNextPage && !isFetching) {
                    const { scrollHeight, scrollTop, clientHeight } = e.target
                //     console.log('externScroll2')
                    if (scrollHeight - scrollTop <= clientHeight + 50) {
                        console.log('goscroll')
                        fetchNextPage()
                    }
                }
            }
            scrollingElement?.removeEventListener('scroll', onScroll)
            scrollingElement?.addEventListener('scroll', onScroll)

            return () => {
                scrollingElement?.removeEventListener('scroll', onScroll)
            }
        }

    }, [scrollingElement,isFetchingNextPage,isFetching])

    return {
        data,
        flatData: data?.pages?.map((group) => group).map((g) => g.data).flat(),
        error,
        fetchNextPage,
        hasNextPage,
        isFetching,
        isFetchingNextPage,
        status,
        refetch,
        refetchPage
    }
}

export default useInfiniteScroll
