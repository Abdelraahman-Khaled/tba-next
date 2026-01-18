import React from 'react';
import SubHero from '../components/SubHero';
import { blogs } from '../data/blogs';
import Link from 'next/link';

const BlogsPage = () => {
    return (
        <div id="content" className="no-bottom no-top text-end">
            <SubHero
                title="المدونة"
                subtitle="أحدث المقالات"
                bgImage="/images/blogpage.webp"
            />

            <section id="section-book-form" className="bg-coffee">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 blog-list">
                            {blogs.map((blog, index) => (
                                <div key={blog.id} className="blog-item row align-items-center g-3 gx-5">

                                    {index % 2 === 0 ? (
                                        <>
                                            <div className="col-md-6">
                                                <div className="post-content">
                                                    <div className="post-text">
                                                        <h3 dir="rtl">
                                                            <Link href={`/${blog.slug}.html`}>
                                                                {blog.title}
                                                            </Link>
                                                        </h3>
                                                        <p dir="rtl">
                                                            {blog.excerpt}
                                                        </p>
                                                        <Link href={`/${blog.slug}.html`} className="btn-line">
                                                            اقرأ المزيد
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img src={blog.image} className="img-fluid" alt={blog.title} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-md-6">
                                                <img src={blog.image} className="img-fluid" alt={blog.title} />
                                            </div>
                                            <div className="col-md-6">
                                                <div className="post-content">
                                                    <div className="post-text">
                                                        <h3 dir="rtl">
                                                            <Link href={`/${blog.slug}.html`}>
                                                                {blog.title}
                                                            </Link>
                                                        </h3>
                                                        <p dir="rtl">
                                                            {blog.excerpt}
                                                        </p>
                                                        <Link href={`/${blog.slug}.html`} className="btn-line">
                                                            اقرأ المزيد
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
        </div>
    );
};

export default BlogsPage;
