import React from 'react';
import SubHero from '../../components/SubHero';
import { blogs } from '../../data/blogs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
}

const BlogDetailPage = ({ params }) => {
    // Remove .html extension from slug if present
    const slugParam = params.slug.replace('.html', '');
    const blog = blogs.find(b => b.slug === slugParam);

    if (!blog) {
        notFound();
    }

    return (
        <div id="content" className="no-bottom no-top text-end">
            <SubHero
                title={blog.title}
                subtitle="المدونة"
                bgImage="/images/blogpage.webp"
            />

            <section id="section-article" className="bg-coffee">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="blog-detail">
                                <img src={blog.image} className="img-fluid mb-4" alt={blog.title} />
                                <div
                                    className="blog-content"
                                    dir="rtl"
                                    dangerouslySetInnerHTML={{ __html: blog.content }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailPage;
