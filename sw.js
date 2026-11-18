/* Service worker di Pubblica — by Lollo ®2026
   Compiti:
   1. tenere sul telefono i file dell'app, così si apre anche senza rete;
   2. accorgersi delle nuove versioni (cambia versione.js) e aspettare il pulsante «Aggiorna».
   Le richieste a GitHub (api.github.com) NON passano mai dalla cache: vanno sempre in rete. */
importScripts('versione.js'); // definisce self.VERSIONE

const CACHE = 'pubblica-' + self.VERSIONE;
const FILE = [
  './',
  'index.html',
  'manifest.webmanifest',
  'versione.js',
  'icone/icona-192.png',
  'icone/icona-512.png',
  'icone/icona-maskable-512.png'
];

/* Installazione: scarica tutti i file della nuova versione, saltando la cache del browser.
   La nuova versione resta «in attesa» finché non premi «Aggiorna» (vedi il messaggio «attiva»). */
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILE.map((f) => new Request(f, { cache: 'reload' })))));
});

/* Attivazione: cancella le cache delle versioni precedenti e prende il controllo delle pagine aperte. */
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const nome of await caches.keys()) {
      if (nome.startsWith('pubblica-') && nome !== CACHE) await caches.delete(nome);
    }
    await self.clients.claim();
  })());
});

/* Messaggi dalla pagina: «versione» chiede il numero, «attiva» applica l'aggiornamento. */
self.addEventListener('message', (e) => {
  const tipo = e.data && e.data.tipo;
  if (tipo === 'versione' && e.ports[0]) e.ports[0].postMessage(self.VERSIONE);
  if (tipo === 'attiva') self.skipWaiting();
});

/* «Condividi» da un'altra app (Android): il file arriva qui, si mette da parte
   e si apre Pubblica, che chiede cosa farne. La cache non inizia con «pubblica-»: gli aggiornamenti non la cancellano. */
const CONDIVISI = 'condivisi-pubblica';
async function riceviCondivisi(req) {
  let n = 0;
  try {
    const dati = await req.formData();
    const file = dati.getAll('file').filter((f) => f && typeof f !== 'string').slice(0, 50);
    const c = await caches.open(CONDIVISI);
    for (const k of await c.keys()) await c.delete(k);
    for (const f of file) {
      await c.put(new Request('condiviso/' + n), new Response(f, { headers: {
        'content-type': f.type || 'application/octet-stream', 'x-nome': encodeURIComponent(f.name || 'file') } }));
      n++;
    }
  } catch (err) { /* si apre comunque l'app */ }
  return Response.redirect(new URL('./?condiviso=' + n, self.registration.scope).href, 303);
}

/* Tocco sulla notifica «APK/EXE pronto»: riporta in primo piano Pubblica (o la apre). */
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  e.waitUntil((async () => {
    const aperte = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const c of aperte) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  })());
});

/* Richieste: solo i file dell'app (stesso sito, GET) vengono serviti dalla cache. */
self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method === 'POST' && url.origin === self.location.origin && url.pathname.endsWith('/condividi')) {
    e.respondWith(riceviCondivisi(req)); return;
  }
  if (req.method !== 'GET' || url.origin !== self.location.origin) return; // GitHub e altri siti: rete normale
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const inCache = await cache.match(req, { ignoreSearch: true })
      || (req.mode === 'navigate' ? await cache.match('index.html') : undefined);
    return inCache || fetch(req);
  })());
});
