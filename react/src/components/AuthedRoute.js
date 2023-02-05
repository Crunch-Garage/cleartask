import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../services/token";

// component that handles where to take authenticated users

var isExpired = TokenService.tokenIsExpired();

class AuthedRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedIn:true
    }
  }

  componentDidMount = () =>{
    console.log('here')
  }

  render(){
    return(
      <div>
        { isExpired ? (
            <Navigate to='/auth/login' replace={true}/>
            ) : (
              <Outlet/>
            )
        }
      </div>
    )
  };
}

export default AuthedRoute;