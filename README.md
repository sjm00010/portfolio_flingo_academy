# Portfolio Flingo Academy

Portfolio web de Flingo Academy: academia online de inglés. Construido con React + Vite, con contenido en tres idiomas (inglés, español y chino).

## Stack

- [Vite](https://vitejs.dev/) + React
- [react-router-dom](https://reactrouter.com/) — rutas por idioma (`/en`, `/es`, `/zh`)
- [react-i18next](https://react.i18next.com/) — traducciones

## Idiomas

- 🇬🇧 English — `/en`
- 🇪🇸 Español — `/es`
- 🇨🇳 中文 — `/zh`

La raíz (`/`) redirige automáticamente al idioma detectado del navegador (con `en` como valor por defecto). El selector de idioma está disponible en la barra de navegación.

## Desarrollo

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  i18n/            # ficheros de traducción (en.json, es.json, zh.json) e inicialización de i18next
  router/          # redirección de idioma
  pages/           # HomePage
  components/
    layout/        # Navbar, Footer
    sections/      # Hero, WhyUs, About, Teachers, Courses, Pricing, HowItWorks, HowToBook, Testimonials
    ui/            # Button, RatingStars
reference/         # HTML de la web de referencia usada para extraer el contenido (solo contenido, no diseño)
```
