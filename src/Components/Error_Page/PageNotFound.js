import React from 'react'

import "./PageNotFound.css"


// this page is used to display error when we will not get data in api or if movie name does not match 
// with the movie present the database
const PageNotFound = () => {
    return (
            
            <div className="pageNotFound">

                    <h1 id="heading">Oops..! 404 Page Not Found</h1>
                    <p id="para">Looks like your searched movie is not present in on our server</p>
                    <img src="https://lh3.googleusercontent.com/ClnPRQCWR77kRkD-O92j3SJYYjs6WOc9W52O-b6wiD-IIGIRxDonWkFxY3XEybVHRFU8kvCNNZSTPjgQKMOEizaGCy-dv0Fmr4b0B6HaYtBxrPiPEuU9xQbFgti6g6RQdQUNzcHzfA=w2400" id='img' alt="img"/>
                </div>
          
    )
}

export default PageNotFound;