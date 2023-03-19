import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Location from './components/Currentlocation';

export default function App() {
  return (
  <div>
  <Location />
  <Router>
    <div>
      <NavigationBar />
      <Footer />
    </div>  
  </Router>
  </div>
  )
}