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
