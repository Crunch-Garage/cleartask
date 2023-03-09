import jwt_decode from "jwt-decode";
import axios from "axios";

// Service that handles the management of
// user access and refresh tokens on the local storage


// get access token 
const getLocalAccessToken = () => {
    const access_token = localStorage.getItem("access_token")
    return access_token
}

const getNewAccessToken = (accessToken)=>{
    let success;
    axios({
        method: "post",
        url: "/apis/api/token/refresh/",
        data: {
            "refresh": accessToken,
        },
        headers: {
            'Content-Type': 'application/json',
          }
        })
        .then(response => {
            success = true
            localStorage.setItem("access_token", response.access)
        })
        .catch(error => {
            success = false 
        })
        .finally(() => {
            return success
        });
}

// TO DO: check expiry of refresh token
const tokenIsExpired = () => {
    var accessToken = getLocalAccessToken();
    var refreshToken = localStorage.getItem("refresh_token")
    var isExpired = true
    if (accessToken && refreshToken){
        var decoded = jwt_decode(accessToken);
        var refreshDecoded = jwt_decode(accessToken);

        var dateNow = new Date;

        if (dateNow.getTime() < decoded.exp*1000 ){
            isExpired = false;
        } else if(dateNow.getTime() < refreshDecoded.exp*1000){
            
            var access_retrieved = getNewAccessToken()

            if (access_retrieved){
                isExpired = false;
            } else {
                isExpired = true;
            }

        } else {
            isExpired = false;
        }
    }

    return isExpired
}

const TokenService = {
    getLocalAccessToken,
    tokenIsExpired,

}

export default TokenService;