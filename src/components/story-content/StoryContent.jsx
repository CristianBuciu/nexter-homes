import React, { useEffect, useRef } from "react";
import "./StoryContent.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//!===========================================================
const StoryContent = () => {
  const storyRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(
      storyRef.current,
      {
        scrollTrigger: {
          trigger: storyRef.current,
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
    <div ref={storyRef} className="story__content">
      <h3 className="heading-3 mb-sm">Happy Customers</h3>
      <h2 className="heading-2 heading-2--dark mb-md">
        &ldquo;The best decision of our lives&rdquo;
      </h2>
      <p className="story__text mb-md">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi
        atque fugit, vel asperiores quam minus laudantium repudiandae sapiente
        nemo veritatis consequatur et provident excepturi corporis repellendus
        blanditiis illo tempore cum nisi.{" "}
      </p>
      <button className="button">Find your own home</button>
    </div>
  );
};

export default StoryContent;
