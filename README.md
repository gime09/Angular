# Angular — Proyectos de práctica

Repositorio con los proyectos desarrollados a lo largo de distintos cursos de Angular y TypeScript, cubriendo desde los fundamentos del lenguaje hasta aplicaciones full-stack completas (frontend + backend).

Cada carpeta es un proyecto independiente, con su propio `package.json` y dependencias. Ninguna incluye `node_modules` (excluido vía `.gitignore`) — para correr cualquiera, hay que instalar dependencias primero.

## Cómo correr un proyecto

```bash
cd nombre-del-proyecto
npm install
npm start        # o: ng serve (proyectos Angular) / npm run start:dev (nest-teslo-shop)
```

---

## Proyectos

### [01-typescript-intro](./01-typescript-intro)
Fundamentos de TypeScript: tipos básicos, interfaces, funciones, destructuring, clases, genéricos, decoradores y optional chaining.

### [02-bases](./02-bases)
Introducción a Angular con componentes standalone. Incluye una app de ejemplo estilo Dragon Ball (listado y alta de personajes) y un contador simple con routing básico.

### [03-gifts-app](./03-gifts-app)
Buscador de GIFs consumiendo la API de Giphy. Manejo de estado, historial de búsquedas, componentes reutilizables y estilos con Tailwind.

### [04-country-app](./04-country-app)
Consumo de la API REST Countries. Búsqueda por país, capital y región, con routing anidado y layouts.

### [05-pipes-app](./05-pipes-app)
Pipes personalizados y nativos de Angular aplicados sobre un set de datos de héroes (filtros, ordenamiento, formato de texto y colores).

### [06-reactive-forms](./06-reactive-forms)
Formularios reactivos con validaciones síncronas y utilidades de formulario. Incluye formulario de registro y un formulario dinámico de países.

### [07-lifecycle](./07-lifecycle)
Ciclo de vida de componentes en Angular, aplicado sobre un sitio con páginas de inicio, "acerca de" y contacto.

### [08-maps-app](./08-maps-app)
Integración con mapas interactivos (marcadores, pantalla completa, mini-mapas), usando variables de entorno para las API keys.

### [09-angular-tesloshop](./09-angular-tesloshop)
Frontend de un e-commerce (tienda de ropa estilo Tesla). Incluye tienda pública (store front) y panel de administración (admin dashboard), con autenticación JWT, guards, interceptores HTTP y paginación. Consume la API de `09-nest-teslo-shop`.

### [09-nest-teslo-shop](./09-nest-teslo-shop)
Backend en NestJS del proyecto anterior. Autenticación con JWT y roles, CRUD de productos con paginación y filtros, carga de imágenes, WebSockets, seed de datos de prueba y persistencia con TypeORM + PostgreSQL (Docker).

### [10-angular-my-dashboard](./10-angular-my-dashboard)
Dashboard demostrativo de características modernas de Angular 17+: nueva sintaxis de control de flujo (`@if`, `@for`), carga diferida (`@defer`), signals, comunicación por `input()`/`output()`, integración con Angular Material y View Transitions API.

---

## Stack general

TypeScript · Angular (standalone components, signals, control flow moderno) · NestJS · TypeORM · PostgreSQL · Docker · Tailwind CSS · Angular Material
