import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Portfolio from './Portfolio';
import HeroSection from './components/HeroSection';
import styled from 'styled-components';
import Aniforum from './pages/Aniforum';
import Hada from './pages/Hada';

const Spacer = styled.div`
    height: 60px;
    width: 100%;
    background: transparent;
`;

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Spacer />
      <Routes>
        <Route path="/home" element={<HeroSection />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/aniforum" element={<Aniforum />} />
        <Route path="/hada" element={<Hada />} />
        {/* Add other routes here */}
      </Routes>
      {/* <Portfolio /> */}
    </Router>
  );
}

export default App;
