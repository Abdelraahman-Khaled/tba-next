'use client';

import React, { useState } from 'react';
import SubHero from '../SubHero';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { getBlogs } from '../../../api/blog';

const BlogsListContent = ({ blogs: initialBlogs, t, lang }) => {
    const isRTL = lang === 'ar';
    const [visibleCount, setVisibleCount] = useState(6);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    // initialData comes from the server render, so the article links are present
    // in the HTML for crawlers; refetch keeps the list fresh on the client.
    const { data: blogs = [] } = useQuery({
        queryKey: ['blogs'],
        queryFn: getBlogs,
        initialData: initialBlogs,
        refetchInterval: 10000,
    });

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
                            {[...blogs].slice(0, visibleCount).map((blog, index) => {
                                const title = isRTL ? blog.title_ar : blog.title_en;
                                const description = isRTL ? blog.description_ar : blog.description_en;
                                const slug = isRTL ? blog.slug_ar : blog.slug;
                                // Find image based on language
                                const langPhoto = blog.photos?.find(p => p.is_arabic === isRTL);
                                const imageUrl = langPhoto?.url || blog.photos?.[0]?.url || '/images/blogpage.webp';

                                return (
                                    <div
                                        key={blog.id}
                                        className="blog-item row align-items-center g-3 gx-5"
                                        style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                                    >
                                        {((index % 2 === 0 && !isRTL) || (index % 2 !== 0 && isRTL)) ? (
                                            <>
                                                <div className="col-md-6 text-body">
                                                    <div className="post-content">
                                                        <div className="post-text">
                                                            <h3 dir={isRTL ? 'rtl' : 'ltr'}>
                                                                <Link href={`/${lang}/blogs/${slug}`}>
                                                                    {title}
                                                                </Link>
                                                            </h3>
                                                            <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                                {description}
                                                            </p>
                                                            <Link href={`/${lang}/blogs/${slug}`} className="btn-line">
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
                                                                <Link href={`/${lang}/blogs/${slug}`}>
                                                                    {title}
                                                                </Link>
                                                            </h3>
                                                            <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                                {description}
                                                            </p>
                                                            <Link href={`/${lang}/blogs/${slug}`} className="btn-line">
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
                        {visibleCount < blogs.length && (
                            <div className="col-lg-12 text-center mt-5 mb-5 load-more-container">
                                <button
                                    className="btn-line fs-6"
                                    onClick={() => {
                                        setIsLoadingMore(true);
                                        setTimeout(() => {
                                            setVisibleCount(prev => prev + 6);
                                            setIsLoadingMore(false);
                                        }, 600);
                                    }}
                                    disabled={isLoadingMore}
                                    style={{
                                        opacity: isLoadingMore ? 0.7 : 1,
                                        cursor: isLoadingMore ? 'not-allowed' : 'pointer'
                                    }}
                                >
                                    {isLoadingMore ? (
                                        <div className="spinner-border spinner-border-sm mx-2" role="status" style={{ width: '0.8rem', height: '0.8rem' }}></div>
                                    ) : null}
                                    {t.blogs.loadMore}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogsListContent;
