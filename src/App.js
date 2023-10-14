import { useState, useEffect, useMemo, useLayoutEffect, useContext, useRef } from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Default from './layouts/Default';
import Home from './pages/Home/Home';
import JobFindingLayout from './layouts/JobFindingLayout';
import JobFindingHome from './pages/JobFinding/JobFindingHome';
import CreateJob from './pages/JobFinding/CreateJob';
import CreateCv from './pages/JobFinding/CreateCv';
import PageLayout from './layouts/PageLayout';
import PageHome from './pages/Page/PageHome';
import Messages from './pages/Messages/Messages';
import Login from './pages/Login/Login';
import PageAbout from './pages/Page/PageAbout';
import PageActu from './pages/Page/PageActu';
import Funding from './pages/Funding/Funding';
import Countries from './pages/Countries/Countries';
import MediaContext from './context/MediaContext';
import { media } from './functions';
import Video from './pages/Video/Video';
import VideoHome from './pages/VideoHome/VideoHome';
import Minimal from './layouts/Minimal';
import { DESKTOP, SMARTPHONE, TABLET } from './constants/MediaTypeConstants';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import axios from 'axios';
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

import Image from './pages/Image/Image';


import { useDispatch, useSelector } from 'react-redux';
import { setConnectedUser } from './redux/actions/userActions'
import { redirect } from 'react-router-dom';
import AuthRedirect from './components/AuthRedirect/AuthRedirect';
import PageLoader from './components/PageLoader/PageLoader';

import { io } from 'socket.io-client';
import SocketIOContext from './context/SocketIOContext';

import { QueryClient, QueryClientProvider } from 'react-query';
import PortalLayout from './layouts/PortalLayout';
import ThemeContext from './context/ThemeContext';


function App() {

  /**
   * Theme
   */
  if (!localStorage.getItem('appTheme')) {
    localStorage.setItem('appTheme', 'light');
  }
  const [theme, setTheme] = useState(localStorage.getItem('appTheme'));
  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem('appTheme', theme)
  }
  const activeTheme = useMemo(() => {
    return {
      theme,
      setTheme: changeTheme
    }
  }, [theme])







  const dispatch = useDispatch()
  const [pageLoading, setPageLoading] = useState(true)
  //Responsive
  const connectedUser = useSelector((state) => state.user.user)

  const socket = useRef()

  const [shownSidebar, setShownSidebar] = useState(true);
  const [deviceType, setDeviceType] = useState(DESKTOP);
  const changeDeviceType = (deviceType) => {
    setDeviceType(deviceType)
  }
  const deviceTypeValue = useMemo(() => {
    return {
      deviceType,
      changeDeviceType,
    }
  }, [deviceType])
  useLayoutEffect(() => {
    media({
      [SMARTPHONE]: "(max-width:768px)",
      [TABLET]: "(min-width:768px) and (max-width:1200px)",
      [DESKTOP]: "(min-width: 1200px)"
    }, (deviceType) => {
      setDeviceType(deviceType);
    })

  }, [deviceType])



  useEffect(() => {
    axios({
      url: `${process.env.REACT_APP_API_DOMAIN}/api/users`,
      method: 'get',
      withCredentials: true
    }).then((res) => {
      console.log(res);

    }).catch((err) => {
      console.log(err.response)

    })
  }, [])

  useEffect(() => {

    const token = Cookies.get('BEARER')
    console.log(token, 'USER')
    if (token) {
      const user = jwt_decode(token)
      if (user.exp * 1000 > new Date().getTime()) {
        axios({
          url: `${process.env.REACT_APP_API_DOMAIN}/api/users/${user.id}/withActiveProfilePicture`,
          method: 'get',
          withCredentials: true
        }).then((res) => {
          dispatch(setConnectedUser(res.data))
          setPageLoading(false)
          socket.current = io('http://localhost:5000')
          socket.current?.emit('connectUser', res.data.id)
        }).catch((err) => {
          setPageLoading(false)
        })
      }
    } else {
      setPageLoading(false)
    }
  }, [])




  useEffect(() => {

  }, [])

  const queryClient = new QueryClient()









  return (
    <SocketIOContext.Provider value={socket}>
      <QueryClientProvider client={queryClient}>
        <MediaContext.Provider value={deviceTypeValue}>
          <ThemeContext.Provider value={activeTheme}>
            <div id="AppTheme" className={`theme-${theme}`}>
              <div id="App" style={{ paddingBottom: (((deviceType === SMARTPHONE) || (deviceType === TABLET)) && !window.location.pathname.startsWith("/messages")) ? 'var(--bottom-nav-height)' : 0 }}>
                <BrowserRouter>
                  <Routes>
                    <Route element={<Default />}>
                      {
                        !pageLoading &&
                        <>
                          <Route path="/" element={<Home />} />
                          <Route path='/image/:image_id' element={<Image />} />
                          <Route path='/inscription' element={<Register />} />
                          <Route path='/emplois' element={<JobFindingLayout />}>
                            <Route index element={<JobFindingHome />} />
                            <Route element={<AuthRedirect requireAuth={true} />}>
                              <Route path='nouveau' element={<CreateJob />} />
                              <Route path='cv' element={<CreateCv />} />
                            </Route>
                          </Route>
                          <Route path='/profil/:userId' element={<Profile />} />
                          <Route path='/investissements' element={<Funding />}>
                          </Route>
                          <Route path='/explorer' element={<Countries />}>
                          </Route>

                          {/* <Route path='/page' element={<PageLayout />}>
                          <Route index element={<PageHome />} />
                          <Route path='accueil' element={<PageHome />} />
                          <Route path='a-propos' element={<PageAbout />} />
                          <Route path='actualite' element={<PageActu />} />
                        </Route> */}
                          <Route path='/portail' element={<PortalLayout />}>
                            <Route index element={<PageHome />} />
                            <Route path='accueil' element={<PageHome />} />
                            <Route path='a-propos' element={<PageAbout />} />
                            <Route path='actualite' element={<PageActu />} />
                          </Route>
                          <Route path='/video' element={<Minimal />}>
                            <Route index element={<VideoHome />} />
                            <Route path='play' element={<Video />} />
                          </Route>
                          <Route element={<AuthRedirect requireAuth={true} />}>
                            <Route path='/messages/:discuId?' element={<Messages />} />
                          </Route>
                          <Route element={<AuthRedirect />}>
                            <Route path='/connexion' element={<Login />} />
                          </Route>
                        </>

                      }

                      {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path=":teamId/edit" element={<EditTeam />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
                    </Route>
                  </Routes>
                </BrowserRouter>
              </div>
              <PageLoader open={pageLoading} />
            </div>
            </ThemeContext.Provider>
        </MediaContext.Provider>
      </QueryClientProvider>
    </SocketIOContext.Provider>
  );
}

export default App;
