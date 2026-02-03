const API = process.env.NEXT_PUBLIC_BASE_URL;

export const getBlogs = async () => {
    // Expected response: [{ id, title_ar, title_en, description_ar, description_en, category, slug, slug_ar, photos: [{ url, alt, is_arabic }] }]
    const res = await fetch(`${API}/blogs_landing`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
};

export const getBlogDetails = async (slug) => {
    // Expected response: { id, title_ar, title_en, category, slug, slug_ar, meta_description_ar, ..., photos: [], contents: [], faqs: [] }
    const res = await fetch(`${API}/blog_show?slug=${slug}`, {
        next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error('Failed to fetch blog');
    return res.json();
};
