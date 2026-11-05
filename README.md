# eternalistic

Eleventy site for Eternalistic (Jeremy Caldwell). Structure and build process follow the Line Drive Digital site.

## Getting Started
```
npm install
```

## Development
```
npm start
```
Runs `eleventy --serve`. Format and lint with your editor on save, or `npm run format` and `npm run lint`.

## Deployment
```
npm run build
```
Output goes to `_site/`. Netlify builds from `netlify.toml` (`npm run build`, publish `_site`, Node 22); headers live in `src/_headers`. The bare domain redirects to `www` via Netlify domain settings.

The contact form uses Netlify Forms (`data-netlify="true"`, honeypot `bot-field`) and posts to `/contact/success/`. Submissions show up under **Forms** in the Netlify dashboard once form detection is enabled for the site.

## Structure
- `src/_includes/layout.html` – the only layout: `<head>`, sidebar header (menu, Projects disclosure, social links), JSON-LD
- `src/_includes/launch.njk` – "Launched" line with View site button, included in project pages
- `src/index.md`, `src/<page>/index.md` – page content: Markdown (with HTML where needed), rendered with Nunjucks. Don't leave blank lines inside an HTML block, or Markdown wraps the next tag in `<p>`.
- `src/projects/<slug>/index.md` – one page per project. Front matter: `title`, `description`, `launched`, `dateLabel`, `siteUrl`, `siteLabel`. `src/projects/projects.json` sets the layout and opens the Projects menu.
- `src/_data/projects.js` – sidebar Projects menu (name, folder), in order
- `src/_data/site.json` – site name, URL, description, Adobe Fonts kit ID, social links
- `src/css/styles.css` – ordered `@import` list; PostCSS bundles it to `_site/css/styles.css`. New CSS files must be added here.
- `src/js/script.js` – all page JS (phone menu toggle)
- `lib/image.js` – responsive image helper used by `{% image %}`

Fonts (Proxima Nova, Freight Text) load from the Adobe Fonts kit in `site.json`.

## CSS conventions
- **Tokens:** colors, font families, font sizes and weights live in `src/css/base/variables.css`. Use `var(--token)` everywhere else.
- **Spacing:** `em` (or `%`) values, matching the original design.
- **BEM:** `block__element--modifier`, kebab-case. One block per file in `src/css/components/` (`c-<block>.css`). Markdown content is styled through element selectors under `.prose` and `global/typography.css`.
- **Linting:** `npm run lint` runs Prettier, stylelint and ESLint.

## Images
Project screenshots live in `src/images/projects/<slug>/`. The `{% image %}` shortcode generates AVIF/WebP/JPEG at 320, 640 and 1280px.
```
{% image "images/projects/linux/home.jpg", "Home page, Linux.com" %}
```
