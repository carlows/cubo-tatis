# Cubo de las Seis Caras

Cubo 3D interactivo para la evaluación del primer corte (semanas 3 y 4) de
*Educación Infantil en Colombia y Latinoamérica* — Universidad INCCA de Colombia.

- Arrastra (mouse o dedo) para girar el cubo; toca una cara para leer su desarrollo completo.
- Portada y referencias APA 7 en los enlaces inferiores.

Todo el texto está en [`src/content.js`](src/content.js).

## Desarrollo

```bash
npm install
npm run dev
```

## Despliegue

`.github/workflows/deploy.yml` construye con Vite y publica `dist/` en GitHub Pages
en cada push a `main` (Settings → Pages → Source: GitHub Actions).
