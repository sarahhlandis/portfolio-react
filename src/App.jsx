import React, {useEffect} from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import './App.css' 
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Connect } from './pages/Connect';
import { SoloProject } from './pages/SoloProject';
import { PageLayout } from './pages/PageLayout';
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
        {/* {location.pathname !== '/' ? <HomeHeader /> : ""} */}
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route element={<PageLayout />}>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:title" element={<SoloProject />} />
            <Route path="/connect" element={<Connect />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App

