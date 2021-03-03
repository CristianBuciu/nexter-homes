import React from "react";
import "./HeaderRealtors.scss";
import realtor1 from "../../assets/realtor-1.jpeg";
import realtor2 from "../../assets/realtor-2.jpeg";
import realtor3 from "../../assets/realtor-3.jpeg";
//!==============================================================
const HeaderRealtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3 realtors__heading">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img src={realtor1} alt="realtor 1" className="realtors__image" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Billy Russo</h4>
          <p className="realtors__sold">245 HOUSES SOLD</p>
        </div>
        <img src={realtor2} alt="realtor 1" className="realtors__image" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Karen Page</h4>
          <p className="realtors__sold">235 HOUSES SOLD</p>
        </div>
        <img src={realtor3} alt="realtor 1" className="realtors__image" />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Luke Cage</h4>
          <p className="realtors__sold">237 HOUSES SOLD</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRealtors;
