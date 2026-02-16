import { blogs } from "./data/blogs";
import { partners } from "./data/partners";

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tba.sa";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/operations",
    "/media",
    "/partners",
    "/products",
    "/faqs",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const partnerRoutes = Object.values(partners).map((partner) => ({
    url: `${baseUrl}/partners/${partner.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...partnerRoutes];
}
