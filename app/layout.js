import { Geist, Geist_Mono, Tajawal, Plus_Jakarta_Sans, Marcellus } from "next/font/google"; // Import fonts
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import { cookies } from "next/headers";
import Providers from "./components/QueryClientProvider";

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

export const metadata = {
  title: "TBA - Top Brands Arabian Trading",
  description: "Specialized in importing and distributing luxury food products in Saudi Arabia.",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const initialLang = cookieStore.get('language')?.value || 'ar';

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.ico" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.min.css" />
        <link rel="stylesheet" href="/css/coloring.min.css" />
        <link rel="stylesheet" href="/css/colors/cream.min.css" />
        <link rel="stylesheet" href="/css/03_custom.min.css" />
        <link rel="stylesheet" href="/css/ar-style.min.css" />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${tajawal.variable} ${plusJakartaSans.variable} ${marcellus.variable} dark-scheme vw-100`} suppressHydrationWarning>
        <LanguageProvider initialLang={initialLang}>
          <Providers>
            <div id="wrapper" className="position-relative">
              <Header />
              {children}
              <Footer />
              <div id="preloader">
                <div className="preloader1"></div>
              </div>
            </div>
          </Providers>
        </LanguageProvider>
        <script src="/js/plugins.js"></script>
        <script src="/js/designesia.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/custom-swiper.js"></script>
        <script src="/js/progress-wrap.js"></script>
      </body>
    </html>
  );
}
