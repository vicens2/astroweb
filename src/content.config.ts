import { defineCollection } from 'astro:content';

export const collections = {
  servicios: defineCollection({
    type: 'content',
    schema: {
      // Define el esquema de tus servicios aquí
      title: { type: 'string' },
      // ... otros campos
    },
  }),
};