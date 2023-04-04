const hamburger = document.querySelector(".menu-icon");
const close = document.querySelector(".close");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const navLinks = document.querySelectorAll(".menu a");

// Open side-menu when the hamburger icon is clicked
hamburger.addEventListener("click", function() {
    const div = document.createElement("div");
    body.prepend(div);
    div.classList.add("darken");
    menu.classList.add("show");
});

// Close side-menu when the close icon (X) is clicked
close.addEventListener("click", function() {
    const overlay = document.querySelector(".darken");
    overlay.classList.remove("darken");
    menu.classList.remove("show");
});

//  Close side-menu when a link is clicked
navLinks.forEach(function(elem) {
    elem.addEventListener("click", function() {
        const overlay = document.querySelector(".darken");
        overlay.classList.remove("darken");
        menu.classList.remove("show");
    });
});