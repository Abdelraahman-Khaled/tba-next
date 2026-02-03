const API = process.env.NEXT_PUBLIC_BASE_URL;

export const getOperations = async () => {
    const res = await fetch(`${API}/operations_landing`, {
        next: { revalidate: 60 }, // or cache: 'no-store'
    });

    if (!res.ok) throw new Error('Failed to fetch blogs');
    return res.json();
};

export const getOperationDetails = async (slug) => {
    const res = await fetch(`${API}/operation_show?slug=${slug}`, {
        next: { revalidate: 60 }, // IMPORTANT
    });

    if (!res.ok) throw new Error('Failed to fetch blog');
    return res.json();
};
