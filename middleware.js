import { NextResponse } from "next/server";

const locales = ["ar", "en"];

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 1. تحقق إذا كان المسار يحتوي بالفعل على اللغة في بدايته
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return NextResponse.next();

  // 2. الحصول على اللغة من الكوكيز أو المتصفح، والافتراضي 'ar'
  const cookieLang = request.cookies.get("language")?.value || "ar";
  const locale = locales.includes(cookieLang) ? cookieLang : "ar";

  // 3. إعادة التوجيه مع إضافة اللغة
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    /*
     * استثناء المسارات التي لا يجب أن يطبق عليها الـ Middleware:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, images, fonts (assets)
     */
    "/((?!api|_next/static|_next/image|images|fonts|css|js|Barcode|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
