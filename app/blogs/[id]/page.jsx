import React from 'react';
import SubHero from '../../components/SubHero';
import { blogs } from '../../data/blogs';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id.toString(),
    }));
}

const BlogDetailsPage = async ({ params }) => {
    const { id } = await params;
    const blog = blogs.find((b) => b.id.toString() === id);

    if (!blog) {
        notFound();
    }

    return (
        <div id="content" className="no-bottom no-top text-end" suppressHydrationWarning>
            <SubHero
                title="المدونة"
                subtitle={blog.title}
                bgImage={`/images/blogs/cover/${blog.image.split('/').pop()}`}
                breadcrumbs={[
                    { label: blog.title },
                    { label: 'المدونة', link: '/blogs' },
                    { label: 'الرئيسية', link: '/' }
                ]}
            />

            <section id="section-book-form">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="de-post-read">
                                <div className="post-content">
                                    <div
                                        className="post-text"
                                        dir="rtl"
                                        dangerouslySetInnerHTML={{ __html: blog.content }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailsPage;
