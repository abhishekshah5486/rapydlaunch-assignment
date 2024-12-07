import React from 'react';
import './Header.scss';
import scaler_logo from '../../assets/images/scaler-logo.svg';
import UserContext from '../../Context/userContext';

function Header() {
    const { user } = React.useContext(UserContext);

    return (
        <div>
            <div className='instructor-dashboard-header'>
            <img src={scaler_logo} alt="" />
            <h2>{user?.email}</h2>
            </div>
            <div style={{height: "8vh"}}></div>
        </div>
    )
}

export default Header;
