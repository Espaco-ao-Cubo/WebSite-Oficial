import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const activeLocale = locale || 'pt';

  return {
    locale: activeLocale,
    messages: (await import(`../data/${activeLocale}.json`)).default
  };
});
