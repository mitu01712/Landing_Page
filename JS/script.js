// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.onclick = () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

// Close menu when a nav link is clicked
document.querySelectorAll(".nav-link").forEach(link =>
  link.onclick = () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
);
