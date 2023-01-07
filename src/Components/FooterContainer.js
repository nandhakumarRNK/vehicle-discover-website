import React, { Component } from "react";

export class FooterContainer extends Component {
  render() {
    let tempUrl = "";
    return (
      <div>
        <section class="footer">
          <div class="boxContainer">
            <div class="box">
              <h3>Our Branches</h3>
              <a href={tempUrl}>
                <i class="fas fa-map-marker-alt"></i> India
              </a>
              {/* more branches */}
            </div>
            <div class="box">
              <h3>Quick Links</h3>
              <a href="#home">
                <i class="fas fa-arrow-right"></i> home
              </a>
              <a href="#vehicles">
                <i class="fas fa-arrow-right"></i> vehicles
              </a>
              <a href="#services">
                <i class="fas fa-arrow-right"></i> services
              </a>
              <a href="#featured">
                <i class="fas fa-arrow-right"></i> featured
              </a>
              <a href="#reviews">
                <i class="fas fa-arrow-right"></i> reviews
              </a>
              <a href="#contact">
                <i class="fas fa-arrow-right"></i> contact
              </a>
            </div>

            <div class="box">
              <h3>Quick Links</h3>
              <a href={tempUrl}>
                <i class="fas fa-phone"></i> mobile no 1
              </a>
              <a href={tempUrl}>
                <i class="fas fa-phone"></i> mobile no 2
              </a>
              <a href={tempUrl}>
                <i class="fas fa-envelope"></i> email 1
              </a>
              <a href={tempUrl}>
                <i class="fas fa-envelope"></i> email 2
              </a>
              <a href={tempUrl}>
                <i class="fas fa-map-marker-alt"></i> address
              </a>
            </div>

            <div class="box">
              <h3>Social</h3>
              <a href={tempUrl}>
                <i class="fab fa-facebook-f"></i> facebook
              </a>
              <a href={tempUrl}>
                <i class="fab fa-instagram"></i> instagram
              </a>
              <a href={tempUrl}>
                <i class="fab fa-twitter"></i> twitter
              </a>
              <a href={tempUrl}>
                <i class="fab fa-linkedin"></i> linked in
              </a>
            </div>
          </div>
          <div class="credit">&copy; CopyRights@@All rights reserved</div>
        </section>
      </div>
    );
  }
}

export default FooterContainer;
