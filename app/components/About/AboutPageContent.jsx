'use client';

import React, { useEffect } from 'react';
import Introduction from './Introduction';
import Features from './Features';
import History from './History';
import CTA from '../CTA';
import Testimonials from '../Testimonials';
import SubHero from '../SubHero';
import { useLanguage } from '@/app/context/LanguageContext';

const AboutPageContent = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    useEffect(() => {
        if (t.aboutPage.seo) {
            document.title = t.aboutPage.seo.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', t.aboutPage.seo.description);
            } else {
                const meta = document.createElement('meta');
                meta.name = "description";
                meta.content = t.aboutPage.seo.description;
                document.head.appendChild(meta);
            }
        }
    }, [t, lang]);

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            <SubHero
                title={t.aboutPage.title}
                subtitle={t.aboutPage.subtitle}
                headerSubtitle={t.aboutPage.subtitle}
                bgImage="/images/bg-3.webp"
                bgImageAlt={t.aboutPage.images?.subhero}
            />
            <Introduction t={t} lang={lang} />
            <Features t={t} lang={lang} />
            <CTA t={t} lang={lang} />
            <History t={t} lang={lang} />
            <Testimonials t={t} lang={lang} />
        </div>
    );
};

export default AboutPageContent;
