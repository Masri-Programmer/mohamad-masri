/* eslint-disable react/no-unknown-property */
import { useRef, } from 'react';
import Time from "./Time"
import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, } from './TimeLineStyles';
import { Section, SectionDivider, } from '../styles/GlobalComponents';

const TimeLineData = [
  { year: 2020, text: 'Started my journey as a computer science student, where I gained foundational knowledge in programming and computer systems', },
  { year: 2021, text: ' Worked as a freelance developer & Landed my first job as a private coding instructor taching online and at Brightchamps', },
  { year: 2022, text: 'Landed a full-stack job at Brainkets, where I am using my skills and expertise in web development to create innovative and modern software solutions for clients', },
  { year: 2023, text: 'Graduated with Bachelor in Computer Science and completed over 5 courses in Full Stack development and preparing for a new job in Germany', },
];

const Timeline = () => {
  const carouselRef = useRef();


  return (
    <Section id="about" data-aos="fade-right">
      {/* <div className='d-flex justify-content-center'><SectionTitle>Timeline</SectionTitle></div> */}
      <CarouselContainer ref={carouselRef} data-aos="fade-left">
        <>
          {TimeLineData.map((item, index) => (
            <div key={index}>
              <Time index={index} item={item} />
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
  );
};

export default Timeline;
