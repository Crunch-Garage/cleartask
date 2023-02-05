import React from 'react';
import Sidebar from './Sidebar';
import Topnav from './Topnav';

class Inbox extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        console.log('Inbox')
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
                        <p>My inbox</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Inbox;