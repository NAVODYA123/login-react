import React from "react";

import { Link as RouterLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { Divider, Link } from "@mui/material";

import ThirdPartyLogin from "../ThirdPartyLogin";


import './index.scss'

const LoginForm = () => {
  return (
    <div className="container">   
    <div className="login-form">   
        <TextField id="outlined-basic" label="email" variant="outlined" />
        <TextField id="outlined-basic" label="password" variant="outlined" type="password"/>       
        <Button variant="contained">Login</Button>
        <Divider>OR</Divider>
         <ThirdPartyLogin/> 
         <Link component={RouterLink} to="/sign-up">
          Don't have an account? Sign up here.
        </Link>
    </div>
    </div>
  );
};

export default LoginForm;
