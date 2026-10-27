# Trvalé rozhodnutia

- Projekt je samostatný statický web. Obsah spravuje `src/site.mjs`, HTML generujú lokálne Node skripty a `dist/` je obnoviteľný build výstup mimo Git.
- Každá verejná stránka musí mať úplný SK/EN pár. Koreň `/` je neutrálny jazykový rozcestník; runtime preklad ani tichý fallback sa nepoužívajú.
- Light/dark téma rešpektuje systém a umožňuje explicitnú lokálnu voľbu. Jazyk a téma sú nezávislé.
- Záväzný vizuálny jazyk používa krémový alebo teplý tmavý podklad, tenkú systémovú bezpätkovú typografiu, oranžový akcent `#ff7900`, tlmenú modrú `#68a9af`, deliace čiary a code-native SVG.
- Landing a detailné stránky používajú otvorenú dvojstĺpcovú kompozíciu; na mobile sa skladajú do jedného stĺpca. Ovládacie prvky majú minimálne 44 × 44 px a viditeľný focus.
- Verejné profesijné texty zostávajú v schválenom rozsahu. Interné konfigurácie, topológia, účty, adresy, bezpečnostné zistenia, dôkazové podklady a neoverené tvrdenia sa nezverejňujú.
- HomeLab môže pomenovať potvrdené technológie a všeobecný rozsah, ale nie prevádzkové názvy, adresy, hosty, presnú topológiu ani pravidlá. Racková fotografia a starý SVG rack motív sa nepoužívajú.
- Foto a dron zostáva bez náhradných fotografií či metadát, kým používateľ nedodá a neschváli konkrétne médiá.
- GitHub je zdroj kódu; Cloudflare Pages je plánovaný hosting. `dist/`, veľké médiá, osobné podklady, pracovné prototypy a interné agentové denníky zostávajú mimo Git.
- Git push, Cloudflare deploy a DNS zmeny sa vykonávajú iba po samostatnom explicitnom schválení a kontrole cieľa.

- 2026-10-27: Schválená spoločná typografická mierka používa tokeny `--type-display/page/section/item/lead/body/meta/micro` podľa DESIGN_PLAYBOOK.md. Stropy sú 108/96/60/36/22 px, bežný text 16 px a významový pomocný text najmenej 14 px. Breakpointy menia rozloženie, nie túto mierku; mikrotext 12 px patrí iba nepodstatnej dekorácii.
