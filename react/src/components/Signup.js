import React from 'react';
import axios from "../services/axios";
import Images from '../global/Images.js';
import BouncingDots from './progress_bars/BouncingDots';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import { Link, useNavigate } from "react-router-dom";

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

const Signup = () => {
    const [submitting, setSubmitting] = React.useState(false);
    const [registerInfo, setRegisterInfo] = React.useState({
        email:""
    });
    const [registerErrors, setRegisterErrors] = React.useState({
        authErrors:"",
        emailErrors:"",
        passwordErrors:""
    });

    const handleChange = (event) => {
        setRegisterInfo({ ...registerInfo, [event.target.name]: event.target.value });
      };

    let navigate = useNavigate()

    const registerUser = (e) => {
        e.preventDefault();
        if (registerInfo.email) {
            setSubmitting(true);
            axios({
            method: "post",
            url: "apis/create_account/claim_email/",
            data: {
                email: registerInfo.email
            }
            })
            .then(response => {
                console.log(response);
                // Take user to thank you page
                navigate("/thankyou", {
                    state:{
                        email:registerInfo.email
                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setSubmitting(false);
            });
        } else {
            setRegisterErrors({ ...setRegisterErrors, emailErrors: "Please enter your email" });
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
                                    <h2>Signup</h2>
                                    <p>Start your journey on Cleartask</p>
                                </div>
                                <form onSubmit={registerUser} className="form">
                                <span className={registerErrors.authErrors ? 'form__errors form__auth-error' : ''}>{registerErrors.authErrors}</span>
                                    <div className='auth__form-input'>
                                        <div className='auth__form-input--header'>
                                            <label for="email">Email</label>
                                        </div>
                                        <input id='email' type="email" className={registerErrors.emailErrors ? 'form__field-error' : ''} name='email' placeholder='jane.doe@email.com' onChange={handleChange} required></input>
                                        <span className='form__errors'>{registerErrors.emailErrors}</span>
                                    </div>
                                    
                                    <button type='submit'>
                                        {
                                            !submitting ?(
                                            <div className="cta__button--text">
                                                Continue
                                            </div>
                                            ): (
                                            <BouncingDots/>
                                            )
                                        }
                                        
                                    </button>
                                </form>
                                <div className='auth__wrapper-social'>
                                    <div className='auth__wrapper-social--split'>
                                        <div className='left__tick'></div>
                                        <p>or</p>
                                        <div className='right__tick'></div>
                                    </div>
                                    <a href='#'>
                                        <button type='button'>
                                            <iconify-icon icon="logos:google-icon"  style={{"font-size": "18px"}}></iconify-icon>
                                            Continue with Google 
                                        </button>
                                    </a>
                                </div>
                                <div className="auth__signup">
                                    <span>Already have an account?</span>
                                    <Link to="/auth/login"><button type="button">Login to continue!</button></Link>
                                </div>
                            </div>
                            <div className="auth__footer">
                                <span> &copy;Cleartask {new Date().getFullYear()}</span>
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

export default Signup;