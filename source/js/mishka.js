var buy = document.querySelector(".promo__buy");
var buyCatalogVideo = document.querySelector(".catalog__video-button");
var buyCatalogCart = document.querySelectorAll(".catalog__item-cart-link");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".popup");
var form = popup.querySelector("form");
var menu = document.querySelector(".nav");
var menuToggle = document.querySelector(".nav__toggle-button");



if (buy !== null) {
  buy.addEventListener("click", onPopupShow);
}

if (buyCatalogVideo !== null) {
  buyCatalogVideo.addEventListener("click", onPopupShow);
}

if (buyCatalogCart !== null) {
  for (var i = 0; i < buyCatalogCart.length; i++) {
    buyCatalogCart[i].addEventListener('click', onPopupShow);
  }
}

overlay.addEventListener("click", onPopupClose);
window.addEventListener("keydown", onPopupEscapePress);

function onPopupShow(evt) {
  evt.preventDefault();
  popup.classList.add("popup--show");
  overlay.classList.add("overlay--active");
}

function onPopupClose(evt) {
  evt.preventDefault();
  popup.classList.remove("popup--show");
  overlay.classList.remove("overlay--active");
}

function onPopupEscapePress(evt) {
  if (evt.keyCode === 27) {
    onPopupClose(evt);
    document.removeEventListener("keydown", onPopupEscapePress);
  }
}

menu.classList.remove("nav--no-js");
menuToggle.addEventListener("click", menuShow);

function menuShow(evt) {
  evt.preventDefault();
  menu.classList.toggle("nav--opened");
}

ymaps.ready(function () {
  var map = new ymaps.Map("map", {
    center: [59.938631, 30.323055],
    zoom: 15,
    controls: ["zoomControl","searchControl"]
  });
  pointer = new ymaps.Placemark(map.getCenter(), {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [67,100],
    iconOffset: [15,0]
  });
  map.geoObjects.add(pointer);
});
