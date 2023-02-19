import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import SlimNav from './SlimNav';
import "./EmailSent.css";

const ThankYou = ({email}) => {
    return (
        <>
            <SlimNav/>
            <div className='email-sent'>
                <h4>Please verify your email</h4>
                <p>
                    A verification email has been sent to <b>{email}</b>.<br/>
                    Once you verify your email address, you and your team can get started in Cleartask.
                </p>
                <div className="email-sent__clients">
                    <a href="https://gmail.com/" target="_blank">
                        <div className="emailClients__wrapper">
                            <iconify-icon icon="logos:google-gmail"></iconify-icon>
                            Open Gmail
                        </div>
                    </a>
                    <a href="https://outlook.live.com/" target="_blank">
                        <div className="emailClients__wrapper">
                            <iconify-icon icon="vscode-icons:file-type-outlook"></iconify-icon>
                            Open Outlook
                        </div>
                    </a>
                    <a href="https://mail.yahoo.com/" target="_blank">
                        <div className="emailClients__wrapper">
                            <iconify-icon icon="logos:yahoo"></iconify-icon>
                            Open Yahoo
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

const EmailSent = (props)=>{
    let location = useLocation();
    let email = location.state.email

    return(
        <>
          {
            email ? (
                <ThankYou email={email}/>
            ) : (
                <Navigate to='/auth/signup' replace={true}/>
            )
                
            }
        </>
    )
}

export default EmailSent;