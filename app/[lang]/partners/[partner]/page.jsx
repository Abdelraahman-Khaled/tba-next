import { notFound } from 'next/navigation';
import { getPartner, getAllPartnerSlugs } from '../../data/partners';
import PartnerDetailContent from '../../components/Partners/PartnerDetailContent';
export async function generateStaticParams() {
    const slugs = getAllPartnerSlugs();
    const locales = ['ar', 'en'];

    return locales.flatMap((lang) =>
        slugs.map((slug) => ({
            lang,
            partner: slug,
        }))
    );
}

export async function generateMetadata({ params }) {
    const { lang, partner: partnerSlug } = await params;
    const partner = getPartner(partnerSlug);

    if (!partner) {
        return {
            title: 'Partner Not Found',
        };
    }

    const seo = partner.seo?.[lang] || {};

    return {
        title: seo.title || `TBA - ${partner.name[lang] || partner.name.ar}`,
        description: seo.description || partner.description[lang] || partner.description.ar,
    };
}

export default async function PartnerPage({ params }) {
    const { lang, partner: partnerSlug } = await params;
    const partner = getPartner(partnerSlug);

    if (!partner) {
        notFound();
    }

    return <PartnerDetailContent partner={partner} lang={lang} />;
}
