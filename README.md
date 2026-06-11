# Tunky — sitio web (tunky.net)

Web de **Tunky**: estudio de **IA, datos y software**. Posicionamiento **IA-first**
("convertimos tu empresa en IA-first"). Portafolio de tableros en producción + capacidades
de IA (agentes, copilotos, automatización) + servicios productizados. Estático, multilingüe
(ES / EN / PT), optimizado para SEO. Pensado para subir a **Hostinger** tal cual.

**Contacto cableado:** WhatsApp +51 940 584 307 · carlos@cardenas.pe

## Estructura
```
index.html     · secciones + SEO (meta, Open Graph, Twitter, hreflang, JSON-LD)
styles.css     · tema "sala de control" dark + acento eléctrico
app.js         · datos (IA, portafolio, servicios, productos), i18n ES/EN/PT, interacciones
robots.txt     · indexación + referencia al sitemap
sitemap.xml    · sitemap con hreflang por idioma
og.png / og.svg· imagen para compartir en redes (1200×630)
```

## SEO incluido
- Title/description con keywords (IA-first, agentes, software a medida Perú…).
- Open Graph + Twitter Card + imagen `og.png`.
- `hreflang` ES/EN/PT/x-default y `?lang=` en la URL para cada idioma.
- JSON-LD `ProfessionalService` con teléfono, email, idiomas y servicios.
- `robots.txt` + `sitemap.xml`.
- **Pendiente para rankear mejor:** dar de alta `tunky.net` en Google Search Console
  y enviar el sitemap; conseguir backlinks (LinkedIn, directorios).

## Editable (opcional)
- Tableros en el array `WORK`, capacidades IA en `AI`, servicios en `SVC`, productos en `PROD` (todos en `app.js`).
- Agregar idioma: nuevo bloque en `I18N` + campos `es/en/pt`→`xx` en los arrays + botón en el nav.

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
