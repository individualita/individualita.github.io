!function(){"use strict";const e=document.querySelector(".header__button"),t=document.querySelector(".header__nav-list"),o=document.querySelectorAll(".header__nav-link");document.addEventListener("DOMContentLoaded",(()=>{!function(e){const t=document.querySelectorAll(".projects__definition");t&&t.forEach(((e,t)=>{(t+1)%2==0&&e.classList.add("row-reverse")}))}(),o.forEach((s=>{s.addEventListener("click",(s=>{s.preventDefault();const a=s.target.getAttribute("href");o.forEach((e=>{e.classList.remove("header__nav-link--active")})),s.target.classList.add("header__nav-link--active"),t.classList.contains("header__nav-list_mobile")&&e.classList.contains("header__button-active")&&(t.classList.remove("header__nav-list_mobile"),e.classList.remove("header__button-active"));const n=document.querySelector(a).offsetTop;console.log(n),window.scrollTo({top:n,behavior:"smooth"}),document.body.style.overflow=""}))})),e.addEventListener("click",(()=>{e.classList.contains("header__button-active")?(e.classList.remove("header__button-active"),t.classList.remove("header__nav-list_mobile"),document.body.style.overflow=""):(e.classList.add("header__button-active"),t.classList.add("header__nav-list_mobile"),document.body.style.overflow="hidden")}))}))}();