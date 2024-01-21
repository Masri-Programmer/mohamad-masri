// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Theme from './styles/theme';
import { useRef, useEffect, useState } from "react";
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from "three";

function App() {
  const cursor = useRef(null)
  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }

  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.8,
          scaleMobile: 1.00,
          color: 0x380740,
          backgroundColor: 0x0
        })
      );
    }
    return () => {
      if (myRef.current && myRef.current.vanta) {
        myRef.current.vanta.destroy();
      }
    };
  }, []);

  return (
    <div className="App " ref={myRef} style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}>
      <div className="cursor-style" ref={cursor} ></div>
      <Theme>
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
