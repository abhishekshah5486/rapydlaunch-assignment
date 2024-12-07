import React from 'react';
import './Header.scss';
import scaler_logo from '../../assets/images/scaler-logo.svg';
import UserContext from '../../Context/userContext';

function Header() {
    const { user } = React.useContext(UserContext);

    return (
        <div className='student-dashboard-header'>
            <img src={scaler_logo} alt="" />
            <h2>{user?.email}</h2>
        </div>
    )
}

export default Header;
