/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'media.fortniteapi.io',
      'cdn2.unrealengine.com',
      'cdn-live.prm.ol.epicgames.com',
      'static-cdn.jtvnw.net',
    ],
  },
  i18n: {
    locales: [
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
  },
};

module.exports = nextConfig;
