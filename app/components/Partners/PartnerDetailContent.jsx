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
        sections: partner.sections
    };

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
                                return item.el.attr('title') || partnerData.name;
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
    }, [partner, lang, partnerData.name]);


    return (
        <>
            {partner.video ? (
                <section id="subheader" className="jarallax text-light">
                    <video src={partner.video} autoPlay loop muted className="jarallax-img"></video>
                </section>
            ) : (
                <>
                    <SubHero
                        title={t.nav.partners}
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
                        <div className={`row align-items-center g-4 zoom-gallery mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
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
                                {partnerData.sections.map((section, index) => (
                                    <div key={index} className="mb-4">
                                        {section.title[lang] && <h2>{section.title[lang]}</h2>}
                                        {section.content[lang] && section.content[lang].split('\n').map((para, pIdx) => (
                                            para.trim() && <p key={pIdx}>{para.trim()}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PartnerDetailContent;
