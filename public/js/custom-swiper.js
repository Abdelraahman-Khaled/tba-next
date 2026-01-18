document.addEventListener('DOMContentLoaded', function () {
    if (typeof Swiper !== 'undefined') {
        const productCarousel = new Swiper('.product-carousel', {
            loop: true,
            autoplay: true,
            slidesPerView: 1,
            spaceBetween: 15,
            grap: true,
            cursor: true,
            pagination: {
                el: '.product-carousel .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.product-carousel .swiper-button-next',
                prevEl: '.product-carousel .swiper-button-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 4,
                    spaceBetween: 30
                }
            }
        });
    }

    // Clone slides for all carousels
    const wrappers = document.querySelectorAll('.logos-container-wrapper');
    wrappers.forEach(wrapper => {
        const slides = wrapper.innerHTML;
        wrapper.innerHTML = slides + slides + slides;
    });
});
