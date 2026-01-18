import React from 'react';
import SubHero from '../components/SubHero';
import { faqs } from '../data/faqs';

const FAQsPage = () => {
    return (
        <div id="content" className="no-bottom no-top text-end" suppressHydrationWarning>
            <SubHero
                title="الأسئلة الأكثر شيوعاً"
                subtitle="الأسئلة الأكثر شيوعاً"
                bgImage="/images/faqspage.webp"
                breadcrumbs={[
                    { label: 'الأسئلة الأكثر شيوعاً' },
                    { label: 'الرئيسية', link: '/' }
                ].reverse()}
            />

            <section className="bg-coffee">
                <div className="page-faqs">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="page-faqs-category">
                                    <div className="faq-accordion page-faq-accordion" id="coffee_brewing">
                                        <div className="section-title">
                                            <h2 className="mb-5 text-center">
                                                الأسئلة الأكثر شيوعاً
                                            </h2>
                                        </div>

                                        <div className="faq-accordion" id="accordion">
                                            {faqs.map((faq, index) => (
                                                <div key={faq.id} className="accordion-item">
                                                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                        <button
                                                            className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                                                            type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target={`#collapse${faq.id}`}
                                                            aria-expanded={index === 0 ? 'true' : 'false'}
                                                            aria-controls={`collapse${faq.id}`}
                                                        >
                                                            {faq.question}
                                                        </button>
                                                    </h2>
                                                    <div
                                                        id={`collapse${faq.id}`}
                                                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                        aria-labelledby={`heading${faq.id}`}
                                                        data-bs-parent="#accordion"
                                                    >
                                                        <div className="accordion-body">
                                                            <p dir="rtl">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQsPage;
