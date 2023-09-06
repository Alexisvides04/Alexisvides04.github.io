const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// about container
ScrollReveal().reveal(".gallery h2", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".gallery p", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".gallery__container", {
  ...scrollRevealOption,
  delay: 500,
});

// social container
ScrollReveal().reveal(".connect", {
  ...scrollRevealOption,
  interval: 500,
});

//hamburger animado

document.querySelector(".navbar__hamburger").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
}
