import {navBtn, navMenu} from './domelements';

export function toggleNav() {
    navBtn.addEventListener('click', () => {
        if(!navBtn.classList.contains('header__button-active')) {
            navBtn.classList.add('header__button-active');
            navMenu.classList.add('header__nav-list_mobile');
        } else {
            navBtn.classList.remove('header__button-active');
            navMenu.classList.remove('header__nav-list_mobile');
        }

    });

}