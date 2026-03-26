'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                <div className="product-carousel-wrapper">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                        }}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        key={lang} // Force re-render on language change
                        className="product-carousel"
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                    >
                        {products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <div className="product">
                                    <div className="product-thumb">
                                        <a href="https://storetba.com/" className="product-image" target="_blank" rel="noopener noreferrer">
                                            <img src={product.image} alt={isRTL ? product.altAr : product.altEn} />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="swiper-pagination d-md-none"></div>
                        <div className="swiper-button-prev d-none d-md-flex"></div>
                        <div className="swiper-button-next d-none d-md-flex"></div>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
