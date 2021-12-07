import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Home from "../pages/landing";
import Dashboard from "../pages/dashboard";

function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
  
  export default Routing;