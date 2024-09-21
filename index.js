const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".nav-list ul");
const menuItems = document.querySelectorAll(".nav-list ul li a");
const header = document.querySelector(".header");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 250) {
    header.style.backgroundColor = "#293230";
  } else {
    header.style.backgroundColor = "transparent";
  }
});