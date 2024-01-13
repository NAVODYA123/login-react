// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import LoginForm  from "./components/LoginForm";
import  RegisterForm  from "./components/RegisterForm";

const App = () => {
  return (
   
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/sign-up" element={<RegisterForm />} />
        </Routes>
      </div>
   
  );
};

export default App;
