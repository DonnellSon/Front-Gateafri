import React from 'react'
import './Messages.css'
import Searchbar from '../../components/Searchbar/Searchbar'
import Avatar from '../../components/Avatar/Avatar'
import { ArrowDown, Check2Square, CheckSquare, ChevronDown, EmojiSmile, Mic, ThreeDots, Image } from 'react-bootstrap-icons'
import Discussion from '../../components/Discussion/Discussion'
import DoDinamicTextarea from '../../components/doDinamicTextarea/DoDinamicTextarea'
import Message from '../../components/Message/Message'
const Messages = () => {
    return (
        <main className='messages-page flex'>
            <div className="left">
                <div className="top">
                    <div>
                        <h2>Messages</h2>
                    </div>
                    <Searchbar />
                    <span className='flex align-items-center gap-5 py-10'>Les plus reçents <ChevronDown /></span>
                </div>
                <div className="discussion-list">
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                    <Discussion />
                </div>
            </div>
            <div className="center flex-grow-1">
                <div className="messenger">
                    <div className="top flex justify-content-between align-items-center gap-10">
                        <div className="left flex gap-10 align-items-center">
                            <Avatar height={40} width={40} />
                            <div className="discu-info">
                                <h5>Donnell Rajemson</h5>
                                <span>Actif</span>
                            </div>
                        </div>
                        <div className="right">
                            <button className="btn-transparent">
                                <ChevronDown />
                            </button>
                        </div>
                    </div>
                    <div className="content">
                        <div className="body">
                            <div className="message-group">
                                <div className="left">
                                    <Avatar />
                                </div>
                                <div className="messages-list">
                                    <Message>Bonjour</Message>
                                    <Message>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur eligendi, amet modi deserunt ea hic veritatis. Dolor hic cumque deserunt id sit obcaecati vero eligendi ducimus doloremque, inventore quisquam. Pariatur.
                                    </Message>
                                </div>
                            </div>
                            <div className="message-group mine">
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
                            </div>
                        </div>
                        <div className="footer flex justify-content-center">
                            <div>
                                <DoDinamicTextarea avatar={false} onKeyup={(e) => {

                                }}
                                    next={
                                        (
                                            <>
                                                <button><EmojiSmile size={18} /></button>

                                                <button><Image size={18} /></button>
                                                <button><Mic size={18} /></button>
                                            </>
                                        )
                                    } />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Messages
