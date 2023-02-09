import "./Footer.css";
import {Container, Grid} from '@mui/material';

const Footer = ()=>{
    return(
        <footer className="footer">
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