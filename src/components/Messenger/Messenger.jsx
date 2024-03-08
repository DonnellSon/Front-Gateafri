import React, { useEffect, useState, useLayoutEffect, useRef, useContext } from 'react'
import { ArrowDown, Check2Square, CheckSquare, ChevronDown, EmojiSmile, Mic, ThreeDots, Image, Plus, Search, Trash, Pencil, PencilSquare, SendFill } from 'react-bootstrap-icons'
import Message from '../Message/Message'
import Avatar from '../Avatar/Avatar'
import DoDinamicTextarea from '../doDinamicTextarea/DoDinamicTextarea'
import { useReq } from '../../Hooks/RequestHooks'
import { useSelector } from 'react-redux'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import SocketIOContext from '../../context/SocketIOContext'

const Messenger = ({ discu }) => {
    const { discuId } = useParams()
    const { user } = useSelector(store => store.user)
    const {socket}=useContext(SocketIOContext)
    const scrollRef = useRef()
    const queryClient = useQueryClient()
    const [filteredMessages, setFilteredMessages] = useState([])
    const [tmpMessage, setTmpMessage] = useState("")
    const [emptyMessageForm, setEmptyMessageForm] = useState(false)
    const [profilePictures, setProfilePictures] = useState(null)

    useEffect(() => {
        setProfilePictures(discu?.members
            ?.filter((m) => m.user.id !== user?.id && m.user.activeProfilePicture)
            .map((m) => m.user.activeProfilePicture))
    }, [discu?.members])

    const addMessage = async (data) => (
        await axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/messages`,
            data,
            method: 'post',
            withCredentials: true
        }).then((res) => res.data)
    )

    const { isLoading: messagesLoading, error: messageError, data: messages, refetch: refetchMsg } = useQuery(['repoMessages', discuId], () =>
        axios({
            url: `${process.env.REACT_APP_API_DOMAIN}/api/discussions/${discuId}/messages`,
            method: 'get', withCredentials: true
        }).then((res) => res.data.reverse())
    )

    const messagesMutation = useMutation(addMessage, {
        onSuccess: (data) => {

            queryClient.setQueryData(['repoMessages', discuId], (messages) => {
                socket?.emit('sendMessage', {
                    message: data,
                    receivers: discu?.members?.filter((m) => m.user.id !== user?.id),
                    sender: user?.id
                })
                scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight, left: 0, behavior: 'smooth' })
                return [...messages, data]
            })

        },
    })


    useEffect(() => {
        if (socket) {
            socket?.on('arrivalMsg', (msg) => {
                if (msg.discussion.id === discuId) {
                    scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight, left: 0, behavior: 'smooth' });
                    queryClient.invalidateQueries(['repoMessages', discuId]);
                }
            });
        }
    }, []);


    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current?.scrollHeight, left: 0, behavior: 'smooth' })
    }, [discuId])

    useEffect(() => {
        if (messages) {
            const groupedMessages = messages.reduce((result, message) => {
                const lastGroup = result[result.length - 1];
                if (lastGroup && lastGroup.author.id === message.author.id && lastGroup.messages.length < 5) {
                    lastGroup.messages.push(message);
                } else {
                    result.push({ author: message.author, messages: [message] });
                }
                return result;
            }, []);

            setFilteredMessages(groupedMessages);
        }
    }, [messages, messagesLoading]);


    return (
        <div className="messenger">
            <div className="top flex justify-content-between align-items-center gap-10">
                <div className="left flex gap-10 align-items-center">
                    <div><Search size={16} /></div>
                    <div><PencilSquare size={16} /></div>
                    <div><Trash size={16} /></div>
                </div>
                <div className="right flex gap-10 align-items-center">
                    {
                        profilePictures?.length === 1 ?
                            <Avatar height={40} width={40} src={profilePictures[0].fileUrl} />
                            : <Avatar height={40} width={40} />
                    }
                    <div className="discu-info">
                        <h5>{
                            discu?.discuName ? discu?.discuName :
                            discu?.members.filter((m) =>
                                    m.user.id !== user?.id
                                ).map((m) => `${m.user.firstName} ${m.user.lastName}`).join(',')
                        }</h5>
                        <span>Actif</span>
                    </div>
                </div>
            </div>
            <div className="content" ref={scrollRef}>
                <div className="body">
                    {
                        !messagesLoading ?
                            filteredMessages.length > 0 ?
                                filteredMessages.map((g, i) => (
                                    <div key={i} className={`message-group${g.author?.id === user?.id ? " mine" : ""}`}>
                                        {
                                            (g.author?.id !== user?.id) ? <div className="left">
                                                <Avatar src={g.author?.activeProfilePicture ? g.author?.activeProfilePicture.fileUrl : null} />
                                            </div> : ""
                                        }

                                        <div className="messages-list">
                                            {
                                                g.messages?.map((m, i) =>
                                                    <Message>{m.content}</Message>
                                                )
                                            }

                                        </div>
                                    </div>), [])
                                : <h4>Vous n'avez aucun message</h4>
                            : <h4>Chargement des messages</h4>
                    }

                    {/* <div className="message-group mine">
                            <div className="messages-list">
                                <Message>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima doloremque magnam placeat aut dolore ex ratione</Message>
                                <Message>Salut mon vieux</Message>
                                <Message>On travaille sur notre nouvelle plateforme</Message>
                                <Message>Hey</Message>
                            </div>
                        </div>
                        <div className="message-group">
                            <div className="left">
                                <Avatar />
                            </div>
                            <div className="messages-list">
                                <Message>Salut les gens</Message>
                            </div>
                        </div>
                        <div className="message-group mine">
                            <div className="messages-list">
                                <Message>Oui ça va et vous?</Message>
                            </div>
                        </div>
                        <div className="message-group">
                            <div className="left">
                                <Avatar />
                            </div>
                            <div className="messages-list">
                                <Message>Coucou</Message>
                                <Message>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, rerum. Maxime, reprehenderit? Quas magni</Message>
                            </div>
                        </div>
                        <div className="message-group mine">
                            <div className="messages-list">
                                <Message medias={[
                                    '/img/entreprises/vache.jpg',
                                    '/img/entreprises/d.jpg',
                                ]}>Des photos</Message>
                            </div>
                        </div> */}
                </div>
                <div className="footer flex justify-content-center">
                    <div>
                        <DoDinamicTextarea avatar={false} emptied={emptyMessageForm} setEmptied={setEmptyMessageForm} onKeyup={(e) => {
                            setTmpMessage(e.target.innerText)
                        }}
                            next={
                                (
                                    <>
                                        <button><EmojiSmile size={18} /></button>

                                        <button><Image size={18} /></button>
                                        <button><Mic size={18} /></button>
                                        <button className="comment-send-btn" onClick={() => {
                                            messagesMutation.mutate(
                                                {
                                                    content: tmpMessage,
                                                    discussion: `/api/discussions/${discuId}`
                                                }
                                            )
                                            setEmptyMessageForm(true)
                                        }}>
                                            <SendFill />
                                        </button>
                                    </>
                                )
                            } />
                    </div>
                </div>
            </div>

        </div>)

}

export default Messenger
