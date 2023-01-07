import React, { Component } from "react";
import car1 from "../../Assests/Images/car-1.png";
import car2 from "../../Assests/Images/car-2.png";
import car3 from "../../Assests/Images/car-3.png";
import car4 from "../../Assests/Images/car-4.png";
import car5 from "../../Assests/Images/car-5.png";
import car6 from "../../Assests/Images/car-6.png";
import car7 from "../../Assests/Images/car-7.png";
import car8 from "../../Assests/Images/car-8.png";

export class VehicleGridContainer extends Component {
  render() {
    let tempURL = "";
    return (
      <div>
        <section class="featured" id="featured">
          <h1 class="heading">
            <span>featured</span> vehicles
          </h1>

          <div class="swiper featuredSlider">
            <div class="swiper-wrapper boxContainer">
              <div class="swiper-slide box">
                <img src={car1} alt="" />
                <h3>new model 1</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="swiper-slide box">
                <img src={car2} alt="" />
                <h3>new model 2</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="box swiper-slide">
                <img src={car3} alt="" />
                <h3>new model 3</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="box swiper-slide">
                <img src={car4} alt="" />
                <h3>new model 4</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>

          <div class="swiper featuredSlider ">
            <div class="swiper-wrapper boxContainer">
              <div class="box swiper-slide">
                <img src={car5} alt="" />
                <h3>new model 5</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="box swiper-slide">
                <img src={car6} alt="" />
                <h3>new model 6</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="box swiper-slide">
                <img src={car7} alt="" />
                <h3>new model 7</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>

              <div class="box swiper-slide">
                <img src={car8} alt="" />
                <h3>new model 8</h3>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star-half-alt"></i>
                </div>
                <div class="price">$45,000</div>
                <a href={tempURL} class="btn">
                  check out
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section>
        {/* send email request */}
        <section class="newsletter">
          <h3>subscribe for latest updates</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
          <form action="">
            <input
              type="email"
              name=""
              id="email"
              placeholder="Enter your email"
            />
            <input type="submit" name="" id="submit" class="subscribe" />
          </form>
        </section>
      </div>
    );
  }
}

export default VehicleGridContainer;
