'use client';

import React, { useState } from 'react';
import Lightbox from '../Lightbox';

const GallerySection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

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

    // Only zoomable images take part in the lightbox / navigation.
    const zoomImages = galleryImages.filter((image) => image.hasZoom);
    const lightboxImages = zoomImages.map((image) => ({
        src: image.src,
        alt: `Gallery ${image.id}`,
        title: t.gallery.title,
    }));

    const [lightboxIndex, setLightboxIndex] = useState(null);

    const openLightbox = (id) => {
        const idx = zoomImages.findIndex((image) => image.id === id);
        if (idx !== -1) setLightboxIndex(idx);
    };
    const closeLightbox = () => setLightboxIndex(null);
    const showPrev = () =>
        setLightboxIndex((i) => (i - 1 + zoomImages.length) % zoomImages.length);
    const showNext = () =>
        setLightboxIndex((i) => (i + 1) % zoomImages.length);

    return (
        <section aria-label="section">
            <div className="container">
                <div className="row aligns-item-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="text-center w-100">
                            <h2>{t.gallery.title}</h2>
                            <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                                {t.gallery.subtitle}
                            </p>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>
                <div id="gallery" className="row g-4">
                    {galleryImages.map((image) => (
                        <div className="col-lg-4 item" key={image.id}>
                            <figure className={image.hasZoom ? 'hover-zoom position-relative overflow-hidden' : 'overflow-hidden'}>
                                {image.hasZoom ? (
                                    <a
                                        href={image.src}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            openLightbox(image.id);
                                        }}
                                    >
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

            <Lightbox
                images={lightboxImages}
                index={lightboxIndex}
                onClose={closeLightbox}
                onPrev={showPrev}
                onNext={showNext}
                isRTL={isRTL}
            />
        </section>
    );
};

export default GallerySection;
