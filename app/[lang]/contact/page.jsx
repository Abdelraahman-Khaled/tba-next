import React from 'react';
import { cookies } from 'next/headers';
import ContactPageContent from '../components/Contact/ContactPageContent';
import enTranslations from '../i18n/locales/en.json';
import arTranslations from '../i18n/locales/ar.json';

export async function generateMetadata() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const t = lang === 'ar' ? arTranslations : enTranslations;

    // Use contactPage seo if available, fallback to hardcoded or other
    const seo = t.contactPage?.seo || {
        title: t.contact.title,
        description: t.contact.subtitle
    };

    return {
        title: seo.title,
        description: seo.description,
    };
}

const ContactPage = () => {
    return <ContactPageContent />;
};

export default ContactPage;
