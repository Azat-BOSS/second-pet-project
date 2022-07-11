const buttonBurger = document.querySelector('.header__burger-menu');
const popupBurger = document.querySelector('#popupBurger');
const closeButton = popupBurger.querySelector('.popup__close-button')
const noScroll = document.querySelector('.body')

function openPopup(popup) {
    popup.classList.add('popup_active')
    noScroll.classList.add('body_active')
    closeButton.classList.add('popup__close-button_active')
}

function closePopup(popup) {
    popup.classList.remove('popup_active')
    noScroll.classList.remove('body_active')
    closeButton.classList.remove('popup__close-button_active')
}

buttonBurger.addEventListener('click', () => {
    openPopup(popupBurger)
})

closeButton.addEventListener('click', () => {
    closePopup(popupBurger)
})

/* появление слов */
const animItems = document.querySelectorAll('.anim-items')
if (animItems.length > 0) {
    window.addEventListener('scroll', animONscroll);

    function animONscroll(item) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top
            const animStart = 1.2

            let animItemPoint = window.innerHeight / animStart

            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active')

            } else {
                if (!animItem.classList.contains('anim-items_no-hide')) {
                    animItem.classList.remove('_active')
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect()
        scrollLeft = window.scrollX || document.documentElement.scrollLeft;
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(() => {
        animONscroll()
    }, 300)
}