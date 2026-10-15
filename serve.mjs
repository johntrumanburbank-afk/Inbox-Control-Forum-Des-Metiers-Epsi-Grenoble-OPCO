// Serveur statique minimal (sans dépendance) pour jouer à INBOX CONTROL en local.
// Usage : node serve.mjs [port] [--no-open]   — sert le dossier ./dist
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const root = resolve(fileURLToPath(new URL('./dist', import.meta.url)));
const port = Number(process.argv.find((a) => /^\d+$/.test(a))) || 4173;
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

const server = http.createServer(async (req, res) => {
  try {
    let p = decodeURIComponent((req.url || '/').split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const file = normalize(join(root, p));
    if (!file.startsWith(root)) {
      res.writeHead(403).end('403');
      return;
    }
    let target = file;
    try {
      if (!(await stat(target)).isFile()) target = join(root, 'index.html');
    } catch {
      target = join(root, 'index.html');
    }
    const data = await readFile(target);
    res.writeHead(200, { 'Content-Type': types[extname(target)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(data);
  } catch {
    res.writeHead(500).end('Erreur serveur');
  }
});

server.listen(port, process.env.HOST || '127.0.0.1', () => {
  const url = `http://localhost:${port}/`;
  console.log('\n  INBOX CONTROL — CBS, 1997\n  Le jeu tourne sur : ' + url + '\n  (Ctrl+C pour arrêter)\n');
  if (!process.argv.includes('--no-open')) {
    const cmd = process.platform === 'win32' ? `start "" "${url}"` : process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
    exec(cmd, () => {});
  }
});
server.on('error', (e) => {
  console.error('Impossible de démarrer le serveur :', e.message);
  process.exit(1);
});
