import React from 'react';

const Introduction = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    return (
        <section>
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className={`col-lg-6 mb-4 mb-md-0 ${isRTL ? 'order-lg-2' : ''}`}>
                        <div className="row g-4">
                            <div className="col-6">
                                <img src="/images/ourvision.webp" className="img-fluid rounded-20" alt={t.vision.title} />
                            </div>
                            <div className="col-6">
                                <img src="/images/ourgloas.webp" className="img-fluid rounded-20" alt={t.mission.title} />
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6 ${isRTL ? 'text-end order-lg-1' : ''}`}>
                        <h2>{t.about.title}</h2>
                        <div className="spacer-half"></div>
                        <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.about.description}
                        </p>

                        <h2>{t.vision.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.vision.description}
                        </p>

                        <h2>{t.mission.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.mission.description}
                        </p>

                        <h2>{t.values.title}</h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.values.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
