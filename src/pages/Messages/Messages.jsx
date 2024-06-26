import React, { useContext, useEffect, useState } from 'react'
import './Messages.scss'
import Searchbar from '../../components/Searchbar/Searchbar'
import Avatar from '../../components/Avatar/Avatar'
import { ArrowDown, Check2Square, CheckSquare, ChevronDown, EmojiSmile, Mic, ThreeDots, Image, Plus, Search, Trash, Pencil, PencilSquare } from 'react-bootstrap-icons'
import Discussion from '../../components/Discussion/Discussion'
import DoDinamicTextarea from '../../components/doDinamicTextarea/DoDinamicTextarea'
import Message from '../../components/Message/Message'
import Tab from '../../components/Tabs/Tab'
import Tabs from '../../components/Tabs/Tabs'
import { Link } from 'react-router-dom'
import DropDown from '../../components/DropDown/DropDown'
import { useReq } from '../../Hooks/RequestHooks'
import DiscussionLoader from '../../components/SkeletonLoaders/DiscussionLoader'
import { useParams } from 'react-router-dom'
import Messenger from '../../components/Messenger/Messenger'
import Skeleton from '../../components/Skeleton/Skeleton'
import DiscussionSkeleton from '../../components/Discussion/DiscussionSkeleton'
import MediaContext from '../../context/MediaContext'
import { DESKTOP, SMARTPHONE, TABLET } from '../../constants/MediaTypeConstants'
import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteDiscussion, getDiscussions } from '../../api/discussion'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'
const Messages = () => {


    const { deviceType } = useContext(MediaContext)

    const { discuId } = useParams()
    const [activeDiscu, setActiveDiscu] = useState(null)
    const { data: discussions, error, isLoading: discussionsLoading } = useQuery({
        queryKey: 'repoDiscu',
        queryFn: getDiscussions
    })
    const { data: discuList,
        flatData: discuListFlat,
        error: discuListErr,
        hasNextPage: discuListNextPage,
        isFetching: discuListFetching,
        isFetchingNextPage: discuListFetchingNextPage,
        status: discuListLoadingStatus,
        refetch,
        refetchPage
    } = useInfiniteScroll({
        url: `${process.env.REACT_APP_API_DOMAIN}/discussions`,
        ipp: 10,
        queryKey: ['discuList'],
    })


    useEffect(() => {
        setActiveDiscu(discussions?.find(elem => elem.id === discuId))
    }, [discuId, discussions, activeDiscu])
    return (
        <main className='messages-page flex'>
            <div className="left">
                <div>
                    <div className="top">
                        <div className='flex justify-content-between mb-15'>

                            {
                                (deviceType !== SMARTPHONE) &&
                                <h2>Messages</h2>
                            }
                            <DropDown>
                                <div className="post-plus-btn"><Plus size={28} style={{ display: 'block' }} /></div>
                                <ul>
                                    <li>
                                        <Link to='/'>Modifier la publication</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Suprimer</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Enregistrer</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Alerter les activités</Link>
                                    </li>
                                </ul>
                            </DropDown>
                        </div>
                        <Searchbar />
                    </div>

                    <div className="messages-favorite-contacts">
                        <h5>Disponible</h5>
                        <div className="flex gap-5">
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Sammy Assan</b>
                            </div>
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Bob l'éponge</b>
                            </div>
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Bob l'éponge</b>
                            </div>
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Sammy Assan</b>
                            </div>
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Bob l'éponge</b>
                            </div>
                            <div className="flex flex-column align-items-center gap-5">
                                <Avatar height={45} width={45} />
                                <b>Bob l'éponge</b>
                            </div>
                        </div>
                    </div>
                    <Tabs className='post-comments-tabs'>
                        <Tab title={<span>Discussions ({discuList?.pages[0]?.totalItems})</span>}>
                            <div className="discussion-list">
                                {
                                    (deviceType !== SMARTPHONE) &&
                                    <span className='order-discussion flex align-items-center gap-5 px-10 py-5'>Les plus reçents <ChevronDown /></span>
                                }

                                {
                                    (discuListFetching && !discuListFetchingNextPage) ? (
                                        <>
                                            <>
                                                <DiscussionSkeleton />
                                                <DiscussionSkeleton />
                                                <DiscussionSkeleton />
                                                <DiscussionSkeleton />
                                                <DiscussionSkeleton /></>
                                        </>
                                    ) : error ? (
                                        <p>Error: {error.message}</p>
                                    ) : (discuList?.pages[0]?.data?.length > 0 ? discuList?.pages?.map((group, i) => (
                                        <React.Fragment key={i}>
                                            {group.data.map((d, i) => (
                                                <Discussion key={i} data={d} active={d.id === discuId} />
                                            ))}
                                        </React.Fragment>


                                    )) : <div className="empty-job flex flex-column justify-content-center align-items-center gap-5">
                                        <h4>Aucune discussion disponible</h4>
                                        <p className='text-center'>Nous vous invitons à prendre contact avec d'autres personnes ou entités pour demarrer une discussion</p>
                                    </div>)
                                }
                                {discuListFetchingNextPage
                                    ? <>
                                        <DiscussionSkeleton />
                                        <DiscussionSkeleton />
                                        <DiscussionSkeleton /></>
                                    : discuListNextPage
                                        ? ''
                                        : ''}

                            </div>
                        </Tab>
                        <Tab title={<span>Contacts</span>}>
                            contenu
                        </Tab>
                    </Tabs>
                </div>

            </div>
            <div className="center flex align-items-center justify-content-center flex-grow-1">
                {
                    discuId ?
                        <Messenger discuId={discuId} discu={activeDiscu} />
                        : <div className="empty-msg flex flex-column align-items-center">
                            <img src="/img/wired-flat-981-consultation.gif" alt="" />
                            <h4>Sélectionnez une Discussion</h4>
                        </div>

                }
            </div>
        </main>
    )
}

export default Messages
