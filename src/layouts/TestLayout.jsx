import { Outlet } from 'react-router-dom'
const TestLayout =()=>{
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
export default TestLayout;