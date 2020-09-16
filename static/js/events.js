const events = document.querySelectorAll(".Events__event__image-wrapper");
const eventOverlay = document.querySelector(".Event");

events.forEach((event) =>
  event.addEventListener("click", (e) => {
    var arr = get_data(e);
    overwrite_overlay_object(eventOverlay,arr)
    eventOverlay.classList.remove("hidden")
  }));

document
  .querySelector(".Event__close")
  .addEventListener("click", () => eventOverlay.classList.add("hidden"));


function get_data(e){
  if(e.target.localName==="img"){
  var btn = e.target.parentNode;
  }else {var btn = e.target;}
  console.log(e)
  var img = btn.querySelector("img").getAttribute("src");
  var title = btn.nextElementSibling.querySelector("h2").innerText;
  var description = btn.nextElementSibling.querySelector("p").getAttribute("data-text");
  var date = btn.nextElementSibling.querySelector("span").getAttribute("data-text");
  return [img,title,description,date] ;
}

function overwrite_overlay_object(eventOverlay,arr){
  eventOverlay.querySelector("img[alt='Event main image']").setAttribute("src",arr[0]);
  eventOverlay.querySelector("h2").innerText = arr[1];
  eventOverlay.querySelector(".Event__header__desc").innerText = arr[2];
  eventOverlay.querySelector("p").innerText = arr[3];
}