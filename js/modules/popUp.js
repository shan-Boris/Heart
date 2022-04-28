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

export default activatePopUp;