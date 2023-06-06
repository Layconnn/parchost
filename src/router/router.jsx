import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import Home2 from '../pages/home2';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='registration' element={<Home2/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
