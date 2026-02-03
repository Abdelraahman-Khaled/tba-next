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
        refetchInterval: 10000,
    });

    useEffect(() => {
        if (!blog) return;

        const correctSlug = isRTL ? blog.slug_ar : blog.slug;
        if (correctSlug && correctSlug !== slug) {
            router.replace(`/blogs/${correctSlug}`, { scroll: false });
        }
    }, [isRTL, blog, slug, router]);

    const title = isRTL ? blog.title_ar : blog.title_en;
    const content = isRTL ? blog.contents?.[0]?.content_ar : blog.contents?.[0]?.content_en;

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
                                <div
                                    className="post-text blog-content-rich"
                                    dir={isRTL ? 'rtl' : 'ltr'}
                                    dangerouslySetInnerHTML={{ __html: content }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogDetailContent;
