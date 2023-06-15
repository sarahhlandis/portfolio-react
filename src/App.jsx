import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css' 
import { Header } from './components/header';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element="" />
        <Route path="/about" element="" />
        <Route path="/contact" element="" />
        <Route path="/projects" element="" />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App
