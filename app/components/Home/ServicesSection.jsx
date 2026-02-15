'use client';

import React, { useEffect } from 'react';

const ServicesSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    useEffect(() => {
        // Initialize jarallax if available
        if (typeof window !== 'undefined' && window.jarallax) {
            window.jarallax(document.querySelectorAll('.jarallax'));
        }
    }, []);

    return (
        <section>
            <div className="container">
                <div className="row aligns-item-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="text-center w-100">
                            <h2>{t.services.title}</h2>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>

                <div className="row g-4 text-center">
                    <div className={`col-lg-6 ${isRTL ? '' : 'Left'}`}>
                        <div className="p-4 jarallax h-100" data-jarallax data-speed="0.1">
                            <img src="/images/misc/Gourmet Food Distribution.webp" className="jarallax-img" alt="Gourmet Food Distribution" />
                            <img src="/images/export.webp" alt="Export icon" />
                            <div className="spacer-single"></div>
                            <h3 className="text-white">{t.services.service1.title}</h3>
                            <p dir={isRTL ? 'rtl' : 'ltr'} className="text-white" dangerouslySetInnerHTML={{ __html: t.services.service1.description }}></p>
                        </div>
                    </div>

                    <div className={`col-lg-6 ${isRTL ? '' : 'Left'}`}>
                        <div className="p-4 jarallax h-100" data-jarallax data-speed="0.1">
                            <img src="/images/misc/Import and distribution of fine coffee and chocolate.webp" className="jarallax-img" alt="Coffee and Chocolate" />
                            <img src="/images/coffee-beans.webp" alt="Coffee beans icon" />
                            <div className="spacer-single"></div>
                            <h3 className="text-white">{t.services.service2.title}</h3>
                            <p dir={isRTL ? 'rtl' : 'ltr'} className="text-white" dangerouslySetInnerHTML={{ __html: t.services.service2.description }}></p>
                        </div>
                    </div>

                    <div className={`col-12 ${isRTL ? '' : 'Left'}`}>
                        <div className="p-4 jarallax h-100" data-jarallax data-speed="0.1">
                            <img src="/images/misc/Comprehensive distribution solutions.webp" className="jarallax-img" alt="Distribution Solutions" />
                            <img src="/images/integration.webp" alt="Integration icon" />
                            <div className="spacer-single"></div>
                            <h3 className="text-white">{t.services.service3.title}</h3>
                            <p dir={isRTL ? 'rtl' : 'ltr'} className="text-white" dangerouslySetInnerHTML={{ __html: t.services.service3.description }}></p>
                            <ul className={`list-unstyled text-white ${isRTL ? 'p-0' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                                {t.services.service3.points.map((point, index) => (
                                    <li key={index} dangerouslySetInnerHTML={{ __html: point }}></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
