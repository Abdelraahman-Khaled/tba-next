import { cookies } from "next/headers";
import arTranslations from "../i18n/locales/ar.json";
import enTranslations from "../i18n/locales/en.json";

export async function generateMetadata() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const t = lang === 'ar' ? arTranslations : enTranslations;

    return {
        title: t.nav.blogs + " - TBA",
        description: t.blogs.subtitle,
    };
}

export default function BlogsLayout({ children }) {
    return <>{children}</>;
}
