import React from "react";
import { NavLink } from "react-router-dom";
import './Topnav.css';
import {Container, Grid, Avatar, Stack} from '@mui/material';
import { Icon } from '@iconify/react';
import avatar from '../../assets/avatar.jpg';

class Topnav extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <Container className="dashtopNav">
                <Grid container spacing={3} className="dashtopNavGrid">
                    <Grid item xs className="dashtopNavGridItem">
                        <div className="searchbar">
                            <input type="text" placeholder="Search anything"/>
                            <Icon className="topNavIcon" icon="mdi-light:magnify"/>
                        </div>
                    </Grid>
                    <Grid item xs={3} className="dashtopNavGridItem">
                        <Stack direction="row" spacing={2} className="accountPrev">
                            <Icon className="topNavIcon" icon="mdi-light:bell"/>
                            <Avatar className="avatar" alt="Jane Doe" src={avatar} />
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Topnav;