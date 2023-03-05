import React from "react";
import Loaders from "../global/loaders";
import './ActivateAccount.css';
import Images from '../global/Images.js';

const ActivateAccount = ()=>{
// Activate the user and redirects them to set password and personal info screen
    const [activating,setActivating] = React.useState(true)
    const [success, setSuccess] =  React.useState({
        "state": null,
        "details":null
    })
    
    return(
        <div className="activate-account">
            <div className="activate-account__wrapper">
                <div className="activate-account__head">
                    <img src={Images.logo} alt="cleartask"/>
                </div>
                <div className="activate-account__body">
                    {
                        activating ? (
                            <span><Loaders.BouncingDots/>activating</span>
                        ):''
                    }
                    <p>Please wait while we activate your account.</p>
                </div>
                
                {
                    setSuccess.state != null ? (
                        <div className={`activate-account__message ${success.state}`}>
                            <iconify-icon icon={`${success.state ?'carbon:checkmark-outline':"carbon:error" }`}></iconify-icon>
                            <p>Credentials not valid. Redirecting in </p>
                        </div>
                    ) : ''
                }
               
            </div>
        </div>
    )
}

export default ActivateAccount;