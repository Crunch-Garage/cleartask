import React from "react";
import axios from "../services/axios";
import Images from '../global/Images.js';
import BouncingDots from './progress_bars/BouncingDots';
import {Container, Grid} from '@mui/material';
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import "./AddAccountDetails.css";
import './Signup.css';
import TokenService from "../services/token";

const SignUpNavbar = ()=>{
    return(
        <nav className='auth-nav'>
            <div className='wrapper'>
                <Link to="/">
                    <img src={Images.logo} alt=""/>
                </Link>
            </div>
        </nav>
    )
}

const AddAccountDetails = () => {
    const [submitting, setSubmitting] = React.useState(false);
    const [registerInfo, setRegisterInfo] = React.useState({
        first_name:"",
        last_name:"",
        password1:"",
        password2:""
    });
    const [registerErrors, setRegisterErrors] = React.useState({
        authErrors:"",
        first_name:"",
        last_name:"",
        passwordErrors:""
    });

    const handleChange = (event) => {
        setRegisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
      };

    let navigate = useNavigate()
    
    const registerUser = (e) => {
        e.preventDefault();
        if (registerInfo.first_name && registerInfo.last_name && registerInfo.password1 && registerInfo.password2) {
            setSubmitting(true);
             // Check token has not expired before we accessing registering user 
            // Check token has not expired before we register user details 
            // User may stay on these page for too long until tokens expire, so
            // we do a fresh check for token expiry before accessing the api

            let tokenHasExpired = TokenService.tokenIsExpired();

            if (tokenHasExpired != false){
                let access_token = localStorage.getItem("access_token")
                axios({
                    method: "post",
                    url: "apis/create_account/finish_registration/",
                    data: {
                        "first_name": registerInfo.first_name,
                        "last_name":registerInfo.last_name,
                        "password1":registerInfo.password1,
                        "password2":registerInfo.password2
                    },
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${access_token}`
                      }
                    })
                    .then(response => {
                        navigate("/dashboard/workspace")
                    })
                    .catch(error => {
                        setRegisterErrors({ ...setRegisterErrors, authErrors: error.data.message});
                    })
                    .finally(() => {
                        setSubmitting(false);
                    });
            } else {
                navigate("/auth/login")
            }
        } else {
            setRegisterErrors({ ...setRegisterErrors, authErrors: "Some fields are empty" });
        }
    }

    return(
        <div className='auth__block'>
            <Container className="auth">
                <Grid container className="auth__grid">
                    <Grid item xs className="auth__grid-item">
                        <div className='auth__wrapper'>
                            <SignUpNavbar/>
                            <div className='auth__wrapper-inner'>
                            
                                <div className='auth__wrapper-head'>
                                    <h2>Almost there!</h2>
                                    <p>Add you name and desired password.</p>
                                </div>
                                <form onSubmit={registerUser} className="form">
                                <span className={registerErrors.authErrors ? 'form__errors form__auth-error' : ''}>{registerErrors.authErrors}</span>
                                    <div className='auth__form-input auth__form-fullname'>
                                        <div className="auth__form-fullname--first">
                                            <div className='auth__form-input--header'>
                                                <label for="first_name">First Name</label>
                                            </div>
                                            <input id='first_name' type="text" name='first_name' placeholder='Jane' onChange={handleChange} required></input>
                                        </div>
                                        <div className="auth__form-input-fullname--last">
                                            <div className='auth__form-input--header'>
                                                <label for="last_name">Last Name</label>
                                            </div>
                                            <input id='last_name' type="text" name='last_name' placeholder='Doe' onChange={handleChange} required></input>
                                        </div>
                                    </div>
                                    <div className='auth__form-input'>
                                        <div className='auth__form-input--header'>
                                            <label for="password1">Enter password</label>
                                        </div>
                                        <input id='password1' type='password' className={registerErrors.passwordErrors ? 'form__field-error' : ''} name='password1' placeholder='Enter your password' autoComplete='on' onChange={handleChange} required></input>
                                        <span className='form__errors'>{registerErrors.passwordErrors}</span>
                                    </div>
                                    <div className='auth__form-input'>
                                        <div className='auth__form-input--header'>
                                            <label for="password2">Enter password again</label>
                                        </div>
                                        <input id='password2' type='password' className={registerErrors.passwordErrors ? 'form__field-error' : ''} name='password2' placeholder='Enter your password again' autoComplete='on' onChange={handleChange} required></input>
                                        <span className='form__errors'>{registerErrors.passwordErrors}</span>
                                    </div>
                                    
                                        {
                                            !submitting ?(
                                            <button type='submit'>
                                                <div className="cta__button--text">
                                                    Continue
                                                </div>
                                            </button>
                                            
                                            ): (
                                            <button type='button' disabled>
                                                 <BouncingDots/>
                                            </button>
                                            )
                                        }
                                </form>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <div className='auth__graphic'>
                <div className='auth__graphic-wrap'>
                    <p>
                    "...The app allows me to create tasks, 
                    set reminders, and categorize them based on priority, 
                    which has greatly improved my productivity. 
                    I also appreciate the ability to collaborate 
                    with my team and share tasks, making it a great 
                    tool for team projects. Overall, I highly recommend 
                    this app to anyone looking for a comprehensive task 
                    management solution."<br/>
                    -- Miriam, Product manager
                    </p>
                    <img src={Images.dashboard} alt="cleartask dashboard"/>
                </div>
            </div>
        </div>
    )
}   



export default AddAccountDetails;