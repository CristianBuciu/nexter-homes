import React from "react";
import "./FeaturesSection.scss";
import { BiWorld } from "react-icons/bi";
import { GiTrophyCup } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { FiKey } from "react-icons/fi";
import { BsGraphUp, BsShieldLock } from "react-icons/bs";

//!=========================================================
const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: "World's best luxury homes",
      icon: <BiWorld className="feature__icon" />,
      text:
        " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic, sed. Quas, quia tenetur! Sequi, iste. Distinctio voluptates odit vero voluptatibus. ",
    },
    {
      id: 2,
      title: "Only the best properties",
      icon: <GiTrophyCup className="feature__icon" />,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, enim ratione? Ut libero expedita deserunt id. ",
    },
    {
      id: 3,
      title: "All homes in top locations",
      icon: <GoLocation className="feature__icon" />,
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nam esse quas excepturi, repellat aut atque, ipsum quam nobis minus quidem. Excepturi, qui voluptates rerum soluta suscipit alias, itaque dicta nemo, eligendi impedit exercitationem id tempora nisi illum? Aliquid, ut! ",
    },
    {
      id: 4,
      title: "New home in one week",
      icon: <FiKey className="feature__icon" />,
      text:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde culpa earum laudantium nesciunt beatae debitis eveniet temporibus odit quisquam totam accusamus necessitatibus, corrupti cupiditate molestiae neque, eligendi nobis. ",
    },
    {
      id: 5,
      title: "Top 1% realtors",
      icon: <BsGraphUp className="feature__icon" />,
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias repellat dolorem est excepturi esse dignissimos, expedita ducimus et modi sapiente eos non ullam quaerat exercitationem corrupti similique neque recusandae eveniet earum ipsam doloremque. Ducimus voluptate sapiente cum magni laborum sint maiores molestias? ",
    },
    {
      id: 6,
      title: "Secure payments",
      icon: <BsShieldLock className="feature__icon" />,
      text:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad itaque, excepturi suscipit distinctio quaerat magni atque assumenda facere quos corrupti omnis, veniam necessitatibus voluptatum? ",
    },
  ];
  return (
    <section className="features">
      {features.map((feature) => (
        <div key={feature.id} className="feature">
          {feature.icon}
          <h4 className="heading-4 heading-4--dark">{feature.title}</h4>
          <p className="feature__text">{feature.text}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
