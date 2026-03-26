import { NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const PUBLIC_PATHS = ['/images', '/css', '/fonts', '/js', '/Barcode', '/_next', '/api'];
const PUBLIC_FILES = ['/favicon.ico', '/robots.txt', '/sitemap.xml', '/sitemap.js', '/globals.css'];

export function middleware(request) {
    const { pathname } = request.nextUrl;

    // 1. Skip if it's a known public path or file
    if (
        PUBLIC_PATHS.some(path => pathname.startsWith(path)) ||
        PUBLIC_FILES.includes(pathname)
    ) {
        return NextResponse.next();
    }

    // 2. Check if the pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // 3. Get language from cookie or default to 'ar'
    const cookieLang = request.cookies.get('language')?.value || 'ar';
    
    // 4. Redirect to the localized path
    const url = request.nextUrl.clone();
    url.pathname = `/${cookieLang}${pathname === '/' ? '' : pathname}`;
    
    return NextResponse.redirect(url);
}

export const config = {
    matcher: [
        // Match all paths except those starting with api, _next/static, _next/image, or featuring a known file extension in public
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
};
