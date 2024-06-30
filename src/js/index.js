
import { applyReverseClass } from "./modules/applyrowreverseclass";
import { scrollToSection } from "./modules/scrolltosection";
import { toggleNav } from "./modules/togglenav";


document.addEventListener('DOMContentLoaded', ()=> {
    applyReverseClass('.projects__definition', 'row-reverse');
    applyReverseClass('.projects__info', 'flex-end');
    scrollToSection();
    toggleNav();
});


