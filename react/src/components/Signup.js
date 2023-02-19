import React from 'react';
import axios from "../services/axios";
import Images from '../global/Images.js';
import BouncingDots from './progress_bars/BouncingDots';
import './Signup.css';
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";

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
class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submitting:false,
            email:"",
            authErrors:"",
            emailErrors:"",
            passwordErrors:""
        }
    }

    // componentDidMount = () =>{ 
    // }

    registerUser = (e) => {
        e.preventDefault();
        this.setState({submitting:true})
        this.state.email ? (
            axios({
                method:'post',
                url:'apis/create_account/claim_email/',
                data: {
                    email:this.state.email
                }
            })
            .then(response => {

                console.log(response);
                // redirect user to their dashboard
                this.props.history.go("/workspace");
            })
            .catch(error =>{
                console.log(error);
            })
        ) : this.setState({emailErrors:"Please enter your email"})
        this.setState({submitting:false})
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
                                        <div className='auth__form-input'>
                                            <div className='auth__form-input--header'>
                                                <label for="email">Email</label>
                                            </div>
                                            <input id='email' className={this.state.emailErrors ? 'form__field-error' : ''} name='email' placeholder='jane.doe@email.com' onChange={(e)=> this.setState({email:e.target.value})} required></input>
                                            <span className='form__errors'>{this.state.emailErrors}</span>
                                        </div>
                                        
                                        <button type='submit'>
                                            {
                                                !this.state.submitting ?(
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

}

export default Signup;