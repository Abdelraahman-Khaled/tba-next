'use client';

import React, { useEffect } from 'react';
import SubHero from '../SubHero';
import { useLanguage } from '../../context/LanguageContext';

const PartnerDetailContent = ({ partner }) => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    const partnerData = {
        name: partner.name[lang] || partner.name.ar,
        title: partner.title[lang] || partner.title.ar,
        description: partner.description[lang] || partner.description.ar,
        sections: Array.isArray(partner.sections)
            ? partner.sections
            : (partner.sections[lang] || [])
    };

    useEffect(() => {
        // Reinitialize magnificPopup after component mounts
        if (typeof window === 'undefined' || !window.jQuery) return;
        const $ = window.jQuery;
        if (!$.fn.magnificPopup) return;

        // Scroll position to return to after the lightbox closes.
        let savedScrollY = 0;

        // Clean up any residual overlay and put the page back exactly where the
        // user opened the popup. Driven by our own listeners (below) rather than
        // magnificPopup's callbacks, so it runs even if the plugin's teardown
        // throws partway through — which is what was leaving the page unusable.
        const restoreScroll = () => {
            $('.mfp-bg, .mfp-wrap').remove();
            $('html, body').css({ overflow: '', 'margin-right': '' });
            window.scrollTo(0, savedScrollY);
        };

        // Restore only once the popup has actually closed (so clicking the image
        // or the gallery arrows doesn't trigger it).
        const restoreIfClosed = () => {
            window.requestAnimationFrame(() => {
                const inst = $.magnificPopup.instance;
                if (!inst || !inst.isOpen) restoreScroll();
            });
        };

        const initPopup = () => {
            $('.zoom-gallery').magnificPopup({
                delegate: 'a',
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                // Do NOT let magnificPopup lock <html> scroll. Its lock is released
                // in a teardown step that can be skipped if an earlier step throws,
                // which left the page permanently unscrollable. With this off the
                // lock is never applied; we handle scroll position ourselves.
                fixedContentPos: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                image: {
                    verticalFit: true,
                    titleSrc: function (item) {
                        return item.el.attr('title') || partnerData.name;
                    }
                },
                gallery: {
                    enabled: true
                },
                zoom: {
                    enabled: false,
                    duration: 300,
                    opener: function (element) {
                        return element.find('img');
                    }
                }
            });
        };

        // Small delay to ensure DOM is ready
        const timer = setTimeout(initPopup, 100);

        // Save on open / restore on close at the document level (capture phase),
        // independent of which init (this component vs. the global designesia.js
        // one) ends up bound to the gallery.
        const onDocClick = (e) => {
            const $t = $(e.target);
            if ($t.closest('.zoom-gallery a').length) {
                savedScrollY = window.scrollY || window.pageYOffset || 0;
                return;
            }
            const inst = $.magnificPopup.instance;
            if (inst && inst.isOpen) restoreIfClosed();
        };
        const onKeyUp = (e) => {
            if (e.key === 'Escape' || e.keyCode === 27) restoreIfClosed();
        };
        document.addEventListener('click', onDocClick, true);
        document.addEventListener('keyup', onKeyUp, true);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('click', onDocClick, true);
            document.removeEventListener('keyup', onKeyUp, true);
            // If we unmount while a popup is open, force-close and clean up so a
            // lingering overlay can't survive onto the next view.
            if ($.magnificPopup.instance && $.magnificPopup.instance.isOpen) {
                $.magnificPopup.close();
            }
            restoreScroll();
            $('.zoom-gallery').off('click.magnificPopup');
        };
    }, [partner, lang, partnerData.name]);


    return (
        <>
            {partner.video ? (
                <section id="subheader" className="jarallax text-light">
                    <video src={partner.video} autoPlay loop muted playsInline preload="auto" className="jarallax-img"></video>
                </section>
            ) : (
                <>
                    <SubHero
                        title={partnerData.name}
                        headerSubtitle={t.nav.exclusive}
                        subtitle={partnerData.name}
                        description={partnerData.name}
                        bgImage={partner.coverImage}
                    />
                </>
            )}

            <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
                <section id="section-book-form">
                    <div className="container">
                        {partner.video && (
                            <h1 className="text-center mb-5" dir={isRTL ? 'rtl' : 'ltr'}>
                                {partnerData.title}
                            </h1>
                        )}
                        <div className={`row align-items-center g-4 zoom-gallery mb-4 ${isRTL ? '' : 'flex-row'}`}>
                            <div className="col-12 col-md-4">
                                <figure className="hover-zoom position-relative overflow-hidden">
                                    <a href={partner.logo}>
                                        <span className="d-hover">
                                            <span className="d-text">
                                                <span className="d-cap">{isRTL ? 'عرض' : 'View'}</span>
                                            </span>
                                        </span>
                                        <img src={partner.logo} alt={partnerData.name} />
                                    </a>
                                </figure>
                            </div>
                            <div className="col-12 col-md-8" dir={isRTL ? 'rtl' : 'ltr'}>
                                {partnerData.sections.map((section, index) => {
                                    const sectionTitle = typeof section.title === 'object' ? section.title[lang] : section.title;
                                    const sectionContent = typeof section.content === 'object' ? section.content[lang] : section.content;

                                    return (
                                        <div key={index} className="mb-4">
                                            {sectionTitle && <h2>{sectionTitle}</h2>}
                                            {sectionContent && (
                                                <div dangerouslySetInnerHTML={{ __html: sectionContent }} />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PartnerDetailContent;
