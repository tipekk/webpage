import { byId, storageNotice } from '../src/site.mjs';

const siteUrl = 'https://caco.space';
const socialImage = `${siteUrl}/assets/caco-space-social-thumbnail.png`;
const esc = value => String(value).replace(/[&<>"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[char]);
const other = lang => lang === 'sk' ? 'en' : 'sk';
const absolute = path => `https://caco.space${path}`;
// Separate pages enter at their content landmark. The header stays in ordinary
// document flow and becomes visible again when the visitor scrolls upward.
const contentEntry = path => `${path}#obsah`;

function meta(page, lang, content) {
  const partner = page.paths[other(lang)];
  const xDefault = page.id === 'home' ? '<link rel="alternate" hreflang="x-default" href="https://caco.space/">' : '';
  const locale = lang === 'sk' ? 'sk_SK' : 'en_US';
  return `<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>${esc(content.title)}</title><meta name="description" content="${esc(content.description)}"><link rel="canonical" href="${absolute(page.paths[lang])}"><link rel="alternate" hreflang="sk" href="${absolute(page.paths.sk)}"><link rel="alternate" hreflang="en" href="${absolute(page.paths.en)}">${xDefault}<meta property="og:type" content="website"><meta property="og:site_name" content="caco.space"><meta property="og:locale" content="${locale}"><meta property="og:title" content="${esc(content.title)}"><meta property="og:description" content="${esc(content.description)}"><meta property="og:url" content="${absolute(page.paths[lang])}"><meta property="og:image" content="${socialImage}"><meta property="og:image:secure_url" content="${socialImage}"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${esc(content.socialAlt)}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(content.title)}"><meta name="twitter:description" content="${esc(content.description)}"><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="${esc(content.socialAlt)}"><script src="/theme.js"></script><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/responsive.css"><link rel="stylesheet" href="/theme.css">`;
}

function tools(page, lang, content) {
  const labels = lang === 'sk'
    ? { group: 'Jazyk stránky', sk: 'Slovenčina', en: 'English', current: 'aktuálny jazyk', dark: 'Zapnúť tmavú tému', light: 'Zapnúť svetlú tému' }
    : { group: 'Page language', sk: 'Slovak', en: 'English', current: 'current language', dark: 'Switch to dark theme', light: 'Switch to light theme' };
  const segment = segmentLang => {
    const current = segmentLang === lang;
    const name = labels[segmentLang];
    return `<a data-lang-switch data-partner-anchors="${page.anchors.join(',')}" href="${page.paths[segmentLang]}" lang="${segmentLang}" hreflang="${segmentLang}" aria-label="${name}${current ? `, ${labels.current}` : ''}"${current ? ' aria-current="page"' : ''}>${segmentLang.toUpperCase()}</a>`;
  };
  return `<div class="header-tools"><div class="language-control" role="group" aria-label="${labels.group}">${segment('sk')}${segment('en')}</div><button class="theme-toggle" type="button" data-theme-toggle data-dark-label="${labels.dark}" data-light-label="${labels.light}" hidden aria-label="${labels.dark}"><svg aria-hidden="true" viewBox="0 0 24 24"><path class="theme-moon" d="M20 15.4A8 8 0 0 1 8.6 4 8 8 0 1 0 20 15.4Z"/><g class="theme-sun"><circle cx="12" cy="12" r="3.5"/><path d="M12 2v2.2M12 19.8V22M2 12h2.2M19.8 12H22M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M19.1 4.9l-1.6 1.6M6.5 17.5l-1.6 1.6"/></g></svg></button></div>`;
}

function header(page, lang, content, active) {
  const home = byId.home.paths[lang];
  const practice = byId.practice.paths[lang];
  const ids = ['o-mne', 'prax', 'projekty', 'solvio', 'objektiv'];
  const targets = [`${home}#o-mne`, contentEntry(practice), `${home}#projekty`, `${home}#solvio`, contentEntry(byId.photo.paths[lang])];
  return `<a class="skip" href="#obsah">${content.skip}</a><header class="top" data-anchors="${page.anchors.join(',')}"><a class="logo" href="${home}" aria-label="caco.space, ${content.nav[0]}">caco<span>●</span>space</a><nav aria-label="${lang === 'sk' ? 'Hlavná navigácia' : 'Main navigation'}">${targets.map((target, index) => `<a href="${target}"${active === ids[index] ? ' aria-current="page"' : ''}>${content.nav[index]}</a>`).join('')}</nav>${tools(page, lang, content)}</header>`;
}

function footer(lang, content) {
  return `<footer><a class="logo" href="${byId.home.paths[lang]}">caco<span>●</span>space</a><p>${content.footer} <a href="/#sukromie">${storageNotice[lang].title}</a></p><a href="#obsah">${content.back} ↑</a></footer>`;
}

function comet(lang) {
  const labels = lang === 'sk' ? ['01 / DÁTOVÝ PAKET', 'ODOSLANIE → PRÍJEM'] : ['01 / DATA PACKET', 'SEND → RECEIVE'];
  return `<div class="signal comet-signal" aria-hidden="true"><svg viewBox="0 0 560 360" xmlns="http://www.w3.org/2000/svg"><path class="comet-track" d="M24 288C172 288 198 72 536 72"/><path class="comet-ticks" d="M24 274v-9M24 302v9M536 58v-9M536 86v9"/><circle class="comet-terminal" cx="24" cy="288" r="3"/><circle class="comet-terminal" cx="536" cy="72" r="3"/><g class="comet-payload comet-payload-motion"><circle class="comet-envelope" r="14"/><path class="comet-tail" d="M-28 0H-9"/><circle class="comet-packet" r="5"/><animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path="M24 288C172 288 198 72 536 72"/></g><g class="comet-payload comet-payload-static" transform="translate(364 92) rotate(-12)"><circle class="comet-envelope" r="14"/><path class="comet-tail" d="M-28 0H-9"/><circle class="comet-packet" r="5"/></g></svg><div class="art-meta"><span>${labels[0]}</span><span>${labels[1]}</span></div></div>`;
}

function homeAssistantMark() {
  return `<svg class="home-assistant-mark" viewBox="0 0 160 160" aria-hidden="true" focusable="false"><path class="home-assistant-house" d="M80 14 16 70v76h128V70L80 14Z"/><path class="home-assistant-circuit" d="M80 122V70M80 96H52m28 0h28M52 96V70m56 26V70"/><circle cx="52" cy="61" r="10"/><circle cx="80" cy="61" r="10"/><circle cx="108" cy="61" r="10"/></svg>`;
}

export function homeLabCard(lang) {
  const c = byId.home.content[lang]; const path = byId.homelab.paths[lang];
  const entry = contentEntry(path);
  return `<article class="project home-lab"><a class="project-art home-lab-art" href="${entry}" aria-label="${c.homeLabAction}"><span class="home-lab-brand" aria-hidden="true">${homeAssistantMark()}</span></a><div class="project-info"><span class="tag">${c.homeLabTag}</span><h3>${c.labTitle}</h3><p>${c.labText}</p>${navigationAction(entry, c.homeLabAction)}</div></article>`;
}

function navigationAction(href, label, { hint = '', direction = 'right', className = '' } = {}) {
  const arrows = {
    right: 'M4 12h16m-7-7 7 7-7 7',
    left: 'M20 12H4m7-7-7 7 7 7',
    down: 'M12 4v16m-7-7 7 7 7-7',
    external: 'M6 18 18 6M6 6h12v12'
  };
  return `<a class="navigation-action${className ? ` ${className}` : ''}" href="${esc(href)}"><span class="navigation-action-copy"><strong>${esc(label)}</strong>${hint ? `<small>${esc(hint)}</small>` : ''}</span><span class="navigation-action-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="${arrows[direction]}"/></svg></span></a>`;
}

export function renderHome(lang) {
  const page = byId.home; const c = page.content[lang];
  const heading = (id, kicker, title) => `<div class="landing-heading"><p class="eyebrow">${kicker}</p><h2 id="${id}">${title}</h2></div>`;
  return `<!doctype html><html lang="${lang}"><head>${meta(page, lang, c)}<link rel="stylesheet" href="/landing.css"></head><body class="landing">${header(page, lang, c)}<main id="obsah">
  <section class="hero" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="dot"></span> ${c.heroKicker}</p><h1 id="hero-title" class="hero-name">Tomáš<br><em>Čačo</em></h1><div class="hero-bottom"><p>${c.heroIntro}</p><a class="round-link" href="#o-mne" aria-label="${c.nav[0]}"><span aria-hidden="true">↓</span></a></div><p class="type-line" data-type-line><span>${lang === 'sk' ? 'SYSTÉMY / SIETE / DOKUMENTÁCIA' : 'SYSTEMS / NETWORKS / DOCUMENTATION'}</span><span class="type-clone" aria-hidden="true"></span></p></div>${comet(lang)}</section>
  <section aria-labelledby="title-o-mne" id="o-mne" class="landing-section about reveal">${heading('title-o-mne', c.aboutKicker, c.aboutTitle)}<div class="landing-copy"><p class="large">${c.aboutLead}</p><p>${c.aboutText}</p>${navigationAction(byId.cv.paths[lang], c.cvAction, { hint: c.cvHint })}</div></section>
  <section aria-labelledby="title-prax" id="prax" class="landing-section practice-teaser reveal">${heading('title-prax', c.practiceKicker, c.practiceTitle)}<div class="landing-copy"><p class="large">${c.practiceLead}</p><p>${c.practiceText}</p>${navigationAction(byId.practice.paths[lang], c.practiceAction)}</div></section>
  <section aria-labelledby="title-projekty" id="projekty" class="landing-section projects reveal">${heading('title-projekty', c.projectKicker, c.projectTitle)}<div class="landing-copy"><p class="large">${c.projectAside}</p></div><div class="project-grid"><article class="project game"><a class="project-art project-game-link" href="https://orbit-shifter.caco.space" aria-label="${c.gamePlayLabel}"><span aria-hidden="true">PLAY<span class="play-triangle">▶</span></span></a><div class="project-info"><span class="tag">${lang === 'sk' ? 'HRA / VLASTNÝ PROJEKT' : 'GAME / PERSONAL PROJECT'}</span><h3>${c.gameTitle}</h3><p>${c.gameText}</p>${navigationAction('https://orbit-shifter.caco.space', c.gamePlayLabel, { hint: c.gameStatus, direction: 'external' })}</div></article>${homeLabCard(lang)}</div></section>
  <section aria-labelledby="title-solvio" id="solvio" class="landing-section company reveal">${heading('title-solvio', c.solvioKicker, c.solvioTitle)}<div class="landing-copy"><p class="large">${c.solvioLead}</p><p>${c.solvioText}</p>${navigationAction('https://solvio.sk/', c.solvioAction, { direction: 'external' })}</div></section>
  <section aria-labelledby="title-objektiv" id="objektiv" class="landing-section lens reveal">${heading('title-objektiv', c.lensKicker, c.lensTitle)}<div class="landing-copy"><p class="large">${c.lensText}</p><p class="lens-status">${c.lensAction}</p></div></section>
  </main>${footer(lang, c)}</body></html>`;
}

export function renderPractice(lang) {
  const page = byId.practice; const c = page.content[lang];
  const chapterNav = c.chapters.map((chapter, index) => `<li><a href="#prax-0${index + 1}"><span>0${index + 1}</span>${chapter[1]}</a></li>`).join('');
  const chapters = c.chapters.map((chapter, index) => `<li id="prax-0${index + 1}" class="story-chapter reveal"><p class="story-number">${chapter[0]}</p><h2>${chapter[2]}</h2><p>${chapter[3]}</p><p class="story-result"><span>${c.result}</span>${chapter[4]}</p><p class="story-scope">${c.scope}: ${chapter[5]}</p></li>`).join('');
  return `<!doctype html><html lang="${lang}"><head>${meta(page, lang, c)}</head><body>${header(page, lang, c, 'prax')}<main id="obsah"><section aria-labelledby="title-prax" id="prax" class="work-story work-story-page"><div class="story-heading"><div class="story-heading-copy"><p class="eyebrow">${c.kicker}</p><p class="large">${c.intro}</p></div><h1 id="title-prax" class="story-page-title">${c.headline}</h1></div><div class="story-layout"><nav class="story-nav" aria-label="${c.way}"><p>${c.way}</p><ol>${chapterNav}</ol></nav><ol class="story-chapters">${chapters}</ol></div><p id="story-end" class="story-note">${c.note}</p><div class="story-next">${navigationAction(`${byId.home.paths[lang]}#projekty`, c.next)}</div></section></main>${footer(lang, c)}</body></html>`;
}

export function renderCv(lang) {
  const page = byId.cv; const c = page.content[lang];
  const renderTimeline = entries => entries.map(([period, title, detail, current]) => `<li class="cv-timeline-item"><p class="cv-period">${period}${current ? `<span>${c.present}</span>` : ''}</p><span class="cv-terminal" aria-hidden="true"></span><div><h3>${title}</h3><p>${detail}</p></div></li>`).join('');
  const career = renderTimeline(c.career);
  const education = renderTimeline(c.education);
  const expertise = c.expertise.map(([term, description, technologies]) => `<div class="cv-expertise-item reveal"><dt>${term}</dt><dd><p>${description}</p><p class="cv-technologies">${technologies}</p></dd></div>`).join('');
  return `<!doctype html><html lang="${lang}"><head>${meta(page, lang, c)}</head><body>${header(page, lang, c)}<main id="obsah"><section id="profil" class="cv-hero" aria-labelledby="cv-title"><div class="cv-hero-copy"><p class="eyebrow"><span class="dot"></span> ${c.kicker}</p><h1 id="cv-title">${c.headline}</h1><p class="large">${c.intro}</p><nav class="cv-hero-actions" aria-label="${lang === 'sk' ? 'Navigácia profilu' : 'Profile navigation'}">${navigationAction('#cesta', c.explore, { direction: 'down' })}${navigationAction(byId.practice.paths[lang], c.practiceAction)}</nav><p class="type-line" data-type-line><span>${c.micro}</span><span class="type-clone" aria-hidden="true"></span></p></div></section><section id="cesta" class="cv-section cv-journey" aria-labelledby="journey-title"><p class="eyebrow">${c.journeyKicker}</p><h2 id="journey-title">${c.journeyTitle}</h2><ol class="cv-timeline">${career}</ol></section><section id="vzdelanie" class="cv-section cv-education" aria-labelledby="education-title"><p class="eyebrow">${c.educationKicker}</p><div class="cv-section-heading"><h2 id="education-title">${c.educationTitle}</h2><p class="cv-section-range" aria-hidden="true">${c.educationRange}</p></div><ol class="cv-timeline">${education}</ol></section><section id="znalosti" class="cv-section cv-expertise" aria-labelledby="expertise-title"><p class="eyebrow">${c.expertiseKicker}</p><h2 id="expertise-title">${c.expertiseTitle}</h2><dl data-reveal-group>${expertise}</dl></section><section id="experimenty" class="cv-section cv-experiments" aria-labelledby="experiments-title"><p class="eyebrow">${c.experimentsKicker}</p><div><h2 id="experiments-title">${c.experimentsTitle}</h2><p class="large">${c.experiments}</p></div></section><section id="rozsah" class="cv-scope" aria-label="${lang === 'sk' ? 'Rozsah profilu' : 'Profile scope'}"><div>${navigationAction(byId.practice.paths[lang], c.scopePractice)}${navigationAction(byId.home.paths[lang], c.scopeHome, { direction: 'left' })}</div><p>${c.scope}</p></section></main>${footer(lang, c)}</body></html>`;
}

function rackDeviceIcon(index) {
  const icons = [
    '<rect x="6" y="6" width="12" height="12" rx="1"/><rect x="9.5" y="9.5" width="5" height="5" rx=".5"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>',
    '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    '<rect x="3" y="5" width="18" height="6" rx="1"/><path d="M6 11v3M9.5 11v5M13 11v3M16.5 11v5M20 11v3"/>',
    '<rect x="5" y="3" width="14" height="8" rx="1"/><rect x="5" y="13" width="14" height="8" rx="1"/><circle cx="16" cy="7" r=".6" class="rack-icon-fill"/><circle cx="16" cy="17" r=".6" class="rack-icon-fill"/><path d="M8 7h4M8 17h4"/>',
    '<rect x="4" y="7" width="14" height="10" rx="1.5"/><path d="M18 10.5h2v3h-2M12.5 9.5 10 13h2.5L10 16.5"/>'
  ];
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" focusable="false">${icons[index]}</svg>`;
}

function renderRack(content) {
  const holes = Array.from({ length: 12 }, () => '<span></span>').join('');
  const shelfHoles = Array.from({ length: 11 }, () => '<span></span>').join('');
  const units = content.rackUnits.map((unit, index) => {
    const [name, type, description, detail, tags, status, height, shelf] = unit;
    const statusLabel = status === 'online' ? content.rackOnline : content.rackOffline;
    return `<li><button class="rack-unit${shelf ? ' rack-unit--shelf' : ''}" type="button" data-rack-unit data-u="${esc(height)}" data-name="${esc(name)}" data-type="${esc(type)}" data-description="${esc(description)}" data-detail="${esc(detail)}" data-tags="${esc(tags.join('|'))}" data-status="${esc(status)}" aria-label="${esc(name)}, ${esc(statusLabel)}" aria-expanded="false" aria-controls="rack-info-panel"><span class="rack-unit-led" data-status="${esc(status)}" aria-hidden="true"></span><span class="rack-unit-body"><span class="rack-unit-name">${esc(name)}</span></span><span class="rack-unit-art" aria-hidden="true">${rackDeviceIcon(index)}</span>${shelf ? `<span class="rack-shelf-holes" aria-hidden="true">${shelfHoles}</span>` : ''}</button></li>`;
  }).join('');
  return `<section id="infrastruktura" class="homelab-rack" aria-labelledby="rack-title" data-rack data-more-label="${esc(content.rackMore)}" data-less-label="${esc(content.rackLess)}" data-online-label="${esc(content.rackOnline)}" data-offline-label="${esc(content.rackOffline)}"><div class="homelab-rack-heading"><p class="eyebrow">${esc(content.rackKicker)}</p><h2 id="rack-title">${esc(content.rackTitle)}</h2></div><div class="rack-demo"><div class="rack-cabinet"><div class="rack-crossbar rack-crossbar--top"><span class="rack-bolt rack-bolt--start"></span><span class="rack-cabinet-label">DeskPi RackMate T1 · 10″</span><span class="rack-bolt rack-bolt--end"></span></div><div class="rack-cabinet-body"><div class="rack-rail" aria-hidden="true"><span class="rack-rail-holes">${holes}</span></div><ol class="rack-units">${units}</ol><div class="rack-rail" aria-hidden="true"><span class="rack-rail-holes">${holes}</span></div></div><div class="rack-crossbar rack-crossbar--bottom"><span class="rack-bolt rack-bolt--start"></span><span class="rack-bolt rack-bolt--end"></span></div><div class="rack-feet" aria-hidden="true"><span></span><span></span></div><p class="rack-foot">${esc(content.rackFoot)}</p></div><div class="rack-info-panel" id="rack-info-panel" data-filled="false" role="region" aria-live="polite" aria-label="${esc(content.rackPanelLabel)}"><p class="rack-hint">${esc(content.rackHint)}</p><div class="rack-detail"><span class="rack-detail-status"><span class="rack-status-dot" data-rack-detail-dot></span><span data-rack-detail-status></span></span><h3 class="rack-detail-name" data-rack-detail-name></h3><p class="rack-detail-type" data-rack-detail-type></p><p class="rack-detail-description" data-rack-detail-description></p><button type="button" class="rack-detail-more" data-rack-more aria-expanded="false" aria-controls="rack-detail-more-text">${esc(content.rackMore)}</button><p class="rack-detail-more-text" id="rack-detail-more-text" data-rack-detail-more data-open="false"></p><ul class="rack-detail-tags" data-rack-detail-tags></ul></div></div></div></section>`;
}

export function renderHomeLab(lang) {
  const page = byId.homelab; const c = page.content[lang];
  const principles = c.principles.map(([number, title, text]) => `<li class="homelab-principle reveal"><span>${number}</span><h3>${title}</h3><p>${text}</p></li>`).join('');
  return `<!doctype html><html lang="${lang}"><head>${meta(page, lang, c)}</head><body>${header(page, lang, c, 'projekty')}<main id="obsah" class="homelab-page"><section id="homelab" class="homelab-hero" aria-labelledby="homelab-title"><div class="homelab-hero-copy"><p class="eyebrow">${c.kicker}</p><p class="large">${c.intro}</p></div><h1 id="homelab-title">${c.headline}</h1></section><section id="pristup" class="homelab-approach reveal" aria-labelledby="approach-title"><p class="eyebrow">${c.approachKicker}</p><div><h2 id="approach-title">${c.approachTitle}</h2><p class="large">${c.approachLead}</p><p>${c.approachText}</p></div></section><section id="principy" class="homelab-principles" aria-labelledby="principles-title"><div class="homelab-section-heading"><p class="eyebrow">${c.principlesKicker}</p><h2 id="principles-title">${c.principlesTitle}</h2></div><ol data-reveal-group>${principles}</ol></section>${renderRack(c)}<section id="hranice" class="homelab-scope reveal" aria-labelledby="scope-title"><div><p class="eyebrow">${c.scopeKicker}</p><h2 id="scope-title">${c.scopeTitle}</h2></div><div><p class="large">${c.scope}</p>${navigationAction(byId.home.paths[lang], c.homeAction, { direction: 'left' })}</div></section></main>${footer(lang, c)}</body></html>`;
}

function photoPreview() {
  return `<svg class="photo-preview-art" viewBox="0 0 720 460" aria-hidden="true" focusable="false"><path class="photo-preview-frame" d="M74 58h572v344H74z"/><path class="photo-preview-cross" d="M360 58v344M74 230h572"/><path class="photo-preview-track" d="M74 330h126v-66h162v-98h284"/><circle class="photo-preview-node" cx="200" cy="330" r="6"/><circle class="photo-preview-node" cx="362" cy="264" r="6"/><circle class="photo-preview-node" cx="646" cy="166" r="6"/><path class="photo-preview-corner" d="M92 86h42M92 86v42M628 374h-42M628 374v-42"/></svg>`;
}

export function renderPhoto(lang) {
  const page = byId.photo; const c = page.content[lang];
  const formats = c.formats.map(([number, title, text]) => `<li class="photo-format reveal"><span>${number}</span><h3>${title}</h3><p>${text}</p></li>`).join('');
  return `<!doctype html><html lang="${lang}"><head>${meta(page, lang, c)}</head><body>${header(page, lang, c, 'objektiv')}<main id="obsah" class="photo-page"><section id="obraz" class="photo-hero" aria-labelledby="photo-title"><div class="photo-hero-copy"><p class="eyebrow"><span class="dot"></span> ${c.kicker}</p><h1 id="photo-title">${c.headline}</h1><p class="large">${c.intro}</p><p class="type-line" data-type-line><span>${c.micro}</span><span class="type-clone" aria-hidden="true"></span></p></div></section><section id="prvy-material" class="photo-empty reveal" aria-labelledby="empty-title"><div class="photo-empty-art">${photoPreview()}<p>${c.emptyLabel}</p></div><div><p class="eyebrow">${c.emptyKicker}</p><h2 id="empty-title">${c.emptyTitle}</h2><p class="large">${c.emptyText}</p></div></section><section id="skladba" class="photo-structure" aria-labelledby="structure-title"><div class="photo-structure-heading"><p class="eyebrow">${c.structureKicker}</p><div><h2 id="structure-title">${c.structureTitle}</h2><p class="large">${c.structureLead}</p></div></div><ol id="formaty" data-reveal-group>${formats}</ol></section><section class="photo-next reveal" aria-labelledby="next-title"><div><p class="eyebrow">${c.nextKicker}</p><h2 id="next-title">${c.nextTitle}</h2></div><div><p class="large">${c.nextText}</p>${navigationAction(byId.home.paths[lang], c.homeAction, { direction: 'left' })}</div></section></main>${footer(lang, c)}</body></html>`;
}

export function renderSelector() {
  const notice = `<details id="sukromie" class="storage-notice"><summary><span lang="sk">Cookies a súkromie</span> / <span lang="en">Cookies and privacy</span></summary><div class="storage-notice-content">${['sk', 'en'].map(lang => `<div lang="${lang}"><h2>${esc(storageNotice[lang].title)}</h2><p>${esc(storageNotice[lang].body)}</p></div>`).join('')}</div></details>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>caco.space</title><meta name="description" content="Choose a language for caco.space."><link rel="canonical" href="${siteUrl}/"><link rel="alternate" hreflang="sk" href="${siteUrl}/sk/"><link rel="alternate" hreflang="en" href="${siteUrl}/en/"><link rel="alternate" hreflang="x-default" href="${siteUrl}/"><meta property="og:type" content="website"><meta property="og:site_name" content="caco.space"><meta property="og:locale" content="en_US"><meta property="og:title" content="caco.space"><meta property="og:description" content="Choose a language for caco.space."><meta property="og:url" content="${siteUrl}/"><meta property="og:image" content="${socialImage}"><meta property="og:image:secure_url" content="${socialImage}"><meta property="og:image:type" content="image/png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background."><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="caco.space"><meta name="twitter:description" content="Choose a language for caco.space."><meta name="twitter:image" content="${socialImage}"><meta name="twitter:image:alt" content="Abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background."><script src="/theme.js"></script><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/responsive.css"><link rel="stylesheet" href="/theme.css"></head><body class="language-selector"><main id="obsah" class="selector-main"><a class="logo" href="/" aria-label="caco.space">caco<span>●</span>space</a><p class="eyebrow"><span class="dot"></span> PERSONAL SPACE</p><h1>Choose your <em>language.</em></h1><p class="selector-intro">Vyberte si jazyk. / Choose a language.</p><div class="selector-links"><a href="/sk/"><strong>Slovenčina</strong><span>Pokračovať →</span></a><a href="/en/" lang="en"><strong>English</strong><span>Continue →</span></a></div>${notice}</main></body></html>`;
}

export function renderNotFound(lang) {
  const sk = lang === 'sk'; const home = byId.home.paths[lang];
  const title = sk ? 'Stránka sa nenašla — caco.space' : 'Page not found — caco.space';
  const heading = sk ? 'Táto cesta tu nie je.' : 'This path is not here.';
  const body = sk ? 'Skontrolujte adresu alebo sa vráťte na úvodnú stránku.' : 'Check the address or return to the home page.';
  const link = sk ? 'Späť na úvod' : 'Back to home';
  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="referrer" content="no-referrer"><title>${title}</title><meta name="robots" content="noindex"><script src="/theme.js"></script><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/responsive.css"><link rel="stylesheet" href="/theme.css"></head><body><main class="not-found"><a class="logo" href="${home}">caco<span>●</span>space</a><p class="eyebrow">404</p><h1>${heading}</h1><p>${body}</p><a class="button" href="${home}">${link} <span aria-hidden="true">→</span></a></main></body></html>`;
}
