"use client"
import React from 'react';

const GlobalPartnerships = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    // Partner logos for high tier
    const highTierLogos = [9, 10, 13, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];

    // Partner logos for medium tier
    const medTierLogos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

    return (
        <section className="p-0 m-0">
            <div className="row aligns-item-center">
                <div className="col-lg-6 offset-lg-3">
                    <div className="text-center">
                        <h2>{t.globalPartnerships.title}</h2>
                        <p className="lead" dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
                            {t.globalPartnerships.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* High Tier Partners Slider */}
            <div className="how-work-company-slider">
                <div className="logos-container">
                    <div className="logos-container-wrapper">
                        {highTierLogos.map((num) => (
                            <div className="slide" key={`high-${num}`}>
                                <div className="company-logo">
                                    <img src={`/images/logos/partners/High/${num}.webp`} alt="Partner logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Medium Tier Partners Slider */}
            <div className="how-work-company-slider" dir="ltr" suppressHydrationWarning>
                <div className="logos-container">
                    <div className="logos-container-wrapper">
                        {medTierLogos.map((num) => (
                            <div className="slide" key={`med-${num}`}>
                                <div className="company-logo">
                                    <img src={`/images/logos/partners/Med/${num}.webp`} alt="Partner logo" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GlobalPartnerships;
