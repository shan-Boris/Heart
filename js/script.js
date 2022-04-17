'use strict';
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();

    const openPopUp = document.querySelectorAll('.order-button');
    const closePopUp = document.querySelector('.pop_up_close');
    const popUp = document.querySelector('.pop_up');

    openPopUp.forEach(v => {
        v.addEventListener('click', function (e) {
            e.preventDefault();
            popUp.classList.add('pop_up_active');
            document.querySelector('.pop_up_container').addEventListener('click', (e) => {
                if (e.srcElement?.className == "pop_up_container") {
                    popUp.classList.remove('pop_up_active');
                }
            })
            document.addEventListener('keydown', function(e) {
                if (e.code == "Escape") {
                    popUp.classList.remove('pop_up_active');
                }
            });
        })
        closePopUp.addEventListener('click', () => {
            popUp.classList.remove('pop_up_active');
        })
        


    })
})