'use strict'; 
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    

    // scrollToTop and progressBar
    const offset = 200, // height for emersion 
          scrollUp = document.querySelector('.scroll-up'),
          scrollUpSvgPath = document.querySelector('.scroll-up__svg-path'),
          pathLength = scrollUpSvgPath.getTotalLength(),
          heightDoc = document.documentElement.scrollHeight - window.innerHeight;

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

    function updateProgressBar() {
        const passedPath = window.scrollY * pathLength / heightDoc;
        scrollUpSvgPath.style.strokeDashoffset = pathLength - passedPath;
    }
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > offset) {
            scrollUp.classList.add('scroll-up_activ');
            updateProgressBar();
        } else {
            scrollUp.classList.remove('scroll-up_activ');
        }
    })

})