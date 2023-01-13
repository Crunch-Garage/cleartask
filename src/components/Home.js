import React from "react";
import {Container, Grid} from '@mui/material';
import { Link } from "react-router-dom";
import getApp from '../assets/getApp.png';
import trusPilot from '../assets/truspilot.png';
import capterra from '../assets/capterra.png';
import hr from '../assets/hr.png';
import airbnb from '../assets/airbnb.png';
import instagram from '../assets/instagram.png';
import github from '../assets/github.png';
import snapchat from '../assets/snapchat.png';
import "./Home.css";


const GetStartedInput = ()=>{
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    return(
        <form onSubmit={handleSubmit} method="post">
            <input type="email" placeholder="Enter your email"/>
            <div className="cta">
                <button type="submit">Get started</button>
                <span>Free forever!<br/> No credit card</span>
            </div>
        </form>
    )
}

const ReviewOverview =()=>{
    return(
        < div className="ratingStats">
            <div className="top">
                <div className="ratingStars">
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
                <span>Base on 5000+ reviews on</span>
            </div>
            <div className="reviewApps">
                <img src={getApp}/>
                <img src={trusPilot}/>
                <img src={capterra}/>
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
            <>
            <div className="homePage">
                <section className="contBox">
                    <Container>
                        <Grid container spacing={3} className="heroGrid">
                            <Grid item xs={5} className="gridLeft gridText">
                                <h2>All your projects & tasks in one place!</h2>
                                <p>Get more productive. Get clear!</p>
                                <GetStartedInput/>
                                <ReviewOverview/>
                            </Grid>
                            <Grid item xs={7}>
                                <div className="heroGraphic">
                                    <img src={hr} alt="dashboard"/>
                                </div>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
                <section className="partners">
                <Container className="partners__container">
                    <h2>Trusted by global companies</h2>
                    <Grid container spacing={5} className="partners__companies">
                        <Grid item xs="auto" className="partners__company">
                            <img src={airbnb} alt="airbnb"/>
                        </Grid>
                        <Grid item xs="auto" className="partners__company">
                            <img src={github} alt="github"/>
                        </Grid>
                        <Grid item xs="auto" className="partners__company">
                            <img src={instagram} alt="instagram"/>
                        </Grid>
                        <Grid item xs="auto" className="partners__company">
                            <img src={snapchat} alt="snapchat"/>
                        </Grid>
                    </Grid>
                </Container>
            </section>
            </div>
            </>
        )
    }
}


export default Home;