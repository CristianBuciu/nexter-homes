import React from "react";

import Header from "../../components/header/Header";
import HeaderRealtors from "../../components/realtors/HeaderRealtors";
import FeaturesSection from "../../components/features-section/FeaturesSection";
import LocationPictures from "../../components/location-pictures/LocationPictures";
import LocationContent from "../../components/location-content/LocationContent";
import PropertiesSection from "../../components/properties/PropertiesSection";
import Testimonials from "../../components/testimonials/Testimonials.jsx";
import Footer from "../../components/footer/Footer.jsx";

import "./Home.scss";

const Home = () => {
  return (
    <div className="grid-container">
      <Header />
      <HeaderRealtors />
      <FeaturesSection />
      <LocationPictures />
      <LocationContent />
      <PropertiesSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
