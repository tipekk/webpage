# Aktuálne úlohy

## Pred publikovaním

- [ ] Uzavrieť privacy audit: potvrdiť prevádzkovateľa/kontakt, účely a právny základ, Cloudflare funkcie, logy, retencie a prenosy; až potom publikovať úplný SK/EN privacy pár. Otázky a zistenia: `docs/agents/2026-10-27-privacy-audit.md`. Aktuálna verejná doména má inú staršiu verziu s Google Fonts a nefunkčným riadením súhlasu.

- [ ] Vizuálne overiť všetky verejné cesty v SK/EN, light/dark a na mobilnom aj desktopovom breakpointe.
- [ ] Dokončiť manuálny audit klávesnice, čítačky obrazovky a 200 % zväčšenia textu.
- [ ] Potvrdiť finálny verejný rozsah pracovných realizácií; ak nemožno hranice zachovať bez interných detailov, konkrétnu realizáciu nezverejniť.
- [ ] Skontrolovať metadata, canonical/hreflang, sitemap, `robots.txt`, presmerovania a lokalizované 404 na preview URL.
- [ ] Overiť čistý checkout príkazmi `npm install` a `npm run build`.

## GitHub a nasadenie

- [ ] Po explicitnom schválení vytvoriť alebo pripojiť samostatný GitHub repozitár a odoslať vetvu `main`.
- [ ] Na GitHube potvrdiť, že osobné podklady, interné agentové zápisy, prototypy, `dist/` a veľké médiá nie sú súčasťou repozitára.
- [ ] Až po samostatnom schválení pripojiť Cloudflare Pages: build `npm run build`, výstup `dist`.
- [ ] Pred DNS zmenou overiť Pages preview a pripraviť mapu starých URL.

## Budúci obsah

- [ ] Doplniť iba potvrdený kontakt alebo odkazy, ktoré používateľ chce verejne zdieľať.
- [ ] Doplniť názov, URL a ukážku hry po dodaní overených údajov.
- [ ] Vybrať úložisko a konkrétne fotografie/videá mimo Git; pred publikovaním odstrániť citlivé metadata.

Každá nová úloha začína samostatným taskom/agentom alebo konverzáciou podľa `AGENTS.md`.
