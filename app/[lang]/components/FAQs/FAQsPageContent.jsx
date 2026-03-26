'use client';

import React from 'react';
import SubHero from '../SubHero';
import { faqs } from '../../data/faqs';
import { useLanguage } from '../../context/LanguageContext';

const FAQsPageContent = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`} suppressHydrationWarning>
            <SubHero
                title={t.nav.faqs}
                headerSubtitle={t.nav.faqs}
                subtitle={t.nav.faqs}
                bgImage="/images/faqspage.webp"
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
                                                {t.nav.faqs}
                                            </h2>
                                        </div>

                                        <div className="faq-accordion" id="accordion">
                                            {faqs.map((faq, index) => {
                                                const question = isRTL ? faq.question : (faq.question_en || faq.question);
                                                const answer = isRTL ? faq.answer : (faq.answer_en || faq.answer);

                                                return (
                                                    <div key={faq.id} className="accordion-item">
                                                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                            <button
                                                                className={`accordion-button justify-content-between ${index !== 0 ? 'collapsed' : ''} ${isRTL ? 'text-end' : 'text-start'}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse${faq.id}`}
                                                                aria-expanded={index === 0 ? 'true' : 'false'}
                                                                aria-controls={`collapse${faq.id}`}
                                                            >
                                                                {question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse${faq.id}`}
                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                            aria-labelledby={`heading${faq.id}`}
                                                            data-bs-parent="#accordion"
                                                        >
                                                            <div className="accordion-body">
                                                                <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                                    {answer}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
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

export default FAQsPageContent;
