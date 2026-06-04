import {
  Geist,
  Geist_Mono,
  Tajawal,
  Plus_Jakarta_Sans,
  Marcellus,
} from "next/font/google"; // Import fonts
import Script from "next/script";
import "../globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { cookies } from "next/headers";
import Providers from "./components/QueryClientProvider";
import ScrollToTop from "./components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal", // transform to variable to use in css
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const isArabic = lang === "ar";

  const metadata = {
    title: isArabic
      ? "شركة قمة الماركات العربية للتجارة tba"
      : "Tob brands Arabian trading co",
    description: isArabic
      ? "TBA شركة سعودية متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة استيراد مواد غذائية مورد مواد غذائية موزع مواد غذائية مستودع مواد غذائية شركات استيراد المواد الغذائية"
      : "TBA is a Saudi company importing premium food products from the world's finest brands. Explore luxurious global flavors and place your order now for unmatched quality!",
    keywords: "",
    authors: [{ name: "شركة قمة الماركات العربية للتجارة TBA" }],
    openGraph: {
      title: isArabic
        ? "شركة قمة الماركات العربية للتجارة TBA"
        : "Tob brands Arabian trading co",
      description: isArabic
        ? "TBA شركة سعودية متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة. استيراد مواد غذائية، مورد مواد غذائية، موزع مواد غذائية، مستودع مواد غذائية، شركات استيراد المواد الغذائية."
        : "TBA is a Saudi company importing premium food products from the world's finest brands. Explore luxurious global flavors and place your order now for unmatched quality!",
      images: ["https://tba.sa/images/logo-2.webp"],
      url: isArabic ? "https://tba.sa/ar/" : "https://tba.sa/en/",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isArabic
        ? "شركة قمة الماركات العربية للتجارة TBA"
        : "Tob brands Arabian trading co",
      description: isArabic
        ? "TBA شركة سعودية متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة. استيراد مواد غذائية، مورد مواد غذائية، موزع مواد غذائية، مستودع مواد غذائية، شركات استيراد المواد الغذائية."
        : "TBA is a Saudi company importing premium food products from the world's finest brands. Explore luxurious global flavors and place your order now for unmatched quality!",
      images: ["https://tba.sa/images/logo-2.webp"],
    },
    verification: {
      google: "7mlwCYnAm164b2DSBg2WrETdZhtbgmoOxF99RNPdN3s",
    },
  };

  return metadata;
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  const initialLang = lang || "ar";

  const isRTL = initialLang === "ar";

  return (
    <html
      lang={initialLang}
      dir={initialLang === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      style={{ overflow: "unset !important" }}
    >
      <head>
        <link rel="stylesheet" href="/css/style.min.css" />

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K6ZHJW5N');
          `}
        </Script>
        {/* End Google Tag Manager */}

        {/* <link rel="stylesheet" href="/css/ar-style.min.css" /> */}
        <link rel="stylesheet" href="/css/coloring.min.css" />
        <link rel="stylesheet" href="/css/colors/cream.min.css" />
        <link rel="stylesheet" href="/css/03_custom.min.css" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: isRTL
                ? "شركة قمة الماركات العربية للتجارة"
                : "Tob Brands Arabian Trading Co",
              alternateName: isRTL
                ? "Tob Brands Arabian Trading Co"
                : "شركة قمة الماركات العربية للتجارة",
              url: isRTL ? "https://tba.sa/ar/" : "https://tba.sa/en/",
              logo: "https://tba.sa/images/logo-2.webp",
              description: isRTL
                ? "شركة سعودية متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة من أشهر العلامات التجارية العالمية."
                : "TBA is a Saudi company importing premium food products from the world's finest brands.",
              address: {
                "@type": "PostalAddress",
                streetAddress: isRTL ? "الملك فهد" : "King Fahd",
                addressLocality: isRTL ? "الرياض" : "Riyadh",
                postalCode: "14715",
                addressCountry: "SA",
              },
              areaServed: "SA",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: isRTL ? "خدمات شركة TBA" : "TBA Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: isRTL
                        ? "استيراد وتوزيع القهوة والشوكولاتة الفاخرة"
                        : "Import and distribution of luxury coffee and chocolate",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: isRTL
                        ? "توزيع المواد الغذائية الفاخرة"
                        : "Luxury food distribution",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: isRTL
                        ? "حلول شاملة للتوزيع"
                        : "Comprehensive Distribution Solutions",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} ${plusJakartaSans.variable} ${marcellus.variable} dark-scheme vw-100 overflow-x-hidden`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6ZHJW5N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}

        <LanguageProvider initialLang={initialLang}>
          <Providers>
            <div id="wrapper" className="position-relative">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
              <Header />
              {children}
              <Footer />

              <ScrollToTop />
            </div>
          </Providers>
        </LanguageProvider>
        <Script src="/js/plugins.js" strategy="afterInteractive" />
        <Script src="/js/designesia.js" strategy="afterInteractive" />
        <Script src="/js/custom-swiper.js" strategy="afterInteractive" />

        {/* External CDN Scripts */}
        <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
