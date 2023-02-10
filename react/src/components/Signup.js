import React from 'react';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";
import logo from '../assets/solid.png';
import dashboard from '../assets/dashboard.png';

const axios = require('axios');
const baseURL = process.env.REACT_APP_BASEAPIURL || 'http://127.0.0.1:8000';

const SignUpNavbar = ()=>{
    return(
        <nav className='auth-nav'>
            <div className='wrapper'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
            </div>
        </nav>
    )
}
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            fullName:"",
            email:"",
            password:"",
            authErrors:"",
            emailErrors:"",
            fullNameErrors:"",
            passwordErrors:""
        }

        this.handleChange =this.handleChange.bind(this);
    }

    // componentDidMount = () =>{ 
    // }

    // Form fields processing a user inputs their details.
    handleChange(object){
        // Update state as form field values change
        this.setState(object,()=> {
            // TO DO: Check if username already exists and generate a new random one 
            this.setState({username:this.state.email.substring(0, this.state.email.lastIndexOf("@"))}, () => console.log(this.state.username))
        });
    };

    registerUser = (e) => {
        e.preventDefault();
        console.log(baseURL)
        this.state.email && this.state.firstname? (
            this.state.email ? (
                this.state.fullName ? (
                    axios({
                        method:'post',
                        url:`${baseURL}/apis/rest-auth/registration/`,
                        data: {
                            username: this.state.username,
                            firstname:this.state.fullName,
                            password:this.state.password,
                            email:this.state.email
                        },
                        config: {
                            headers: { "Content-Type": "application/json" }
                          }
                    })
                    .then(response => {

                        console.log(response);
                        // Store authorization tokens in local storage so we can use them to fire
                        // subsequent Api requests for the user.
                        // access token gives us access to server requests
                        localStorage.setItem("access_token", response.data.access_tokens.access);
                        // we will use the refresh token to get a new access token from the server when the initial one nears expiry
                        localStorage.setItem("refresh_token", response.data.access_tokens.refresh);

                        // redirect user to their dashboard
                        this.props.history.go("/workspace");
                    })
                    .catch(error =>{
                        console.log(error);
                    })

                ) : this.setState({fullNameErrors:"Please enter your full name"})

            ) : this.setState({emailErrors:"Please enter your email"})
        ) : this.setState({emailErrors:"Please enter your email",fullNameErrors:"Please enter your full name"})
    };

    render(){
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
                                    <form onSubmit={this.registerUser} className="form">
                                    <span className={this.state.authErrors ? 'form__errors form__auth-error' : ''}>{this.state.authErrors}</span>
                                        <div className="full-names">
                                            <div className="fields">
                                                <div className='auth__form-input'>
                                                    <div className='auth__form-input--header'>
                                                        <label for="fullname">Full Name</label>
                                                    </div>
                                                    <input id='fullname' className={this.state.fullNameErrors ? 'form__field-error' : ''} name='full name' placeholder='Jane Doe' onChange={(e)=> this.handleChange({fullName:e.target.value})} required></input>
                                                </div>
                                            
                                            </div>
                                            <span className='form__errors'>{this.state.fullNameErrors}</span>
                                        </div>
                                        <div className='auth__form-input'>
                                            <div className='auth__form-input--header'>
                                                <label for="email">Email</label>
                                            </div>
                                            <input id='email' className={this.state.emailErrors ? 'form__field-error' : ''} name='email' placeholder='jane.doe@email.com' onChange={(e)=> this.handleChange({email:e.target.value})} required></input>
                                            <span className='form__errors'>{this.state.emailErrors}</span>
                                        </div>
                                        <div className='password'>
                                            <div className='auth__form-input'>
                                                <div className='auth__form-input--header'>
                                                    <label for="password">Password</label>
                                                </div>
                                                <input id='password' type='password' className={this.state.passwordErrors ? 'form__field-error' : ''} name='password' placeholder='Enter your password' onChange={(e)=> this.handleChange({password:e.target.value})} required></input>
                                                <span className='form__errors'>{this.state.passwordErrors}</span>
                                            </div>
                                           
                                        </div>
                                        <button type='submit'>Sign up</button>
                                    </form>
                                    <div className='auth__wrapper-social'>
                                        <div className='auth__wrapper-social--split'><span></span><p>or</p></div>
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
                        <img src={dashboard} alt="cleartask dashboard"/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Signup;