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
  ].flatMap((route) => [
    {
      url: `${baseUrl}/ar${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${route}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: route === "" ? 0.9 : 0.7,
    },
  ]);

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
        });

        // English Entry
        blogRoutes.push({
          url: `${baseUrl}/en/blogs/${enSlug}`,
          lastModified: new Date(blog.updated_at || new Date()),
          changeFrequency: "weekly",
          priority: 0.6,
        });
      });
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  const partnerRoutes = Object.values(partners).flatMap((partner) => [
    {
      url: `${baseUrl}/ar/partners/${partner.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/partners/${partner.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);

  return [...staticRoutes, ...blogRoutes, ...partnerRoutes];
}
