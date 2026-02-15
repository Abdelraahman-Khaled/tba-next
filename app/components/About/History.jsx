import React from 'react';
import Link from 'next/link';

const History = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    return (
        <section className="about-us">
            <div className="container">
                <div className="row align-items-center" dir={!isRTL ? 'ltr' : ''}>
                    <div className="col-lg-6">
                        <div className={`about-us-content ${isRTL ? 'text-end' : ''}`}>
                            <div className="section-title">
                                <h2 dangerouslySetInnerHTML={{ __html: t.aboutPage.history.title }}></h2>
                            </div>

                            <div className="about-body-list">
                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <p dir={isRTL ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: t.aboutPage.history.item1 }}></p>
                                    </div>
                                </div>

                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <h3>{t.aboutPage.history.item2Title}</h3>
                                        <p dir={isRTL ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: t.aboutPage.history.item2Content }}></p>
                                    </div>
                                </div>

                                <div className="about-body-item">
                                    <div className="about-body-list-content">
                                        <h3>{t.aboutPage.history.item3Title}</h3>
                                        <p dir={isRTL ? 'rtl' : 'ltr'} dangerouslySetInnerHTML={{ __html: t.aboutPage.history.item3Content }}></p>
                                    </div>
                                </div>
                            </div>

                            <div className="about-us-footer">
                                <div className="about-btn">
                                    <Link href="/contact" className="btn-default">{t.nav.contact}</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="about-us-image">
                            <div className="about-us-img">
                                <figure className="image-anime">
                                    <img src="/images/misc/2.webp" alt={t.aboutPage.images.history} />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default History;
