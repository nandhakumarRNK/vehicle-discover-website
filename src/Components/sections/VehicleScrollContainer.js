import React from "react";
import vehicle1 from "../../Assests/Images/vehicle-1.png";
import vehicle2 from "../../Assests/Images/vehicle-2.png";
import vehicle3 from "../../Assests/Images/vehicle-3.png";
import vehicle4 from "../../Assests/Images/vehicle-4.png";
import vehicle5 from "../../Assests/Images/vehicle-5.png";
import vehicle6 from "../../Assests/Images/vehicle-6.png";

class VehicleScrollContainer extends React.Component {
  render() {
    let url = "";

    return (
      <div>
        <section class="vehicles" id="vehicles">
          <h1 class="heading">
            popular <span>vehicles</span>
          </h1>
          <div class="swiper vehicleSlider">
            <div class="swiper-wrapper boxContainer">
              <div class="box swiper-slide">
                <img src={vehicle1} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 1</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>

              <div class="box swiper-slide">
                <img src={vehicle2} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 2</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>

              <div class="box swiper-slide">
                <img src={vehicle3} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 3</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>

              <div class="box swiper-slide">
                <img src={vehicle4} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 4</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>

              <div class="box swiper-slide">
                <img src={vehicle5} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 5</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>

              <div class="box swiper-slide">
                <img src={vehicle6} alt="" />
                <div class="content">
                  <h3>Model-Vehicle 6</h3>
                  <div class="price">
                    <span>price: </span>$65,000
                  </div>
                  <p>
                    new
                    <span class="fas fa-circle"></span>2023
                    <span class="fas fa-circle"></span>automatic
                    <span class="fas fa-circle"></span>petrol
                    <span class="fas fa-circle"></span>183mph
                  </p>
                  <a href={url} class="btn">
                    check out
                  </a>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
      </div>
    );
  }
}
export default VehicleScrollContainer;
