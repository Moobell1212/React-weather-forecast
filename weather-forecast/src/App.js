import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';
import Location from './components/Currentlocation';
import CurrentWeather from './pages/Currentweather';

export default function App() {
  return (
  <div>
  <Location />
  <CurrentWeather />
  <NavigationBar />
  <Container>
  <Footer />
  </Container>
  </div>
  )
}