import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../services/token";

// component that handles where to take authenticated users

var isExpired = TokenService.tokenIsExpired();

class UnauthedRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loggedOut:false
    }
  }

  componentDidMount = () =>{
    console.log('here')
  }

  render(){
    return(
      <div>
        { isExpired ? (
            <Outlet/>
            ) : (
            <Navigate to='/dashboard/workspace' replace={true}/>
            )
        }
      </div>
    )
  };
}


export default UnauthedRoute;