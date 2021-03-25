import React from "react";
import "./HeaderRealtors.scss";

//!==============================================================
const HeaderRealtors = () => {
  return (
    <div className="realtors">
      <h3 className="heading-3 realtors__heading">Top 3 Realtors</h3>
      <div className="realtors__list">
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678376/nexter-homes/realtor-1_wumjbm.jpg"
          alt="realtor 1"
          className="realtors__image"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Billy Russo</h4>
          <p className="realtors__sold">245 HOUSES SOLD</p>
        </div>
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678376/nexter-homes/realtor-2_pqigfk.jpg"
          alt="realtor 2"
          className="realtors__image"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Karen Page</h4>
          <p className="realtors__sold">235 HOUSES SOLD</p>
        </div>
        <img
          src="https://res.cloudinary.com/c1oud9/image/upload/v1616678373/nexter-homes/realtor-3_q5liol.jpg"
          alt="realtor 3"
          className="realtors__image"
        />
        <div className="realtors__details">
          <h4 className="heading-4 heading-4--light">Luke Cage</h4>
          <p className="realtors__sold">237 HOUSES SOLD</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRealtors;
