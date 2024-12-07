import React, {useState} from 'react';
import scaler_logo from '../../assets/images/scaler-logo.svg';
import light_mode_icon from '../../assets/icons/day-mode.png';
import dark_mode_icon from '../../assets/icons/night-mode.png';
import './Header.scss';

import { Link } from 'react-router-dom';

function Header() {
    const [isToggleClicked, setIsToggleClicked] = useState(false);
    return (
        <div className='header-section'>
            <div className='header-left'>
                <img src={scaler_logo} alt='Logo' className='scaler-logo' />
                <nav className='nav-tabs'>
                    <ul>
                        <li>PROGRAMS</li>
                        <li>MASTERCLASS</li>
                        <li>ALUMNI</li>
                        <li>RESOURCES</li>
                    </ul>
                </nav>
            </div>
            <div className='header-right'>
                <div 
                className="toggle-theme-icon"
                onClick={() => setIsToggleClicked(prev => !prev)}
                >
                    <img src={isToggleClicked ? light_mode_icon : dark_mode_icon} alt="" />
                </div>
                <Link to='/login' style={{textDecoration: 'none'}}><button className='login-btn'>LOGIN</button></Link>
            </div>
        </div>
    )
}

export default Header;
