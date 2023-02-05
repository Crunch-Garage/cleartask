import jwt_decode from "jwt-decode";
// Service that handles the management of
// user access and refresh tokens on the local storage

// get access token 
const getLocalAccessToken = () => {
    const access_token = localStorage.getItem("access_token")
    return access_token
}


// checks expiry of access token
// TO DO: check expiry of refresh token
const tokenIsExpired = () => {
    var accessToken = getLocalAccessToken();

    var isExpired = true
    if (accessToken){
        var decoded = jwt_decode(accessToken);
        var dateNow = new Date;
        if (dateNow.getTime() < decoded.exp*1000 ){
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