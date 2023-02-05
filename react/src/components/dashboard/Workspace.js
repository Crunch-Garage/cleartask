import React from 'react';
import Sidebar from './Sidebar';
import Topnav from './Topnav';
import "./Styles.css";
import "./Workspace.css";
import {Container, Grid, Card, CardContent} from '@mui/material';
import { Icon } from '@iconify/react';
import Trend from 'react-trend';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend,  } from 'recharts';


const card = (
    <React.Fragment>
      <CardContent>
        <div className='top'>
            <div className='left'>
                <div className='iconWrp'>
                    <Icon className="icon" icon="mdi-light:star"/>
                </div>
                <h3>Tasks Completed</h3>
            </div>
            <span>08</span>
        </div>
        <div className="dvdr"></div>
        <div className='middle'>
            <div className='left'>
                <Trend
                data={[0, 10, 75, 6, 6, 101]}
                gradient={['#0FF', '#F0F', '#FF0']} 
                smooth
                height={200}
                radius={20} 
                strokeWidth={6}
                autoDraw
                autoDrawDuration={3000}
                autoDrawEasing="ease-in"
                />
            </div>
            <div className='right'>
                <h5><span>10+</span>more</h5>
                <p>from last week</p>
            </div>
        </div>
      </CardContent>
    </React.Fragment>
  );

const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
];
  
const chart = (
    <React.Fragment>
        <CardContent>
            <div className='tasksDoneChart'>
                <div className='top'>
                    <h3>Tasks Done</h3>
                    <div className='chartDataControls'>
                        <button type='button'>Daily</button>
                        <button type='button'>Weekly</button>
                        <button type='button'>Monthly</button>
                    </div>
                </div>
                <LineChart className='lchart' width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid className='grid' strokeDasharray="3 3" />
                    <XAxis className='x-axis' dataKey="name" />
                    <YAxis className='y-axis' />
                    <Tooltip className="charttooltip"/>
                    <Legend className='chartLegend'/>
                    <Line className='trendline1' type="monotone" dataKey="pv" stroke="#8884d8" />
                    <Line className='trendline1'  type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>        
            </div>
        </CardContent>
    </React.Fragment>
  )
  
class Workspace extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('workspace')
    }

    render(){
        return(
            <div className="dashboardContainer">
                <div className="dashSidebar"> 
                    <Sidebar/>
                </div>
                <div className='dashContentContainer'>
                    <div>
                        <Topnav/>
                    </div>
                    <div className="dashContent">
                        <p>My workspace</p>
                        <Container className="dashCContainer">
                            <Grid container spacing={3} className="dashCgrid">
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                                <Grid item xs={3} className="dashCGridItem">
                                    <Card className="dashCCard">{card}</Card>
                                </Grid>
                            </Grid>
                            <br></br>
                            <Grid container spacing={3} className="dashCgrid">
                                <Grid item className="dashCGridItem">
                                    
                                    <Card className="dashCCard">
                                        {chart}
                                    </Card>
                                        
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div>
            </div>
          
        )
    }
}

export default Workspace;