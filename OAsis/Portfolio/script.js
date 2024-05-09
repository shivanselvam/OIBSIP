let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

// Toggle menu and navigation list on click

menu.addEventListener("click", () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
});

// Remove 'bx-x' class and close navigation list on scroll

window.addEventListener("scroll", () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
});

window.addEventListener("scroll", () => {
  // Check if the navigation list is currently open
  if (!navlist.classList.contains("open")) {
    menu.classList.remove("bx-x");
  }
});

// Sticky header on scroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 100);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};