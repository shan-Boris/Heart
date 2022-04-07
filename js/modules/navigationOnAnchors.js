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

export default navigateOnAnchors;