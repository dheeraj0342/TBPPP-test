import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Register from './components/Register';
import Validate from './components/Validate';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
            <Routes>
                <Route path="/" element={<Register/>} />
                <Route path="/validate" element={<Validate/>} />
                <Route path="/dashboard" element={<Dashboard/>} />
            </Routes>
    );
};

export default App;