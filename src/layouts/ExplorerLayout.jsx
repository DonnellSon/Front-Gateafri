import { Outlet } from 'react-router-dom'
import ExplorerNavBar from '../pages/Explorer/ExplorerNavBar';
const ExplorerLayout =()=>{
    return(
        <div id='Explorer-layout'> 
          <div className=''>
            <ExplorerNavBar />
          </div>
          <div className=''>
            <Outlet/>
          </div>
        </div>
    )
}
export default ExplorerLayout;