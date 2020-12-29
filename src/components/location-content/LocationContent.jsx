import React, { useEffect, useRef } from "react";
import "./LocationContent.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
//!===========================================================
const StoryContent = () => {
  const locationRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(
      locationRef.current,
      {
        scrollTrigger: {
          trigger: locationRef.current,
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
    <div ref={locationRef} className="location__content">
      <h3 className="heading-3 mb-sm">Best Locations</h3>
      <h2 className="heading-2 heading-2--dark mb-md">
        &ldquo;The precise location of heaven on earth has never been
        established but it may very well be right here.&rdquo;
      </h2>
      <p className="location__text mb-md">
        {" "}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor sequi
        atque fugit, vel asperiores quam minus laudantium repudiandae sapiente
        nemo veritatis consequatur et provident excepturi corporis repellendus
        blanditiis illo tempore cum nisi.{" "}
      </p>
      <button className="button">check our best properties</button>
    </div>
  );
};

export default StoryContent;
