import React, { Component } from "react";

export class ServicesContainer extends Component {
  render() {
    let url="";
    return (
      <div>
        <section class="services" id="services">
          <h1 class="heading">
            Out <span>Services</span>
          </h1>
          <div class="boxContainer">
            <div class="box">
              <i class="fas fa-car"></i>
              <h3>Car selling</h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <a href={url} class="btn">
                read more
              </a>
            </div>

            <div class="box">
              <i class="fas fa-car-crash"></i>
              <h3>Car Insurance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum, ut?
              </p>
              <a href={url} class="btn">
                read more
              </a>
            </div>

            <div class="box">
              <i class="fas fa-car-battery"></i>
              <h3>Battery Replacement</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Labore, tenetur!
              </p>
              <a href={url} class="btn">
                read more
              </a>
            </div>

            <div class="box">
              <i class="fas fa-tools"></i>
              <h3>Parts Repairing</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
                distinctio!
              </p>
              <a href={url} class="btn">
                read more
              </a>
            </div>

            <div class="box">
              <i class="fas fa-gas-pump"></i>
              <h3>Oil Change</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
                incidunt?
              </p>
              <a href={url} class="btn">
                read more
              </a>
            </div>

            <div class="box">
              <i class="fas fa-headset"></i>
              <h3>24/7 Customer Support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, quis!
              </p>
              <a href={url} class="btn">
                read more
              </a>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ServicesContainer;
