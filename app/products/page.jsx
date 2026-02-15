import React from 'react';
import { cookies } from 'next/headers';
import SubHero from '../components/SubHero';
import ProductCard from '../components/Products/ProductCard';
import { productsPageData } from '../data/products';

export async function generateMetadata() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const seo = productsPageData.seo[lang] || productsPageData.seo['ar'];

    return {
        title: seo.title,
        description: seo.description,
    };
}

const ProductsPage = async () => {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const isRTL = lang === 'ar';

    const data = productsPageData;

    return (
        <>
            <section id="subheader" className="jarallax text-light video-section" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
                <video
                    src={data.hero.video}
                    className="jarallax-img"
                    playsInline
                    autoPlay
                    muted
                    loop
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}
                ></video>
            </section>

            <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
                <section id="store" className="bg-coffee h1-product-section">
                    <div className="container">
                        <div className="text-center">
                            <h1>{data.intro.title[lang]}</h1>
                            <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                                {data.intro.description[lang]}
                            </p>
                            <div className="spacer-single"></div>
                        </div>
                        <div className="row-wahed-2" dir={isRTL ? 'rtl' : 'ltr'}>
                            {data.products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    id={`product-card-${product.id}`}
                                    image={product.image[lang]}
                                    title={null} // Products don't have titles in the design, only intro images
                                    description={product.description[lang]}
                                    buttonText={product.buttonText[lang]}
                                    alt={product.alt[lang]}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <section id="cta" aria-label="cta" className="call-to-action">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-9 mx-auto text-center">
                                <h2 dir={isRTL ? 'rtl' : 'ltr'} className="mb-4">
                                    {data.cta.title[lang]}
                                </h2>
                                <a href={data.cta.link} className="btn-line">{data.cta.button[lang]}</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-coffee">
                    <div className="container">
                        <div className="text-center">
                            <h2>{data.servicesIntro.title[lang]}</h2>
                            <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                                {data.servicesIntro.description[lang]}
                            </p>
                            <div className="spacer-single"></div>
                        </div>
                        <div className="row-wahed-2" dir={isRTL ? 'rtl' : 'ltr'}>
                            {data.services.map((service) => (
                                <ProductCard
                                    key={service.id}
                                    id={`service-card-${service.id}`}
                                    image={service.image[lang]}
                                    title={service.title[lang]}
                                    description={service.description[lang]}
                                    buttonText={service.buttonText[lang]}
                                    alt={service.title[lang]}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductsPage;
