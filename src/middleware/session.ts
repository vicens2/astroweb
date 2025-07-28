// src/middleware/session.ts
import type { APIContext, MiddlewareHandler } from 'astro';

/**
 * Middleware de sesión simple para Astro 5.3.0
 * Este middleware se encarga de manejar las sesiones manualmente
 */
export const onRequest: MiddlewareHandler = async ({ locals }, next) => {
  // Inicializar la sesión si no existe
  if (!('session' in locals)) {
    (locals as any).session = {
      // Aquí puedes agregar propiedades de sesión si son necesarias
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
  }

  // Continuar con la solicitud
  return next();
};
