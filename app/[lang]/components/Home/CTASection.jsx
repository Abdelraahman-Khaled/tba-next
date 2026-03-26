import React from 'react';

const CTASection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    return (
        <section id="cta" aria-label="cta" className="call-to-action">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-11 mx-auto text-center">
                        <h2 dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.cta.title}
                        </h2>
                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                            {t.cta.description}
                        </p>
                        <a href="https://storetba.com/" target="_blank" className="btn-line" rel="noopener noreferrer">
                            {t.cta.button}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
