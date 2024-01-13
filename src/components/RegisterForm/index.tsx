import React from "react";

import { Button, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import "./index.scss";

const RegisterForm = () => {
  return (
    <div className="container">
      <div className="register-form">
        <TextField id="lname" label="Full Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="mobile" label="Mobile" variant="outlined" />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
        />
        <Button variant="contained">Register</Button>
        <Link component={RouterLink} to="/">
          Already have an account ? Sign in here.
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
