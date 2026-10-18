# Pubblica

Pubblica i tuoi progetti su GitHub dal telefono, senza Termux. App installabile (PWA). by Lollo ®2026

## File

| File | A cosa serve |
|---|---|
| `index.html` | L'app |
| `versione.js` | Numero di versione: **l'unico posto dove si cambia** |
| `sw.js` | Service worker: uso senza rete e aggiornamenti |
| `manifest.webmanifest` | Nome, colori e icone per l'installazione |
| `icone/` | Icone dell'app |

## Novità della 3.9

- **🤖 API IA gratuite**: nuova area con provider, numero di modelli, modalità supportate, contesto, requisiti di registrazione e indirizzo dell'endpoint.
- Ricerca e filtri per modalità, assenza di carta, assenza di verifica telefonica e preferiti.
- **Aggiornamento futuro della lista**: il pulsante «Aggiorna da GitHub» legge le tabelle di `awesome-freellm-apis`, conserva l'ultima copia valida sul dispositivo e continua a funzionare offline. Le chiavi API non vengono scaricate né salvate.

## Novità della 3.8

- **💻 Installa in Termux** (nel menu): spunti i tuoi repository GitHub e l'app prepara il comando da incollare in Termux. Crea il comando permanente `installa-repo`, scarica i repository in `~/progetti`, installa le librerie di `requirements.txt` e crea un comando per avviare ogni repository: lo script Python oppure, per le app HTML, un piccolo server locale che apre la pagina nel browser. Dopo la prima volta basta `installa-repo nome-repository` (rilanciato, aggiorna).
- Corretta la versione mostrata nel pannello Crea APK (diceva sempre «v3.2»): ora segue `versione.js`.

## Novità della 3.7

- **Trekking e GPX** (dentro «API gratuite»): riepilogo a mano delle API per quota, sentieri e meteo in montagna, con il pulsante «Prova ora» che fa una richiesta vera dal tuo telefono e ricorda l'esito (funziona dalla pagina / bloccata / errore).
- **API gratuite** (voce 🔎 del menu): elenco di oltre 2000 API pubbliche (da public-apis) con ricerca anche in italiano, filtri «senza chiave» / «CORS sì» / HTTPS, categorie, preferite e le tue API aggiunte a mano. «Aggiorna da GitHub» scarica l'elenco nuovo e dice quante API sono nuove; senza internet resta la copia inclusa.
- **Aggiornamento dall'app (app HTML)**: dentro l'APK compare il pulsante ⟳. Controlla le Releases del repository, scarica l'APK nuovo e apre l'installazione di Android (la conferma resta tua). I dati dell'app restano. Serve il repository pubblico. Si spegne con la casella nel pannello dell'app HTML.
- Le app Python restano come prima: si aggiornano scaricando e installando l'APK dalla pagina.

## Novità della 3.6

- **L'APK prende il nome dell'app** (quello del punto 3): «Simulatore GEA PWA V5.13» → `Simulatore_GEA_PWA_V5.13-1.1.apk`.
- **Un nuovo progetto parte pulito**: caricando un altro script, ZIP o app HTML sparisce il risultato della compilazione
  precedente e il repository passa da solo a quello del nuovo progetto (se era quello del precedente).
- Il punto 4 (anteprima dei file) è ora facoltativo e chiuso: per compilare non serve.

## Novità della 3.5

- Controllo automatico dell'APK a fine compilazione (firma, pacchetto, Android minimo) e riquadro «Non si installa?» con le cause più comuni.

## Novità della 3.4

- **Nome dell'APK come il repository**: `nomerepository-versione.apk` (con più processori, anche il tipo: `…-arm64-v8a.apk`).
  Vale per le app Python e HTML; si aggiorna alla prossima compilazione.

## Novità della 3.3

- **🔑 «Chiedi il token a GitHub»** nelle Impostazioni: scegli cosa ti serve, il pulsante apre GitHub con nome e permessi già compilati,
  con la guida passo per passo, l'opzione fine-grained e «Controlla il mio token» che dice cosa manca.

## Novità della 3.2

- **Librerie Python cercate in automatico**: se lo script importa una libreria che Crea APK non conosce, la cerca su PyPI,
  aggiunge da sola il nome giusto e le dipendenze, e avvisa *prima* di compilare se ha parti in C senza ricetta per Android.
- **App HTML: i download funzionano nell'APK**: esportazioni e file scaricati dalla pagina aprono «Salva o condividi»
  (plugin Filesystem e Share di Capacitor, aggiunti da soli). I tuoi file HTML restano intatti.

## Novità della 3.1 (e della 3.0)

- **📱 Crea APK (Python o HTML)**: trasforma uno script Python normale (print/input), un progetto ZIP o un'**app HTML**
  (file .html o ZIP con le pagine) in un'app Android. Le app HTML sono avvolte da Capacitor (WebView) e funzionano offline.
  Crea il repository, invia i file, GitHub compila e compare il pulsante «Scarica APK».
- **🗺️ Apri il sito (HTML)** nel menu principale: apre la pagina online del progetto attivo (da lì Chrome → ⋮ → «Installa app»).
  Se GitHub Pages non è attivo, lo attiva.
- La cartella `firma/` dei repository di Crea APK non viene mai cancellata, nemmeno pubblicando uno ZIP completo.
- Per gli APK il token deve avere anche **Workflows** e **Actions** (token classico: `repo` e `workflow`).

## Messa online (una volta sola)

1. Crea un repository, ad esempio `pubblica`, con GitHub Pages attivo sul ramo principale.
2. Pubblica questo ZIP nel repository.
3. Apri `https://baudinolorenzo73.github.io/pubblica/` (cambia il nome se il repository è diverso).
4. Premi **📲 Installa**.

## Pubblicare una nuova versione

1. Modifica i file.
2. Aumenta il numero in `versione.js` (es. da `2.3` a `2.4`). Senza questo passo i telefoni non vedono l'aggiornamento.
3. Pubblica lo ZIP.
4. Sul telefono compare **⬆ Aggiorna alla 2.4** (subito alla riapertura dell'app, oppure con **↻ Controlla aggiornamenti**).

## Nota sulla sicurezza

Tutte le tue app su `baudinolorenzo73.github.io` condividono la memoria del browser: se fai ricordare il token, anche le altre pagine di quel dominio potrebbero leggerlo.
