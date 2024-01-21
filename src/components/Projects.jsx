/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ultra.jpg";
import projImg2 from "../assets/img/game.jpeg";
import projImg3 from "../assets/img/propack.jpg";
import modernBank from "../assets/img/modernBank.png";
import openai from "../assets/img/openai.png";
import petite from "../assets/img/petite.png";
import beeflex from "../assets/img/beeflex.png";
import tasty from "../assets/img/tasty.png";
import agt from "../assets/img/agt.png";
import portfolio2 from "../assets/img/portfolio-2.png";
import slim from "../assets/img/slim.png";
// import portfolio from "../assets/img/portfolio.png";
import cars from "../assets/img/cars.png";
import shoppers from "../assets/img/shoppers.png";
import schooltube from "../assets/img/schooltube.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import text from "../assets/img/text.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Magnifier from "react-magnifier";
/* eslint-disable react/no-unknown-property */
import Time from "./Time"
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, } from './TimeLineStyles';
import { Section, SectionDivider, } from '../styles/GlobalComponents';
const projects = [
  {
    title: "Ultra Store",
    description: "E-commerce & Development",
    link: "https://ultrastore.me/ultra-store",
    imgUrl: projImg1,
  },
  {
    title: "Game Academy",
    description: "Sports & E-Learning",
    link: "https://gameacademy.ngo/",
    imgUrl: projImg2,
  },
  {
    title: "Propack",
    description: "Cards & Football",
    link: "https://propackstore.org/home",
    imgUrl: projImg3,
  },
  {
    title: "School Tube",
    description: "E-Learning",
    link: "https://schooltube.online/",
    imgUrl: schooltube,
  },
  {
    title: "Hoo Modern Bank",
    description: "Modern Banking Landing Page",
    link: "https://masri-programmer.github.io/modern_bank/",
    imgUrl: modernBank,
  },
  {
    title: "Slim Threads",
    description: "Clothes E-commers",
    link: "https://masri-programmer.github.io/slim-threads/",
    imgUrl: slim,
  },
  {
    title: "Open AI",
    description: "Introduction to Ai",
    link: "https://masri-programmer.github.io/openai/",
    imgUrl: openai,
  },
  {
    title: "Petite Restaurant",
    description: "Food & Menu",
    link: "https://masri-programmer.github.io/modern_restaurant/",
    imgUrl: petite,
  },
  {
    title: "Tasty Restaurant",
    description: "Food & Menu",
    link: "https://masri-programmer.github.io/Restaurant101/",
    imgUrl: tasty,
  },
  {
    title: "BeeFlex",
    description: "Business Managment Solutions",
    link: "https://masri-programmer.github.io/BeeFlex/",
    imgUrl: beeflex,
  },
  {
    title: "Royal Cars",
    description: "Cars & Rent",
    link: "https://masri-programmer.github.io/RoyalCars/",
    imgUrl: cars,
  },
  {
    title: "E-shopper",
    description: "Clothes & E-commerce",
    link: "https://masri-programmer.github.io/Ecommerce/",
    imgUrl: shoppers,
  },
  {
    title: "AGT Computers",
    description: "Laptop & E-commerce",
    link: "https://masri-programmer.github.io/AGT/",
    imgUrl: agt,
  },
  {
    title: "Portfolio",
    description: "",
    link: "https://masri-programmer.github.io/mohamad-masri-portfolio/",
    imgUrl: portfolio2,
  },
];

const TimeLineData = [
  { year: 2020, text: 'Started my journey as a computer science student, where I gained foundational knowledge in programming and computer systems', },
  { year: 2021, text: ' Worked as a freelance developer & Landed my first job as a private coding instructor taching online and at Brightchamps', },
  { year: 2022, text: 'Landed a full-stack job at Brainkets, where I am using my skills and expertise in web development to create innovative and modern software solutions for clients', },
  { year: 2023, text: 'Graduated with Bachelor in Computer Science and completed over 5 courses in Full Stack development and preparing for a new job in Germany', },
];
let isActive = localStorage.getItem("active");
export const Projects = () => {
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the default duration for animations
      once: true, // Set to true if you want animations to occur only once
    });
  }, [active]);

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div >
                {/* <h2>Projects</h2>
                  <p>Developed a client and company portal using React with Vite for frontend and PHP with MySQL for the backend. As the primary developer, achieved business goals, prioritizing page speed, SEO, design, and user-friendly interface. Learned the importance of thoughtful planning before coding for optimal solutions and best practices.</p> */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first" activeKey={active} onSelect={(k) => {
                  localStorage.setItem("active", k)
                  setActive(k)
                  // setActive(k === "second" ? "true" : "false")
                }}>
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Nav variant="pills" activeKey={active} className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" >
                      <Nav.Item >
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item >
                        <Nav.Link eventKey="second">Timeline</Nav.Link>
                      </Nav.Item >
                      <Nav.Item >
                        <Nav.Link eventKey="third">About</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </motion.span>
                  <Tab.Content id="slideInUp" data-aos="flip-up">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" data-aos="flip-up" >
                      <Section id="about" data-aos="fade-right">
                        {/* <div className='d-flex justify-content-center'><SectionTitle>Timeline</SectionTitle></div> */}
                        <CarouselContainer data-aos="fade-left">
                          <>
                            {TimeLineData.map((item, index) => (
                              <div key={index}>
                                <Time index={index} item={item} active={active} />
                              </div>
                            ))}
                          </>
                        </CarouselContainer>
                        <CarouselButtons>
                          {TimeLineData.map((item, index) => {
                            return (
                              <CarouselButton
                                key={index}
                                index={index}
                                type="button">
                                <CarouselButtonDot />
                              </CarouselButton>
                            );
                          })}
                        </CarouselButtons>
                        <SectionDivider />
                      </Section>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third" >
                      {/* <p>Bachelor in Computer Science and Frontend developer at Brainkets. Passionate for coding and growing , I have been able to apply my education and skills to create visually appealing and user-friendly web applications. Constantly learning and staying up-to-date with the latest technologies and best practices to ensure that my work is of the highest quality. My passion for coding and my drive to always improve, makes me a valuable asset to any team. I am excited to continue my professional journey and take on new challenges in the field of Frontend Development.</p> */}
                      <Magnifier src={text} width={"100%"} />
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
