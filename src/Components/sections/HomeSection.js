import React from "react";
import homeImg from "../../Assests/Images/home-img.png";
import IconsContainer from "./IconsContainer";
import VehicleScrollContainer from "./VehicleScrollContainer";
import ServicesContainer from "./ServicesContainer";
import VehicleGridContainer from "./VehicleGridContainer";
import ClientReviewSection from "./ClientReviewSection";
import CarVisualizeSection from "./CarVisualizeSection";
import ContactSection from "./ContactSection";

class HomeSection extends React.Component {
  render() {
    let tempUrl = "";
    const handleMousemove = (element, e) => {
      let currentElement = element.currentTarget;
      let speed = currentElement.getAttribute("data-speed");
      let width = (window.innerWidth - element.pageX * speed) / 90;
      let height = (window.innerHeight - element.pageY * speed) / 90;

      currentElement.style.transform = `translateX(${height}px) translateY(${width}px)`;
    };

    return (
      <div>
        <section className="home" id="home">
          <h1
            className="homeParallax"
            data-speed="-2"
            onMouseMove={handleMousemove}
            onMouseLeave={handleMousemove}
          >
            Discover New
          </h1>
          <img
            className="homeParallax"
            data-speed="5"
            src={homeImg}
            alt="Home IMG"
            onMouseMove={handleMousemove}
          />
          <a href={tempUrl} className="btn homeParallax" data-speed="7">
            Explore New
          </a>
        </section>
        <IconsContainer />
        <VehicleScrollContainer />
        <ServicesContainer />
        <VehicleGridContainer />
        <ClientReviewSection />
        <CarVisualizeSection />
        <ContactSection />
      </div>
    );
  }
}

export default HomeSection;
