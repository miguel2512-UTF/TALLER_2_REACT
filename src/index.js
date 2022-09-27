import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Huesped from './pages/huesped/Huesped';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/huesped" element={<Huesped />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
