const navbarToggler = document.querySelector(".navbar-toggler");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

navbarToggler.addEventListener("click", () => {
  navLinks.forEach((link, index) => {
    link.style.transition = `opacity 0.3s ease ${index * 0.05}s`;
    link.style.opacity = link.style.opacity === "1" ? "0" : "1";
  });
});
