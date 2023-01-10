import React, { Component } from "react";
import pic1 from "../../Assests/Images/pic-1.png";
import pic2 from "../../Assests/Images/pic-2.png";
import pic3 from "../../Assests/Images/pic-3.png";
import pic4 from "../../Assests/Images/pic-4.png";
import pic6 from "../../Assests/Images/pic-6.png";

export class ClientReviewSection extends Component {
  render() {
    return (
      <div>
        <section class="reviews" id="reviews">
          <h1 class="heading">
            Clients' <span>Reviews</span>
          </h1>
          <div class="swiper reviewSlider">
            <div class="swiper-wrapper boxContainer">
              <div class="box swiper-slide">
                <img src={pic1} alt="pic1" />
                <div class="content">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ab, ipsa.
                  </p>
                  <h3>Customer 1</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box swiper-slide">
                <img src={pic2} alt="pic2" />
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Corrupti, nisi!
                  </p>
                  <h3>Customer 2</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box swiper-slide">
                <img src={pic3} alt="pic3" />
                <div class="content">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque, quae.
                  </p>
                  <h3>Customer 3</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box swiper-slide">
                <img src={pic4} alt="pic4" />
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Temporibus, nostrum!
                  </p>
                  <h3>Customer 4</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box swiper-slide">
                <img src={pic6} alt="pic5" />
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, inventore.
                  </p>
                  <h3>Customer 4</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
                </div>
              </div>
              <div class="box swiper-slide">
                <img src={pic6} alt="pic6" />
                <div class="content">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
                    saepe!
                  </p>
                  <h3>Customer 5</h3>
                  <div class="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                  </div>
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

export default ClientReviewSection;
