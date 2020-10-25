const events = document.querySelectorAll(".Events__event__image-wrapper");
const eventOverlay = document.querySelector(".Event");

events.forEach((event) =>
  event.addEventListener("click", (e) => {
    var arr = get_data(e);
    overwrite_overlay_object(eventOverlay, arr);
    eventOverlay.classList.remove("hidden");
  })
);

document
  .querySelector(".Event__close")
  .addEventListener("click", () => eventOverlay.classList.add("hidden"));

function get_data(e) {
  if (e.target.localName === "img") {
    var btn = e.target.parentNode;
  } else {
    var btn = e.target;
  }
  var imgs = btn.parentNode.querySelectorAll("#eveimgs");
  var img = btn.querySelector("img").getAttribute("src");
  var title = btn.nextElementSibling.querySelector("h2").innerText;
  var description = btn.nextElementSibling
    .querySelector("p")
    .getAttribute("data-text");
  var date = btn.nextElementSibling
    .querySelector("span")
    .getAttribute("data-text");
  var link = btn.parentNode
    .querySelector("#link")
    .getAttribute("data-text");
  return [img, title, description, date, imgs, link];
}

function overwrite_overlay_object(eventOverlay, arr) {
  eventOverlay
    .querySelector("img[alt='Event main image']")
    .setAttribute("src", arr[0]);
  eventOverlay.querySelector("h2").innerText = arr[1];
  if(arr[5]=== "" || arr[5]=== null) {
    eventOverlay.querySelector("a").style.display="none";
  }else{
    l = eventOverlay.querySelector("a");
    l.setAttribute("href",arr[5]);
    l.style.display="flex";
  }
  eventOverlay.querySelector(".Event__header__desc").innerText = arr[2];
  eventOverlay.querySelector("p").innerText = arr[3];

  var imgDiv = eventOverlay.querySelector(".Event__images");
  imgDiv.innerText = "";

  arr[4].forEach((img) => {
    let div = document.createElement("div");
    div.className = "image-wrapper";
    let aTag = document.createElement("a");
    aTag.href = `/media/${img.getAttribute("data-row")}`;
    aTag.target = "_blank";
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", "/media/" + img.getAttribute("data-row"));
    aTag.appendChild(imgTag);
    div.appendChild(aTag);
    imgDiv.appendChild(div);
  });
}
