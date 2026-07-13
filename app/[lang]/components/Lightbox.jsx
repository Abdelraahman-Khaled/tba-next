'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * Self-contained image lightbox — no jQuery / magnificPopup.
 *
 * Props:
 *  - images: [{ src, alt?, title? }]
 *  - index:  currently open index, or null when closed
 *  - onClose, onPrev, onNext: handlers
 *  - isRTL:  flips arrow direction for RTL layouts
 */
const Lightbox = ({ images = [], index, onClose, onPrev, onNext, isRTL = false }) => {
    const isOpen = index !== null && index >= 0 && index < images.length;

    // Lock body scroll while open and restore the EXACT position on close.
    // Uses the position:fixed technique so the restore is fully under our control
    // (no plugin teardown that can be skipped and leave the page stuck).
    useEffect(() => {
        if (!isOpen) return;
        const scrollY = window.scrollY;
        const { body } = document;
        const prev = {
            position: body.style.position,
            top: body.style.top,
            width: body.style.width,
            overflow: body.style.overflow,
        };
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.width = '100%';
        return () => {
            body.style.position = prev.position;
            body.style.top = prev.top;
            body.style.width = prev.width;
            body.style.overflow = prev.overflow;
            // The site sets `scroll-behavior: smooth`, which would animate this
            // restore (visibly scrolling from the top back down). Force it instant.
            const html = document.documentElement;
            const prevBehavior = html.style.scrollBehavior;
            html.style.scrollBehavior = 'auto';
            window.scrollTo(0, scrollY);
            html.style.scrollBehavior = prevBehavior;
        };
    }, [isOpen]);

    // Keyboard: Esc closes, arrows navigate (direction-aware for RTL).
    useEffect(() => {
        if (!isOpen) return;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight') (isRTL ? onPrev : onNext)();
            else if (e.key === 'ArrowLeft') (isRTL ? onNext : onPrev)();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isOpen, isRTL, onClose, onPrev, onNext]);

    // Preload the adjacent images so navigation feels instant.
    useEffect(() => {
        if (!isOpen || images.length < 2) return;
        [index + 1, index - 1].forEach((i) => {
            const item = images[(i + images.length) % images.length];
            if (item) {
                const img = new window.Image();
                img.src = item.src;
            }
        });
    }, [isOpen, index, images]);

    if (!isOpen || typeof document === 'undefined') return null;

    const image = images[index];
    const hasMultiple = images.length > 1;

    return createPortal(
        <div className="tba-lb" role="dialog" aria-modal="true" onClick={onClose}>
            <button
                type="button"
                className="tba-lb__btn tba-lb__close"
                aria-label="Close"
                onClick={onClose}
            >
                &times;
            </button>

            {hasMultiple && (
                <button
                    type="button"
                    className="tba-lb__btn tba-lb__nav tba-lb__prev"
                    aria-label="Previous image"
                    onClick={(e) => {
                        e.stopPropagation();
                        onPrev();
                    }}
                >
                    {isRTL ? '›' : '‹'}
                </button>
            )}

            <figure className="tba-lb__figure" onClick={(e) => e.stopPropagation()}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="tba-lb__img" src={image.src} alt={image.alt || ''} />
                {image.title ? <figcaption className="tba-lb__caption">{image.title}</figcaption> : null}
            </figure>

            {hasMultiple && (
                <button
                    type="button"
                    className="tba-lb__btn tba-lb__nav tba-lb__next"
                    aria-label="Next image"
                    onClick={(e) => {
                        e.stopPropagation();
                        onNext();
                    }}
                >
                    {isRTL ? '‹' : '›'}
                </button>
            )}

            {hasMultiple && (
                <div className="tba-lb__counter">
                    {index + 1} / {images.length}
                </div>
            )}
        </div>,
        document.body
    );
};

export default Lightbox;
