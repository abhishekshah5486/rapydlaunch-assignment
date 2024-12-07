import React, {useEffect} from 'react';
import './SignupPage.scss';
import google_icon from '../../assets/icons/google.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { register_user } from '../../APICalls/users';
import UserContext from '../../Context/userContext';

function RegisterPage() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const { currentUser } = React.useContext(UserContext);

    useEffect(() => { 
      if (currentUser){
        navigate('/home/email-accounts');
      }
    }, [currentUser, navigate])
  
    const handleCreateAccount = async () => {
        try {
            const response = await register_user(email, password);
            if (response.success) {
                alert('Account created successfully');
                navigate('/login');
            } else {
                alert(response.message);
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="log-in-page">
            </div>
            <div className="sign-up-form-section">
                <div className="sign-up-form">
                    <div className="sign-up-form-heading">
                        <h1>Sign up to get started.</h1>
                    </div>
                    <div className="user-email">
                        <h4>Email address</h4>
                        <input 
                            type="email" 
                            className="email-input" 
                            placeholder="name@domain.com" 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="user-password">
                        <h4>Password</h4>
                        <input 
                            type="password" 
                            className="password-input" 
                            placeholder="Password" 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="signup-button">
                        <button className="signup-btn" onClick={handleCreateAccount}>Sign Up</button>
                    </div>
                    <div className="horizontal-rule"></div>
                    <div className="or-div">or</div>

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
                    <div className="horizontal-rule vBGH009Lk"></div>
                    <div className="log-in-account">
                        <h3 id="xZA009Tz">Already have an account?</h3>
                        <h3 id="xZA009Ta">
                            <Link to='/login' className='link'>Log in here</Link>
                        </h3>
                    </div>
                </div>
                <div className="terms-conditions">
                    <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                </div>
            </div>
        </>
    );
}

export default RegisterPage;