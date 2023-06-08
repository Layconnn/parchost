import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import Home2 from '../pages/home2';
import FormReg from '../pages/formReg';
import NoPage from '../pages/noPage';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='registration' element={<Home2/>} />
            <Route path='sign-up' element={<FormReg />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
