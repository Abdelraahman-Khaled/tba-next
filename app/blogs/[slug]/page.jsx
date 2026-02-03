import React from 'react';
import SubHero from '../../components/SubHero';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import arTranslations from '../../i18n/locales/ar.json';
import enTranslations from '../../i18n/locales/en.json';
import { getBlogDetails } from '../../api/blog';
import BlogDetailContent from '../../components/blogs/BlogDetailContent';

export async function generateMetadata({ params }) {
    const { slug } = await params;
    try {
        const blog = await getBlogDetails(slug);
        const cookieStore = await cookies();
        const lang = cookieStore.get('language')?.value || 'ar';
        const isRTL = lang === 'ar';

        return {
            title: isRTL ? blog.meta_title_ar : blog.meta_title_en,
            description: isRTL ? blog.meta_description_ar : blog.meta_description_en,
        };
    } catch (error) {
        return {
            title: "Blog - TBA",
        };
    }
}

const BlogDetailPage = async ({ params }) => {
    const { slug } = await params;
    const cookieStore = await cookies();
    const lang = cookieStore.get('language')?.value || 'ar';
    const t = lang === 'ar' ? arTranslations : enTranslations;
    const isRTL = lang === 'ar';

    let blog;
    try {
        blog = await getBlogDetails(slug);
    } catch (error) {
        console.error('Error fetching blog details:', error);
        notFound();
    }

    if (!blog) {
        notFound();
    }

    return (
        <BlogDetailContent blog={blog} isRTL={isRTL} slug={slug} t={t} />
    );
};

export default BlogDetailPage;


