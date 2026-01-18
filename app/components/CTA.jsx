import React from 'react';

const CTA = () => {
    return (
        <section id="cta" aria-label="cta" className="call-to-action">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 mx-auto text-center">
                        <h2 dir="rtl">
                            نحن هنا دائمًا لتقديم الدعم والتواصل مع عملائنا. لا تتردد في التواصل معنا لأي استفسارات
                            أو طلبات خاصة.
                        </h2>
                        <a href="/contact" className="btn-line">تواصل معنا</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
