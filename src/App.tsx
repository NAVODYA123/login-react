import "./App.css";
import React from "react";
import { Routes } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <MainRoutes />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
