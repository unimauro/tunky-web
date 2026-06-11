# Tunky — sitio web (tunky.net)

Web de **Tunky**: estudio de datos y software. Portafolio de tableros en producción +
servicios productizados (dashboards, observatorios, MVPs, bots, mantenimiento). Estático,
multilingüe (ES / EN / PT), sin build. Pensado para subir a **Hostinger** tal cual.

## Estructura
```
index.html     · estructura y secciones
styles.css     · tema "sala de control" dark + acento eléctrico
app.js         · datos (portafolio real, servicios, productos), i18n ES/EN/PT, interacciones
```

## Antes de publicar — EDITA esto en `app.js`
1. **WhatsApp:** `const WA_NUMBER = "51999999999";` → pon el número real de Tunky (formato
   internacional sin `+`, ej. `51987654321`).
2. **Email/contacto:** en `index.html`, los enlaces `#waLink` y `#mailLink` muestran
   `+51 999 999 999` y `hola@tunky.net` → reemplaza por los reales.
3. (Opcional) Agrega/quita tableros del array `WORK`, servicios en `SVC`, productos en `PROD`.

## Idiomas
ES (por defecto), EN, PT. Se cambian con el selector del nav y se recuerda la elección.
Para agregar un idioma, añade su bloque en el objeto `I18N` y los campos en los arrays.

## Subir a Hostinger
**Opción A — hPanel (rápida):** Administrador de archivos → carpeta `public_html` →
borra el sitio viejo (plantilla) → sube `index.html`, `styles.css`, `app.js`.

**Opción B — FTP:** sube los 3 archivos a `public_html/` con FileZilla.

**Opción C — Git (si el hosting lo permite):** conecta este repo y despliega `main`.

No requiere Node ni build: son archivos estáticos. Verifica en https://tunky.net/ que
el selector de idioma, los enlaces a los tableros y el botón de WhatsApp funcionen.

## Portafolio (todos verificados en vivo)
15 tableros públicos enlazados + 6 productos propios (ConTodo con demo live; CondoFlow,
CanchApp, LicitaPerú, Medsage, Finance Hub en desarrollo).
