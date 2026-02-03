'use client';

import React, { useEffect } from 'react';

const GallerySection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    useEffect(() => {
        // Reinitialize magnificPopup after component mounts
        if (typeof window !== 'undefined' && window.jQuery) {
            const $ = window.jQuery;
            if ($.fn.magnificPopup) {
                const initPopup = () => {
                    $('.zoom-gallery').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        closeOnContentClick: false,
                        closeBtnInside: false,
                        mainClass: 'mfp-with-zoom mfp-img-mobile',
                        image: {
                            verticalFit: true,
                            titleSrc: function (item) {
                                return item.el.attr('title') || t.gallery.title;
                            }
                        },
                        gallery: {
                            enabled: true
                        },
                        zoom: {
                            enabled: true,
                            duration: 300,
                            opener: function (element) {
                                return element.find('img');
                            }
                        }
                    });
                };

                // Small delay to ensure DOM is ready
                const timer = setTimeout(initPopup, 100);
                return () => clearTimeout(timer);
            }
        }
    }, [lang]);

    const galleryImages = [
        { id: 1, src: '/images/misc/gallery-1.webp', hasZoom: true },
        { id: 2, src: '/images/misc/gallery-2.webp', hasZoom: true },
        { id: 3, src: '/images/misc/gallery-3.webp', hasZoom: true },
        { id: 4, src: '/images/misc/gallery-4.webp', hasZoom: true },
        { id: 9, src: '/images/misc/gallery-9.webp', hasZoom: false },
        { id: 5, src: '/images/misc/gallery-5.webp', hasZoom: true },
        { id: 6, src: '/images/misc/gallery-6.webp', hasZoom: true },
        { id: 7, src: '/images/misc/gallery-7.webp', hasZoom: true },
        { id: 8, src: '/images/misc/gallery-8.webp', hasZoom: true },
    ];


    return (
        <section aria-label="section">
            <div className="container">
                <div className="row aligns-item-center">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="text-center">
                            <h2>{t.gallery.title}</h2>
                            <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                                {t.gallery.subtitle}
                            </p>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>
                <div id="gallery" className="row g-4 zoom-gallery">
                    {galleryImages.map((image) => (
                        <div className="col-lg-4 item" key={image.id}>
                            <figure className={image.hasZoom ? 'hover-zoom position-relative overflow-hidden' : 'overflow-hidden'}>
                                {image.hasZoom ? (
                                    <a href={image.src}>
                                        <span className="d-hover">
                                            <span className="d-text">
                                                <span className="d-cap">{t.gallery.view}</span>
                                            </span>
                                        </span>
                                        <img src={image.src} alt={`Gallery ${image.id}`} />
                                    </a>
                                ) : (
                                    <img src={image.src} alt={`Gallery ${image.id}`} />
                                )}
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
