const btnNav = document.querySelector(".Navbar__hamburger-menu");
const navItems = document.querySelector("nav > ul");

window.addEventListener("click", () => {
  btnNav.classList.remove("active");
  navItems.classList.remove("active");
});

btnNav.addEventListener("click", (e) => {
  e.stopPropagation();
  btnNav.classList.toggle("active");
  navItems.classList.toggle("active");
});
