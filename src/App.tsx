import React from 'react';
import './App.css';
import NavBar from './components/navbar';
import Portfolio from './Portfolio';
import SplineViewer from './components/SplineViewer';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Portfolio />
    </>
  );
}

export default App;
