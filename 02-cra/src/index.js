import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import App from './App';
import Hello from './pages/Hello';
import ExoState from './pages/ExoState';
import ExoLifecycle from './pages/ExoLifecycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="bonjour/:name" element={<Hello />} />
        <Route path="exo/state" element={<ExoState />} />
        <Route path="exo/lifecycle" element={<ExoLifecycle />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
