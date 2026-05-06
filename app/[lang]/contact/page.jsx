import React from 'react';
import ContactPageContent from '../components/Contact/ContactPageContent';
import enTranslations from '../i18n/locales/en.json';
import arTranslations from '../i18n/locales/ar.json';

export async function generateMetadata({ params }) {
    const { lang } = await params;
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

const ContactPage = async ({ params }) => {
    return <ContactPageContent />;
};

export default ContactPage;
