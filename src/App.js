import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';
import Preferences from './Components/Preferences';
import AxiosCoinGeko from './Components/AxiosCoinGeko';

function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/preferences" element={<Preferences/>}/>
                </Routes>
            </BrowserRouter>
            <AxiosCoinGeko></AxiosCoinGeko>
        </div>
    );
}

export default App;