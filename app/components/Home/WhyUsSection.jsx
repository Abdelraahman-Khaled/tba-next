import React from 'react';

const WhyUsSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';

    const features = [
        {
            icon: '/images/misc/food.webp',
            title: t.whyUs.feature1.title,
            description: t.whyUs.feature1.description
        },
        {
            icon: '/images/misc/new-product.webp',
            title: t.whyUs.feature2.title,
            description: t.whyUs.feature2.description
        },
        {
            icon: '/images/misc/customer-service.webp',
            title: t.whyUs.feature3.title,
            description: t.whyUs.feature3.description
        },
        {
            icon: '/images/misc/icon-5.webp',
            title: t.whyUs.feature4.title,
            description: t.whyUs.feature4.description
        }
    ];

    return (
        <section className="why-us">
            <div className="container">
                <div className="text-center mb-5">
                    <h2>{t.whyUs.title}</h2>
                    <div className="spacer-single"></div>
                </div>
                <div className="row bb gx-5 gy-4 text-center" >
                    {
                        (isRTL ? features : [...features].reverse()).map((feature, index) => (
                            <div className="col-lg-3" key={index}>
                                <img src={feature.icon} alt={feature.title} />
                                <div className="spacer-single"></div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUsSection;
