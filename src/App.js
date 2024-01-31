import { useState, useEffect, useMemo, useLayoutEffect, useContext, useRef } from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter, Navigate, useLocation } from 'react-router-dom'
import Default from './layouts/Default';
import Home from './pages/Home/Home';
import JobFindingLayout from './layouts/JobFindingLayout';
import JobFindingHome from './pages/JobFinding/JobFindingHome';
import CreateJob from './pages/JobFinding/CreateJob';
import CreateCv from './pages/JobFinding/CreateCv';
import PortalHome from './pages/Portal/PortalHome';
import Messages from './pages/Messages/Messages';
import Login from './pages/Login/Login';
import PortalAbout from './pages/Portal/PortalAbout';
import PortalActu from './pages/Portal/PortalActu';
import Funding from './pages/Funding/Funding';
import Countries from './pages/Countries/Countries';
import MediaContext from './context/MediaContext';
import { media } from './functions';
import Video from './pages/Video/Video';
import VideoHome from './pages/VideoHome/VideoHome';
import MusicLayout from './layouts/MusicLayout'
import Music from './pages/Music/Music'
import Minimal from './layouts/Minimal';
import { DESKTOP, SMARTPHONE, TABLET } from './constants/MediaTypeConstants';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import axios from 'axios';
import Cookies from 'js-cookie'
import jwt_decode from 'jwt-decode'

import Image from './pages/Image/Image';
import { ToastContainer } from 'react-toastify';
import './toast.scss'


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
import Landing from './pages/Landing/Landing';
import CreatePortal from './pages/Portal/CreatePortal';
import PortalDashboardLayout from './layouts/PortalDashboardLayout';
import CreateInvest from './pages/Funding/CreateInvest';
import Search from './pages/Search/Search';
import PortalAdminLayout from './layouts/PortalAdminLayout';
import Dashboard from './pages/Portal/Dashboard';
import DashboardAbout from './pages/Portal/DashboardAbout';
import ProfileLayout from './layouts/ProfileLayout';
import ProfileActu from './pages/Profile/ProfileActu';
import ProfileAbout from './pages/Profile/ProfileAbout';
import Studies from './pages/Profile/Studies';
import Contact from './pages/Profile/Contact';
import Notifications from './pages/Notifications/Notifications';
import { showToast } from './utils/toastUtils';
import PostNotificationContent from './pages/Notifications/PostNotificationContent'
import CurrencyContext from './context/CurrencyContext';
import ExplorerLayout from './layouts/ExplorerLayout';
import Explorer from './pages/Explorer/Explorer';
import City from './pages/Stay/City';
import HotelsHome from './pages/Hotels/HotelsHome';
function App() {
  const { user } = useSelector(store => store.user)
  const [socket, setSocket] = useState(null);
  const socketValue = useMemo(() => {
    return {
      socket,
      setSocket
    }
  }, [socket])

  useEffect(() => {
    if (socket && user) {
      socket?.emit('connectUser', user.id)

    }
  }, [socket])

  useEffect(() => {
    if (socket) {
      socket?.on('newNotification', (notification) => {
        showToast({ content: <PostNotificationContent data={notification} /> })
      });

    }
  }, [socket])

  useEffect(() => {
    document.scrollingElement.scrollTop = 0
  }, [window.location.pathname])


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

  /**
   * Currency
   */
  const [currency, setCurrency] = useState(JSON.parse(localStorage.getItem('currency')));
  if (!localStorage.getItem('currency')) {
    axios({
      url: `${process.env.REACT_APP_API_DOMAIN}/api/currencies/1`,
      method: 'get'
    }).then((res) => {
      console.log(res.data, 'DOLLARCURRENCY')
      localStorage.setItem('currency', JSON.stringify(res.data));
      setCurrency(res.data)
    })

  }
  const [currenciesBaseUSD, setCurrenciesBaseUSD] = useState(null)
  useEffect(() => {
    axios({
      url: `https://cdn.taux.live/api/latest.json`,
      method: 'get'
    }).then((res) => {
      setCurrenciesBaseUSD(res.data.rates)
    })
  }, [])

  const changeCurrency = (currency) => {
    setCurrency(currency)
    localStorage.setItem('currency', JSON.stringify(currency))
  }
  const defaultCurrency = useMemo(() => {
    return {
      currency,
      setCurrency: changeCurrency,
      currenciesBaseUSD,
      setCurrenciesBaseUSD
    }
  }, [currency, currenciesBaseUSD])







  const dispatch = useDispatch()
  const [pageLoading, setPageLoading] = useState(true)
  //Responsive
  const connectedUser = useSelector((state) => state.user.user)

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
          url: `${process.env.REACT_APP_API_DOMAIN}/api/users/${user.id}`,
          method: 'get',
          withCredentials: true
        }).then((res) => {
          dispatch(setConnectedUser(res.data))
          setPageLoading(false)
          setSocket(io('http://localhost:5000'))

        }).catch((err) => {
          setPageLoading(false)
        })
      }
    } else {
      setPageLoading(false)
    }
  }, [])


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchIntervalInBackground: false,
        refetchInterval: false
      },
    },
  })









  return (
    <SocketIOContext.Provider value={socketValue}>
      <QueryClientProvider client={queryClient}>
        <MediaContext.Provider value={deviceTypeValue}>
          <CurrencyContext.Provider value={defaultCurrency}>
            <ThemeContext.Provider value={activeTheme}>
              <div id="AppTheme" className={`theme-${theme}`}>
                <div id="App" style={{ paddingBottom: (((deviceType === SMARTPHONE) || (deviceType === TABLET)) && !window.location.pathname.startsWith("/messages")) ? 'var(--bottom-nav-height)' : 0 }}>
                  <BrowserRouter>
                    <Routes>
                      <Route element={<Default />}>
                        {
                          !pageLoading &&
                          <>
                            <Route path='/landing' element={<Landing />} />
                            <Route path="/" element={<Home />} />
                            <Route path="/notifications" element={<Notifications />} />
                            <Route path="/recherche">
                              <Route index element={<Search />} />
                            </Route>
                            <Route path='/image/:image_id' element={<Image />} />
                            <Route element={<AuthRedirect />}>
                              <Route path='/inscription' element={<Register />} />
                            </Route>
                            <Route path='/emplois/:jobOfferId?' element={<JobFindingLayout />}>
                              <Route index element={<JobFindingHome />} />
                              <Route element={<AuthRedirect requireAuth={true} />}>
                                <Route path='nouveau' element={<CreateJob />} />
                                <Route path='cv' element={<CreateCv />} />
                              </Route>
                            </Route>

                            <Route path='/profil'>
                              <Route index element={connectedUser ? <Navigate to={`${connectedUser.id}`} replace={true} /> : <AuthRedirect requireAuth={true} />} />
                              <Route path=':userId' element={<ProfileLayout />}>
                                <Route index element={<Navigate to='actu' replace={true} />} />
                                <Route path='actu' element={<ProfileActu />} />
                                <Route path='a-propos-de-moi' element={<ProfileAbout />}>
                                  <Route index element={<Navigate to='etudes-et-emplois' replace={true} />} />
                                  <Route path='etudes-et-emplois' element={<Studies />} />
                                  <Route path='mes-coordonnees' element={<Contact />} />
                                </Route>
                              </Route>
                            </Route>

                            <Route path='/investissements'>
                              <Route index element={<Funding />} />
                              <Route element={<AuthRedirect requireAuth={true} />}>
                                <Route path='nouveau' element={<CreateInvest />} />
                              </Route>
                            </Route>



                            {/* <Route path='/page' element={<PageLayout />}>
                          <Route index element={<PageHome />} />
                          <Route path='accueil' element={<PageHome />} />
                          <Route path='a-propos' element={<PageAbout />} />
                          <Route path='actualite' element={<PageActu />} />
                        </Route> */}

                            <Route path='/portail'>
                              <Route element={<AuthRedirect requireAuth={true} />}>
                                <Route path='' element={<PortalDashboardLayout />}>
                                  <Route path=':portalId' element={<PortalAdminLayout />}>
                                    <Route path='dashboard'>
                                      <Route index element={<Dashboard />} />
                                      <Route path='a-propos' element={<DashboardAbout />} />
                                    </Route>
                                  </Route>
                                  <Route path='nouveau' element={<CreatePortal />} />
                                </Route>

                              </Route>
                              <Route path=':portalId' element={<PortalLayout />}>
                                <Route index element={<PortalHome />} />
                                <Route path='accueil' element={<PortalHome />} />
                                <Route path='a-propos' element={<PortalAbout />} />
                                <Route path='actualite' element={<PortalActu />} />
                              </Route>
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


                        <Route path='/explorer' element={<Countries />} />
                      </Route>

                      <Route path='/musique' element={<MusicLayout />}>
                        <Route index element={<Music />} />
                      </Route>

                      <Route element={<ExplorerLayout />}>
                        <Route path='/explorer'>
                          <Route path='pays/:countryId'>
                            <Route index element={<Explorer />} />
                            <Route path='ville/:cityId' element={<City />} />
                          </Route>
                        </Route>
                        <Route path='hotels' element={<HotelsHome />} />
                      </Route>
                    </Routes>
                  </BrowserRouter>
                </div>
                <PageLoader open={pageLoading} />
              </div>
            </ThemeContext.Provider>
          </CurrencyContext.Provider>

        </MediaContext.Provider>
      </QueryClientProvider>
    </SocketIOContext.Provider>
  );
}

export default App;
