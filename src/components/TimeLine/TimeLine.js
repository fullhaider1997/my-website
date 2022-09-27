import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  workDateSection,
  SectionSubText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: "smooth" });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="Experience">
      <SectionTitle>Work experience</SectionTitle>

      <SectionText>Full Stack Engineer</SectionText>

      <SectionSubText style={{ marginButtom: "0px" }}>
        ONTHECARD | May 2021 to August 2021
      </SectionSubText>

      <SectionText>
        <ul>
          <SectionSubText>
            1. Developed user insight web application aimed to aid the marketing
            team to understand the impact of their marketing strategies and
            client base. I developed the application using MERN stack.
          </SectionSubText>
          <SectionSubText>
            2. Contributed to the development of frontend and backend of
            ONTEHCARD web application using React and Node.
          </SectionSubText>
          <SectionSubText>
            3. Implemented authentication and authorization mechanism using JWT
            to provide a good balance between security and peformance.
          </SectionSubText>
        </ul>
      </SectionText>

      <SectionText> </SectionText>
      <SectionText style={{ marginButtom: "0px" }}>
        {" "}
        Programming Instructor{" "}
      </SectionText>

      <SectionSubText></SectionSubText>
      <SectionSubText style={{ marginButtom: "70px" }}>
        Exceed Robotics | Mar 2019 to Sept 2020
      </SectionSubText>

      <SectionText>
        <ul>
          <SectionSubText>
            1. Instructed more than 30 teen students over 1 year in programming
            technologies such as JavaScript, Python, C++, Java etc.
          </SectionSubText>

          <SectionSubText>
            2. Contributed to the development of a new computer vision course in
            terms of improving presentation slides, projects, and curriculum.
          </SectionSubText>

          <SectionSubText>
            3. Instructed over 20 students in computer vision course using
            Python and Cloud vision API.
          </SectionSubText>
        </ul>
      </SectionText>

      <SectionDivider colorAlt />
    </Section>
  );
};

export default Timeline;
