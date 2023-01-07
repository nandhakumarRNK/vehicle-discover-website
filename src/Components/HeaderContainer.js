import React from "react";
import LoginContainer from "./LoginContainer";

class HeaderContainer extends React.Component {
  render() {
    let url = "";

    const handleLoginClick = () => {
      document.querySelector(".loginContainer").classList.toggle("active");
    };

    return (
      <div className="topnav">
        <header class="header">
          <div
            id="menu-btn"
            class="fas fa-bars"
            onClick={this.props.onclickProp}
          ></div>
          <a href={url} class="logo">
            <span>LO</span>
            <span>GO</span>
          </a>
          <nav class="navbar">
            <a href="#home">Home</a>
            <a href="#vehicles">Vehicles</a>
            <a href="#services">Services</a>
            <a href="#featured">Featured</a>
            <a href="#carVisualize">3D Car</a>
            <a href="#reviews">Reviews</a>
            <a href="#contact">Contact</a>
          </nav>
          <div id="login-btn" onClick={handleLoginClick}>
            <button className="btn" onClick={handleLoginClick}>
              Login
            </button>
            <i class="far fa-user" onClick={handleLoginClick}></i>
          </div>
        </header>
        <LoginContainer />
      </div>
    );
  }
}

export default HeaderContainer;
