import React from "react";
import axios from "../services/axios";
import Images from '../global/Images.js';
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";
import BouncingDots from "./progress_bars/BouncingDots";
import "./Home.css";
import Signup from "./Signup";

const GetStartedPopup = ({setShowSignup})=>{
    const closeModal =()=>{
        setShowSignup(false)
    }

    return(
        <div className="emailModal">
            <Signup/>
            <button type="button" onClick={closeModal}>
                <iconify-icon icon="carbon:close"></iconify-icon>
            </button>
        </div>
    )
}

const GetStartedInput = ()=>{
    const [submitting, setSubmitting] = React.useState(false);
    const [showSignup, setShowSignup] = React.useState(false);

    const submitEmail = (email) => {
        setSubmitting(true);
        axios({
            method:'post',
            url:'apis/create_account/claim_email/',
            data: {
                email: email,
            }
        })
        .then(response => {
            setSubmitting(false);
            
        })
        .catch(error =>{
            setSubmitting(false);  
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if (e.target.email.value !=''){
            // TO DO: Do some email validation
            submitEmail(e.target.email.value);
        } else{
            setShowSignup(true);
        }
           
    }

    return(
        <>
            { showSignup ? <GetStartedPopup setShowSignup={setShowSignup}/> :'' }
            <form onSubmit={handleSubmit} method="post">
                <input id="email" type="email" placeholder="Enter your email"/>
                <div className="cta">
                    <button type="submit" className="cta__button">
                    {
                        !submitting ?(
                        <div className="cta__button--text">
                            Get started
                        </div>
                        ): (
                        <BouncingDots/>
                        )
                    }
                        
                    </button>
                    <span>Free forever!<br/> No credit card</span>
                </div>
            </form>
        </>
    )
}

const ReviewOverview =()=>{
    return(
        < div className="rating">
            <div className="rating__stars">
                <div className="rating__stars--box">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="gold" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gold" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                </div>
                <span>Based on 5000+ reviews on</span>
            </div>
            <div className="rating__review-apps">
                <img src={Images.getApp}/>
                <img src={Images.trusPilot}/>
                <img src={Images.capterra}/>
            </div>
        </div>
    )
}

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            log:''
        }
    }

    render(){
        return(
            <main className="main">
                <div className="hero">
                    <section className="hero__section">
                        <Container className="mui__container hero__container">
                            <Grid container className="mui__grid hero__grid">
                                <Grid item xs={12} sm={6} md={5} lg={5} className="mui__grid-item hero__grid--item hero__grid--first">
                                    <h2>All your projects & tasks in one place!</h2>
                                    <p>Get more productive. Get clear!</p>
                                    <GetStartedInput/>
                                    <ReviewOverview/>
                                </Grid>
                                <Grid item xs={12} sm={6} md={7} lg={7} className=" mui__grid-item hero__grid--item hero__grid--last">
                                    <div className="hero__grid-graphic">
                                        <img src={Images.hr} alt="dashboard"/>
                                    </div>
                                </Grid>
                            </Grid>
                        </Container>
                    </section>
                </div>
                <section className="partners">
                    <Container className="partners__container">
                        <h2>Trusted by global companies</h2>
                        <Grid container className="partners__companies">
                            <Grid item xs="auto" className="partners__company">
                                <img src={Images.airbnb} alt="airbnb"/>
                            </Grid>
                            <Grid item xs="auto" className="partners__company">
                                <img src={Images.github} alt="github"/>
                            </Grid>
                            <Grid item xs="auto" className="partners__company">
                                <img src={Images.instagram} alt="instagram"/>
                            </Grid>
                            <Grid item xs="auto" className="partners__company">
                                <img src={Images.snapchat} alt="snapchat"/>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        )
    }
}


export default Home;