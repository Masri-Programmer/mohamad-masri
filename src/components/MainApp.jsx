/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import Theme from '../styles/theme';
import { useRef, useEffect, useState } from "react";
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from "three";

const MainApp = () => {
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
        <div className="App " style={{ minHeight: "100vh", minWidth: "100vw" }} onMouseMove={changePosition}>
            <div className="cursor-style" ref={cursor} ></div>
            <Theme>
                <NavBar />
                <div ref={myRef}>
                    <Banner />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
                <Footer />
            </Theme>
        </div>
    );
}

export default MainApp