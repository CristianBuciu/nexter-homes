import React, { useRef, useEffect } from "react";
import "./LocationPictures.scss";

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
    <div ref={picturesRef} className="location__pictures">
      <img
        src="https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg?cs=srgb&dl=pexels-kenneth-carpina-2468773.jpg&fm=jpg"
        alt="a couple"
        className="location__img--1"
      />
      <img
        src="https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg?cs=srgb&dl=pexels-patryk-kamenczak-775219.jpg&fm=jpg"
        alt="a house"
        className="location__img--2"
      />
      <img
        src="https://images.pexels.com/photos/32870/pexels-photo.jpg?cs=srgb&dl=pexels-chris-goodwin-32870.jpg&fm=jpg"
        alt="a house"
        className="location__img--3"
      />
    </div>
  );
};

export default StoryPictures;
