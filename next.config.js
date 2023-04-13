/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales : [
      'en',
      'ar',
      'de',
      'es',
      'es-419',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt-BR',
      'ru',
      'tr',
      'zh-CN',
      'zh-Hant',
    ],
    defaultLocale: 'en',
    localeDetection: true,
  }
}

module.exports = nextConfig