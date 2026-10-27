import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
const port = Number(process.env.PORT || 4173);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.xml': 'application/xml; charset=utf-8' };
http.createServer(async (req,res) => {
  const url = new URL(req.url,'http://localhost');
  const pathname = decodeURIComponent(url.pathname);
  if (!pathname.endsWith('/') && !path.extname(pathname)) { res.writeHead(308, { Location: `${pathname}/${url.search}` }); res.end(); return; }
  const relative = pathname === '/' ? 'index.html' : pathname.endsWith('/') ? `${pathname.slice(1)}index.html` : pathname.slice(1);
  const file = path.resolve('dist', relative);
  if (!file.startsWith(path.resolve('dist'))) { res.writeHead(400); res.end(); return; }
  try { await stat(file); res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'}); res.end(await readFile(file)); }
  catch { const lang = pathname.startsWith('/sk/') ? 'sk' : 'en'; try { res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'}); res.end(await readFile(`dist/${lang}/404.html`)); } catch { res.writeHead(503); res.end('Najprv spustite npm run build.'); } }
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}`));
