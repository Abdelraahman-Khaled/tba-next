import React from 'react';

const BrandsSection = ({ t }) => {
    return (
        <section className="border-bottom-0 pt-0">
            <div className="container">
                <div className="row aligns-item-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="text-center">
                            <h2>{t.brands.title}</h2>
                            <p className="lead" dir='ltr'>{t.brands.subtitle}</p>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>

                <div className="logo-carousel">
                    <div className="logos">
                        <span>
                            <img src="/images/logos/brands/1.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/brands/2.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/brands/3.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/brands/4.webp" alt="Brand logo" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
