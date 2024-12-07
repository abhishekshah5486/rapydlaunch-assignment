import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Sidebar.scss';
// import course_icon from '../../assets/icons/course-icon.svg';
// import purchase_icon from '../../assets/icons/purchase_icon.svg';
// import logout_icon from '../../assets/icons/logout.svg';

const Sidebar = ({setActiveTab, activeTab}) => {
  const navigate = useNavigate();

  const handle_logout = () => {
    navigate('/');
  }

  return (
    <div className='dashboard-sidebar'>
        <div className="main-menu">
            <h2 className='heading'>MAIN MENU</h2>
            <button 
            className={`courses ${activeTab === 'courses' ? 'clicked-btn' : ''}`} 
            onClick={() => setActiveTab('courses')}>
              All Courses
            </button>
            <button 
            className={`purchases ${activeTab === 'purchases' ? 'clicked-btn' : ''}`} 
            onClick={() => setActiveTab('purchases')}>
              Purchases
            </button>
            <div className="divider"></div>
        </div>
        <button onClick={() => handle_logout()}className='logout-btn'>Logout</button>
    </div>
  )
}

export default Sidebar
