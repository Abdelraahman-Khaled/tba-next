import React from 'react';
import { notFound } from 'next/navigation';
import arTranslations from '../../i18n/locales/ar.json';
import enTranslations from '../../i18n/locales/en.json';
import { getBlogDetails } from '../../../api/blog';
import BlogDetailContent from '../../components/blogs/BlogDetailContent';

export async function generateMetadata({ params }) {
    const { slug, lang } = await params;
    const isRTL = lang === 'ar';
    const baseUrl = 'https://tba.sa';

    try {
        const blog = await getBlogDetails(slug);

        const arSlug = blog.slug_ar || blog.slug;
        const enSlug = blog.slug || blog.slug_ar;

        return {
            title: isRTL ? blog.meta_title_ar : blog.meta_title_en,
            description: isRTL ? blog.meta_description_ar : blog.meta_description_en,
            alternates: {
                canonical: `${baseUrl}/${lang}/blogs/${slug}`,
                languages: {
                    'ar': `${baseUrl}/ar/blogs/${arSlug}`,
                    'en': `${baseUrl}/en/blogs/${enSlug}`,
                    'x-default': `${baseUrl}/ar/blogs/${arSlug}`,
                },
            },
            openGraph: {
                title: isRTL ? blog.meta_title_ar : blog.meta_title_en,
                description: isRTL ? blog.meta_description_ar : blog.meta_description_en,
                url: `${baseUrl}/${lang}/blogs/${slug}`,
                type: 'article',
                images: blog.photos?.[0]?.url ? [blog.photos[0].url] : ['https://tba.sa/images/logo-2.webp'],
            },
            twitter: {
                card: 'summary_large_image',
                title: isRTL ? blog.meta_title_ar : blog.meta_title_en,
                description: isRTL ? blog.meta_description_ar : blog.meta_description_en,
                images: blog.photos?.[0]?.url ? [blog.photos[0].url] : ['https://tba.sa/images/logo-2.webp'],
            },
        };
    } catch (error) {
        return {
            title: 'Blog - TBA',
            alternates: {
                canonical: `${baseUrl}/${lang}/blogs/${slug}`,
            },
        };
    }
}


const BlogDetailPage = async ({ params }) => {
    const { slug, lang } = await params;
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
        <BlogDetailContent blog={blog} isRTL={isRTL} slug={slug} t={t} lang={lang} />
    );
};

export default BlogDetailPage;


