var buy = document.querySelector(".promo__buy");
var background = document.querySelector(".background");

var popup = document.querySelector(".popup");

buy.addEventListener("click", onPopupShow);


function onPopupShow(evt) {
  evt.preventDefault();
  popup.classList.add("popup--show");
  background.classList.add("background--active");
  window.addEventListener("keydown", onPopupEscapePress);
}

function onPopupClose(evt) {
  evt.preventDefault();
  popup.remove("popup--show");
}

function onPopupEscapePress(evt) {
  if (evt.keyCode === 27) {
    onPopupClose(evt);
    window.removeEventListener("keydown", onPopupEscapePress);
  }
}
