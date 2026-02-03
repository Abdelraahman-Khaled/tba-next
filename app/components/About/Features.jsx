import React from 'react';

const Features = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    return (
        <section>
            <div className="container">
                <div className="row bb gx-5 gy-4 text-center">
                    <div className="col-lg-4">
                        <img src="/images/misc/1st-place.webp" alt={t.aboutPage.feature1.title} />
                        <div className="spacer-single"></div>
                        <h3>{t.aboutPage.feature1.title}</h3>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.aboutPage.feature1.description}
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src="/images/misc/guaranteed.webp" alt={t.aboutPage.feature2.title} />
                        <div className="spacer-single"></div>
                        <h3>{t.aboutPage.feature2.title}</h3>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.aboutPage.feature2.description}
                        </p>
                    </div>

                    <div className="col-lg-4">
                        <img src="/images/misc/expert.webp" alt={t.aboutPage.feature3.title} />
                        <div className="spacer-single"></div>
                        <h3>{t.aboutPage.feature3.title}</h3>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.aboutPage.feature3.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
