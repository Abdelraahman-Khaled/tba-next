import { notFound } from 'next/navigation';
import { getPartner, getAllPartnerSlugs } from '../../data/partners';
import PartnerDetailContent from '../../components/Partners/PartnerDetailContent';
import { cookies } from 'next/headers';

export async function generateStaticParams() {
    const slugs = getAllPartnerSlugs();
    return slugs.map((slug) => ({
        partner: slug,
    }));
}

export async function generateMetadata({ params }) {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const resolvedParams = await params;
    const partner = getPartner(resolvedParams.partner);

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
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';

    const resolvedParams = await params;
    const partner = getPartner(resolvedParams.partner);

    if (!partner) {
        notFound();
    }

    return <PartnerDetailContent partner={partner} lang={lang} />;
}
