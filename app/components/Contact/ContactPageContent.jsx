'use client';

import React from 'react';
import SubHero from '../SubHero';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import GoogleMap from './GoogleMap';
import { useLanguage } from '../../context/LanguageContext';

const ContactPageContent = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            <SubHero
                title={t.contact.title}
                headerSubtitle={t.contact.title}
                subtitle={t.contact.subtitle}
                bgImage="/images/contactus.webp"
            />

            <section className="bg-coffee">
                <div className="page-contact-us">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ContactForm />
                            </div>

                            <div className="col-lg-6">
                                <ContactInfo />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GoogleMap />
        </div>
    );
};

export default ContactPageContent;
