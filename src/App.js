import React, { Component } from "react";
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { Home, Browse, Signin , Signup} from './pages'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path={ROUTES.HOME} element= { <Home />} />
        <Route exact path="/browse" element= { <Browse />} />
        <Route exact path="/signin" element={ <Signin />} />
        <Route exact path="/signup" element= { <Signup />} />
      </Routes>
    </BrowserRouter>
    
    )
}


