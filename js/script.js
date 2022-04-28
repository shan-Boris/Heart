'use strict';
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';
import activatePopUp from './modules/popUp';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();
    activatePopUp();
    

    const inp = document.querySelector('#valid');

    function helpInputNumberPhone(input){
        const symbol = {
            4: ') ',
            7: '-',
            9: '-',
        };
        input.addEventListener('input', (e => {
            const lengthNumber = input.value?.match(/\d/g)?.length
            if (e?.data?.match(/\D/) && !e?.data?.match(/\+/) || lengthNumber > 11) {
                input.value = input.value.slice(0, -1);
            }

            if (input.value?.length == 1 && e.data != null) {
                e.data == '9' ? input.value = '+7 (9' : input.value = '+7 ('
            } else if (symbol[lengthNumber] && e.data != null){
                input.value = input.value + symbol[lengthNumber];
            }
            
    }))};

    function checkPhoneNumber(number) {
        return /^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)\d{3}[\- ]?\d{2}[\- ]?\d{2}$/.test(number);
    };

    helpInputNumberPhone(inp);
    console.log(checkPhoneNumber(inp.value)); 
})