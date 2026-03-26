import React from 'react';
import { cookies } from 'next/headers';
import FAQsPageContent from '../components/FAQs/FAQsPageContent';
import enTranslations from '../i18n/locales/en.json';
import arTranslations from '../i18n/locales/ar.json';

export async function generateMetadata() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const t = lang === 'ar' ? arTranslations : enTranslations;

    // Use faqsPage seo if available, fallback to hardcoded or other
    const seo = t.faqsPage?.seo || {
        title: t.nav.faqs,
        description: t.nav.faqs
    };

    return {
        title: seo.title,
        description: seo.description,
    };
}

const FAQsPage = () => {
    return <FAQsPageContent />;
};

export default FAQsPage;
