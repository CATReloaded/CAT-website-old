const videoPlayerElm = document.querySelector(".video-player");
const videoPlayerCloseElm = document.querySelector(".video-player__close");
const playVideoElm = document.querySelector(".About__main__video button");

playVideoElm.addEventListener("click", () => videoPlayerElm.classList.remove("hidden"));
videoPlayerCloseElm.addEventListener("click", () => videoPlayerElm.classList.add("hidden"));