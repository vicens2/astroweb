import type { Locale } from './lib/localization-helpers';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];

// Re-exportar desde localization-helpers para mantener la compatibilidad
export * from './lib/localization-helpers';
