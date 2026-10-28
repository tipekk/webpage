# Nasadenie hlavného webu

Stav: web je nasadený. Zdroj je vo verejnom repozitári `tipekk/webpage`, produkčný Cloudflare Pages projekt je `caco-webpage` a hlavná doména je `https://caco.space`.

## Aktuálne statické cesty

- `/` — neutrálny výber jazyka
- `/sk/` ↔ `/en/`
- `/sk/prax/` ↔ `/en/practice/`
- `/sk/cv/` ↔ `/en/cv/`
- `/sk/homelab/` ↔ `/en/homelab/`
- `/sk/foto-a-dron/` ↔ `/en/photo-and-drone/`

Build generuje tieto cesty do `dist/`, overuje jazykové páry a platné interné odkazy. `src/_redirects` už zabezpečuje lokalizované skutočné 404 pre neznáme SK a EN adresy.

Interné agentové zápisy, osobné zdrojové podklady, pracovné prototypy, lokálne fotografie a `dist/` sú zámerne mimo Git. Produkčný repozitár obsahuje iba aktívny zdroj, verejnú dokumentáciu a používaný social thumbnail.

## Produkčné nasadenie

- Build príkaz: `npm run build`
- Výstup: `dist`
- Pages projekt: `caco-webpage`
- Pages adresa: `https://caco-webpage.pages.dev`
- Produkcia: `https://caco.space`
- `https://www.caco.space` presmeruje na kanonické `https://caco.space/`.

Projekt bol vytvorený ako klasický Cloudflare Pages projekt a aktuálny build bol odoslaný cez Wrangler. GitHub je zdroj kódu; automatické nasadenie z vetvy `main` zatiaľ nie je nakonfigurované. Pri ďalšej publikácii najprv pushnúť overený commit a potom nasadiť jeho `dist` do projektu `caco-webpage`.

Po prepnutí boli overené HTTP 200, bezpečnostné hlavičky a nový SK/EN obsah na hlavnej doméne. Starý Pages projekt `caco-space` zostal zachovaný bez vlastnej domény.

Samostatné obsahové stránky zostávajú cestami hlavnej domény. Ďalšie vlastné subdomény majú zmysel iba pre samostatné aplikácie alebo služby a vyžadujú samostatné rozhodnutie, DNS záznam a test presmerovania.
