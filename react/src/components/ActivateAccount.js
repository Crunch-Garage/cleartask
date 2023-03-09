import React from "react";
import axios from "../services/axios";
import Loaders from "../global/loaders";
import './ActivateAccount.css';
import Images from '../global/Images.js';
import { useSearchParams, useNavigate } from "react-router-dom";

const ActivateAccount = ()=>{
// Activate the user and redirects them to set password and personal info screen
    const [message, setMessage] =  React.useState({
        "state": "starting",
        "details":"Processing. Please wait!"
    })
    let [searchParams, setSearchParams] = useSearchParams();

    let uid = searchParams.get('uid');
    let token = searchParams.get('token');

    const navigate = useNavigate();

    React.useEffect(() => {
        if(uid && token){
            setMessage({"state":"activating", "details":"Activating your account. Please wait!"})
            axios({
            method: "post",
            url: `apis/activate/${uid}/${token}/`,
            data: {}
            })
            .then(response => {
                setMessage({"state":"activated", "details":response.data.details})
                // For now lets redirect users to the login page.
                //  TO DO: Redirect users to page where they can setup their password and personal info
                window.localStorage.setItem("access_token",response.data.access)
                window.localStorage.setItem("refresh_token",response.data.refresh)
                setTimeout(() => {
                    navigate("/auth/add_account_details/", {replace:true})
                }, 5000);
            })
            .catch(error => {
                setMessage({"state":"error", "details":error.data.details})
            })
            .finally(() => {
                setMessage({"state":"activated", "details":"Account activated. Redirecting in 5 seconds"})
            });

        }else{
            navigate("/auth/signup",{replace:true});
        }

    }, []);

    return(
        <div className="activate-account">
            <div className="activate-account__wrapper">
                <div className="activate-account__head">
                    <img src={Images.logo} alt="cleartask"/>
                </div>
                <div className="activate-account__body">
                    {
                        message.state === "activating" ? (
                            <span><Loaders.BouncingDots/>activating</span>
                            
                        ):''
                    }

                    <p>
                        {
                        message.state === "starting" ? (
                            message.details
                        ) : message.state === "activating" ? (
                            message.details
                        ) : (
                            "Done!"
                        )
                        }
                    </p>
                   
                </div>
                
                {
                    message.state !== "starting" ? (
                        <div className={`activate-account__message ${message.state}`}>
                            <iconify-icon icon={`${message.state === "activated"?'carbon:checkmark-outline':"carbon:error" }`}></iconify-icon>
                            <p>{message.details} </p>
                        </div>
                    ) : ''
                }
               
            </div>
        </div>
    )
}

export default ActivateAccount;