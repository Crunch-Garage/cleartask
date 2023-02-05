import React from 'react';
import Sidebar from './Sidebar';
import Topnav from './Topnav';

class Profile extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Profile')
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
                        <p>My Profile</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;