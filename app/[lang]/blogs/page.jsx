import React from 'react';
import arTranslations from '../i18n/locales/ar.json';
import enTranslations from '../i18n/locales/en.json';
import { getBlogs } from '../../api/blog';
import BlogsListContent from '../components/blogs/BlogsListContent';

export async function generateMetadata({ params }) {
    const { lang } = await params;
    const t = lang === 'ar' ? arTranslations : enTranslations;
    const seo = t.blogsPage?.seo || {
        title: t.nav.blogs,
        description: t.nav.blogs
    };

    return {
        title: seo.title,
        description: seo.description,
    };
}

const BlogsPage = async ({ params }) => {
    const { lang } = await params;
    const t = lang === 'ar' ? arTranslations : enTranslations;

    let blogs = [];
    try {
        blogs = await getBlogs();
    } catch (error) {
        console.error('Error fetching blogs:', error);
    }

    return <BlogsListContent blogs={blogs} t={t} lang={lang} />;
};

export default BlogsPage;
