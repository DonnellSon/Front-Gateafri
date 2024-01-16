import { Outlet } from 'react-router-dom'
const ExplorerLayout =()=>{
    return(
        <div>
            <ul>
                <li>Explorer</li>
                <li>Vol </li>
                <li>Séjours</li>
            </ul>
            <div>
            <Outlet />
            </div>
        </div>
    )
}
export default ExplorerLayout;