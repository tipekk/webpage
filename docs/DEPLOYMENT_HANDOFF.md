# Príprava nasadenia hlavného webu

Stav: zdrojový projekt je lokálne pripravený na kontrolu pred prvým GitHub pushom; remote, Cloudflare projekt, deploy ani DNS zmena zatiaľ nie sú nakonfigurované.

## Aktuálne statické cesty

- `/` — neutrálny výber jazyka
- `/sk/` ↔ `/en/`
- `/sk/prax/` ↔ `/en/practice/`
- `/sk/cv/` ↔ `/en/cv/`
- `/sk/homelab/` ↔ `/en/homelab/`
- `/sk/foto-a-dron/` ↔ `/en/photo-and-drone/`

Build generuje tieto cesty do `dist/`, overuje jazykové páry a platné interné odkazy. `src/_redirects` už zabezpečuje lokalizované skutočné 404 pre neznáme SK a EN adresy.

Interné agentové zápisy, osobné zdrojové podklady, pracovné prototypy, lokálne fotografie a `dist/` sú zámerne mimo Git. Produkčný repozitár obsahuje iba aktívny zdroj, verejnú dokumentáciu a používaný social thumbnail.

## Budúca fáza Cloudflare Pages

1. Vytvoriť Pages projekt pripojený na vetvu `main`, s build príkazom `npm run build` a výstupom `dist`.
2. Overiť automaticky pridelenú Pages adresu a celý web na nej, bez zmeny `caco.space`.
3. Získať zoznam všetkých URL starej stránky a pre každú potvrdiť cieľ alebo vedomé 404. Až potom zapísať presmerovania do `src/_redirects`.
4. Po výslovnom schválení pripojiť `caco.space` a prípadne `www.caco.space`; `www` má mať jeden kanonický cieľ. DNS a redirect pravidlá aktivovať až po úspešnom preview.

Samostatné obsahové stránky zostávajú cestami hlavnej domény. Ďalšie vlastné subdomény majú zmysel iba pre samostatné aplikácie alebo služby a vyžadujú samostatné rozhodnutie, DNS záznam a test presmerovania.
