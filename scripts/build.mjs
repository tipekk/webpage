import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises';
import { pages } from '../src/site.mjs';
import { homeLabCard, renderCv, renderHome, renderHomeLab, renderNotFound, renderPhoto, renderPractice, renderSelector } from './render.mjs';

const renderers = { home: renderHome, practice: renderPractice, cv: renderCv, homelab: renderHomeLab, photo: renderPhoto };
const standalonePaths = new Set(pages.filter(page => page.id !== 'home').flatMap(page => Object.values(page.paths)));
function enterAtContent(html) {
  return [...standalonePaths].reduce(
    (result, path) => result.replaceAll(`href="${path}"`, `href="${path}#obsah"`),
    html
  );
}
function assertTranslated(value, label) {
  if (Array.isArray(value)) return value.forEach((item, index) => assertTranslated(item, `${label}[${index}]`));
  if (value && typeof value === 'object') return Object.entries(value).forEach(([key, item]) => assertTranslated(item, `${label}.${key}`));
  if (value === '' || value == null) throw new Error(`Chýba preklad ${label}`);
}
function assertSameShape(left, right, label) {
  const leftKeys = Object.keys(left); const rightKeys = Object.keys(right);
  if (leftKeys.length !== rightKeys.length || leftKeys.some(key => !Object.hasOwn(right, key))) throw new Error(`Neúplný prekladový kľúč ${label}`);
  leftKeys.forEach(key => {
    if (Array.isArray(left[key]) && Array.isArray(right[key])) {
      if (left[key].length !== right[key].length) throw new Error(`Neúplný prekladový zoznam ${label}.${key}`);
      return;
    }
    if (left[key] && right[key] && typeof left[key] === 'object' && typeof right[key] === 'object') assertSameShape(left[key], right[key], `${label}.${key}`);
  });
}
for (const page of pages) {
  if (!page.id || !page.paths?.sk || !page.paths?.en || !page.content?.sk || !page.content?.en) throw new Error(`Neúplný jazykový pár: ${page.id}`);
  if (page.paths.sk === page.paths.en) throw new Error(`Duplicitná cesta jazykov: ${page.id}`);
  assertSameShape(page.content.sk, page.content.en, page.id);
  for (const lang of ['sk', 'en']) {
    assertTranslated(page.content[lang], `${page.id}.${lang}`);
  }
}
const allPaths = pages.flatMap(page => Object.values(page.paths));
if (new Set(allPaths).size !== allPaths.length) throw new Error('Duplicitná výstupná cesta v registri.');

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
const selectorHtml = renderSelector();
await writeFile('dist/index.html', selectorHtml);
const rendered = [];
for (const page of pages) for (const lang of ['sk', 'en']) {
  const output = `dist${page.paths[lang]}index.html`;
  let html = enterAtContent(renderers[page.id](lang));
  if (page.id === 'home') html = html.replace(/<article class="project lab">.*?<\/article>/, homeLabCard(lang));
  for (const path of standalonePaths) {
    if (html.includes(`href="${path}"`)) throw new Error(`Chýba obsahový vstup ${path} v ${page.id}.${lang}`);
  }
  for (const anchor of page.anchors) if (!html.includes(`id="${anchor}"`)) throw new Error(`Chýbajúca kotva ${anchor} v ${page.id}.${lang}`);
  await mkdir(output.slice(0, output.lastIndexOf('/')), { recursive: true });
  await writeFile(output, html);
  rendered.push({ page, lang, html });
}
const routes = new Map(rendered.map(({ page, lang }) => [page.paths[lang], { page, lang }]));
routes.set('/', { page: { anchors: [...selectorHtml.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]) } });
const staticFiles = new Set(['/style.css', '/responsive.css', '/theme.css', '/theme.js', '/landing.css']);
for (const { page, lang, html } of rendered) {
  for (const href of html.matchAll(/\shref="([^"]+)"/g)) {
    const target = href[1];
    if (!target.startsWith('/') && !target.startsWith('#')) continue;
    const [route, anchor] = target.split('#');
    if (staticFiles.has(route)) continue;
    const destination = routes.get(route || page.paths[lang]);
    if (!destination) throw new Error(`Neplatný interný odkaz ${target} v ${page.id}.${lang}`);
    if (anchor && ![...destination.page.anchors, 'obsah'].includes(decodeURIComponent(anchor))) throw new Error(`Neplatná kotva ${target} v ${page.id}.${lang}`);
  }
}
await writeFile('dist/404.html', renderNotFound('en'));
await mkdir('dist/sk', { recursive: true }); await mkdir('dist/en', { recursive: true });
await writeFile('dist/sk/404.html', renderNotFound('sk')); await writeFile('dist/en/404.html', renderNotFound('en'));
for (const file of ['style.css', 'responsive.css', 'theme.css', 'landing.css', 'theme.js', '_headers', '_redirects', 'robots.txt']) await copyFile(`src/${file}`, `dist/${file}`);
await mkdir('dist/assets', { recursive: true });
await copyFile('src/assets/caco-space-social-thumbnail.png', 'dist/assets/caco-space-social-thumbnail.png');
const urls = ['/', ...pages.flatMap(page => [page.paths.sk, page.paths.en])];
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(url => `  <url><loc>https://caco.space${url}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log('Build OK → dist/; SK/EN páry, kotvy a duplicity overené.');
