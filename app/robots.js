export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/cdn-cgi/",
    },
    sitemap: "https://tba.sa/sitemap.xml",
  };
}
