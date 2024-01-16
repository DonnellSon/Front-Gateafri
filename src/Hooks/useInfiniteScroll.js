import {useState,useEffect} from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

const useInfiniteScroll = ({url,queryKey=['infiniteScroll'],queryString=null,ipp=5,scrollingElement=document.getElementById('App'),transformResult=(result)=>{}}) => {
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
        getNextPageParam: (lastPage, pages) => lastPage.nextPage
    })

    useEffect(() => {
        if (!isFetchingNextPage && !isFetching) {
            const { scrollHeight, scrollTop, clientHeight } = scrollingElement
            if (scrollHeight - scrollTop <= clientHeight + 50) {
                fetchNextPage()
            }
        }
        const onScroll = (e) => {

            if (!isFetchingNextPage && !isFetching) {
                const { scrollHeight, scrollTop, clientHeight } = e.target
                if (scrollHeight - scrollTop <= clientHeight + 50) {
                    fetchNextPage()
                }
            }
        }
        scrollingElement.addEventListener('scroll', onScroll)

        return () => {
            scrollingElement.removeEventListener('scroll', onScroll)
        }

    }, [isFetchingNextPage, isFetching])
    
    return {
        data,
        flatData:data?.pages?.map((group)=>group).map((g)=>g.data).flat(),
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
