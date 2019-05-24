var buy = document.querySelector(".promo__buy");
var buyCatalogVideo = document.querySelector(".catalog__video-button");
var buyCatalogCart = document.querySelectorAll(".catalog__item-cart-link");
var background = document.querySelector(".background");
var popup = document.querySelector(".popup");


buy.addEventListener("click", onPopupShow);
background.addEventListener("click", onPopupClose);
buyCatalogCart.addEventListener("click", onPopupShow);
buyCatalogVideo.addEventListener("click", onPopupShow);





function onPopupShow(evt) {
  evt.preventDefault();
  popup.classList.add("popup--show");
  background.classList.add("background--active");
  window.addEventListener("keydown", onPopupEscapePress);
}

function onPopupClose(evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  background.classList.remove("background--active");
}

function onPopupEscapePress(evt) {
  if (evt.keyCode === 27) {
    onPopupClose(evt);
    window.removeEventListener("keydown", onPopupEscapePress);
  }
}


var menuBtn = document.querySelector(".nav__toggle-button")
var menuListServ = document.querySelector(".nav__list--services");
var menuListUser = document.querySelector(".nav__list--user");

menuBtn.classList.remove("no-js");
menuBtn.addEventListener("click", menuShow);


function menuShow(evt) {
  evt.preventDefault();
  menuListServ.classList.toggle("nav__list--opened");
  menuListUser.classList.toggle("nav__list--opened");
  menuBtn.classList.toggle("nav__toggle-button--close");
}




