import React, { Component } from "react";

export class CarVisualizeSection extends Component {
  render() {
    return (
      <div>
        <section id="carVisualize" class="carVisualize">
          <h1 class="heading">
            <span>Car</span> visualizer
          </h1>
          <div class="boxContainer">
            <div class="row" className="margin-auto">
              <iframe title="car visualize"
                src="https://renaultespace.littleworkshop.fr/"
                width="97%"
                height="500"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CarVisualizeSection;
