import Swiper from "swiper";

const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector(".navbar");

document.querySelector("#login-btn").onclick = () => {
  document.querySelector(".loginContainer").classList.toggle("active");
};

document.querySelector("#closeLogin").onclick = () => {
  document.querySelector(".loginContainer").classList.remove("active");
};

menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

window.onscroll = () => {
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


var swiper = new Swiper(".vehicleSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoPlay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featuredSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoPlay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviewSlider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoPlay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1080: {
      slidesPerView: 3,
    },
  },
});
