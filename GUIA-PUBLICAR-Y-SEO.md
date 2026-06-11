# Guía: publicar Tunky + que aparezca en Google (SEO) + compartir

Paso a paso, sin tecnicismos. Orden recomendado: **1) subir → 2) Search Console →
3) compartir**. Tiempo total: ~40 min.

---

## 1) Subir la web a Hostinger (tunky.net)

Tienes que copiar **6 archivos** a la carpeta `public_html` (borra antes la plantilla vieja):
`index.html`, `styles.css`, `app.js`, `robots.txt`, `sitemap.xml`, `og.png`.

**Opción A — hPanel (la más fácil):**
1. Entra a [hpanel.hostinger.com](https://hpanel.hostinger.com) → tu dominio `tunky.net`.
2. **Administrador de archivos** → carpeta `public_html`.
3. Selecciona TODO lo que haya dentro (la plantilla vieja) y bórralo.
4. Botón **Subir** → arrastra los 6 archivos. Listo.
5. Abre https://tunky.net en una ventana de incógnito y verifica.

**Opción B — FTP (FileZilla):** conéctate con los datos FTP de hPanel y sube los 6
archivos a `public_html/`.

> Si ves la web vieja todavía: borra caché del navegador o espera unos minutos (Hostinger cachea).

---

## 2) Que aparezca en Google — Google Search Console (lo clave para SEO)

Tener buen SEO en el código (ya lo tienes) **no basta**: hay que decirle a Google que existes.
Eso se hace en **Search Console** y es gratis.

### 2.1 Dar de alta el sitio
1. Entra a [search.google.com/search-console](https://search.google.com/search-console) con tu cuenta Google.
2. **Agregar propiedad** → elige **"Prefijo de URL"** → escribe `https://tunky.net` → Continuar.

### 2.2 Verificar que el dominio es tuyo
Google te da varias formas. La más simple con Hostinger:
- **Opción etiqueta HTML:** Google te da un `<meta name="google-site-verification" content="XXXX" />`.
  Pégalo en el `<head>` de `index.html` (debajo de los otros meta), vuelve a subir el archivo,
  y pulsa **Verificar**. ✅
  - *(Dímelo y te dejo el meta puesto en su sitio; solo tendrías que pegar el código.)*
- **Opción DNS (alternativa):** en hPanel → DNS, agrega el registro TXT que te dé Google.

### 2.3 Enviar el sitemap (esto acelera la indexación)
1. En Search Console, menú izquierdo → **Sitemaps**.
2. En "Agregar un sitemap nuevo" escribe: `sitemap.xml` → **Enviar**.
3. Debe quedar como "Correcto". Con esto Google descubre la home en sus 6 idiomas.

### 2.4 Pedir indexación ya
- Arriba, en la barra de **"Inspección de URL"**, pega `https://tunky.net/` → Enter →
  botón **"Solicitar indexación"**. Esto pone tu web en la cola de Google (tarda de horas a días).

### 2.5 Bonus: Bing (5 min más, tráfico extra gratis)
- [bing.com/webmasters](https://www.bing.com/webmasters) → puedes **importar desde Google
  Search Console** con un clic. Ya quedas en Bing también.

---

## 3) ¿Qué hace que Google te ENCUENTRE por búsquedas? (SEO real)

Lo técnico ya está listo en la web (title, descripción, palabras clave, datos
estructurados, hreflang en 6 idiomas, sitemap). Para **subir en los resultados**:

1. **Indexación primero** (paso 2) — sin esto, no apareces. Es lo #1.
2. **Palabras clave que ya apuntamos:** "software a medida Perú", "dashboards a medida",
   "IA first empresas", "agentes de IA", "automatización con IA". Aparecerás para esas
   búsquedas a medida que Google confíe en el sitio.
3. **Backlinks (enlaces hacia ti):** lo que más mueve el ranking. Pon `tunky.net` en:
   - Tu perfil y publicaciones de **LinkedIn**, GitHub, Instagram/Facebook de Tunky.
   - Directorios (Google Business Profile para Lima, Clutch, etc.).
   - Cada dashboard tuyo enlazando a tunky.net en el footer = backlinks gratis.
4. **Contenido fresco:** un blog/casos de estudio ayuda mucho (lo podemos agregar después).
5. **Google Business Profile:** date de alta como negocio en Lima → apareces en Maps y
   búsquedas locales ("desarrollo de software Lima"). Gratis y muy efectivo.

> Realista: la indexación tarda **días**; rankear bien por términos competidos toma
> **semanas/meses** y depende sobre todo de los backlinks y de que la gente entre y se quede.

---

## 4) Compartir por WhatsApp / Facebook / todos lados

La web ya trae **botones de compartir** (sección "¿Te sirve? Compártelo.") para WhatsApp,
Facebook, LinkedIn, X y copiar enlace — en los 6 idiomas. Además:

- Al pegar `https://tunky.net` en WhatsApp/FB/LinkedIn/X sale una **tarjeta con imagen**
  (`og.png`) y el mensaje IA-first, no un link pelado. Eso multiplica los clics.
- **Truco:** si compartes y la tarjeta sale fea o vieja, refréscala en:
  - Facebook: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/) → pega la URL → "Scrape Again".
  - LinkedIn: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/) → pega la URL.
- Para campañas, comparte URLs por idioma: `tunky.net/?lang=en`, `?lang=zh`, `?lang=ja`.

---

## Checklist rápido
- [ ] Subir los 6 archivos a `public_html` (Hostinger).
- [ ] Verificar tunky.net en Google Search Console (meta o DNS).
- [ ] Enviar `sitemap.xml` + Solicitar indexación de la home.
- [ ] (Opcional) Importar a Bing Webmaster.
- [ ] Crear Google Business Profile de Tunky (Lima).
- [ ] Poner el link de tunky.net en LinkedIn, redes y en el footer de tus dashboards.
- [ ] Compartir con los botones de la web. 🤞
