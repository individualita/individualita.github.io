const burgerBtn = document.querySelector ('.nav__btns-hamburger ');
const navMenu = document.querySelector ('.nav__list');

burgerBtn.addEventListener("click", function(){
    burgerBtn.classList.toggle('nav__btns-hamburger-active');
    navMenu.classList.toggle('nav__list-active');
});