'use client';

import { useQuery } from '@tanstack/react-query';
import { getBlogDetails } from '../../../api/blog';
import SubHero from '../SubHero';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';

const BlogDetailContent = ({ blog: initialBlog, isRTL, slug, t }) => {
    const router = useRouter();
    const { data: blog } = useQuery({
        queryKey: ['blog', slug],
        queryFn: () => getBlogDetails(slug),
        initialData: initialBlog,
        refetchInterval: 5000,
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

    const imageUrl = blog.landing_photo?.[0]?.url || '/images/blogpage.webp';
    const imageAlt = isRTL ? (blog.landing_photo?.[0]?.alt_ar || title) : (blog.landing_photo?.[0]?.alt_en || title);
    console.log(blog);

    const [activeAccordion, setActiveAccordion] = useState(null);
    const isInitialized = useRef(false);

    const faqSchemaEn = blog?.faqs?.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question_en || faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer_en || faq.answer
            }
        }))
    } : null;

    const faqSchemaAr = blog?.faqs?.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": blog.faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question_ar || faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer_ar || faq.answer
            }
        }))
    } : null;

    // Set initial active accordion when blog data loads
    useEffect(() => {
        if (!isInitialized.current && blog?.faqs?.length > 0) {
            setActiveAccordion(blog.faqs[0].id);
            isInitialized.current = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [blog]);

    const toggleAccordion = (id) => {
        setActiveAccordion(prev => prev === id ? null : id);
    };

    return (
        <div id="content" className={`no-bottom no-top ${isRTL ? 'text-end' : ''}`}>
            {isRTL ? (
                faqSchemaAr && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaAr) }}
                    />
                )
            ) : (
                faqSchemaEn && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaEn) }}
                    />
                )
            )}
            <SubHero
                title={title}
                headerSubtitle={t.blogs.headerSubtitle}
                subtitle={t.nav.blogs}
                bgImage={imageUrl}
                bgImageAlt={imageAlt}
                details={{
                    label: title,
                    link: `/blogs`
                }}
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
                                        <div key={item.id} className="mb-5">
                                            <div
                                                className="post-text blog-content-rich"
                                                dir={isRTL ? 'rtl' : 'ltr'}
                                                dangerouslySetInnerHTML={{ __html: sectionContent }}
                                            />
                                            {item.photos && item.photos.length > 0 && (
                                                <div className="row g-4 mt-4 justify-content-start ">
                                                    {item.photos.map((photo) => (
                                                        <div className="col-12 col-md-6">
                                                            <div className="post-image rounded-3 overflow-hidden shadow-sm">
                                                                <img
                                                                    src={photo.url}
                                                                    alt={isRTL ? photo.alt_ar : photo.alt_en}
                                                                    className="img-fluid w-100"
                                                                    style={{
                                                                        maxHeight: '600px',
                                                                        objectFit: 'cover',
                                                                        objectPosition: 'center'
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}

                                {blog.faqs && blog.faqs.length > 0 && (
                                    <div className="mt-5 faq-section " dir={isRTL && 'rtl'}>
                                        <div className="faq-accordion" id="blog-accordion">
                                            {blog.faqs.map((faq, index) => {
                                                const question = isRTL ? (faq.question_ar || faq.question) : (faq.question_en || faq.question);
                                                const answer = isRTL ? (faq.answer_ar || faq.answer) : (faq.answer_en || faq.answer);
                                                const isOpen = activeAccordion === faq.id;

                                                return (
                                                    <div key={faq.id} className="accordion-item">
                                                        <h2 className="accordion-header" id={`heading${faq.id}`}>
                                                            <button
                                                                className={`accordion-button justify-content-between ${!isOpen ? 'collapsed' : ''} ${isRTL ? 'text-end' : 'text-start'}`}
                                                                type="button"
                                                                onClick={() => toggleAccordion(faq.id)}
                                                                aria-expanded={isOpen ? 'true' : 'false'}
                                                                aria-controls={`collapse-blog-${faq.id}`}
                                                            >
                                                                {question}
                                                            </button>
                                                        </h2>
                                                        <div
                                                            id={`collapse-blog-${faq.id}`}
                                                            className={`accordion-collapse collapse ${isOpen ? 'show' : ''}`}
                                                            aria-labelledby={`heading${faq.id}`}
                                                        >
                                                            <div className="accordion-body">
                                                                <div
                                                                    className="text-white mb-0"
                                                                    dangerouslySetInnerHTML={{ __html: answer }}
                                                                    dir={isRTL ? 'rtl' : 'ltr'}
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
