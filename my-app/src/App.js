import React from 'react';
import './App.css';
import { Button, Navbar } from 'reactstrap';
import logo from './logo.png';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';


function App() {
  return (
    <div className="App">
      
        
          <div className="app-body">

            <div className="header-nav">
              <a href="https://www.denisalfonso.com/" ><img src={logo} className="logo" /> </a>

              
              <Nav className="top-nav">
                <NavItem>
                  <NavLink href="">Projects</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="">About</NavLink>
                </NavItem>

                <NavItem>
                <NavLink href="mailto:contact@denisalfonso.com"><Button className="contact-button rounded-pill border-primary border">Contact</Button></NavLink>
                </NavItem>
              </Nav>
            </div>

              <Container id="hero-container">
                <h1 id="hero-text1">Web Developer, Designer, Tech Enthusiast</h1>
                <h4 id="hero-text2">Hi, My name is Denis and I enjoy designing and coding beautiful and unique websites/apps.</h4>
                <img src="./images/desk-illustration.svg"></img>
              </Container>

              <div className="green-container">
                <h2 className="green-text">Looking for my work ? Look no more. Below is a set of websites/apps I designed to improve existing sites.</h2>
              </div>

              <Container id="projects"></Container>

            
          </div>
        
        
        
      
    </div>
  );
}

export default App;
