'use client';

import React from 'react';
import SubHero from '../components/SubHero';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../api/blog';

const BlogsPage = () => {
    const { t, lang } = useLanguage();
    const isRTL = lang === 'ar';

    const { data: blogs, isLoading, error } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs,
        refetchInterval: 10000,
    });

    if (isLoading) {
        return (
            <div id="content" className="no-bottom no-top">
                <SubHero title={t.blogs.title}
                    headerSubtitle={t.blogs.headerSubtitle}
                    subtitle={t.nav.blogs}
                    bgImage="/images/blogpage.webp" />
                <section className="bg-coffee">
                    <div className="container text-center py-5">
                        <div className="spinner-border text-light" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    if (error) {
        return (
            <div id="content" className="no-bottom no-top">
                <SubHero title={t.blogs.title}
                    headerSubtitle={t.blogs.headerSubtitle}
                    subtitle={t.nav.blogs}
                    bgImage="/images/blogpage.webp" />
                <section className="bg-coffee">
                    <div className="container text-center py-5">
                        <h3 className="text-light">Error loading blogs. Please try again later.</h3>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            <SubHero
                title={t.blogs.title}
                headerSubtitle={t.blogs.headerSubtitle}
                subtitle={t.nav.blogs}
                bgImage="/images/blogpage.webp"
            />

            <section id="section-book-form" className="bg-coffee">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 blog-list">
                            {[...blogs].reverse()?.map((blog, index) => {
                                const title = isRTL ? blog.title_ar : blog.title_en;
                                const description = isRTL ? blog.description_ar : blog.description_en;

                                // Find image based on language
                                const langPhoto = blog.photos?.find(p => p.is_arabic === isRTL);
                                const imageUrl = langPhoto?.url || blog.photos?.[0]?.url || '/images/blogpage.webp';

                                return (
                                    <div key={blog.id} className="blog-item row align-items-center g-3 gx-5">
                                        {((index % 2 === 0 && !isRTL) || (index % 2 !== 0 && isRTL)) ? (
                                            <>
                                                <div className="col-md-6 text-body">
                                                    <div className="post-content">
                                                        <div className="post-text">
                                                            <h3 dir={isRTL ? 'rtl' : 'ltr'}>
                                                                <Link href={`/blogs/${blog.slug}`}>
                                                                    {title}
                                                                </Link>
                                                            </h3>
                                                            <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                                {description}
                                                            </p>
                                                            <Link href={`/blogs/${blog.slug}`} className="btn-line">
                                                                {t.blogs.readMore}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <img src={imageUrl} className="img-fluid" alt={title} />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="col-md-6">
                                                    <img src={imageUrl} className="img-fluid" alt={title} />
                                                </div>
                                                <div className="col-md-6 text-body">
                                                    <div className="post-content">
                                                        <div className="post-text">
                                                            <h3 dir={isRTL ? 'rtl' : 'ltr'}>
                                                                <Link href={`/blogs/${blog.slug}`}>
                                                                    {title}
                                                                </Link>
                                                            </h3>
                                                            <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                                {description}
                                                            </p>
                                                            <Link href={`/blogs/${blog.slug}`} className="btn-line">
                                                                {t.blogs.readMore}
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsPage;

