const btnNav = document.querySelector(".Navbar__hamburger-menu");
const navItems = document.querySelector("nav > ul");
const contactMenuBtn = document.querySelector(".contact");

window.addEventListener("click", () => {
  contactMenuBtn.nextElementSibling.classList.remove("active");
  btnNav.classList.remove("active");
  navItems.classList.remove("active");
});

btnNav.addEventListener("click", (e) => {
  e.stopPropagation();
  btnNav.classList.toggle("active");
  navItems.classList.toggle("active");
});

contactMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  contactMenuBtn.nextElementSibling.classList.toggle("active");
});
