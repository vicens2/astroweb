import type { CollectionEntry } from 'astro:content';

export type Locale = 'en' | 'es';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'es'];

export function getLocalizedSettings(locale: Locale) {
  // Configuración básica del encabezado y contacto
  const settings = {
    header: {
      logo: {
        imagePath: "/images/logo.svg",
        alt: "Logo",
        width: 120,
        height: 40
      },
      navItems: [
        { label: "Inicio", url: "/" },
        { label: "Servicios", url: "/#servicios" },
        { label: "Nosotros", url: "/#smooth-wrapper" },
        { label: "Catálogo", url: "/catalog/" },
        { label: "Galería", url: "/#projects" },
        { label: "Contacto", url: "/#contact" }
      ]
    },
    contacts: {
      phone: "+1 234 567 890",
      email: "info@example.com",
      address: "123 Main St, City, Country"
    }
  };

  // Aquí podrías añadir lógica específica por idioma si es necesario
  if (locale === 'es') {
    settings.header.navItems = [
      { label: "Inicio", url: "/es/" },
      { label: "Nuestros Servicios", url: "#services" },
      { label: "Nosotros", url: "/es/about/" },
      { label: "Servicios", url: "/es/services/" },
      { label: "Contacto", url: "/es/contact/" }
    ];
    settings.contacts = {
      phone: "+34 123 456 789",
      email: "info@ejemplo.com",
      address: "Calle Principal 123, Ciudad, País"
    };
  }

  return settings;
}

export function unlocalizedUrl(url: string): string {
  // Elimina el prefijo de idioma si existe
  const localeMatch = url.match(/^\/([a-z]{2})(\/|$)/);
  if (localeMatch && locales.includes(localeMatch[1] as Locale)) {
    return url.substring(3) || '/';
  }
  return url;
}

export function translatePath(locale: Locale, path: string): string {
  // Si es la ruta por defecto, solo agregamos el locale
  if (path === '/' || path === '') {
    return `/${locale}`;
  }
  
  // Si ya tiene un locale, lo reemplazamos
  const localeMatch = path.match(/^\/([a-z]{2})(\/|$)/);
  if (localeMatch && locales.includes(localeMatch[1] as Locale)) {
    return `/${locale}${path.substring(3)}`;
  }
  
  // Si no tiene locale, lo agregamos
  return `/${locale}${path}`;
}
