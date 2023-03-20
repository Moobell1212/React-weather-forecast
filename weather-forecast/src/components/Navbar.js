import React from 'react';
import Container from 'react-bootstrap/Container';
import "../style/Navbar.css";

export default function NavigationBar() {
    return (
        <div id="navbar">
            <Container >
                <div id="title">
                    <h1>Weather forecast app</h1>
                </div>
            </Container>
        </div>
    )
}