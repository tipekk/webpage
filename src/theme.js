(() => {
  'use strict';
  const key = 'caco.theme';
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let preference = null;
  try {
    const saved = window.localStorage.getItem(key);
    if (saved === 'light' || saved === 'dark') preference = saved;
    else if (saved === 'auto') window.localStorage.removeItem(key);
  } catch (_) { /* The page still works when storage is unavailable. */ }
  const currentTheme = () => preference || (system.matches ? 'dark' : 'light');
  function renderTheme() {
    if (preference) root.setAttribute('data-theme', preference);
    else root.removeAttribute('data-theme');
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const current = currentTheme();
      button.dataset.current = current;
      button.setAttribute('aria-label', current === 'dark' ? button.dataset.lightLabel : button.dataset.darkLabel);
      button.hidden = false;
    });
  }
  function save(value) {
    if (value !== 'light' && value !== 'dark') return;
    preference = value;
    try { window.localStorage.setItem(key, preference); } catch (_) { /* Keep the in-page choice. */ }
    renderTheme();
  }
  renderTheme();
  document.addEventListener('DOMContentLoaded', () => {
    renderTheme();
    document.querySelectorAll('[data-theme-toggle]').forEach(button => button.addEventListener('click', () => {
      save(currentTheme() === 'dark' ? 'light' : 'dark');
    }));
    document.querySelectorAll('[data-lang-switch]').forEach(link => link.addEventListener('click', event => {
      const anchor = location.hash.slice(1);
      const validPartnerAnchors = (link.dataset.partnerAnchors || '').split(',');
      if (!anchor || !validPartnerAnchors.includes(anchor)) return;
      event.preventDefault();
      location.href = `${link.href.split('#')[0]}#${encodeURIComponent(anchor)}`;
    }));
    const cvItems = [...document.querySelectorAll('.cv-timeline-item')];
    if (cvItems.length) {
      let scheduled = false;
      const updateCv = () => {
        scheduled = false;
        const readingLine = window.innerHeight * .4;
        // Only the row crossing the reading line is active, including across sections.
        const active = cvItems.find(item => {
          const rect = item.getBoundingClientRect();
          return rect.top <= readingLine && rect.bottom > readingLine;
        });
        cvItems.forEach(item => item.classList.toggle('is-active', item === active));
      };
      const scheduleCv = () => {
        if (!scheduled) { scheduled = true; window.requestAnimationFrame(updateCv); }
      };
      window.addEventListener('scroll', scheduleCv, { passive: true });
      window.addEventListener('resize', scheduleCv);
      window.addEventListener('pageshow', scheduleCv);
      window.addEventListener('hashchange', scheduleCv);
      updateCv();
    }
    const storyChapters = [...document.querySelectorAll('.story-chapter')];
    const storyLinks = [...document.querySelectorAll('.story-nav a')];
    if ('IntersectionObserver' in window && storyChapters.length) {
      const storyObserver = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        storyChapters.forEach(chapter => chapter.classList.toggle('is-active', chapter === visible.target));
        storyLinks.forEach(link => {
          if (link.getAttribute('href') === `#${visible.target.id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }, { rootMargin: '-20% 0px -55%', threshold: [0, .25, .6] });
      storyChapters.forEach(chapter => storyObserver.observe(chapter));
    }
    if (!reduced.matches) {
      const reveal = [...document.querySelectorAll('.reveal')];
      if ('IntersectionObserver' in window && reveal.length) {
        document.documentElement.classList.add('has-reveal');
        document.querySelectorAll('[data-reveal-group]').forEach(group => {
          group.querySelectorAll('.reveal').forEach((item, index) => item.style.setProperty('--reveal-delay', `${index * 100}ms`));
        });
        const observer = new IntersectionObserver(entries => entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }), { threshold: .08 });
        reveal.forEach(section => observer.observe(section));
      }
      const line = document.querySelector('[data-type-line]');
      const clone = line?.querySelector('.type-clone');
      const source = line?.querySelector(':scope > span:first-child')?.textContent || '';
      if (clone && source) {
        document.documentElement.classList.add('has-type');
        let position = 0;
        const type = () => {
          clone.textContent = source.slice(0, position++);
          if (position <= source.length) window.setTimeout(type, 34);
        };
        window.setTimeout(type, 180);
      }
    }
  }, { once: true });
  if (system.addEventListener) system.addEventListener('change', () => !preference && renderTheme());
  else system.addListener(() => !preference && renderTheme());
  window.cacoTheme = Object.freeze({ get: () => ({ preference, theme: currentTheme() }), set: save });
})();
