import React from 'react';

const Introduction = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    return (
        <section>
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className={`col-lg-6 mb-4 mb-md-0`}>
                        <div className="row g-4">
                            <div className="col-6">
                                <img src="/images/ourvision.webp" className="img-fluid rounded-20" alt={t.aboutPage.images.vision} />
                            </div>
                            <div className="col-6">
                                <img src="/images/ourgloas.webp" className="img-fluid rounded-20" alt={t.aboutPage.images.goals} />
                            </div>
                        </div>
                    </div>
                    <div className={`col-lg-6`} dir={isRTL ? 'rtl' : 'ltr'}>
                        <h2>{t.aboutPage.introTitle}</h2>
                        <div className="spacer-half"></div>
                        <p className="lead"  dangerouslySetInnerHTML={{ __html: t.about.description }}></p>

                        <h2>{t.vision.title}</h2>
                        <p  dangerouslySetInnerHTML={{ __html: t.vision.description }}></p>

                        <h2>{t.mission.title}</h2>
                        <p  dangerouslySetInnerHTML={{ __html: t.mission.description }}></p>

                        <h2>{t.values.title}</h2>
                        <p  dangerouslySetInnerHTML={{ __html: t.values.description }}></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
