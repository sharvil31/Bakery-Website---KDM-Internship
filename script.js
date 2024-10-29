
const navbarEl = document.querySelector('.header .navbar');
const menuIcon = document.querySelector('#menu-icon')
const cartEl = document.querySelector('.shopping-cart-container');
const cartIcon = document.querySelector('#cart-icon');
const closeIcon = document.querySelector('#close-icon');


menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle('fa-times');
    navbarEl.classList.toggle('active');
});

cartIcon.addEventListener("click", () => {
    cartEl.classList.add('active');
});

closeIcon.addEventListener("click", () => {
    cartEl.classList.remove('active');
});


var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});