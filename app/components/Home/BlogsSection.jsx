import React from 'react';
import Link from 'next/link';

const BlogsSection = ({ t, lang }) => {
    const isRTL = lang === 'ar';
    const basePath = lang === 'en' ? '/en' : '';

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
                        {t.blogs.items.map((blog, index) => (
                            <div className="blog-item row align-items-center g-3 gx-5" key={blog.slug}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="col-lg-6">
                                            <div className="post-content">
                                                <div className="post-text">
                                                    <h3>
                                                        <Link href={`${basePath}/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                        {blog.excerpt}
                                                    </p>
                                                    <Link href={`${basePath}/${blog.slug}`} className="btn-line">
                                                        {t.about.readMore}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <img src={index === 0 ? '/images/blogs/حلويات شرقية و غربية copy.webp' : '/images/blogs/حبوب افطار copy.webp'} className="img-fluid" alt={blog.title} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-lg-6">
                                            <img src={index === 0 ? '/images/blogs/حلويات شرقية و غربية copy.webp' : '/images/blogs/حبوب افطار copy.webp'} className="img-fluid" alt={blog.title} />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="post-content">
                                                <div className="post-text">
                                                    <h3>
                                                        <Link href={`${basePath}/${blog.slug}`}>
                                                            {blog.title}
                                                        </Link>
                                                    </h3>
                                                    <p dir={isRTL ? 'rtl' : 'ltr'}>
                                                        {blog.excerpt}
                                                    </p>
                                                    <Link href={`${basePath}/${blog.slug}`} className="btn-line">
                                                        {t.about.readMore}
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogsSection;
