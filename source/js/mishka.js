var buy = document.querySelector(".promo__buy");
var popupToCart = document.querySelector(".popup--to-cart")

buy.addEventListener("click", onPopupShow);

function onPopupShow(evt) {
  evt.preventDefault();
  popupToCart.classList.add("popup--show");
  window.addEventListener("keydown", onPopupEscapePress);
}

function onPopupClose(evt) {
  evt.preventDefault();
  popupToCart.remove("popup--show");
}

function onPopupEscapePress(evt) {
  if (evt.keyCode === 27) {
    onPopupClose(evt);
    window.removeEventListener("keydown", onPopupEscapePress);
  }
}
