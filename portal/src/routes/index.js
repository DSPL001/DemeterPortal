import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/authentication/login";
import Register from "../pages/authentication/register";
import Home from "../pages/landing";

function Routing() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    );
  }
  
  export default Routing;