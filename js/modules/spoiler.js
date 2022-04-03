
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

export default spoiler;