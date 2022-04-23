'use strict';
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();

    const openPopUp = document.querySelectorAll('.order-button'),
          closePopUp = document.querySelector('.pop_up_close'),
          popUp = document.querySelector('.pop_up'),
          popUpCards = document.querySelectorAll('.pop_up__card');


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



    popUpCards.forEach(v => {
        v.addEventListener('mouseover', () => {
            v.classList.add('pop_up__card_active');
        });
        
        v.addEventListener('mouseout', () => {
            if (!v.activ) {
                v.classList.remove('pop_up__card_active');
            }
        });
        
        v.addEventListener('click', () => {
            popUpCards.forEach(v => {
                v.activ = false;
                v.classList.remove('pop_up__card_active')
            });
            v.classList.add('pop_up__card_active');
            v.activ = true;
            console.dir(v);
        });
        
    })
})