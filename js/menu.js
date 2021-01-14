const open = () => {
    menuBtn.removeEventListener('click', open)
    menuBtn.classList.add('opening')
    setTimeout(() => {
        menuBtn.classList.remove('opening')
        menuBtn.addEventListener('click', open)
    }, 700);
    document.querySelector('.inner_header').classList.toggle('active')
}