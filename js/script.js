'use strict';
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';
import activatePopUp from './modules/popUp';
import helpInputNumberPhone from './modules/helpInputNumberPhone';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();
    activatePopUp();
    helpInputNumberPhone();

    const popUpButton = document.querySelector('.pop_up_body button'),
          inputPhone = document.querySelector('#phone');

    popUpButton.addEventListener('click', e => {
        e.preventDefault();
        if (!checkPhoneNumber(inputPhone.value)) {
            inputPhone.style.outline = '2px solid red';
        } else {
            inputPhone.style.outline = '';
        }
    })

    

    function checkPhoneNumber(number) {
        return /^((8|\+7)?[\- ]?)(\(?\d{3}\)?[\- ]?)\d{3}[\- ]?\d{2}[\- ]?\d{2}$/.test(number);
    };

})