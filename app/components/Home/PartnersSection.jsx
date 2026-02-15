import React from 'react';
import Link from 'next/link';

const PartnersSection = ({ t, lang }) => {
    const basePath = lang === 'en' ? '/en' : '';

    return (
        <section className="border-bottom-0">
            <div className="container">
                <div className="row aligns-item-center">
                    <div className="col-lg-6 mx-auto">
                        <div className="text-center w-100">
                            <h2>{t.partners.title}</h2>
                            <p className="lead" dir='ltr'>{t.partners.subtitle}</p>
                            <div className="spacer-single"></div>
                        </div>
                    </div>
                </div>

                <div className="logo-carousel">
                    <div className="logos">
                        <Link href={`${basePath}/partners/EL-SABOR`}>
                            <img src="/images/logos/1.webp" alt="El Sabor" />
                        </Link>
                        <Link href={`${basePath}/partners/Franui`}>
                            <img src="/images/logos/2.webp" alt="Franui" />
                        </Link>
                        <Link href={`${basePath}/partners/Legend`}>
                            <img src="/images/logos/3.webp" alt="Legend" />
                        </Link>
                        <Link href={`${basePath}/partners/littel-donkey`}>
                            <img src="/images/logos/4.webp" alt="Little Donkey" />
                        </Link>
                        <Link href={`${basePath}/partners/Marshzone`}>
                            <img src="/images/logos/5.webp" alt="Marshzone" />
                        </Link>
                        <Link href={`${basePath}/partners/Mr.Brownie`}>
                            <img src="/images/logos/6.webp" alt="Mr Brownie" />
                        </Link>
                        <Link href={`${basePath}/partners/Sweet-Pistachio`}>
                            <img src="/images/logos/7.webp" alt="Sweet Pistachio" />
                        </Link>
                        <Link href={`${basePath}/partners/Vicenzi`}>
                            <img src="/images/logos/8.webp" alt="Matilde Vicenzi" />
                        </Link>
                        <span>
                            <img src="/images/logos/10.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/11.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/12.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/13.webp" alt="Brand logo" />
                        </span>
                        <span>
                            <img src="/images/logos/14.webp" alt="Brand logo" />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
