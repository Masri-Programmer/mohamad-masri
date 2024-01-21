/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import meter1 from "../assets/img/react.svg";
import meter2 from "../assets/img/javascript.svg";
import meter3 from "../assets/img/tailwind-css.svg";
import meter4 from "../assets/img/php.svg";
import bootstrap from "../assets/img/bootstrap.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { SectionTitle } from "../styles/GlobalComponents"
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import AOS from 'aos';
import { useMediaQuery } from 'react-responsive'
import 'aos/dist/aos.css';
export const Skills = () => {
  const count = useMotionValue(-10);
  const rounded = useTransform(count, Math.round);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      // Check if scroll position is greater than or equal to 200
      if (scrollTop >= 220) {
        AOS.init();
        // Perform your animation here
        const animation = animate(count, 10, {
          duration: 2
        });

        // Optionally, stop the animation when the component is unmounted or when scrollY is less than 200
        return () => {
          animation.stop();
        };
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const animation = animate(count, 10, {
  //     duration: 2
  //   });

  //   return animation.stop;
  // }, []);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3
    }
  };

  return (
    <section className="skill" id="skills" data-aos="flip-left">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn d-flex justify-content-center items-center align-items-center w-100 flex-column">
              <motion.span
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                <div className="d-flex gap-5">
                  <span className="d-flex"><motion.h2>{rounded}</motion.h2>+</span>
                  <SectionTitle>Skills</SectionTitle>
                </div>
              </motion.span>
              <p>I have accumulated three years of relevant experience, including a one-year work placement</p>
              <Carousel
                arrows={isTabletOrMobile ? false : true}
                autoPlay="true" swipeable={true}
                draggable={true} responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" style={{ textSize: "10px" }}>
                <div className="item">
                  <img style={{ maxHeight: "111px", objectFit: "contain" }} src={meter1} alt="Image" />
                  <h5>React. Js</h5>
                </div>
                <div className="item">
                  <img style={{ maxHeight: "111px", objectFit: "contain" }} src={meter2} alt="Image" />
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <img style={{ maxHeight: "111px", objectFit: "contain" }} src={meter3} alt="Image" />
                  <h5>Tailwind</h5>
                </div>
                <div className="item">
                  <img style={{ maxHeight: "111px", objectFit: "contain" }} src={meter4} alt="Image" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img style={{ maxHeight: "111px", objectFit: "contain" }} src={bootstrap} alt="Image" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
