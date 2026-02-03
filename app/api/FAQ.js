const API = process.env.NEXT_PUBLIC_BASE_URL;

/**
 * Fetch all faqs from the backend API.
 * @returns {Promise<Array>} List of faqs.
 */

export const getFaqs = async () => {
    const res = await fetch(`${API}/faq_about_us`, {
        next: { revalidate: 60 }, // or cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch faqs');
    return res.json();
};