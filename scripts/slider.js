const sliderMin = document.querySelector('.slider__min')


if (window.matchMedia("(max-width: 1024px)").matches) {
    sliderMin.classList.add('swiper')
    const swiper = new Swiper(".swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


} else {
    sliderMin.classList.remove('swiper')
}