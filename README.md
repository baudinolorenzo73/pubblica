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
