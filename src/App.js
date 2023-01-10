import "./App.css";
import HeaderContainer from "./Components/HeaderContainer";
import HomeSection from "./Components/sections/HomeSection";
import FooterContainer from "./Components/FooterContainer";
// import "./Assests/css/swiper-bundle.min.css";
import "./Assests/css/style.css";

function App() {
  window.onscroll = () => {
    var menuBtn = document.getElementById("menu-btn");
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
  };

  window.onload = () => {
    if (window.scrollY > 0) {
      document.querySelector(".header").classList.add("active");
    } else {
      document.querySelector(".header").classList.remove("active");
    }
  };

  const handleMenuDivClick = () => {
    var menuBtn = document.getElementById("menu-btn");
    var navbar = document.querySelector(".navbar");
    menuBtn.classList.toggle("fa-times");
    navbar.classList.toggle("active");
  };
  return (
    <div>
      <HeaderContainer onclickProp={handleMenuDivClick} />
      <HomeSection />
      <FooterContainer />
    </div>
  );
}

export default App;
