'use strict';
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();

    const openPopUp = document.getElementById('open_pop_up');
    const closePopUp = document.querySelector('.pop_up_close');
    const popUp = document.querySelector('.pop_up');

    openPopUp.addEventListener('click', function (e) {
        e.preventDefault();
        popUp.classList.add('pop_up_active');
    })

    closePopUp.addEventListener('click', () => {
        popUp.classList.remove('pop_up_active');
    })


})