'use client';

import React, { useEffect } from 'react';

const ProductsSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    const products = [
        { id: 1, image: '/images/products/1.webp', altAr: 'شركاء توزيع أغذية', altEn: 'Coffee' },
        { id: 6, image: '/images/products/6.webp', altAr: 'قهوة فاخرة مستوردة', altEn: 'Coffee' },
        { id: 3, image: '/images/products/3.webp', altAr: 'شوكولاتة فاخرة مستوردة', altEn: 'Coffee' },
        { id: 2, image: '/images/products/2.webp', altAr: 'بسكويت مستورد', altEn: 'Coffee' },
        { id: 4, image: '/images/products/4.webp', altAr: 'استيراد منتجات غذائية', altEn: 'Coffee' },
        { id: 5, image: '/images/products/5.webp', altAr: 'موزع أغذية بالرياض', altEn: 'Coffee' },
    ];

    useEffect(() => {
        // Small delay to ensure DOM elements are fully rendered
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && window.Swiper) {
                const swiper = new window.Swiper('.product-carousel', {
                    slidesPerView: 1,
                    spaceBetween: 30,
                    loop: true,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false,
                    },
                    pagination: {
                        el: '.product-carousel .swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.product-carousel .swiper-button-next',
                        prevEl: '.product-carousel .swiper-button-prev',
                    },
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    },
                });

                return () => {
                    if (swiper) swiper.destroy(true, true);
                };
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="store" className="h1-product-section border-bottom-0">
            <div className="container">
                <div className="text-center">
                    <h2>{t.products.title}</h2>
                    <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                        {t.products.subtitle}
                    </p>
                    <div className="spacer-single"></div>
                </div>
                <div className="product-carousel swiper">
                    <div className="swiper-wrapper">
                        {products.map((product) => (
                            <div className="swiper-slide" key={product.id}>
                                <div className="product">
                                    <div className="product-thumb">
                                        <a href="https://storetba.com/" className="product-image" target="_blank" rel="noopener noreferrer">
                                            <img src={product.image} alt={isRTL ? product.altAr : product.altEn} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination d-md-none"></div>
                    <div className="swiper-button-prev d-none d-md-flex"></div>
                    <div className="swiper-button-next d-none d-md-flex"></div>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
