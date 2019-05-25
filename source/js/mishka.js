var buy = document.querySelector(".promo__buy");
var buyCatalogVideo = document.querySelector(".catalog__video-button");
var buyCatalogCart = document.querySelectorAll(".catalog__item-cart-link");
var background = document.querySelector(".background");
var popup = document.querySelector(".popup");
var form = popup.querySelector("form");

if (buy !== null) {
  buy.addEventListener("click", onPopupShow);
} if (buyCatalogVideo !== null) {
  buyCatalogVideo.addEventListener("click", onPopupShow);
} if (buyCatalogCart !== null) {
  for (var i = 0; i < buyCatalogCart.length; i++) {
    buyCatalogCart[i].addEventListener('click', onPopupShow);
  }
}

background.addEventListener("click", onPopupClose);

function onPopupShow(evt) {
  evt.preventDefault();
  popup.classList.add("popup--show");
  background.classList.add("background--active");
  window.addEventListener("keydown", onPopupEscapePress);
}

function onPopupClose(evt) {
  evt.preventDefault();
  if (!popup.contains(event.target)) {
  popup.classList.remove("popup--show");
  background.classList.remove("background--active");
  }
}

function onPopupEscapePress(evt) {
  if (evt.keyCode === 27) {
    onPopupClose(evt);
    document.removeEventListener("keydown", onPopupEscapePress);
  }
}


var menuBtn = document.querySelector(".nav__toggle-button");
var menuListServ = document.querySelector(".nav__list--services");
var menuListUser = document.querySelector(".nav__list--user");

menuBtn.classList.remove("no-js");
menuBtn.classList.add("nav__toggle-button--open");

menuListUser.classList.remove("no-js");
menuListServ.classList.remove("no-js");
menuBtn.addEventListener("click", menuShow);


function menuShow(evt) {
  evt.preventDefault();
  menuListServ.classList.toggle("nav__list--opened");
  menuListUser.classList.toggle("nav__list--opened");
  menuBtn.classList.toggle("nav__toggle-button--close");
}
