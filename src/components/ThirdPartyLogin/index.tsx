import { Button } from "@mui/material"
import React from "react"

import './index.scss'

const ThirdPartyLogin =()=> {

    return(
        <div className="third-party-login">
         <Button variant="outlined" >Sign in with Google</Button>  
         <Button variant="outlined">Sign in with Facebook</Button> 
        </div>
    )
}
export default ThirdPartyLogin