import React, { useState, useEffect } from 'react'
import "./Timeline.scss"
import axios from 'axios'
import PostCardSkeleton from '../../components/PostCard/PostCardSkeleton';
import PostCard from '../PostCard/PostCard';
import { useInfiniteQuery, useQuery } from 'react-query';
import SliderNav from '../SliderNav/SliderNav';
import { getDomains, getUserDomains } from '../../api/domain';

import { filtersToURL } from '../../functions';
import { Sliders } from 'react-bootstrap-icons';
import { getUserCompanies } from '../../api/company';
import { useSelector } from 'react-redux';
import DomainsSelector from '../DomainsSelector/DomainsSelector';
import PostModal from '../PostModal/PostModal';
const Timeline = () => {

    const { user } = useSelector(store => store.user)
    const [posts, setPosts] = useState([])
    const [filters, setFilters] = useState(null)
    const [openPostModal,setOpenPostModal]=useState(false)

    /**
     * Recuperation userDomains
     */
    const { data: userDomains, error: userDomainsErr, isLoading: userDomainsLoading } = useQuery({
        queryKey: ['repoUserDomains'],
        queryFn: () => getUserDomains(user.id),
        enabled: user ? true : false
    })

    const {
        status,
        fetchStatus,
        data: domains,
    } = useQuery({
        queryKey: ['repoDomainsList', userDomains],
        queryFn: () => getDomains(),
        enabled: userDomains ? false : true,
    })

    useEffect(() => {
        console.log(userDomains, domains, 'DOMAINS')
    }, [userDomains, domains])

    /**
     * Recuperation des posts
     */

    const fetchPosts = ({ pageParam = 1 }) => {
        return axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/posts?ipp=5&page=${pageParam}${filters ? `& ${filtersToURL(filters)}` : ''}`,
            method: 'get',
            responseType: "json",
            headers: {
                'Accept': 'application/json+ld'
            },
            withCredentials: true
        }).then((res) => {
            console.log(res.data, 'JSONLD')
            return { data: res.data['hydra:member'], nextPage: res.data['hydra:view']['hydra:next'] ? parseInt(res.data['hydra:view']['hydra:next'].match(/page=(\d+)/)[0].split('=')[1]) : undefined }
        })
    }

    const {
        data: postsList,
        error,
        fetchNextPage,
        hasNextPage: postsListNextPage,
        isFetching,
        isFetchingNextPage: postsListFetchingNextPage,
        status: postsLoadingStatus,
        refetch,
        refetchPage
    } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        getNextPageParam: (lastPage, pages) => lastPage.nextPage
    })


    useEffect(() => {
        refetch({ refetchPage: (page, index) => index === 0 })
    }, [filters])

    useEffect(() => {
        if (!postsListFetchingNextPage && !isFetching) {
            const { scrollHeight, scrollTop, clientHeight } = document.getElementById('App')
            if (scrollHeight - scrollTop <= clientHeight + 50) {
                fetchNextPage()
            }
        }
        const onScroll = (e) => {

            if (!postsListFetchingNextPage && !isFetching) {
                const { scrollHeight, scrollTop, clientHeight } = e.target
                if (scrollHeight - scrollTop <= clientHeight + 50) {
                    fetchNextPage()
                }
            }
        }
        document.getElementById('App').addEventListener('scroll', onScroll)

        return () => {
            document.getElementById('App').removeEventListener('scroll', onScroll)
        }

    }, [postsListFetchingNextPage, isFetching])

    const [chooseDomains,setChooseDomains]=useState(false)

    return (
        <div className='timeline'>
            <DomainsSelector open={chooseDomains} onClose={()=>setChooseDomains(false)}/>
            {
                (userDomains || domains) &&
                <SliderNav defaultActive={1}>
                    {
                        [
                            user && <span className='flex align-items-center' onClick={()=>{
                                setChooseDomains(true)
                                return false
                            }}><Sliders size={18} /></span>,
                            <span onClick={() => setFilters(null)}>Tous</span>,

                            ...(userDomains || domains).map((d, i) =>
                                <span key={i} onClick={() => setFilters((prev) => ({ ...prev, ['author.domain']: d.title }))}>
                                    {d.title}
                                </span>
                            )
                        ].filter(element => element !== null)
                    }
                </SliderNav>

            }

            <div className="post-list">
                {
                    postsLoadingStatus === 'loading' ? (
                        <>
                            <PostCardSkeleton />
                            <PostCardSkeleton />
                        </>
                    ) : postsLoadingStatus === 'error' ? (
                        <p>Error: {error.message}</p>
                    ) : postsList?.pages?.length > 0 ? postsList?.pages?.map((group, i) => (
                        <React.Fragment key={i}>
                            {group.data.map((p) => (
                                <PostCard
                                    key={i}
                                    data={p}
                                    onDelete={(postId) => setPosts(posts.filter(p => p.id !== postId))}
                                />
                            ))}
                        </React.Fragment>
                        
                    )) : <div className="empty-timeline" onClick={()=>setOpenPostModal(true)}>
                        <h1>Aucun post à afficher</h1>
                        <p>Nous vous invitons à créer un premier post pour commencer vos activités et intéragir avec d'autres opérateurs économiques en Afrique</p>
                        <button className="btn btn-gradient">Créer un post</button>
                    </div>
                }
                {postsListFetchingNextPage
                    ? <PostCardSkeleton />
                    : postsListNextPage
                        ? ''
                        : ''}
            </div>
            <PostModal isOpen={openPostModal} setIsOpen={setOpenPostModal}/>
        </div>
    )
}

export default Timeline