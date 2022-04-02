'use strict'; 

window.addEventListener('DOMContentLoaded', () => {

    const queryAll = document.querySelectorAll('.faq__query');
    queryAll.forEach((v, i) => {v.addEventListener('click', () => {
        const queryPlus = queryAll[i].querySelector('.faq__plus');
        if (queryPlus.classList.contains('faq__plusToCross')) {
            queryPlus.classList.remove('faq__plusToCross');
            queryPlus.classList.add('faq__crossToPlus');
        } else {
            queryPlus.classList.remove('faq__crossToPlus');
            queryPlus.classList.add('faq__plusToCross');
        }

        
    
    })})

})