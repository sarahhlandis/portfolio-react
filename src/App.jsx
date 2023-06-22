import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css' 
import { About } from '/src/pages/About';
import { Home } from '/src/pages/Home';
import { Projects } from '/src/pages/Projects';
import { Connect } from '/src/pages/Connect';
import { HomeHeader } from '/src/components/HomeHeader';
import { Footer } from '/src/components/Footer';
import { SoloProject } from '/src/pages/SoloProject';
import AOS from 'aos';


function App() {  

  const location = useLocation;
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  
    return () => {
      AOS.refresh();
    };
  }, []);

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

