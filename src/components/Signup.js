import React from 'react';
import './Signup.css';
import {Container, Grid, Item} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import p1 from '../assets/p1.jpg';
import logo from '../assets/logo.png';

const axios = require('axios');
const baseURL = process.env.REACT_APP_BASEAPIURL || 'http://localhost:8000';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            firstname:"",
            lastname:"",
            email:"",
            password1:"",
            password2:"",
            authErrors:"",
            emailErrors:"",
            fullNameErrors:"",
            passwordErrors:""
        }

        this.create = this.create.bind(this);
        this.handleChange =this.handleChange.bind(this);
    }

    // componentDidMount = () =>{ 
    // }

    // Form fields processing a user inputs their details.
    handleChange(object){
        // Update state as form field values change
        this.setState(object,()=>console.log(this.state))

        // TO DO: Check if username already exists
    };

    create(e){
        e.preventDefault();
        this.state.email && this.state.firstname && this.state.lastname ? (
            this.state.email ? (
                this.state.firstname && this.state.lastname ? (
                    axios({
                        method:'post',
                        url:`${baseURL}/apis/rest-auth/registration/`,
                        data: {
                            username:this.state.username,
                            firstname:this.state.firstname,
                            lastname:this.state.lastname,
                            password1:this.state.password1,
                            password2:this.state.password2,
                            email:this.state.email
                        }
                    })
                    .then(response => {
                        console.log(response);
                    })
                    .catch(error =>{
                        console.log(error);
                    })

                ) : this.setState({fullNameErrors:"Please enter your first and last name"})

            ) : this.setState({emailErrors:"Please enter your email"})
        ) : this.setState({emailErrors:"Please enter your email",fullNameErrors:"Please enter your first and last name"})
    };

    render(){
        return(
            <Container className="formContainer">
                <Grid container spacing={3} className="formContainerGrid">
                    <Grid item xs>
                        <div className='authWrapper'>
                            <div className='authHead'>
                                <div class="authHeadLogo">
                                    <img src={logo} alt=""/>
                                </div>
                                <h2>Ready to get more done</h2>
                                <p>Create an account to begin</p>
                            </div>
                            <form>
                                <input id='email' className={this.state.emailErrors ? 'fieldError' : ''} name='email' placeholder='jane.doe@email.com' onChange={(e)=> this.handleChange({email:e.target.value})} required></input>
                                <span className='formErrors'>{this.state.emailErrors}</span>
                                <div className="fullNames">
                                    <div className="fields">
                                        <input id='firstname' className={this.state.fullNameErrors ? 'fieldError' : ''} name='firstname' placeholder='Firstname' onChange={(e)=> this.handleChange({email:e.target.value})} required></input>
                                        <span style={{width:'10px'}}></span>
                                        <input id='lastname' className={this.state.fullNameErrors ? 'fieldError' : ''} name='lastname' placeholder='Lastname' onChange={(e)=> this.handleChange({email:e.target.value})} required></input>
                                    </div>
                                    <span className='formErrors'>{this.state.fullNameErrors}</span>
                                </div>
                                <div className='passwordField'>
                                    <input id='password1' className={this.state.passwordErrors ? 'fieldError' : ''} name='password1' placeholder='Enter your password' onChange={(e)=> this.handleChange({password1:e.target.value})} required></input>
                                    <input id='password2' className={this.state.passwordErrors ? 'fieldError' : ''} name='password2' placeholder='Confirm your password' onChange={(e)=> this.handleChange({password2:e.target.value})} required></input>
                                    <span className='formErrors'>{this.state.passwordErrors}</span>
                                </div>
                                <span className='formErrors'>{this.state.authErrors}</span>
                                <button onClick={(e)=> this.create(e)}>Sign up</button>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <AutoPlaySwipeableViews className="slideView">
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                            <div className='slideBody'>
                                <img src={p1} alt=''/>
                                <div className='text'>
                                    <h6>Lorem Ipsum</h6>
                                    <p>A short description goes here</p>
                                </div>
                            </div>
                        </AutoPlaySwipeableViews>
                    </Grid>
                </Grid>
            </Container>
        )
    }

}

export default Signup;