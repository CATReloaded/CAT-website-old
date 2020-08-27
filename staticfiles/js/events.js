const events = document.querySelectorAll(".Events__event__image-wrapper");
const eventOverlay = document.querySelector(".Event");

events.forEach((event) =>
  event.addEventListener("click", () => eventOverlay.classList.remove("hidden"))
);

document
  .querySelector(".Event__close")
  .addEventListener("click", () => eventOverlay.classList.add("hidden"));
