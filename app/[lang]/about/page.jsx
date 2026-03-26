import { cookies } from 'next/headers';
import AboutPageContent from '../components/About/AboutPageContent';

export async function generateMetadata() {
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const isArabic = lang === 'ar';

    return {
        title: isArabic ? "TBA - من نحن" : "TBA - About us",
        description: isArabic
            ? "TBA شركة متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة في السعودية نوفر منتجات مستوردة من أشهر العلامات التجارية العالمية خدمات التوزيع لبائعي التجزئة والمحال بكفاءة وسرعة تلبية الطلبات الخاصة"
            : "Wholesale food, import food, food distribution, food supplier, food distributor TBA is a Saudi company specialized in importing and distributing luxury food products and supplying and distributing and delivering food products",
    };
}

const AboutPage = () => {
    return <AboutPageContent />;
};

export default AboutPage;
