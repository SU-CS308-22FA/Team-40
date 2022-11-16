/* eslint-disable default-case */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthProvider";
import React from 'react';
import Navbar from "./Components/Navbar"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Demo from "./Pages/Demo"

function App(){
  return (
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="register" element={<Register />} />
              <Route path="demo" element={<Demo />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>    
  );
}

export default App;