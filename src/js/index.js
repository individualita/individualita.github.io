
import { applyRowReverseClass } from "./modules/applyrowreverseclass";
import { scrollToSection } from "./modules/scrolltosection";
import { toggleNav } from "./modules/togglenav";


document.addEventListener('DOMContentLoaded', ()=> {
    applyRowReverseClass('.projects__definition');
    scrollToSection();
    toggleNav();
});


