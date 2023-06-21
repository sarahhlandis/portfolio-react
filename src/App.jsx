import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css' 
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Connect } from './pages/Connect';
import { HomeHeader } from './components/HomeHeader';
import { Footer } from './components/footer';
import SoloProject from './components/SoloProject';


function App() {  

  const location = useLocation;


  return (
    <BrowserRouter>
        {location.pathname !== '/' ? <HomeHeader /> : ""}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:title" element={<SoloProject />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App
