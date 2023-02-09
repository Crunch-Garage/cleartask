import "./Footer.css";
import logo from '../assets/solid.png';
import googlePlay from '../assets/google-play-badge.png';
import {Container, Grid} from '@mui/material';

const Footer = ()=>{
    return(
        <footer className="footer">
            <Container className="footer__container">
                    <Grid container xs="auto" spacing={5} className="footer__grid footer__grid--top">
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="/"><img src={logo} alt="Cleartask logo"/></a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <h3>About Cleartask</h3>
                                <p>Why we created Cleartask.</p>
                            </a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <h3>Careers</h3>
                                <p>Check out available roles.</p>
                            </a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <h3>Contact us</h3>
                                <p>Need support? Talk to us.</p>
                            </a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item app-badge">
                            <a href="#"><img src={googlePlay} alt="Google play"/></a>
                        </Grid>
                    </Grid>
            </Container>
            <Container className="footer__container">
                    <Grid container xs="auto" spacing={1} className="footer__grid">
                        <Grid item xs="auto" className="footer__grid-item">
                            <span>&copy;{new Date().getFullYear()} Cleartask</span>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">Privacy</a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">Terms of service</a>
                        </Grid>
                    </Grid>
                    <Grid container xs="auto" spacing={1} className="footer__grid">
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <button type="button">
                                    <iconify-icon icon="ic:baseline-facebook"  style={{"font-size": "24px"}}></iconify-icon>
                                </button>
                            </a>
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <button type="button">
                                    <iconify-icon icon="ri:instagram-fill"  style={{"font-size": "24px"}}></iconify-icon>
                                </button>
                            </a>
                                
                        </Grid>
                        <Grid item xs="auto" className="footer__grid-item">
                            <a href="#">
                                <button type="button">
                                    <iconify-icon icon="mdi:twitter"  style={{"font-size": "24px"}}></iconify-icon>
                                </button>
                            </a>
                        </Grid>
                    </Grid>
            </Container>
        </footer>
    )
}

export default Footer;