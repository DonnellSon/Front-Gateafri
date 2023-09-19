import { useState, useEffect, useMemo, useLayoutEffect, useContext } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
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

import store from './redux/store';
import { Provider } from 'react-redux';
import Image from './pages/Image/Image';


function App() {

  //Responsive

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
    media("(max-width:768px)", (x) => {
      if (x.matches) {
        setDeviceType(SMARTPHONE);
      } else {
        setDeviceType(DESKTOP)

      }
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
    if (token) {
      const user = jwt_decode(token)
    }

    // axiosJWT.get(`${process.env.REACT_APP_API_DOMAIN}/api/users/read`, { withCredentials: true }).then((res) => {
    //   console.log(res.data);
    //   if (res.data.user) {
    //     setUser(res.data.user)
    //   }
    // }).catch((err) => {
    //   console.log(err.response);
    // })
  }, [])









  return (
    <Provider store={store}>
      <MediaContext.Provider value={deviceTypeValue}>
        <div id="App" style={{ marginBottom: ((deviceType === SMARTPHONE) || (deviceType === TABLET)) ? 'var(--bottom-nav-height)' : 0 }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Default />}>
                <Route index element={<Home />} />
                <Route path='/image/:image_id' element={<Image/>}/>
                <Route path='/inscription' element={<Register />} />
                <Route path='/emplois' element={<JobFindingLayout />}>
                  <Route index element={<JobFindingHome />} />
                  <Route path='nouveau' element={<CreateJob />} />
                  <Route path='cv' element={<CreateCv />} />
                </Route>
                <Route path='/profil' element={<Profile />} />
                <Route path='/investissements' element={<Funding />}>
                </Route>
                <Route path='/explorer' element={<Countries />}>
                </Route>
                <Route path='/messages' element={<Messages />} />
                <Route path='/page' element={<PageLayout />}>
                  <Route index element={<PageHome />} />
                  <Route path='accueil' element={<PageHome />} />
                  <Route path='a-propos' element={<PageAbout />} />
                  <Route path='actualite' element={<PageActu />} />
                </Route>
                <Route path='/video' element={<Minimal />}>
                  <Route index element={<VideoHome />} />
                  <Route path='play' element={<Video />} />
                </Route>
                <Route path='/connexion' element={<Login />} />
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
      </MediaContext.Provider>
    </Provider>
  );
}

export default App;
