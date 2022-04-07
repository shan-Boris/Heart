'use strict'; 
import spoiler from './modules/spoiler';
import navigateOnAnchors from './modules/navigationOnAnchors';
import addScrollToTopWithPG from './modules/scrollToTop';

window.addEventListener('DOMContentLoaded', () => {

    spoiler();
    navigateOnAnchors();
    addScrollToTopWithPG();

 
   

})