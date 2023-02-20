import React from 'react';
import axios from "../services/axios";
import { Navigate, useLocation } from "react-router-dom";
import SlimNav from './SlimNav';
import "./EmailSent.css";
import BouncingDots from './progress_bars/BouncingDots';

const ThankYou = ({email, resendEMail, submitting, response}) => {
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
                <div className='resend-email'>
                    <p>
                        Didn't receive and email?
                        {
                            !response.state ? (
                                !submitting ? (
                                    <>
                                 
                                    <button type='button' onClick={resendEMail}>
                                        Resend
                                    </button>
                                    </>
                                ) : (
                                    <button type="button" disabled className='email-sending'>
                                        <BouncingDots/>
                                    </button>
                                )
                               
                            ) : (
                            
                                response.state === "success" ? (
                                    <button type='button' disabled className='email-sent'>
                                        <iconify-icon icon="carbon:checkmark-outline"></iconify-icon>
                                        Email sent
                                    </button>
                                   
                                ) : (
                                    <button type='button' disabled className='email-not-sent'>
                                        <iconify-icon icon="carbon:checkmark-outline-error"></iconify-icon>
                                        Email not sent
                                    </button>
                                    
                                )
                               
                            )
                        }
                        
                    </p>
                </div>
            </div>
        </>
    )
}

const EmailSent = (props)=>{
    let location = useLocation();
    let email = location.state.email;

    const [submitting, setSubmitting] = React.useState(false);
    const [response, setResponse] = React.useState({
        state: "",
        details: ""
    });
    
    const resendEMail =()=>{
        if (email) {
            setSubmitting(true);
            axios({
            method: "post",
            url: "apis/create_account/claim_email/",
            data: {
                email: email
            }
            })
            .then(response => {
                setResponse({
                    state:"success",
                    details: response
                });
            })
            .catch(error => {
                setResponse({
                    state:"error",
                    details: response
                });
            })
            .finally(() => {
                setSubmitting(false);
            });
        } else {
            setResponse({ 
                state:'error',
                details: "Please enter your email"
            });
        }
    }

    return(
        <>
          {
            email ? (
                <ThankYou email={email} resendEMail={resendEMail} submitting={submitting} response={response}/>
            ) : (
                <Navigate to='/auth/signup' replace={true}/>
            )
                
            }
        </>
    )
}

export default EmailSent;