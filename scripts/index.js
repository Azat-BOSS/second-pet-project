const buttonBurger = document.querySelector('.header__burger-menu');
const popupBurger = document.querySelector('.popup');
const closeButton = popupBurger.querySelector('.popup__close-button')
const noScroll = document.querySelector('.body')

function openPopup(popup) {
    popup.classList.add('popup_active')
}

function closePopup(popup) {
    popup.classList.remove('popup_active')
}

buttonBurger.addEventListener('click', () => {
    openPopup(popupBurger)
})

closeButton.addEventListener('click', () => {
    closePopup(popupBurger)
})

closeButton.addEventListener