import React from 'react'
import { Nut } from 'react-bootstrap-icons'
import Avatar from '../../components/Avatar/Avatar'
import './Notifications.scss'
import Tabs from '../../components/Tabs/Tabs'
import Tab from '../../components/Tabs/Tab'

const Notifications = () => {
  return (
    <div id='notification-page'>
      <div className="top flex justify-content-between align-items-center">
        <h3>Notifications</h3>
        <div>
            <Nut size={20}/>
        </div>
      </div>
      <div className="body">
      <Tabs className='notification-tabs'>
          <Tab title={<>
            <span>Tous</span>
          </>}>
            <div className="notification flex gap-10">
                <Avatar width={55} height={55}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={55} height={55}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={55} height={55}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={55} height={55}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
          </Tab>
          <Tab title={<>
            <span>Non lu</span>
          </>}>
            <div className="notification flex gap-10">
                <Avatar width={80} height={80}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={80} height={80}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={80} height={80}/>
                <div className="notification-capt">
                    <p><b>Donnell Dev</b> a Commenté votre publication avec <span>Agriculture</span><span>Élévage</span></p>
                    <span className='notication-date'>Il y a 2 heures</span>
                </div>
            </div>
            <div className="notification flex gap-10">
                <Avatar width={80} height={80}/>
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
