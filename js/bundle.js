/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/navigationOnAnchors.js":
/*!*******************************************!*\
  !*** ./js/modules/navigationOnAnchors.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigateOnAnchors() {
    const anchors = document.querySelectorAll('a[href*="#"]');

    anchors.forEach(v => {
        v.addEventListener('click', e => {
            e.preventDefault();
            const blockID = v.getAttribute('href');
            document.querySelector(`${blockID}`).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigateOnAnchors);

/***/ }),

/***/ "./js/modules/popUp.js":
/*!*****************************!*\
  !*** ./js/modules/popUp.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function activatePopUp() {
    const openPopUp = document.querySelectorAll('.order-button'),
          closePopUp = document.querySelector('.pop_up_close'),
          popUp = document.querySelector('.pop_up'),
          popUpCards = document.querySelectorAll('.pop_up__card'),
          orderButtonsCard = document.querySelectorAll('.card__button');



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



    popUpCards.forEach((card, index) => {
        card.addEventListener('mouseover', () => {
            card.classList.add('pop_up__card_active');
        });
        
        card.addEventListener('mouseout', () => {
            if (!card.activ) {
                card.classList.remove('pop_up__card_active');
            }
        });
        
        clickForChooseCard(card, index);
        
    })


    orderButtonsCard.forEach((button, i) => {
        clickForChooseCard(button, i);
    });

    function clickForChooseCard(card, index) {
        card.addEventListener('click', () => {
            popUpCards.forEach(v => {
                v.activ = false;
                v.classList.remove('pop_up__card_active')
            });
            popUpCards[index].classList.add('pop_up__card_active');
            popUpCards[index].activ = true;
        })
    };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (activatePopUp);

/***/ }),

/***/ "./js/modules/scrollToTop.js":
/*!***********************************!*\
  !*** ./js/modules/scrollToTop.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function addScrollToTopWithPG() {
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
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addScrollToTopWithPG);

/***/ }),

/***/ "./js/modules/spoiler.js":
/*!*******************************!*\
  !*** ./js/modules/spoiler.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function spoiler() {
const spoilerAll = document.querySelectorAll('.spoiler__title');
    spoilerAll.forEach((v, i) => {v.addEventListener('click', () => {
        const spoilerPlus = spoilerAll[i].querySelector('.spoiler__plus');
        if (spoilerPlus.classList.contains('spoiler__plusToCross')) {
            spoilerPlus.classList.remove('spoiler__plusToCross');
            spoilerPlus.classList.add('spoiler__crossToPlus');
        } else {
            spoilerPlus.classList.remove('spoiler__crossToPlus');
            spoilerPlus.classList.add('spoiler__plusToCross');
        }

    spoilerAll[i].querySelector('.spoiler__text').classList.toggle('spoiler__text_hide');
    
    })}) };

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spoiler);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_spoiler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/spoiler */ "./js/modules/spoiler.js");
/* harmony import */ var _modules_navigationOnAnchors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/navigationOnAnchors */ "./js/modules/navigationOnAnchors.js");
/* harmony import */ var _modules_scrollToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollToTop */ "./js/modules/scrollToTop.js");
/* harmony import */ var _modules_popUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/popUp */ "./js/modules/popUp.js");






window.addEventListener('DOMContentLoaded', () => {

    (0,_modules_spoiler__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_navigationOnAnchors__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_scrollToTop__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_popUp__WEBPACK_IMPORTED_MODULE_3__["default"])();
    

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
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map