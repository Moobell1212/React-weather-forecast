import React from 'react';
import Container from 'react-bootstrap/esm/Container';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
  <div>
  <NavigationBar />
  <Container>
  <Footer />
  </Container>
  </div>
  )
}