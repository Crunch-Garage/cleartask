import React from 'react';
import axios from "../services/axios";
import Images from '../global/Images.js';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/solid.png';
import dashboard from '../assets/dashboard.png';
import './Login.css';


const LoginNavbar = ()=>{
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

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            identifier:"",
            password:"",
            passwordErrors:"",
            idErrors:"",
            authErrors:"",
        }

    }

    // Form fields processing a user inputs their details.
    handleChange = (object) => {
        // Update state as form field values change
        this.setState(object);
    };

    loginUser = (e) => {
        e.preventDefault();
        this.state.identifier ? (
            this.state.password ? (
                axios({
                    method:'post',
                    url:'/apis/api/token/',
                    data: {
                        username: this.state.identifier,
                        password:this.state.password,
                    }
                })
                .then(response => {
                    // clear auth errors
                    this.setState({
                        authErrors:'',
                    })
                    // Store authorization tokens in local storage so we can use them to fire
                    // subsequent Api requests for the user.
                    // access token gives us access to server requests
                    localStorage.setItem("access_token", response.data.access);
                    // we will use the refresh token to get a new access token from the server when the initial one nears expiry
                    localStorage.setItem("refresh_token", response.data.refresh);
                    
                    // redirect user to their dashboard
                    this.props.history.go("/workspace");
                })
                .catch(error =>{
                    error.response.status == '401' ? (
                        this.setState({
                            authErrors:`${error.response.data.detail}`
                        })
                    ) : (
                        this.setState({
                            authErrors:`Oops! Something went wrong. Try again later.`
                        })
                    )
                })
            ) : this.setState({passwordErrors:"This field is required"})
        ) : this.setState({idErrors:"This field is required"})
    };
    render(){
        return(
            <div className='auth__block'>
                <Container className="auth">
                    <Grid container className="auth__grid">
                        <Grid item xs className="auth__grid-item">
                            <div className='auth__wrapper'>
                                <LoginNavbar/> 
                                <div className='auth__wrapper-inner'>
                                    <div className='auth__wrapper-head'>
                                        <h2>Login</h2>
                                        <p>Let’s clear some more tasks</p>
                                    </div>
                                    <form onSubmit={this.loginUser}>
                                        <span className={this.state.authErrors ? 'form__errors form__auth-error' : ''}>{this.state.authErrors}</span>
                                        <div className='auth__form-input'>
                                            <div className='auth__form-input--header'>
                                                <label for="identifier">Email, username or phone number</label>
                                            </div>
                                            <input id='identifier' className={this.state.idErrors ? 'form__field-error' : ''} name='identifier' placeholder='Username,Email or Phone number' onChange={(e)=> this.handleChange({identifier:e.target.value})} required></input>
                                            <span className='form__errors'>{this.state.idErrors}</span>
                                        </div>
                                        <div className='auth__form-input'>
                                            <div className='auth__form-input--header'>
                                                <label for="identifier">Password</label>
                                                <Link to="#">Forgot password</Link>
                                            </div>
                                            <input id='password' type='password' className={this.state.passwordErrors ? 'form__field-error' : ''} name='password' placeholder='Enter your password' autoComplete='on' onChange={(e)=> this.handleChange({password:e.target.value})} required></input>
                                            <span className='form__errors'>{this.state.passwordErrors}</span>
                                        </div>
                                        
                                        <button type='submit'>Continue</button>
                                        
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
                                        <span>Don't have an account?</span>
                                        <Link to="/auth/signup"><button type="button">Sign up to continue!</button></Link>
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

}

export default Login;