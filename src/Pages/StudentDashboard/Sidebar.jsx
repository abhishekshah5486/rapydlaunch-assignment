import React from 'react'
import './Sidebar.scss';
// import course_icon from '../../assets/icons/course-icon.svg';
// import purchase_icon from '../../assets/icons/purchase_icon.svg';
// import logout_icon from '../../assets/icons/logout.svg';

const Sidebar = ({setActiveTab}) => {
  return (
    <div className='dashboard-sidebar'>
        <div className="main-menu">
            <h2 className='heading'>MAIN MENU</h2>
            <button className='courses'>All Courses</button>
            <button className='purchases'>Purchases</button>
            <div className="divider"></div>
        </div>
        <button className='logout-btn'>Logout</button>
    </div>
  )
}

export default Sidebar
