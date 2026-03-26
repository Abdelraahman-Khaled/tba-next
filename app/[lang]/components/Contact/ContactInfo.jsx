import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const ContactInfo = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <div className={`contact-information ${isRTL ? 'text-end' : ''}`}>
            {/* Section Title Start */}
            <div className="section-title">
                <h2>{t.contact.title}</h2>
                <p dir={isRTL ? 'rtl' : 'ltr'}>
                    {t.contact.info.desc}
                </p>
            </div>
            {/* Section Title End */}

            {/* Contact Info Body Start */}
            <div className="contact-info-body">
                {/* Contact Info Box Start */}
                <div className="contact-info-box-2">
                    {/* Contact Info Item Start */}
                    <div className={`contact-info-item flex-row-reverse`}>
                        {/* Icon Box Start */}
                        <div className="icon-box" >
                            <img src="/images/icon-location-accent.svg" alt="Location" />
                        </div>
                        {/* Icon Box End */}
                        {/* Contact Item Content Start */}
                        <div className={`contact-item-content ${isRTL ? 'me-3 text-end' : 'ms-3'}`}>
                            <h3>{t.contact.info.addressTitle}</h3>
                            <p>{t.contact.info.addressContent}</p>
                        </div>
                        {/* Contact Item Content End */}
                    </div>
                    {/* Contact Info Item End */}
                </div>
                {/* Contact Info Box End */}
            </div>
            {/* Contact Info Body End */}
        </div>
    );
};

export default ContactInfo;
