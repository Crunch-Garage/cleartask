import React from 'react';
import Sidebar from './Sidebar';
import Topnav from './Topnav';

class Projects extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Projects')
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
                        <p>My Projects</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;