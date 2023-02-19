import Images from "../global/Images";
import { Link } from "react-router-dom";
import "./SlimNav.css";

const minimalNavbar = ()=>{
    return(
        <nav className='nav'>
            <div className='nav__wrapper'>
                <Link to="/">
                    <img src={Images.logo} alt="Cleartask Logo"/>
                </Link>
            </div>
        </nav>
    )
}

export default minimalNavbar;