import {navBtn, links, navMenu} from './domelements';



export function scrollToSection() {

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
    
            const id = e.target.getAttribute('href');

            // Удаляем активный класс у всех ссылок
            removeActiveClassFromLinks(links);

            // Добавляем активный класс только текущей ссылке
            e.target.classList.add('header__nav-link--active');

            
            //for mobile
            if (navMenu.classList.contains('header__nav-list_mobile') && navBtn.classList.contains('header__button-active')) {
                navMenu.classList.remove('header__nav-list_mobile');
                navBtn.classList.remove('header__button-active');
                
            }

            
            const section = document.querySelector(id).offsetTop;
            console.log(section);
            window.scrollTo({top: section, behavior: 'smooth'});
            document.body.style.overflow = '';
        });
    });
}



function removeActiveClassFromLinks (linkSelector) {
    linkSelector.forEach((link) => {
        link.classList.remove('header__nav-link--active');
    })
    
}