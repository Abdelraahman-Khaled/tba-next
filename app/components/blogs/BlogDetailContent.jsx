'use client';

import { useQuery } from '@tanstack/react-query';
import { getBlogDetails } from '../../api/blog';
import SubHero from '../SubHero';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const BlogDetailContent = ({ blog: initialBlog, isRTL, slug, t }) => {
    const router = useRouter();
    const { data: blog } = useQuery({
        queryKey: ['blog', slug],
        queryFn: () => getBlogDetails(slug),
        initialData: initialBlog,
        refetchInterval: 1000,
    });

    useEffect(() => {
        if (!blog) return;

        const correctSlug = isRTL ? blog.slug_ar : blog.slug;
        if (correctSlug && correctSlug !== slug) {
            router.replace(`/blogs/${correctSlug}`, { scroll: false });
        }
    }, [isRTL, blog, slug, router]);

    const title = isRTL ? blog.title_ar : blog.title_en;

    // Find image based on language
    const langPhoto = blog.photos?.find(p => p.is_arabic === isRTL);
    const imageUrl = langPhoto?.url || blog.photos?.[0]?.url || '/images/blogpage.webp';

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            <SubHero
                title={title}
                subtitle={t.nav.blogs}
                bgImage={imageUrl}
            />

            <section id="section-article" className="bg-coffee">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-12 mx-auto">
                            <div className="post-content">
                                {blog.contents?.map((item) => {
                                    if (!item.is_published) return null;
                                    const sectionContent = isRTL ? item.content_ar : item.content_en;
                                    return (
                                        <div
                                            key={item.id}
                                            className="post-text blog-content-rich mb-5"
                                            dir={isRTL ? 'rtl' : 'ltr'}
                                            dangerouslySetInnerHTML={{ __html: sectionContent }}
                                        />
                                    );
                                })}

                                {blog.faqs && blog.faqs.length > 0 && (
                                    <div className="mt-5 faq-section ">
                                        <div className="faq-accordion" id="blog-accordion">
                                            {blog.faqs.map((faq, index) => {
                                                const question = isRTL ? (faq.question_ar || faq.question) : (faq.question_en || faq.question);
                                                const answer = isRTL ? (faq.answer_ar || faq.answer) : (faq.answer_en || faq.answer);

                                                return (
                                                    <div key={faq.id} className="accordion-item">
                                                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                            <button
                                                                className={`accordion-button ${index !== 0 ? 'collapsed' : ''} ${isRTL ? 'text-end' : 'text-start'}`}
                                                                type="button"
                                                                data-bs-toggle="collapse"
                                                                data-bs-target={`#collapse-blog-${faq.id}`}
                                                                aria-expanded={index === 0 ? 'true' : 'false'}
                                                                aria-controls={`collapse-blog-${faq.id}`}
                                                            >
                                                                {question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse-blog-${faq.id}`}
                                                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                                                            aria-labelledby={`heading${faq.id}`}
                                                            data-bs-parent="#blog-accordion"
                                                        >
                                                            <div className="accordion-body">
                                                                <div
                                                                    dir={isRTL ? 'rtl' : 'ltr'}
                                                                    className="text-white mb-0"
                                                                    dangerouslySetInnerHTML={{ __html: answer }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailContent;
