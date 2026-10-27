# Kontext projektu

`caco.space` je osobný dvojjazyčný CV/portfólio web Tomáša Čača. Verejný web funguje ako rozcestník pre profil a CV, vybrané pracovné realizácie, HomeLab, Foto a dron a externý projekt Solvio.

## Technická architektúra

- Statický Node build bez runtime frameworku a externých balíkov.
- `src/site.mjs` je jediný register verejného obsahu a ciest.
- `scripts/render.mjs` generuje HTML; `scripts/build.mjs` vytvára `dist/` a overuje páry, odkazy a kotvy.
- Verejné jazykové cesty sú vždy úplné slovenské/anglické páry pod `/sk/` a `/en/`.
- Téma a jazyk sú nezávislé; systémová téma funguje bez uloženej voľby a explicitná voľba sa uchováva lokálne.
- GitHub je zdroj kódu. Cloudflare Pages je plánovaný hosting; samostatné aplikácie patria do Workers a veľké médiá mimo Git.

## Aktuálne verejné cesty

- `/` — neutrálny výber jazyka
- `/sk/` ↔ `/en/`
- `/sk/prax/` ↔ `/en/practice/`
- `/sk/cv/` ↔ `/en/cv/`
- `/sk/homelab/` ↔ `/en/homelab/`
- `/sk/foto-a-dron/` ↔ `/en/photo-and-drone/`

## Obsahové hranice

Verejný obsah používa iba používateľom potvrdený a verejne zdieľateľný rozsah. Interné architektúry, konfigurácie, prevádzkové adresy, bezpečnostné zistenia, metriky a zdrojové dôkazy sa do repozitára ani buildu neprenášajú. Osobné zdrojové dokumenty zostávajú lokálne, nezmenené a ignorované Gitom.

Záväzné vizuálne, responzívne, prístupnostné a jazykové pravidlá sú v `docs/DESIGN_PLAYBOOK.md`. Aktuálny backlog je v `docs/TASKS.md`; história trvalých rozhodnutí v `docs/DECISIONS.md`.
