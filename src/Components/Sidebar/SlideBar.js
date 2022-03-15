import './Sidebar.css'
import IconDashboard from './analytics.svg'
import { Link } from 'react-router-dom';

const SlideBar = () => {
    return (
        <nav className='sidenav'>
            <img src={IconDashboard} alt="icone-analytique" />
            <Link to='/'>FINANCES</Link>
            <Link to='/dashboard-employees'>EMPLOI</Link>
        </nav>
    );
};

export default SlideBar;