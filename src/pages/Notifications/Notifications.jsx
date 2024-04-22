import React from 'react'
import { Nut } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import './Notifications.scss'
import Tabs from '../../components/Tabs/Tabs'
import Tab from '../../components/Tabs/Tab'
import useInfiniteScroll from '../../Hooks/useInfiniteScroll'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { NEW_POST } from '../../constants/NotificationType'
import { Link } from 'react-router-dom'
import NotificationSkeleton from './NotificationSkeleton'


const Notifications = () => {

    const { user } = useSelector(store => store.user)

    const { data: notifications,
        flatData: notificationsFlat,
        error,
        hasNextPage: notificationsNextPage,
        isFetching: notificationsFetching,
        isFetchingNextPage: notificationsFetchingNextPage,
        status: notificationsLoadingStatus,
        refetch,
        refetchPage
    } = useInfiniteScroll({
        url: `${process.env.REACT_APP_API_DOMAIN}/notifications`,
        ipp: 10,
        queryKey: ['notifications', user?.id],
        transformResult: (result) => {
            return { data: result['hydra:member'], nextPage: result['hydra:view']['hydra:next'] ? parseInt(result['hydra:view']['hydra:next'].match(/page=(\d+)/)[0].split('=')[1]) : undefined }
        }
    })

    useEffect(() => {
        console.log(notificationsFlat, 'FLATNOTIF')
    }, [notificationsFlat])


    return (
        <div id='notification-page'>
            <div className="top flex justify-content-between align-items-center">
                <h3>Notifications</h3>
                <div>
                    <Nut size={20} />
                </div>
            </div>
            <div className="body">
                    <Tabs className='notification-tabs'>
                        <Tab title={<>
                            <span>Tous</span>
                        </>}>
                            {
                                notificationsFetching ?
                                    [...new Array(8)].map(_ => <NotificationSkeleton />) :
                                    notificationsFlat?.map((n, i) => {

                                        if (n.type === NEW_POST) {
                                            var domains = n.post.author.domains?.map(d => d.title).join(', ')
                                            return (
                                                <div className="notification flex gap-10">
                                                    <Avatar src={n.post.author.activeLogo?.fileUrl || n.post.author.activeProfilePicture?.fileUrl} width={55} height={55} />
                                                    <div className="notification-capt flex flex-column justify-content-center">
                                                        <p><b>{n.post.author.name ? n.post.author.name : `${n.post.author.firstName} ${n.post.author.lastName}`}</b> a publié un post lié aux domaines qui vous intéressent {domains}</p>
                                                        <span className='notication-date'>Il y a 2 heures</span>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    })
                            }
                            {
                                notificationsFetchingNextPage ?
                                    [...new Array(2)].map(_ => <NotificationSkeleton />)
                                    : ''
                            }

                        </Tab>
                        <Tab title={<>
                            <span>Non lu</span>
                        </>}>
                            <div className="notification flex gap-10">
                                <Avatar width={55} height={55} />
                                <div className="notification-capt">
                                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                                    <span className='notication-date'>Il y a 2 heures</span>
                                </div>
                            </div>
                            <div className="notification flex gap-10">
                                <Avatar width={55} height={55} />
                                <div className="notification-capt">
                                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                                    <span className='notication-date'>Il y a 2 heures</span>
                                </div>
                            </div>
                            <div className="notification flex gap-10">
                                <Avatar width={55} height={55} />
                                <div className="notification-capt flex align-items-center">
                                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span>a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                                    <span className='notication-date'>Il y a 2 heures</span>
                                </div>
                            </div>
                            <div className="notification flex gap-10">
                                <Avatar width={55} height={55} />
                                <div className="notification-capt">
                                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                                    <span className='notication-date'>Il y a 2 heures</span>
                                </div>
                            </div>
                        </Tab>

                    </Tabs>
            </div>
        </div>
    )
}

export default Notifications
