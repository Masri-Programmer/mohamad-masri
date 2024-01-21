import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/whatsapp.svg';
import { HashLink } from 'react-router-hash-link';
import { motion } from "framer-motion"

import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  const phoneNumber = '+4917631579669'; // Replace with your phone number
  const message = 'Hello, I would like to connect!';

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const [isNavOpen, setNavOpen] = useState(true);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
    console.log(isNavOpen)
  };
  return (
    <Router>
      <Navbar expand="md" className={"scrolled"} show={isNavOpen}>
        <Container className="justify-content-end">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          // className="d-flex"
          >
            {/* <Navbar.Brand href="/"> */}
            {/* <img src={logo} alt="Logo" /> */}
            {/* </Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleNavToggle}>
              <span className="navbar-toggler-icon p-2"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" show={isNavOpen} >
              <Nav className="ms-auto " show={isNavOpen}>
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => { onUpdateActiveLink('projects'); localStorage.setItem("active", "first") }}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="https://www.linkedin.com/in/mohamad-masri-89778915a/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                  <a href="https://github.com/Masri-Programmer" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
                  <a href="#" onClick={handleClick}>
                    <img src={navIcon3} alt="" />
                  </a>
                </div>
                <HashLink to='#connect' onClick={handleNavToggle}>
                  <motion.button className="vvd rounded" whileTap={{ scale: 0.85 }}>
                    <span>Let’s Connect</span>
                  </motion.button>
                </HashLink>
              </span>
            </Navbar.Collapse>
          </motion.span>

        </Container>
      </Navbar>
    </Router>
  )
}
