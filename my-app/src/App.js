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
                  <Button className="contact-button rounded-pill border-primary"><NavLink href="">Contact</NavLink></Button>
                </NavItem>
              </Nav>

            </div>
</div>
        
        
        
      
    </div>
  );
}

export default App;
