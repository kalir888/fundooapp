import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/signin/signin';
import SignUp from '../pages/signup/signup';
import Dashboard from '../pages/dashboard/dashboard';

function Router() {
    return (
        <div>
            <BrowserRouter >
                <Routes>
                    <Route path="/SignIn" element={<SignIn/>}/>
                    <Route path="/" element={<SignUp/>}/>
                    <Route path="/Dashboard" element={<Dashboard/>}/> 
                </Routes>
            </BrowserRouter> 
        </div>
    )
}

export default Router;