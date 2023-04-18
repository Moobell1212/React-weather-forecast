import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import NavigationBar from './components/Navbar';
import Search from './components/searchAndHistory/SearchSection';

export default function App() {
  return (
  <div>
  <NavigationBar />
  <Container className="border border-dark rounded">
    <Search />
  </Container>
  </div>
  )
}