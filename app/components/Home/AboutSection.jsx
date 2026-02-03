import React from 'react';
import Link from 'next/link';

const AboutSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    return (
        <section id="about" className="border-bottom-0">
            <div className="container">
                <div className="row gx-5 align-items-center">
                    <div className={`col-lg-6 mb-4 mb-md-0 ${!isRTL ? 'order-lg-2' : ''}`}>
                        <div className="row g-4">
                            <div className="col-6">
                                <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/1110685156?background=1&autoplay=1&loop=1&muted=1"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                                        title="Video 01"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="col-6">
                                <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                                    <iframe
                                        src="https://player.vimeo.com/video/1110684673?background=1&autoplay=1&loop=1&muted=1"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
                                        title="Video 02"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <h1>{t.about.title}</h1>
                        <div className="spacer-half"></div>
                        <p className="lead">
                            {t.about.description}
                        </p>
                        <Link href="/about" className="btn-line">
                            {t.about.readMore}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
