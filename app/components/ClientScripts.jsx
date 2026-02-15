'use client';

import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function ClientScripts() {
    useEffect(() => {
        // Import Bootstrap JS
        // Bootstrap 5 does not require jQuery, so we don't need to import/assign jQuery here.
        // plugins.js already bundles jQuery and we shouldn't overwrite it to avoid breaking other plugins.
        require('bootstrap/dist/js/bootstrap.bundle.min.js');

        // Import GSAP
        const { TweenMax } = require('gsap');
        if (typeof window !== 'undefined') {
            window.TweenMax = TweenMax;
        }

        // Import Vimeo Player
        const Player = require('@vimeo/player');
        if (typeof window !== 'undefined') {
            window.Vimeo = { Player };
        }

        // Initialize Swiper for product carousel
        const productCarouselEl = document.querySelector('.product-carousel');
        if (productCarouselEl) {
            new Swiper('.product-carousel', {
                modules: [Navigation, Pagination, Autoplay],
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                slidesPerView: 1,
                spaceBetween: 15,
                grabCursor: true,
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

        // Clone slides for all logo carousels (scrolling partner logos)
        const wrappers = document.querySelectorAll('.logos-container-wrapper');
        wrappers.forEach(wrapper => {
            if (wrapper.children.length > 0 && !wrapper.dataset.cloned) {
                const slides = wrapper.innerHTML;
                wrapper.innerHTML = slides + slides + slides;
                wrapper.dataset.cloned = 'true';
            }
        });

        // CSS fallback loader
        const links = [
            "/css/style.min.css",
            "/css/coloring.min.css",
            "/css/colors/cream.min.css",
            "/css/03_custom.min.css",
        ];

        const testLink = document.querySelector('link[href="' + links[0] + '"]');
        const cssLoaded = testLink && testLink.media === 'all';

        if (!cssLoaded) {
            links.forEach(function (href) {
                const l = document.createElement('link');
                l.rel = 'stylesheet';
                l.href = href;
                document.head.appendChild(l);
            });
        }
    }, []);

    return null;
}
