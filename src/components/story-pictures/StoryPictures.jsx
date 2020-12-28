import React, { useRef, useEffect } from "react";
import "./StoryPictures.scss";
import image1 from "../../assets/story-1.jpeg";
import image2 from "../../assets/story-2.jpeg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//!=========================================================
const StoryPictures = () => {
  gsap.registerPlugin(ScrollTrigger);
  const picturesRef = useRef(null);

  useEffect(() => {
    gsap.to(
      picturesRef.current,
      {
        scrollTrigger: {
          trigger: picturesRef.current,
          start: "200px 80%",
          end: "bottom bottom",
          toggleActions: "restart none reverse reverse",
          // markers: true,
          scrub: 1,
        },
        opacity: 1,

        x: "0",
        // duration: 1,
      },
      []
    );
  }, []);

  return (
    <div ref={picturesRef} className="story__pictures">
      <img src={image1} alt="a couple" className="story__img--1" />
      <img src={image2} alt="a house" className="story__img--2" />
    </div>
  );
};

export default StoryPictures;
