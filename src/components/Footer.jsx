/* eslint-disable react/jsx-no-target-blank */
// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
import navIcon3 from '../assets/img/whatsapp.svg';
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
export const Footer = () => {

  const phoneNumber = '+4917631579669'; // Replace with your phone number
  const message = 'Hello, I would like to connect!';

  const handleClick = () => {
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the default duration for animations
      once: true, // Set to true if you want animations to occur only once
    });
  }, []);
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1200">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
            <div className="email-container">
              <a href="mailto:masri_moohamad@protonmail.com" target="_blank">masri_mohamad@protonmail.com</a>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/mohamad-masri-89778915a/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/Masri-Programmer" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              <a href="#" onClick={handleClick}>
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
