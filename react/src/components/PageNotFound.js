import React from "react";
import "./PageNotFound.css";

const PageNotFound = () => { 
    return(
        <div className="errorPages">
            <h2>Page not found</h2>
            <div className="QuickLinks">
                <a href="/"><button type="button">Go to home</button></a>
            </div>
        </div>
    )
}

export default PageNotFound;