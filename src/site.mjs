const siteUrl = 'https://caco.space';

export const pages = [
  {
    id: 'home',
    paths: { sk: '/sk/', en: '/en/' },
    anchors: ['o-mne', 'prax', 'projekty', 'solvio', 'objektiv'],
    content: {
      sk: {
        title: 'Tomáš Čačo — IT infraštruktúra a vlastná tvorba',
        description: 'Osobný priestor Tomáša Čača: IT prevádzka, vlastná tvorba, Solvio a obraz mimo obrazovky.',
        socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'],
        heroKicker: 'TOMÁŠ ČAČO / OSOBNÝ PRIESTOR',
        heroIntro: 'IT prevádzka, vlastná tvorba a svet cez objektív. Rôzne smery. Jeden osobný priestor.',
        aboutKicker: '01 / O MNE', aboutTitle: 'IT v každodennej praxi.',
        aboutLead: 'V IT sa zameriavam na každodennú prevádzku služieb, zálohovanie, siete, identity a technickú dokumentáciu.',
        aboutText: 'Pri práci prepájam správu systémov s praktickým overovaním a podkladmi, ktoré pomáhajú udržať služby zrozumiteľné a použiteľné.',
        practiceKicker: '02 / PRAX', practiceTitle: 'Vybrané realizácie.',
        practiceLead: 'Anonymizovaný príbeh práce v citlivom prevádzkovom prostredí: čo bolo potrebné urobiť, čo som overil a kde sú hranice tvrdení.',
        practiceText: 'Detailná stránka ukazuje spôsob práce od orientácie v službách cez prístupy a obnovu až po riadenú zmenu a dokumentáciu.',
        practiceAction: 'Pozrieť moju prax',
        projectKicker: '03 / VLASTNÁ TVORBA', projectTitle: 'Vlastné projekty.', projectAside: 'Miesto pre malé experimenty aj väčšie nápady.',
        gameTitle: 'Orbit Shifter', gameText: 'Vlastná hra je dostupná priamo online.', gamePlayLabel: 'Otvoriť hru Orbit Shifter', gameStatus: 'Dostupné online',
        homeLabTag: 'HOMELAB / DOMÁCA AUTOMATIZÁCIA', homeLabAction: 'Pozrieť HomeLab', homeLabImageAlt: 'Domáci rack s prepojenými zariadeniami.', labTitle: 'HomeLab', labText: 'Home Assistant, približne 60 Zigbee zariadení a prepojenie s Apple HomeKit aj Google Home. Osobný projekt, v ktorom prepájam automatizáciu, integrácie a správu domácej infraštruktúry.',
        preparing: 'Pripravujem',
        solvioKicker: '04 / FIRMA', solvioTitle: 'Solvio.', solvioLead: 'Firemné IT riešenia majú vlastný priestor. Volá sa Solvio.', solvioText: 'Viac o službách a možnostiach spolupráce nájdete na firemnom webe.', solvioAction: 'Spoznať Solvio',
        lensKicker: '05 / MIMO OBRAZOVKY', lensTitle: 'Foto a dron.', lensText: 'Na sekcii s osobnými fotografiami a zábermi z dronu sa pracuje. Obsah doplním neskôr.', lensAction: 'Pripravuje sa',
        cvAction: 'Otvoriť celé CV', cvHint: 'Kariérna chronológia, vzdelanie a oblasti znalostí.',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Tomáš Čačo — IT infrastructure and personal projects',
        description: 'Tomáš Čačo’s personal space for IT operations, personal projects, Solvio and visual work.',
        socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'],
        heroKicker: 'TOMÁŠ ČAČO / PERSONAL SPACE',
        heroIntro: 'IT operations, personal projects and a view through the lens. Different directions. One personal space.',
        aboutKicker: '01 / ABOUT', aboutTitle: 'IT in everyday practice.',
        aboutLead: 'My IT focus is the day-to-day operation of services, backups, networks, identities and technical documentation.',
        aboutText: 'I connect systems administration with practical verification and working notes that keep services understandable and usable.',
        practiceKicker: '02 / PRACTICE', practiceTitle: 'Selected work.',
        practiceLead: 'An anonymised account of work in a sensitive operational setting: what needed doing, what I verified and the boundaries of each claim.',
        practiceText: 'The detailed page follows the work from understanding services through access and recovery to controlled change and documentation.',
        practiceAction: 'See my practice',
        projectKicker: '03 / PERSONAL WORK', projectTitle: 'Personal projects.', projectAside: 'A space for small experiments and larger ideas.',
        gameTitle: 'Orbit Shifter', gameText: 'A personal game available directly online.', gamePlayLabel: 'Open Orbit Shifter', gameStatus: 'Available online',
        homeLabTag: 'HOMELAB / HOME AUTOMATION', homeLabAction: 'View HomeLab', homeLabImageAlt: 'A home rack with connected devices.', labTitle: 'HomeLab', labText: 'Home Assistant, around 60 Zigbee devices and connections to Apple HomeKit and Google Home. A personal project combining automation, integrations and home infrastructure administration.',
        preparing: 'In progress',
        solvioKicker: '04 / COMPANY', solvioTitle: 'Solvio.', solvioLead: 'Business IT solutions have their own space. It is called Solvio.', solvioText: 'Find services and collaboration options on the company website.', solvioAction: 'Meet Solvio',
        lensKicker: '05 / BEYOND THE SCREEN', lensTitle: 'Photo and drone.', lensText: 'This section for personal photographs and drone footage is in progress. I will add the content later.', lensAction: 'Coming soon',
        cvAction: 'View full CV', cvHint: 'Career timeline, education and areas of expertise.',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'practice',
    paths: { sk: '/sk/prax/', en: '/en/practice/' },
    anchors: ['prax', 'prax-01', 'prax-02', 'prax-03', 'prax-04', 'prax-05', 'prax-06', 'story-end'],
    content: {
      sk: {
        title: 'Prax — Tomáš Čačo', description: 'Konkrétne realizácie v IT prevádzke: obnova služby, oddelenie oprávnení, segmentácia siete, aktualizácie, cloudový audit a dokumentácia.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'PRAX / VYBRANÉ REALIZÁCIE', headline: 'Od zálohy k obnovenej službe.',
        intro: 'Pri správe IT prepájam konfiguráciu, praktické kontroly a dokumentáciu. Tieto realizácie ukazujú môj podiel na práci aj konkrétny rozsah overenia.',
        backHome: 'Späť na úvod', way: 'Vybrané realizácie', skipStory: 'Prejsť na záver', result: 'Doložený výsledok', scope: 'Rozsah overenia', note: 'Príklady sú anonymizované a opisujú vybrané činnosti v konkrétnom rozsahu. Jednotlivé testy nepokrývajú celé prostredie. Technické podklady a interné konfigurácie zostávajú neverejné.', next: 'Pozrieť ďalšie projekty', footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá',
        chapters: [
          ['01 / OBNOVA', 'Obnova služby', 'Obnovený kontajner. Skontrolované služby.', 'Pri správe zálohovania som sa podieľal na testoch obnovy monitorovacieho kontajnera z lokálnej aj externej zálohy. Po obnove nasledoval štart a kontrola služieb; výsledky sa zaznamenali do dokumentácie.', 'Kontajner sa v oboch testoch spustil a kontrolované monitorovacie služby bežali.', 'Overená bola vybraná inštancia a stav jej služieb. Test nepotvrdzuje obnovu celého prostredia, databáz ani doručenie všetkých alarmov.'],
          ['02 / OPRÁVNENIA', 'Práva k zálohám', 'Odoslať zálohu. Bez práva ju zmazať.', 'Pri externom zálohovaní som pracoval s oddelenými oprávneniami na odosielanie a obnovu. Súčasťou overenia bol pokus odstrániť snapshot pomocou odosielacieho oprávnenia.', 'Mazanie bolo odmietnuté a snapshot zostal zachovaný.', 'Výsledok potvrdzuje konkrétnu hranicu oprávnení. Nie je dôkazom absolútnej nemennosti záloh ani ochrany pred každým scenárom útoku.'],
          ['03 / SIEŤ', 'Segmentácia siete', 'Oddeliť prevádzku podľa jej úlohy.', 'Spravoval som vybrané pravidlá medzi sieťovými zónami a preveroval komunikáciu medzi nimi. Konfiguráciu a výsledky vybraných prístupových testov som zachytával v prevádzkových podkladoch.', 'Prevádzkovaná segmentácia mala zdokumentované pravidlá a vybrané overené komunikačné cesty.', 'Ide o správu a kontrolu vybraných častí existujúcej siete. Úplný test všetkých ciest ani výlučný pôvodný návrh celej siete sa netvrdí.'],
          ['04 / AKTUALIZÁCIA', 'Kontrolovaná aktualizácia', 'Kontrola pred zásahom. Overenie po ňom.', 'S asistenciou AI som pracoval na PowerShell postupe aktualizácie dodávateľskej aplikácie: kontrola balíka a jeho integrity, záloha pred zásahom a následná kontrola spustenia aj verzie. Postup sa ladil podľa reálneho priebehu.', 'Jeden produkčný upgrade je zdokumentovaný vrátane spustenia aplikácie, HTTP odpovede a výslednej verzie. Podľa zisteného formátu logu sa upravila detekcia inicializácie.', 'Ďalší upgrade po tejto úprave nie je doložený. Kontrola zálohovacieho archívu nebola testom obnovy databázy; automatický návrat na pôvodnú verziu nie je potvrdený.'],
          ['05 / CLOUD', 'Microsoft 365 / Entra', 'Audit s dôkazmi aj otvorenými bodmi.', 'Zmapoval som cloudové identity, roly a licencie a kontroloval nastavenia autentifikácie a zdieľania. Súčasťou práce bolo overenie vybraných TOTP prihlásení a obnovy testovacieho dokumentu z Koša.', 'Základný konfiguračný audit bol uzavretý s evidovanými výhradami. Vybrané prihlásenia a obnova testovacieho dokumentu boli úspešné.', 'Nejde o certifikovaný bezpečnostný audit ani potvrdenie plošného vynútenia MFA. Test dokumentu nepokrýva úplnú obnovu cloudových dát.'],
          ['06 / DOKUMENTÁCIA', 'Wiki a pracovné podklady', 'Od prevádzkovej wiki k dohľadateľným podkladom.', 'Konfiguroval som internú wiki, pripravoval členenie stránok a riadený prístup k dokumentácii. Dodával som technické informácie a kontroloval opravy pri tvorbe AI-asistovaného pracovného registra aktív a podkladov pre externé bezpečnostné posúdenie.', 'Prevádzkovaná znalostná báza mala oddelené oprávnenia. Pripravené boli pracovné výstupy pre evidenciu aktív a posúdenie nedostatkov.', 'Prevádzka wiki a existencia pracovných podkladov sú odlišné výsledky. Formálne schválenie týchto podkladov ani vloženie všetkých novších auditných textov do wiki nie sú potvrdené.']
        ]
      },
      en: {
        title: 'Practice — Tomáš Čačo', description: 'Concrete IT operations work: service recovery, separated permissions, network segmentation, updates, a cloud configuration review and documentation.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'PRACTICE / SELECTED WORK', headline: 'From backup to restored service.',
        intro: 'In IT administration, I connect configuration, practical checks and documentation. These examples show my contribution and the specific scope of verification.',
        backHome: 'Back to home', way: 'Selected work', skipStory: 'Go to the closing note', result: 'Documented outcome', scope: 'Verification scope', note: 'These anonymised examples describe selected activities within a specific scope. Individual tests do not cover the entire environment. Technical records and internal configurations remain private.', next: 'View other projects', footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark',
        chapters: [
          ['01 / RECOVERY', 'Service recovery', 'Container restored. Services checked.', 'As part of backup administration, I participated in restoring a monitoring container from local and external backups. Each restore was followed by startup and service checks, with the results recorded in documentation.', 'The container started in both tests, and the checked monitoring services were running.', 'Verification covered one selected instance and the state of its services. The tests do not establish recovery of the entire environment or databases, or delivery of every alert.'],
          ['02 / PERMISSIONS', 'Backup permissions', 'Send a backup. Without permission to delete it.', 'For external backups, I worked with separate permissions for sending backups and restoring them. Verification included an attempt to delete a snapshot using the sending permission.', 'Deletion was denied, and the snapshot remained intact.', 'The result confirms a specific permission boundary. It does not establish absolute backup immutability or protection against every attack scenario.'],
          ['03 / NETWORK', 'Network segmentation', 'Separate traffic by its purpose.', 'I administered selected rules between network zones and checked communication between them. I recorded configuration and selected access test results in operational documentation.', 'The operational segmentation had documented rules and selected verified communication paths.', 'This covers administration and checks of selected parts of an existing network. It does not claim a complete test of every path or sole original design of the entire network.'],
          ['04 / UPDATE', 'Controlled update', 'Checks before the change. Verification after it.', 'With AI assistance, I worked on a PowerShell update procedure for a vendor application: package and integrity checks, a backup before the change, and subsequent startup and version checks. The procedure was refined based on an actual run.', 'One production upgrade is documented, including application startup, an HTTP response and the resulting version. Initialization detection was adjusted to match the observed log format.', 'A subsequent upgrade after this adjustment is not documented. Checking the backup archive was not a database restore test; automatic rollback is unconfirmed.'],
          ['05 / CLOUD', 'Microsoft 365 / Entra', 'A review with evidence and open points.', 'I mapped cloud identities, roles and licences and reviewed authentication and sharing settings. The work included checking selected TOTP sign-ins and restoring a test document from the Recycle Bin.', 'The basic configuration review was closed with recorded reservations. The selected sign-ins and test document recovery succeeded.', 'This was not a certified security audit or confirmation of organisation-wide MFA enforcement. The document test does not cover complete recovery of cloud data.'],
          ['06 / DOCUMENTATION', 'Wiki and working records', 'From an operational wiki to traceable records.', 'I configured an internal wiki, prepared its page structure and controlled access to documentation. I supplied technical information and checked corrections while working on an AI-assisted draft asset register and materials for external security assessment.', 'The operational knowledge base had separated permissions. Working records were prepared for asset tracking and gap assessment.', 'Operating the wiki and preparing draft records are distinct outcomes. Formal approval of these records and publication of all newer audit texts in the wiki are unconfirmed.']
        ]
      }
    }
  }
  ,
  {
    id: 'cv',
    paths: { sk: '/sk/cv/', en: '/en/cv/' },
    anchors: ['profil', 'cesta', 'vzdelanie', 'znalosti', 'experimenty', 'rozsah'],
    content: {
      sk: {
        title: 'Tomáš Čačo — CV | IT infraštruktúra a prevádzka',
        description: 'Kariérny prehľad Tomáša Čača: IT infraštruktúra, systémová správa, siete, zálohovanie a technická dokumentácia.',
        socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'],
        kicker: 'TOMÁŠ ČAČO / CV', headline: 'IT infraštruktúra a prevádzka.',
        intro: 'IT špecialista so zameraním na prevádzku infraštruktúry, systémovú správu, siete, zálohovanie, identity a technickú dokumentáciu. Praktickú správu služieb prepájam s overovaním a zrozumiteľnými prevádzkovými podkladmi.',
        micro: 'SYSTÉMY / SIETE / DOKUMENTÁCIA', explore: 'Prejsť kariérnou cestou', practiceAction: 'Pozrieť prax',
        journeyKicker: '01 / KARIÉRNA CESTA', journeyTitle: 'Profesijná prax', present: 'súčasnosť',
        career: [
          ['04 / 2023 — súčasnosť', 'solvio s.r.o. — Konateľ', 'Vedenie spoločnosti, rozhodovanie o technologickom smerovaní a dohľad nad realizáciou IT riešení a prevádzkových aktivít.', true],
          ['2020 — súčasnosť', 'VŠOUG v Košiciach — Informatik', 'Komplexná IT podpora, systémová správa a rozvoj infraštruktúry v odbornom pracovnom prostredí.', true],
          ['2017 — 2020', 'Záchranná služba Košice — Informatik', 'Správa informačných technológií v prostredí, kde je dôležitá spoľahlivosť, dostupnosť a rýchla reakcia.', false],
          ['2013 — 2017', 'Cona s.r.o. — Manažér IT', 'Zodpovednosť za IT agendu, prevádzku a koordináciu technických riešení.', false]
        ],
        educationKicker: '02 / VZDELANIE', educationTitle: 'Vzdelanie', educationRange: '2003 — 2013',
        education: [
          ['2008 — 2013', 'TUKE / FBERG', 'Inžinierske vzdelanie, ktoré pomohlo rozvíjať analytický prístup, disciplínu a technické uvažovanie.'],
          ['2003 — 2007', 'SOŠ Poprad', 'Stredoškolský základ, na ktorom vznikol dlhodobý záujem o technológie a systémové myslenie.']
        ],
        expertiseKicker: '03 / OBLASTI ZNALOSTÍ', expertiseTitle: 'Odborné zameranie',
        expertise: [
          ['Virtualizácia a servery', 'Prevádzka virtualizovaných Windows a Linux služieb.', 'Proxmox VE/PBS · Windows Server · Linux/Debian · Active Directory · Group Policy'],
          ['Siete a prístupy', 'Správa sietí UniFi, segmentácie, vybraných pravidiel prístupu a vzdialeného prístupu.', 'UniFi · segmentácia sietí · vybrané prístupové pravidlá · vzdialený prístup'],
          ['Zálohovanie a úložiská', 'Viacvrstvové zálohovanie a praktické overovanie obnovy vybraných služieb.', 'Proxmox Backup Server · Synology · zálohovanie · obnova vybraných služieb'],
          ['Cloud a ochrana endpointov', 'Identity, cloudové služby a vybrané endpointové politiky v doloženom rozsahu.', 'Microsoft 365 · Entra ID · MFA v doloženom rozsahu · ESET PROTECT'],
          ['Prevádzka a dokumentácia', 'Podklady, ktoré zmenu a každodennú správu robia dohľadateľnou.', 'monitoring · diagnostika · evidencia aktív · technická dokumentácia · koordinácia s dodávateľmi']
        ],
        experimentsKicker: '04 / OSOBNÉ TECHNICKÉ EXPERIMENTY', experimentsTitle: 'Skúšať mimo pracovnej praxe.',
        experiments: 'Home Assistant, Zigbee2mqtt, Matter, Thread a praktické používanie GenAI/LLM. Osobná tvorba, nie pracovná prax ani profesionálna certifikácia.',
        scope: 'Profil uvádza iba verejne zdieľateľný rozsah. Neuvádza interné architektúry, konfigurácie, metriky ani detaily organizácií.', scopePractice: 'Pozrieť prax', scopeHome: 'Späť na úvod',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Tomáš Čačo — CV | IT infrastructure and operations',
        description: 'Tomáš Čačo’s career overview: IT infrastructure, systems administration, networks, backups and technical documentation.',
        socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'],
        kicker: 'TOMÁŠ ČAČO / CV', headline: 'IT infrastructure and operations.',
        intro: 'IT specialist focused on infrastructure operations, systems administration, networks, backups, identities and technical documentation. I combine hands-on service administration with verification and clear operational documentation.',
        micro: 'SYSTEMS / NETWORKS / DOCUMENTATION', explore: 'Explore career path', practiceAction: 'View practice',
        journeyKicker: '01 / CAREER PATH', journeyTitle: 'Professional experience', present: 'present',
        career: [
          ['04 / 2023 — present', 'solvio s.r.o. — Managing Director', 'Leading the company, setting its technology direction and overseeing the delivery of IT solutions and operational activities.', true],
          ['2020 — present', 'VŠOUG v Košiciach — IT Specialist', 'Comprehensive IT support, systems administration and infrastructure development in a specialist working environment.', true],
          ['2017 — 2020', 'Záchranná služba Košice — IT Specialist', 'Administration of information technology in an environment where reliability, availability and rapid response matter.', false],
          ['2013 — 2017', 'Cona s.r.o. — IT Manager', 'Responsibility for the IT agenda, operations and coordination of technical solutions.', false]
        ],
        educationKicker: '02 / EDUCATION', educationTitle: 'Education', educationRange: '2003 — 2013',
        education: [
          ['2008 — 2013', 'TUKE / FBERG', 'Engineering education that developed analytical thinking, discipline and technical reasoning.'],
          ['2003 — 2007', 'SOŠ Poprad', 'Secondary-school foundation for a long-term interest in technology and systems thinking.']
        ],
        expertiseKicker: '03 / AREAS OF EXPERTISE', expertiseTitle: 'Areas of expertise',
        expertise: [
          ['Virtualisation and servers', 'Operation of virtualised Windows and Linux services.', 'Proxmox VE/PBS · Windows Server · Linux/Debian · Active Directory · Group Policy'],
          ['Networks and access', 'Administration of UniFi networks, segmentation, selected access rules and remote access.', 'UniFi · network segmentation · selected access rules · remote access'],
          ['Backups and storage', 'Multi-layer backups and practical recovery checks for selected services.', 'Proxmox Backup Server · Synology · backups · recovery checks for selected services'],
          ['Cloud and endpoint protection', 'Identities, cloud services and selected endpoint policies within the documented scope.', 'Microsoft 365 · Entra ID · MFA within the documented scope · ESET PROTECT'],
          ['Operations and documentation', 'Working notes that make change and day-to-day operations traceable.', 'monitoring · troubleshooting · asset records · technical documentation · supplier coordination']
        ],
        experimentsKicker: '04 / PERSONAL TECHNOLOGY EXPERIMENTS', experimentsTitle: 'Exploring outside employment.',
        experiments: 'Home Assistant, Zigbee2mqtt, Matter, Thread and practical use of GenAI/LLMs. Personal work, not employment experience or professional certification.',
        scope: 'This profile uses only a publicly shareable scope. It does not disclose internal architectures, configurations, metrics or organisation-specific details.', scopePractice: 'View practice', scopeHome: 'Back to home',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'homelab',
    paths: { sk: '/sk/homelab/', en: '/en/homelab/' },
    anchors: ['homelab', 'pristup', 'principy', 'hranice'],
    content: {
      sk: {
        title: 'HomeLab — Tomáš Čačo', description: 'Osobný HomeLab s Home Assistantom: približne 60 Zigbee zariadení, API integrácie, domáca automatizácia a správa infraštruktúry.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'HOMELAB / OSOBNÝ PROJEKT', headline: 'Zariadenia prepojené do jedného celku.',
        intro: 'V osobnom HomeLabe prepájam zariadenia a automatizácie cez Home Assistant. Vybrané prvky sprístupňujem aj do Apple HomeKit a Google Home. Súčasťou projektu je správa servera, siete a prístupu k službám.',
        backHome: 'Späť na úvod', explore: 'Pozrieť technické vrstvy', micro: 'SIGNÁL / SÚVISLOSŤ / RYTMUS',
        approachKicker: '01 / ROZSAH', approachTitle: 'Čísla s kontextom.', approachLead: 'Približne 60 Zigbee zariadení, približne 20 integrácií a približne 25 zariadení pripojených cez API.', approachText: 'Ide o orientačný rozsah osobného projektu, nie živé počítadlo. Kategórie sa môžu prekrývať a netvoria spoločný súčet zariadení.',
        principlesKicker: '02 / TECHNICKÉ VRSTVY', principlesTitle: 'Od zariadení po infraštruktúru.',
        principles: [
          ['01', 'Automatizácia a integrácie', 'Home Assistant prepája zariadenia a automatizácie. Vybrané prvky sprístupňujem do Apple HomeKit a Google Home.'],
          ['02', 'Server a sieť', 'Home Assistant prevádzkujem na serveri s Proxmoxom. V UniFi využívam segmentáciu siete pre IoT a Pi-hole slúži ako alternatívne DNS.'],
          ['03', 'Prístup k službám', 'Súčasťou HomeLabu je Cloudflare Tunnel s prístupovými pravidlami Zero Trust. Konkrétne služby a konfiguráciu prístupu nezverejňujem.']
        ],
        scopeKicker: '03 / KONTEXT', scopeTitle: 'Osobný projekt v praxi.', scope: 'HomeLab predstavuje moju osobnú technickú tvorbu. Uvedené platformy a približné počty opisujú jeho rozsah; nie sú meraním dostupnosti, úspor ani nezávislým overením bezpečnosti. Prevádzkové názvy, adresy, sieťová topológia a konkrétne pravidlá zostávajú súkromné.', homeAction: 'Späť na úvod',
        footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'HomeLab — Tomáš Čačo', description: 'A personal HomeLab with Home Assistant: around 60 Zigbee devices, API integrations, home automation and infrastructure administration.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'HOMELAB / PERSONAL PROJECT', headline: 'Devices connected into one system.',
        intro: 'In my personal HomeLab, I connect devices and automations through Home Assistant. I also expose selected elements to Apple HomeKit and Google Home. The project includes administering the server, network and access to services.',
        backHome: 'Back to home', explore: 'Explore the technical layers', micro: 'SIGNAL / CONTEXT / RHYTHM',
        approachKicker: '01 / SCOPE', approachTitle: 'Numbers in context.', approachLead: 'Around 60 Zigbee devices, around 20 integrations and around 25 devices connected through APIs.', approachText: 'These figures describe the approximate scope of a personal project, rather than a live counter. The categories may overlap and should not be added together as a total device count.',
        principlesKicker: '02 / TECHNICAL LAYERS', principlesTitle: 'From devices to infrastructure.',
        principles: [
          ['01', 'Automation and integrations', 'Home Assistant connects devices and automations. I expose selected elements to Apple HomeKit and Google Home.'],
          ['02', 'Server and network', 'I run Home Assistant on a server with Proxmox. I use UniFi network segmentation for IoT, while Pi-hole serves as an alternative DNS.'],
          ['03', 'Access to services', 'The HomeLab includes Cloudflare Tunnel with Zero Trust access rules. I keep the specific services and access configuration private.']
        ],
        scopeKicker: '03 / CONTEXT', scopeTitle: 'A personal project in practice.', scope: 'The HomeLab is my personal technical project. The platforms and approximate counts describe its scope; they are not measurements of availability or savings, or an independent security assessment. Operational names, addresses, network topology and specific rules remain private.', homeAction: 'Back to home',
        footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  },
  {
    id: 'photo',
    paths: { sk: '/sk/foto-a-dron/', en: '/en/photo-and-drone/' },
    anchors: ['obraz', 'skladba', 'formaty', 'prvy-material'],
    content: {
      sk: {
        title: 'Foto a dron — Tomáš Čačo', description: 'Pripravený osobný priestor pre fotografie a dronové videá Tomáša Čača.', socialAlt: 'Abstraktná kompozícia tenkých tmavých trás, modrých geometrických plôch a jedného oranžového kruhu na krémovom podklade.',
        nav: ['O mne', 'Prax', 'Projekty', 'Solvio', 'Foto a dron'], kicker: 'OBRAZ / OSOBNÁ ZBIERKA', headline: 'Priestor pre pohľad, nie pre zásobu obrázkov.',
        intro: 'Pripravený priestor pre osobné fotografie a pohyblivé zábery, primárne z dronu. Každá budúca séria tu môže dostať vlastný rytmus, kontext a miesto na pozorné pozeranie.',
        explore: 'Pozrieť skladbu priestoru', backHome: 'Späť na úvod', micro: 'OBRAZ / VÝŠKA / POHYB',
        emptyKicker: '01 / PRVÝ MATERIÁL', emptyTitle: 'Zbierka sa začne až skutočným záberom.', emptyText: 'Zatiaľ tu nie je vložená žiadna fotografia ani video. Tento prázdny stav je zámerný: nenahrádza budúci autorský obsah vymysleným miestom, časom ani obrazom.', emptyLabel: 'DIZAJNOVÝ NÁHĽAD · NIE JE FOTOGRAFIA',
        structureKicker: '02 / SKLADBA ZBIERKY', structureTitle: 'Tri spôsoby, ako nechať obraz dýchať.', structureLead: 'Stránka je pripravená na rôzne mierky jedného osobného archívu bez toho, aby sa zmenila na katalóg alebo technologický dashboard.',
        formats: [
          ['01', 'Série', 'Súvisiace fotografie alebo zábery spojené jedným pozorovaním. Úvodný text, rytmus a poradie zostanú vecou autora.'],
          ['02', 'Samostatné zábery', 'Jeden obraz, keď nepotrebuje vysvetlenie ani vedľajší obsah. Priestor okolo neho necháva vyniknúť vlastný moment.'],
          ['03', 'Pohyb', 'Dronové video alebo krátky pohyblivý záznam. Bude mať vlastnú titulnú plochu, stručný kontext a jasné ovládanie prehratia.']
        ],
        nextKicker: '03 / KEĎ PRÍDE PRVÝ MATERIÁL', nextTitle: 'Najprv výber. Potom rozprávanie.', nextText: 'Doplnenie série nebude vyžadovať novú stránku: vyberie sa typ záznamu, jeho vlastný názov a verejne vhodný opis. Miesto, čas, autorstvo a technické údaje sa uvedú iba vtedy, keď ich poskytne a schváli autor.',
        homeAction: 'Späť na úvod', footer: 'Osobný priestor. Neustále vo vývoji.', back: 'Späť hore', skip: 'Preskočiť na obsah', theme: 'Téma', system: 'Systém', light: 'Svetlá', dark: 'Tmavá'
      },
      en: {
        title: 'Photo & drone — Tomáš Čačo', description: 'A prepared personal space for Tomáš Čačo’s photographs and drone videos.', socialAlt: 'An abstract composition of thin dark routes, muted blue geometric shapes and one orange circle on a warm cream background.',
        nav: ['About', 'Practice', 'Projects', 'Solvio', 'Photo & drone'], kicker: 'IMAGE / PERSONAL COLLECTION', headline: 'A space for looking, not a stock of images.',
        intro: 'A prepared space for personal photographs and moving images, primarily from a drone. Each future series can have its own rhythm, context and room for attentive viewing.',
        explore: 'Explore the structure', backHome: 'Back to home', micro: 'IMAGE / ALTITUDE / MOTION',
        emptyKicker: '01 / FIRST MATERIAL', emptyTitle: 'The collection starts only with a real frame.', emptyText: 'No photograph or video has been placed here yet. That empty state is intentional: it does not replace future authored material with an invented place, time or image.', emptyLabel: 'DESIGN PREVIEW · NOT A PHOTOGRAPH',
        structureKicker: '02 / COLLECTION STRUCTURE', structureTitle: 'Three ways to let an image breathe.', structureLead: 'The page is ready for different scales of one personal archive without turning into a catalogue or a technology dashboard.',
        formats: [
          ['01', 'Series', 'Related photographs or footage connected by one observation. The introduction, rhythm and order remain the author’s decision.'],
          ['02', 'Single frames', 'One image when it needs neither explanation nor supporting content. The space around it lets its own moment stand out.'],
          ['03', 'Motion', 'Drone video or a short moving record. It will have its own title surface, brief context and clear playback controls.']
        ],
        nextKicker: '03 / WHEN THE FIRST MATERIAL ARRIVES', nextTitle: 'Selection first. Then a story.', nextText: 'Adding a series will not require a new page: choose the record type, its own title and a publicly suitable description. Place, time, authorship and technical details appear only when supplied and approved by the author.',
        homeAction: 'Back to home', footer: 'A personal space. Always evolving.', back: 'Back to top', skip: 'Skip to content', theme: 'Theme', system: 'System', light: 'Light', dark: 'Dark'
      }
    }
  }
];

export const byId = Object.fromEntries(pages.map(page => [page.id, page]));

// Storage notice for the neutral language selector; keep both versions complete.
export const storageNotice = {
  sk: {
    title: 'Cookies a súkromie',
    body: 'Web nepoužíva analytické ani reklamné cookies. Po prepnutí svetlej alebo tmavej témy si prehliadač zapamätá iba túto voľbu v lokálnom úložisku (caco.theme), kým ju neodstránite v nastaveniach prehliadača. Slúži výlučne na zachovanie zvoleného vzhľadu, nie na sledovanie návštevnosti. Jazyk určuje adresa stránky.',
  },
  en: {
    title: 'Cookies and privacy',
    body: 'This website uses no analytics or advertising cookies. When you switch between light and dark themes, your browser remembers only that choice in local storage (caco.theme) until you clear it in your browser settings. It is used solely to preserve your chosen appearance, not to track visits. The page address determines the language.',
  },
};
