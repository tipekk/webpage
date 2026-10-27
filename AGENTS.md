# Pravidlá projektu caco.space

- Každá nová úloha v projekte je nový samostatný task/agent alebo konverzácia. Nerozširuj existujúcu úlohu o nesúvisiacu prácu.
- Najprv prečítaj tento súbor a iba potrebné Markdown súbory: `docs/PROJECT_CONTEXT.md`, príslušné rozhodnutia, úlohu a zápis agenta. Minimalizuj tokeny a komunikuj stručne po slovensky.
- Trvalé zistenia a odovzdanie vždy zapíš do relevantného `.md`; vlastné pracovné zistenia do `docs/agents/`. Nevkladaj tajomstvá ani osobné údaje bez potreby.
- Orchestrátor integruje výsledky a overuje build/náhľad. Agenti upravujú iba pridelené súbory; chránia existujúci obsah.
- GitHub zostáva zdrojom kódu, Cloudflare Pages hostingom osobného webu. Samostatné aplikácie patria do Workers. Veľké médiá zostávajú mimo Git.
- Bez explicitného schválenia používateľa nevykonávaj GitHub push, Cloudflare deploy ani DNS zmeny. Ani pridanie CI nesmie obísť tento zákaz.
- Nepublikuj vymyslené kariérne úspechy, kontakty ani odkazy. Rozlišuj overené fakty a návrhy.
- Pred každou úpravou verejného webu prečítaj `docs/DESIGN_PLAYBOOK.md`. Je záväzný pre vizuálny jazyk, light/dark režim, responzivitu, prístupnosť a jazykové verzie.
- Každý verejný obsah musí vzniknúť ako úplný slovenský a anglický pár. Cieľové statické URL sú `/sk/` a `/en/`; chýbajúci preklad blokuje publikovanie. Nepoužívaj runtime prekladovú službu ani tichý fallback do druhého jazyka.
- Téma a jazyk sú nezávislé voľby. Zachovaj systémový light/dark režim, explicitnú lokálnu voľbu používateľa a jazykový prepínač smerujúci na partnerskú stránku.

## Hlavný adresár a osobné podklady

Hlavný projekt je tento koreň `CV-carier`; nepokračuj v starej kópii Documents/Codex. Pri úlohách o kariére čítaj relevantné časti `ZNALOSTI_A_KOMPETENCIE.md`; pri portfóliu `REALIZOVANE_PROJEKTY_A_PORTFOLIO.md`. Zachovaj originály. Pred zverejnením odlíš verejné informácie od interných podkladov.
