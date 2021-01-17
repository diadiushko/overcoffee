const menuBtb = document.querySelector('#menu_button')
const menu = document.querySelector('nav')
const arrowButton = document.querySelector('nav button')

const arrowMenuListener = () => {
    menuBtb.classList.remove('hidden')
    menu.classList.remove('active')
    menuBtb.addEventListener('click', menuBtnListener)
    arrowButton.removeEventListener('click', arrowMenuListener)
}

const menuBtnListener = () => {
    menuBtb.removeEventListener('click', menuBtnListener)
    menuBtb.classList.add('hidden')
    menu.classList.add('active')
    arrowButton.addEventListener('click', arrowMenuListener)
}