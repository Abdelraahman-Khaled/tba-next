'use client';

import React from 'react';
import SubHero from '../components/SubHero';
import Introduction from '../components/About/Introduction';
import History from '../components/About/History';
import Features from '../components/About/Features';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { useLanguage } from '../context/LanguageContext';

const AboutPage = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            <SubHero
                title={t.aboutPage.title}
                subtitle={t.aboutPage.subtitle}
                bgImage="/images/bg-3.webp"
            />
            <Introduction t={t} lang={lang} />
            <Features t={t} lang={lang} />
            <CTA t={t} lang={lang} />
            <History t={t} lang={lang} />
            <Testimonials t={t} lang={lang} />
        </div>
    );
};

export default AboutPage;
