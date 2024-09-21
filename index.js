var hamBurger = document.querySelector(".hamburger-button");

var phoneMenu = document.querySelector(".list ul")

var menuitem = document.querySelectorAll(".list ul li a");

var header = document.querySelector(".head-container");
hamBurger.addEventListener("click", () => {
    hamBurger.classList.toggle("active");
    phoneMenu.classList.toggle("active");
});

menuitem.forEach((item) => {
    item.addEventListener("click", () => { 
        hamBurger.classList.toggle("active");
        phoneMenu.classList.toggle("active");
    });
});

document.addEventListener("scroll", () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 250) {
        header.style.backgroundColor = "#29393c";
    }else {
        header.style.backgroundColor = "transparent";
    }
});
