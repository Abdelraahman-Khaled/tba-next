export const i18nConfig = {
  defaultLocale: 'ar',
  locales: ['ar', 'en'],
};

export function getLocale(pathname) {
  // Check if pathname starts with /en
  if (pathname.startsWith('/en')) {
    return 'en';
  }
  return 'ar';
}

export function getDirection(locale) {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
