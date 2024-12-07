import React, {useContext, useEffect} from 'react';
import './LoginPage.scss';
import google_icon from '../../assets/icons/google.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login_user } from '../../APICalls/users';
import UserContext from '../../Context/userContext';

function LoginPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate(); 
    const { setUser } = useContext(UserContext);

    useEffect(() => {

    }, []);

    // useEffect(() => { 
    //     if (currentUser){
    //       navigate('/home/email-accounts');
    //     }
    // }, [currentUser, navigate])
    
    const handleLoginLogic = async () => {
        try {
            const response = await login_user(email, password);
            if (response?.success){
                alert('Login successful');
                // Set the token received in response to local storage

                // Set the user context
                setUser(response?.data);
                
                const userData = {
                    userId: response?.data?.userId,
                    email: response?.data?.email,
                    isLoggedIn: response?.data?.isLoggedIn,
                };
                // Persisting current user using localstorage
                localStorage.setItem('user', JSON.stringify(userData));
                if (response?.data?.role === 'faculty'){
                    navigate('/faculty-dashboard');
                }
                else if (response?.data?.role === 'student'){
                    navigate('/student-dashboard');
                }
                else if (response?.data?.role === 'admin'){
                    navigate('/admin-dashboard');
                }
            }
            else alert(response.message);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="log-in-page">
            <div className="log-in-page-down-content">
                <div className="log-in-page-form">
                    <div className="log-in-page-heading">
                        <h1>Log in to Scaler</h1>
                    </div>
                    <div className="log-in-accounts">
                        <ul>
                            <li className="google-login">
                                <button className="google-login-btn">
                                    <div className="google-login-div xR230zZLI">
                                        <img src={google_icon} alt="" className="new-google-icon" />
                                        <div className="xR230zZTp">
                                            <h3>Continue with Google</h3>
                                        </div>   
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="log-in-form">
                        <div className="username-email">
                            <h4>Email or username</h4>
                            <input type="email" 
                            className="username-input" 
                            placeholder="Email or username" 
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="password">
                            <h4>Password</h4>
                            <input type="password" 
                            className="password-input" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="log-in-button">
                            <button className="log-in-btn" onClick={() => handleLoginLogic()}>Log in</button>
                        </div>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="create-account">
                        <h3 id="xZA009Tz">Don't have an account?</h3>
                        <h3 id="xZA009Ta">
                            <Link to="/signup" className='link'>Sign up NOW!</Link>
                        </h3>
                    </div>
                </div>
                <div className="terms-conditions">
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;