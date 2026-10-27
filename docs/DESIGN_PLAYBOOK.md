# Záväzný dizajnový a jazykový playbook

Platí pre všetkých ďalších agentov a všetky verejné stránky caco.space. Orchestrátor začlení povinnosť čítať tento dokument do projektových pravidiel. Zmeny pravidiel musia byť výslovne zaznamenané; jednotlivá implementácia ich nesmie potichu obísť. Dokument definuje cieľový stav, nie potvrdenie súladu aktuálneho kódu.

## Vizuálny systém

Východisko: DESIGN_V2, veľká tenká bezpätková typografia, krémový podklad, oranžová a tlmená modrá, asymetrický úvod, otvorené bloky. Bez gradientov, dekoratívnych tieňov a samoúčelných animácií. Farby referencie sú pracovné aproximácie, nie overené farby pôvodného webu.

Používať sémantické CSS premenné; nové farby nesmú vzniknúť ako lokálne výnimky.

| Token | Light | Dark | Použitie |
| --- | --- | --- | --- |
| `--paper` | `#f5f1e8` | `#242523` | Podklad stránky |
| `--surface` | `#e8e3d9` | `#30322f` | Vedľajšia plocha |
| `--ink` | `#252626` | `#f5f1e8` | Hlavný text, focus |
| `--muted` | `#6d6d67` | `#bcbcb3` | Sekundárny text |
| `--line` | `#d4d0c7` | `#65665e` | Dekoratívny oddeľovač |
| `--orange` | `#ff7900` | `#ff7900` | Akcentová plocha/dekorácia |
| `--blue` | `#68a9af` | `#68a9af` | Akcentová plocha/dekorácia |
| `--accent-text` | `#b74b00` | `#ff913d` | Oranžový text na hlavnom podklade |
| `--on-accent` | `#252626` | `#252626` | Text na oranžovej/modrej ploche |

Akcentová plocha používa `--on-accent` aj v dark mode; nepreberať na nej automaticky svetlý text. `--line` nie je dostatočným označením ovládacieho prvku; jeho hranica používa kontrastný `--ink`. Každú výslednú kombináciu overiť, vrátane hover/focus/disabled stavov.

## Typografia a mierka

- Font: `"Helvetica Neue", Helvetica, Arial, sans-serif`; žiadny externý font bez rozhodnutia. H1/H2 a výrazné názvy váha 300, bežný text a ovládanie 400.
- Schválená sémantická mierka (2026-10-27), pri základe 16 px:

| Token | Použitie | Veľkosť | Maximum |
| --- | --- | --- | --- |
| `--type-display` | meno na homepage, jazykový rozcestník | `clamp(3.5rem, 6.5vw, 6.75rem)` | 108 px |
| `--type-page` | titulok detailu a 404 | `clamp(3rem, 5.5vw, 6rem)` | 96 px |
| `--type-section` | sekcia a kapitola Praxe | `clamp(2.25rem, 3.5vw, 3.75rem)` | 60 px |
| `--type-item` | pozícia, škola, karta, princíp, formát | `clamp(1.5rem, 2vw, 2.25rem)` | 36 px |
| `--type-lead` | úvodný text/perex | `clamp(1.125rem, 1.35vw, 1.375rem)` | 22 px |
| `--type-body` | bežný text | `1rem` | 16 px |
| `--type-meta` | navigácia, dátum, technológie, poznámka, štítok | `.875rem` | 14 px |
| `--type-micro` | iba nepodstatný dekoratívny text | `.75rem` | 12 px |

- Rovnaká významová úroveň používa rovnaký token na každej stránke aj v breakpointoch. Lokálne zalomenie riešiť šírkou bloku a rozložením; neprepisovať mierku samostatnými `font-size`. Tým zostáva minimum display 56 px, titulok stránky 48 px, sekcia 36 px a položka 24 px.
- Riadkovanie: display a titulok stránky 1, sekcia 1.05, položka 1.15, perex a bežný text aspoň 1.6, pomocný text aspoň 1.5. Prestrkanie nadpisov približne `-.04em` až `-.05em`; overiť diakritiku a oba jazyky.
- Významový text nesmie byť menší než `.875rem` (14 px pri predvolenom základe). Mikrotext povoľovať iba v skutočne dekoratívnom obsahu, napríklad v `aria-hidden` ilustrácii; bodka loga je grafický symbol. Navigácia, stav, popis, ovládanie ani poznámka nie sú dekorácia.
- Odseky najviac 65 znakov na riadok; bez pevnej výšky textových blokov a bez ručne vložených zalomení závislých od jedného jazyka.
- Rozostupy: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 px, v implementácii v rem. Medzera obsahu 24–48 px, sekcie 80–96 px desktop / 48–64 px mobil.
- Kontajner najviac 1680 px; bočný okraj 5 % desktop / 6 % mobil, minimálne 16 px. Čiary 1 px, základný polomer 0; kruhy iba pre zmysluplné kruhové prvky a abstraktné ilustrácie.

## Komponenty a správanie

- Hlavička: značka, navigácia, prepínač jazyka a témy; všetko dostupné klávesnicou aj na mobile. Aktuálny odkaz označiť aj inak než farbou (`aria-current`).
- Hero: jeden H1, stručný úvod, jasný odkaz; geometrická ilustrácia nesmie prekrývať text a pri dekoratívnom použití má `aria-hidden="true"`.
- Rozcestník/projekty: otvorené riadky alebo bloky s 1 px oddeľovačom, názvom a popisom. Žiadne vnorené interaktívne prvky. Nedostupný projekt je textový stav, nie falošný odkaz.
- Odkazy v odseku podčiarknuť; akcia používa odkaz pre navigáciu, tlačidlo pre zmenu stavu. Ikonové ovládanie musí mať lokalizovaný prístupný názov.
- Hover je doplnok; focus je viditeľný obrys 2 px s odsadením minimálne 4 px. Klikateľná plocha najmenej 44 × 44 px. Formuláre majú viditeľné labely a lokalizované chyby, ktoré nie sú vyjadrené iba farbou.
- Pätička a spoločné komponenty majú rovnaké pravidlá aj obsahový rozsah v oboch jazykoch.

## Responzivita, prístupnosť a téma

- Východiskové breakpointy 900 a 640 px; pod 640 px jeden stĺpec. Obsah určuje prípadné ďalšie zlomy. Bez horizontálneho scrollu pri šírke 320 px a pri zväčšení textu na 200 %. Dlhší anglický aj slovenský text musí zostať celý dostupný.
- Zachovať sémantické landmarky, logické poradie nadpisov, skip odkaz, správne poradie focusu a alt texty. Dekoratívne obrázky majú prázdny alt. Informáciu neprenášať iba farbou alebo polohou.
- Cieľ WCAG 2.2 AA: text aspoň 4.5 : 1, veľký text 3 : 1, významové grafické hranice a stavy 3 : 1. Overiť reálne vykreslenie; tenká typografia nesmie znižovať čitateľnosť.
- Predvolene rešpektovať `prefers-color-scheme`. Viditeľná voľba je iba samostatné dvojstavové kruhové tlačidlo svetlá/tmavá; systém nie je položka UI. Bez uloženej preferencie sa používa systém, prvé kliknutie zvolí opak aktuálne zobrazenej témy a ďalšie kliknutia striedajú `light`/`dark` uložené lokálne. Pri nedostupnom úložisku funguje prepínanie počas návštevy. Téma je nezávislá od jazyka; použiť `color-scheme` a predísť bliknutiu opačnej témy. Bez JavaScriptu je tlačidlo skryté a funguje systémová téma.
- Obe témy overiť pre všetky komponenty. `prefers-reduced-motion` vypína nepodstatný pohyb aj plynulé rolovanie; obsah je dostupný bez animácie.

## Povinná dvojjazyčnosť a statické URL

Všetok verejný obsah musí existovať po slovensky aj anglicky: navigácia, stránky, metadáta, alt texty, prístupné názvy, chyby, 404, dokumenty na stiahnutie a text v obrázkoch. Vlastné názvy a kód sa neprekladajú; cudzojazyčný citát má označený jazyk a preložený kontext. Nezverejniť neúplný jazykový pár. Nepublikovať neoverené úspechy, kontakty ani odkazy.

- Generovať samostatné HTML v `/sk/` a `/en/`; napr. `/sk/projekty/` ↔ `/en/projects/`. Aj články a detailné stránky majú pár. `/` je statický neutrálny rozcestník s odkazmi „Slovenčina“ a „English“, bez automatického presmerovania podľa IP či jazyka prehliadača.
- Jediný build-time register párov má stabilné `pageId`, obe cesty, lokalizované metadáta a prípadné mapovanie kotiev. URL sa neprekladajú odhadom ani zámenou prefixu. Navigácia používa jazyk aktuálnej stránky.
- Prepínač „Slovenčina / English“ smeruje priamo na partnerskú stránku toho istého `pageId`, nie automaticky na homepage. Zachová zodpovedajúcu kotvu; neexistujúcu zahodí. Parametre zachová iba z explicitného zoznamu platného pre oba jazyky; ostatné zahodí. S bežným odkazom funguje aj bez JavaScriptu.
- Chýbajúci preklad blokuje publikovanie príslušného páru. Ak už publikovaná staršia stránka pár nemá, prepínač vedie na cieľový jazykový index s lokalizovaným oznámením o nedostupnom preklade; nikdy nevloží druhý jazyk do tela stránky. Neznáma URL vracia skutočnú 404 s lokalizovanými odkazmi; hosting musí obslúžiť jazykové 404 podľa prefixu.
- Každá stránka má `html lang="sk"` alebo `"en"`, vlastný absolútny canonical na `https://caco.space/.../` a vzájomné `rel="alternate" hreflang="sk"/"en"` iba na existujúce indexovateľné partnerské stránky. Jazykové varianty sa nekanonikalizujú na seba. `x-default` na `/` patrí iba k dvojici homepage a koreňovému rozcestníku; na detailoch ho vynechať. Sitemap obsahuje oba varianty a rovnaké párovanie. Zjednotiť trailing slash.
- Preklady sú redakčne pripravené a uložené v zdrojoch; renderujú sa pri builde. Žiadna runtime prekladová služba ani preklad cez klientské API. Chýbajúci kľúč je chyba buildu, nikdy tichý fallback na druhý jazyk. Kontrolovať aj titulok, description, OG, texty sociálnych náhľadov a prílohy.

## Definition of Done

- [ ] Zmena rešpektuje tokeny, typografiu, komponenty a zaznamenané rozhodnutia.
- [ ] Obsah aj metadáta sú overené, verejné a kompletné v SK/EN; žiadne interné podklady ani vymyslené fakty.
- [ ] Build overuje chýbajúce preklady, duplicitné cesty a neúplné páry; obe statické verzie fungujú bez JS.
- [ ] Prepínač zachová partnerskú stránku a platnú kotvu; fallback, hlboké URL aj skutočná 404 sú overené.
- [ ] `lang`, canonical, recipročné hreflang a sitemap zodpovedajú finálnym URL.
- [ ] Náhľad skontrolovaný v SK/EN × light/dark pri 320, 640, 900 a 1440 px; bez orezania a pretečenia, aj pri 200 % texte.
- [ ] Overené klávesnica, skip/focus, prístupné názvy, kontrast, reduced motion a preferencie témy.
- [ ] Orchestrátor overil build a vizuálny náhľad; odovzdanie a prípadné odchýlky sú v `docs/agents/`.
- [ ] Push, deploy ani DNS sa nevykonali bez explicitného schválenia používateľa.
