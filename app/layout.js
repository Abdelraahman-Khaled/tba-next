import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TBA",
  description: "TBA شركة متخصصة في استيراد وتوزيع المواد الغذائية الفاخرة",
};

export default function RootLayout({ children }) {
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
      <body className={`${geistSans.variable} ${geistMono.variable} dark-scheme`} suppressHydrationWarning>
        <div id="wrapper" className="position-relative">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <Header />
            {children}
          <Footer />
          <div id="preloader">
            <div className="preloader1"></div>
          </div>
        </div>
        <div className="progress-wrap">
          <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" suppressHydrationWarning />
          </svg>
          <img src="/images/arrow-right.webp" alt="قمة الماركات العربية للتجارة (TBA)" />
        </div>
        <script src="/js/plugins.js"></script>
        <script src="/js/designesia.js"></script>
        <script src="/js/swiper-bundle.min.js"></script>
        <script src="/js/custom-swiper.js"></script>
        <script src="/js/progress-wrap.js"></script>
      </body>
    </html>
  );
}
