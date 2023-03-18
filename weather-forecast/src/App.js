import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
  <Router>
    <div>
      <NavigationBar />
      <Footer />
    </div>
  </Router>
  )
}