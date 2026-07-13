'use client';

import React from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../../../api/blog';

const BlogsSection = ({ t, lang, initialBlogs }) => {
    const isRTL = lang === 'ar';
    const basePath = `/${lang}`;

    // initialData comes from the server render so the blog links are present
    // in the HTML for crawlers.
    const { data: blogs } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs,
        initialData: initialBlogs,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });

    // Take only the first 2 blogs for the home page
    const displayBlogs = blogs?.slice(0, 2) || [];

    if (!displayBlogs.length) return null;

    return (
        <section id="blogs">
            <div className="container">
                <div className="text-center">
                    <h2>{t.blogs.title}</h2>
                    <p className="lead" dir={isRTL ? 'rtl' : 'ltr'}>
                        {t.blogs.subtitle}
                    </p>
                    <div className="spacer-single"></div>
                </div>
                <div className="row">
                    <div className="col-lg-12 blog-list">
                        {displayBlogs.map((blog, index) => {
                            const title = isRTL ? blog.title_ar : blog.title_en;
                            const excerpt = isRTL ? blog.description_ar : blog.description_en; // Using description as excerpt for now
                            const langPhoto = blog.photos?.find(p => p.is_arabic === isRTL);
                            const imageUrl = langPhoto?.url || blog.photos?.[0]?.url || '/images/blogpage.webp';
                            const slug = isRTL ? blog.slug_ar : blog.slug;
                            const slideUrl = `${basePath}/blogs/${slug}`;

                            return (
                                <div className="blog-item row align-items-center g-3 gx-5" key={blog.slug}>
                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="col-lg-6">
                                                <div className="post-content">
                                                    <div className="post-text">
                                                        <h3>
                                                            <Link href={slideUrl}>
                                                                {title}
                                                            </Link>
                                                        </h3>
                                                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                            {excerpt}
                                                        </p>
                                                        <Link href={slideUrl} className="btn-line">
                                                            {t.about.readMore}
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <img src={imageUrl} className="img-fluid" alt={title} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-lg-6">
                                                <img src={imageUrl} className="img-fluid" alt={title} />
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="post-content">
                                                    <div className="post-text">
                                                        <h3>
                                                            <Link href={slideUrl}>
                                                                {title}
                                                            </Link>
                                                        </h3>
                                                        <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                            {excerpt}
                                                        </p>
                                                        <Link href={slideUrl} className="btn-line">
                                                            {t.about.readMore}
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
                <div className="text-center mt-5">
                    <Link href={`${basePath}/blogs`} className="btn-line">
                        {isRTL ? 'عرض كل المقالات' : 'View All Blogs'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
