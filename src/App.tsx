import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Portfolio from './Portfolio';
import SplineViewer from './components/SplineViewer';
import HeroSection from './components/HeroSection';
import styled from 'styled-components';

const Spacer = styled.div`
    height: 60px;
    width: 100%;
    background: transparent;
`;


function App() {
  return (
    <>
      <NavBar />
      <Spacer />
      <HeroSection />
      <Portfolio />
    </>
  );
}

export default App;
