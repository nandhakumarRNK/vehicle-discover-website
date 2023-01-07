import React from "react";

class IconsContainer extends React.Component {
  render() {
    return (
      <div>
        <section class="iconsContainer">
          <div class="icons">
            <i class="fas fa-home"></i>
            <div class="content">
              <h3>260+</h3>
              <p>branches</p>
            </div>
          </div>
          <div class="icons">
            <i class="fas fa-car"></i>
            <div class="content">
              <h3>10,472+</h3>
              <p>vehicles sold</p>
            </div>
          </div>
          <div class="icons">
            <i class="fas fa-users"></i>
            <div class="content">
              <h3>9,282+</h3>
              <p>satisfied clients</p>
            </div>
          </div>
          <div class="icons">
            <i class="fas fa-car"></i>
            <div class="content">
              <h3>168+</h3>
              <p>new vehicles</p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default IconsContainer;
