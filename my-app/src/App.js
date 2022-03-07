import React, { useState, Component } from 'react';
import './App.css';
import { Button, Navbar } from 'reactstrap';
import logo from './logo-svg.svg';
import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Books from './books';
import Detective from './detective';
import ScrollUpButton from "react-scroll-up-button";
import $ from 'jquery';




library.add(fab, fas);




function App() {
  return (
    <div className="App">
      
        
          <div className="app-body">

            <div className="header-nav">
              <a href="https://www.denisalfonso.com/" ><img src={logo} className="logo" /> </a>

              
              <Nav className="top-nav">
                <NavItem>
                <NavLink href="#projects">Projects</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="#bio">About</NavLink>
                </NavItem>

                <NavItem>
                <NavLink href="mailto:contact@denisalfonso.com"><Button className="contact-button rounded-pill border-primary border">Contact</Button></NavLink>
                </NavItem>
              </Nav>
            </div>

              <Container id="hero-container">
                <h1 id="hero-text1">Web Developer, Designer, Tech Enthusiast</h1>
                <h4 id="hero-text2">Hi, My name is Denis and I enjoy designing and coding beautiful and unique websites/apps.</h4>
                <img src="./images/desk-illustration.svg" id="computer-ill"></img>
              </Container>

              <div className="green-container">
                <h2 className="green-text">Looking for my work ? Look no more. Below is a set of websites/apps I designed to improve existing sites.</h2>
              </div>

              <div id="projects">
                <Row className="row-gap">
                  <Col md="6" sm="12"><img src="./images/bully.jpg"></img></Col>
                  <Col md="6" sm="12" className="project-info">
                    <h3 className="project-header">Stop Bullying Now Foundation <a href="https://github.com/DeusVastator/Project-2"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                    
                    <p className="project-text">This Project is the one I am most proud of for the home page design. The stock photos I used here and the accent blue color for the beginning word of every title really made this one stand out.</p>
                    <br/>

                    <a href="https://github.com/DeusVastator/Project-2" className="project-link" target="_blank">View Project</a>
                    
                    </Col>
                    
                    
                </Row>

                <Row className="row-gap">
                  <Col md="6"><img src="./images/le-gourmet-break.png"></img></Col>
                  <Col md="6" sm="12" className="project-info">
                  <h3 className="project-header">Le Gourmet Break <a href="https://github.com/DeusVastator/Project-1"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                    
                    <p className="project-text">This is a local French restaurant in the Orlando area that had a pretty simple page. I redesigned it to make it look more modern and adding a nice hero page that gets the mouth watering.</p>
                    <br/>
                    <a href="https://github.com/DeusVastator/Project-1" className="project-link" target="_blank">View Project</a>
                  </Col>
                </Row>

                <Row className="row-gap">
                  <Col md="6"><img src="./images/discount.png"></img></Col>
                  <Col md="6" sm="12" className="project-info">
                  <h3 className="project-header">Discount Detective <a href="https://github.com/DeusVastator"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                    
                    <p className="project-text">This is a discount hunting app that I designed a mockup for. The concept of the app is to find the best deal across multiple websites to get you the best price. <strong>This Project is not a coded project. This was purely a design project so there is no coded version.</strong></p>
                    <br/>
                    <Detective buttonLabel="View Project Images" className="view-btn"></Detective>
                    
                  </Col>
                </Row>

                <Row className="row-gap">
                  <Col md="6"><img src="./images/brandywines.png"></img></Col>
                  <Col md="6" sm="12" className="project-info">
                  <h3 className="project-header">Brandywine Books <a href="https://github.com/DeusVastator"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'github']} /></a></h3>
                    
                    <p className="project-text">This website is for a bookstore that sells books online. The original site I saw for this company was very outdated so I decided to redesign it to look a little more modern. <strong>This Project is not a coded project. This was purely a design project so there is no coded version.</strong></p>
                    <br/>
                    <Books buttonLabel="View Project Images" className="view-btn"></Books>
                  </Col>
                </Row>
              </div>

              <div className="green-container">
                <h2 className="green-text">Want to follow my work and side-project shenanigans? Check out the links below!</h2>

                <img src="./images/guy-on-desk.svg" id="guy-on-desk"></img>
              </div>

              <Container>
                <Row id="bio">
                  <Col md="12">
                    <div class="image-cropper"><img src="./images/Denis_profile_pic.jpg" className="profile-pic"></img>
                    </div>
                    </Col>

                    <Col md="12">
                      <p class="bio-text">Hi, my name is Denis and I am a Web Developer/Designer. I have an AS degree from Valencia College for web development. I have a passion for all things technology. This passion has reached to the point where I taught myself how to build computers through research I did online. I majored in Web Development because I know I want my career to be something with problem solving. I have always had a love for figuring out why things work (or don't). Web development scratches that itch. Solving the problem or figuring out how to finally get the code to work is a reward in and of itself.</p>
                    </Col>
                </Row>
              </Container>

              <Container>
                <Row className="footer">
                  <Col md="12" className="social">
                    <a href="mailto:contact@denisalfonso.com"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fa', 'envelope-square']} size="3x"/></a>

                    <a href="https://github.com/DeusVastator"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'github-square']} size="3x"/></a>

                    <a href="https://www.linkedin.com/in/denis-alfonso-a25869170/"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/></a>

                    <a href="https://www.youtube.com/user/GhostMansion2"  target="_blank" className="icon-color"><FontAwesomeIcon icon={['fab', 'youtube-square']} size="3x"/></a>
                  </Col>

                  
                </Row>

                <Row><h3 id="copyright">This website was designed and coded by Denis Alfonso.</h3></Row>
              </Container>

              
              <ScrollUpButton AnimationDuration={500} />
              

            
          </div>
        
        
        
      
    </div>
  );
}

export default App;
