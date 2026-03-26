import { partners } from "./[lang]/data/partners";
import { getBlogs } from "./api/blog";

export default async function sitemap() {
  const baseUrl = "https://tba.sa";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/operations",
    "/media",
    "/partners",
    "/products",
    "/faqs",
    "/blogs",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = [];
  try {
    const blogs = await getBlogs();
    if (Array.isArray(blogs)) {
      blogs.forEach((blog) => {
        const arSlug = blog.slug_ar || blog.slug;
        const enSlug = blog.slug || blog.slug_ar;

        // Arabic Entry
        blogRoutes.push({
          url: `${baseUrl}/ar/blogs/${arSlug}`,
          lastModified: new Date(blog.updated_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: {
            languages: {
              ar: `${baseUrl}/ar/blogs/${arSlug}`,
              en: `${baseUrl}/en/blogs/${enSlug}`,
            },
          },
        });

        // English Entry
        blogRoutes.push({
          url: `${baseUrl}/en/blogs/${enSlug}`,
          lastModified: new Date(blog.updated_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
          alternates: {
            languages: {
              ar: `${baseUrl}/ar/blogs/${arSlug}`,
              en: `${baseUrl}/en/blogs/${enSlug}`,
            },
          },
        });
      });
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  const partnerRoutes = Object.values(partners).map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...partnerRoutes];
}
