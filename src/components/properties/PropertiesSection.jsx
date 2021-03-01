import React from "react";
import "./PropertiesSection.scss";
import {houseGrid} from "../../homes-data";
import {RiHeartFill, RiMapPinLine, RiHotelBedLine,RiMoneyDollarBoxLine} from "react-icons/ri";
import {BiArea} from "react-icons/bi";

//!=========================================================
const PropertiesSection = () => {
  return <section className="homes">
{houseGrid.map((house)=>
<div key={house.id} className="home-card">
  <img src={house.image} alt={house.title} className="home-card__img"/>
  <RiHeartFill className="home-card__heart"/>
  <h5 className="home-card__name">{house.title}</h5>
  <div className="home-card__location home-card__flex">
    <RiMapPinLine className="home-card__icons"/>
    <p>{house.country}</p>
  </div>
  <div className="home-card__rooms home-card__flex">
    <RiHotelBedLine className="home-card__icons"/>
    <p>Rooms: {house.roomNumber}</p>
  </div>
  <div className="home-card__surface home-card__flex">
    <BiArea className="home-card__icons"/>
    <p>Area: {house.sqareMeter} m<sup>2</sup></p>
  </div>
  <div className="home-card__price home-card__flex">
    <RiMoneyDollarBoxLine className="home-card__icons"/>
    <p>Price: {house.priceDollars}</p>
  </div>
  <button className="home-card__cta-button">Contact Realtor</button>
</div>
)}
  </section>;
};

export default PropertiesSection;
