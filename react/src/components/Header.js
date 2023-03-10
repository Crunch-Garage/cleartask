import React from "react";
import Images from '../global/Images.js';
import './Header.css';
import { NavLink, Link } from "react-router-dom";
import {Container, Grid} from '@mui/material';
import TokenService from "../services/token";

var isExpired = TokenService.tokenIsExpired();
// TO DO: get user data
var userData = {
    username: "",
    profile_photo: ""
}

const MainMenu = ()=>{
    const [dropdown, setDropdown] = React.useState({
        drop1:"hidden",
        drop2:"hidden",
        drop3:"hidden",
        drop4:"hidden"
    })

    const dropArrayCopy = () =>{
        let keys = ["drop1", "drop2", "drop3", "drop4"]
        let arrayCopy = {
            ...Object.fromEntries(keys.map(key => [key,'hidden']))
        }

        return arrayCopy
    }

    const onMenuItemMouseIn = (e) =>{
        // reset to defaults of hidden and update the value of current dropdown 
        let arrayCopy = dropArrayCopy()
        arrayCopy[e.target.getAttribute("data-targetItem")]= "block"
        setDropdown(arrayCopy)
    }

    const onMenuItemMouseOut = (e) =>{
        // reset all values to hidden
        let arrayCopy = dropArrayCopy()
        setDropdown(arrayCopy)
    }
    return(
        <div className="primary-menu">
            <div className="primary-menu__logo">
                <Link to="/">
                    <img src={Images.logo} alt="cleartask"/>
                </Link>
            </div>
            <div className="primary-menu__list-wrapper">
                <ul className="primary-menu__list">
                    <li onMouseLeave={onMenuItemMouseOut}>
                        <button type="button" data-targetItem="drop1" data-dropState={dropdown.drop1} onMouseEnter={onMenuItemMouseIn} aria-current="page">
                            Features
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path stroke="black" stroke-width="2" strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </button>
                        {/* Navbar dropdown menu */}
                        <div className={`${dropdown.drop1} dropdown`  }>
                            <div className="dropdown__wrapper" onMouseLeave={onMenuItemMouseOut}>
                                <div className="dropdown__wrapper--row">
                                    <div className="dropdown__section first">
                                        <div className="dropdown__section-header">
                                            <span>Features</span>
                                        </div>
                                        <div className="dropdown__links">
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:collaborate"  style={{"font-size": "24px", "color":"#E300A4"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <span className="head">Teams</span>
                                                        <p className="body">Bring your team over and collaborate faster on projects.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                    
                                            <NavLink to="/">                                               
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:checkbox-checked"  style={{"font-size": "24px", "color":"#8EECFC"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Tasks</p>
                                                        <p className="body">Create and manage tasks for a project easily.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:document"  style={{"font-size": "24px", "color":"#8FFF93"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Docs</p>
                                                        <p className="body">Document your projects, keep notes.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:video"  style={{"font-size": "24px", "color":"#FBBC05"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <span className="head">Meetings</span>
                                                        <p className="body">Schedule and host virtual conference calls.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:calendar"  style={{"font-size": "24px", "color":"#1EA7FF"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Calendar</p>
                                                        <p className="body">Use a robust Calendar to track all your work, tasks and due dates.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:notification"  style={{"font-size": "24px", "color":"#2400FF"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Notifications</p>
                                                        <p className="body">Never miss any activity. Get notifications on your account.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:hashtag"  style={{"font-size": "24px", "color":"#299702"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Chat</p>
                                                        <p className="body">Use chat to send quick messages to your teammates.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/">
                                                <div className="dropdown__link-item">
                                                    <div className="dropdown__link-item--icon">
                                                        <iconify-icon icon="carbon:directory-domain"  style={{"font-size": "24px", "color":"#FF0000"}}></iconify-icon>
                                                    </div>
                                                    <div className="dropdown__link-item--text">
                                                        <p className="head">Boards</p>
                                                        <p className="body">Be Agile and stay focused using Kanban boards.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="dropdown__section second">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li data-targetItem="drop3"><a href="#" onMouseEnter={onMenuItemMouseOut}>Plans</a></li>
                    <li data-targetItem="drop4"><a href="#" onMouseEnter={onMenuItemMouseOut}>Pricing</a></li>
                </ul>
            </div>
        </div>
    )
}

const SecondaryMenu = ()=> {
    return(
        <div className="secondary-menu">
            {isExpired ? (
                <ul className="unauthed">
                    <li>
                        <NavLink to="/auth/login">
                            <button type="button">Login</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/signup">
                            <button type="button">Get started</button>
                        </NavLink>
                    </li>
                </ul>
             ) : (
                //TO DO: Add drop down menu items
                <ul className="authed">
                    <li>
                        <button type="button">
                            <div className="authed__wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            {
                            userData.profile_photo != "" ? (
                                <div className="authed__wrapper">
                                    <span>KM</span>
                                </div>
                            ) : (
                                <div className="authed__wrapper">
                                    <img src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="photo"/>
                                </div>
                            )
                            }
                        </button>
                    </li>
                </ul>
             )
                
            }
        </div>
    )
}

const MobileMenu = ()=>{
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const [subNav, setSubNav] = React.useState({
        subNav1:"hide"
    })
    const[subNavOpen, setSubNavOpen] = React.useState(false)
    
    const toggleSubNav = ()=>{
        setSubNav({subNav1:"visible"})
        setSubNavOpen(true)
    }

    const closeSubnav = ()=>{
        setSubNav({subNav1:"hide"})
        setSubNavOpen(false)
    }

    return(
        <>
            <div className="mobile-menu__trigger">
                {/* <!-- Mobile menu button--> */}
                <button type="button" className="mobile-menu__trigger-button" onClick={() => setMobileMenuOpen(true)} aria-controls="mobile-menu" aria-expanded="false">
                    <iconify-icon icon="iconoir:menu"/>
                </button>
            </div>
            
            {/* <!-- Mobile menu, show/hide based on menu state. --> */}
            <div id="mobile-menu" className={`mobile-menu-wrap ${mobileMenuOpen}`}>
                <div className="mobile-menu-wrap__inner">
                    <div className={`mobile-menu-wrap__inner--top ${subNavOpen}`}>
                        <div className="mobile-menu__logo">
                            <Link to="/">
                                <img src={Images.logo} alt="cleartask"/>
                            </Link>
                        </div>
                        <button type="button" className="sub-nav__close" onClick={closeSubnav}>
                                <iconify-icon icon="carbon:chevron-left"/>
                                <span>Back</span>
                        </button>
                        <button type="button" className="mobile-menu__close-button" onClick={() => setMobileMenuOpen(false)} aria-controls="mobile-menu" aria-expanded="false">
                            <iconify-icon icon="carbon:close"/>
                        </button>
                    </div>
                    <div className={`mobile-menu-wrap__inner--middle ${subNavOpen}`}>
                        <div className="mobile-menu-wrap__nav">
                            <ul>
                                <li onClick={toggleSubNav}>
                                    <p>Features</p>
                                    <iconify-icon icon="carbon:chevron-right"/>
                                </li>
                                <li>
                                    <p>Plans</p>
                                    <iconify-icon icon="carbon:chevron-right"/>
                                </li>
                                <li>
                                    <p>Pricing</p>
                                    <iconify-icon icon="carbon:chevron-right"/>
                                </li>
                            </ul>
                        </div>
                        <div className={`mobile-menu-wrap__sub-nav ${subNav.subNav1}`}>
                            <div className="mobile-menu-wrap__sub-nav-links">
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:collaborate" style={{"font-size": "24px", "color":"#E300A4"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Teams</span>
                                            <p className="body">Bring your team over and collaborate faster on projects.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">                                               
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:checkbox-checked"  style={{"font-size": "24px", "color":"#8EECFC"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Tasks</span>
                                            <p className="body">Create and manage tasks for a project easily.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:document"  style={{"font-size": "24px", "color":"#8FFF93"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Docs</span>
                                            <p className="body">Document your projects, keep notes.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:video"  style={{"font-size": "24px", "color":"#FBBC05"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Meetings</span>
                                            <p className="body">Schedule and host virtual conference calls.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:calendar"  style={{"font-size": "24px", "color":"#1EA7FF"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Calendar</span>
                                            <p className="body">Use a robust Calendar to track all your work, tasks and due dates.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:notification"  style={{"font-size": "24px", "color":"#2400FF"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Notifications</span>
                                            <p className="body">Never miss any activity. Get notifications on your account.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:hashtag"  style={{"font-size": "24px", "color":"#299702"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Chat</span>
                                            <p className="body">Use chat to send quick messages to your teammates.</p>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to="/">
                                    <div className="mobile-menu-wrap__link-item">
                                        <div className="mobile-menu-wrap__link-item--icon">
                                            <iconify-icon icon="carbon:directory-domain"  style={{"font-size": "24px", "color":"#FF0000"}}/>
                                        </div>
                                        <div className="mobile-menu-wrap__link-item--text">
                                            <span className="head">Boards</span>
                                            <p className="body">Be Agile and stay focused using Kanban boards.</p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div> 
                    <div className="mobile-menu-wrap__inner--footer">
                        {
                            isExpired ? (
                                <div className="mnav-footer__item--unauthed">
                                    <NavLink to="/auth/signup">
                                        <button type="button">Get started  <iconify-icon icon="carbon:chevron-right"/></button>
                                    </NavLink>
                                </div>
                            ) : (
                                <div className="mnav-footer__item--authed">
                                    <button type="button">
                                        <iconify-icon icon="carbon:notification"/>
                                    </button>
                                    <button type="button">
                                        {
                                        userData.profile_photo != "" ? (
                                            <div className="authed__wrapper">
                                                <span>KM</span>
                                            </div>
                                        ) : (
                                            <div className="authed__wrapper">
                                                <img src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" alt="photo"/>
                                            </div>
                                        )
                                        }
                                    </button>
                                </div> 
                            )
                        }
                       
                    </div>
                   
                </div>
            </div>
       </>
    )
}
function Header(){
    
    return(
        <>
            <nav className="navbar">
                <Container className="navbar__full-menu">
                    <div className="navbar__nav-menu-items">
                        <MainMenu/>
                        <div className="navbar__nav-menu-items--right">
                            <SecondaryMenu/>
                            <MobileMenu/>
                        </div>
                        
                    </div>
                </Container>
            </nav>
        </>

    )
}

export default Header;