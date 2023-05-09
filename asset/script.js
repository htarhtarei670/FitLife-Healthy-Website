window.addEventListener('scroll', () => {
    navbar = document.querySelector('nav');
    backTopBtn = document.querySelector('.back-up-btn');

    navbar.classList.toggle('scroll', window.scrollY > 100);

    if (window.scrollY >= 100) {
        backTopBtn.classList.add("active");
    } else {
        backTopBtn.classList.remove("active");
    }
});



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabcursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});