import React from 'react';
import Link from 'next/link';

const CTA = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    return (
        <section id="cta" aria-label="cta" className="call-to-action">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 mx-auto text-center">
                        <h2 dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.aboutPage.cta.title}
                        </h2>
                        <Link href="/contact" className="btn-line">{t.aboutPage.cta.button}</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
