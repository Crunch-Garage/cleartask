import React from "react";
import { NavLink } from "react-router-dom";
import './Sidebar.css';
import { Icon } from '@iconify/react';

class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="dashMainSideNav">
                <nav>
                    <ul>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/workspace"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:view-dashboard" />
                            Workspace
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/inbox"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:email-open" />
                            Inbox
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/notifications"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:bell" />
                            Notifications
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/profile"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:account" />
                            Profile
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/projects"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:folder-multiple" />
                            Projects
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/settings"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:cog" />
                            Settings
                        </NavLink>
                        </li>
                        <li>
                        <NavLink 
                            className="sideLink"
                            to="/dashboard/tasks"
                        >
                            <Icon className="sideNavIcon" icon="mdi-light:sitemap" />
                            Tasks
                        </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;