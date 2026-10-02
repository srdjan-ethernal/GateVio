(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let locale = 'sr';
  try { locale = sessionStorage.getItem('gatevio-design-language') || 'sr'; } catch {}
  const localeButton = document.querySelector('[data-locale]');
  function applyLocale() {
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-sr][data-en]').forEach(el => { el.textContent = el.dataset[locale]; });
    document.querySelectorAll('[data-contact], .brand').forEach(el => {
      el.href = `../${locale}/${el.hasAttribute('data-contact') ? '#contact' : ''}`;
    });
    if (localeButton) {
      localeButton.textContent = locale === 'sr' ? 'EN' : 'SR';
      localeButton.setAttribute('aria-label', locale === 'sr' ? 'Switch to English' : 'Prebaci na srpski');
    }
    updateMotionLabel();
  }
  localeButton?.addEventListener('click', () => {
    locale = locale === 'sr' ? 'en' : 'sr';
    try { sessionStorage.setItem('gatevio-design-language', locale); } catch {}
    applyLocale();
  });
  const motionButton = document.querySelector('[data-motion]');
  function updateMotionLabel() {
    if (!motionButton) return;
    const paused = document.body.classList.contains('motion-paused');
    const label = locale === 'sr' ? (paused ? 'Pokreni animacije' : 'Pauziraj animacije') : (paused ? 'Play animations' : 'Pause animations');
    motionButton.setAttribute('aria-label', label);
    motionButton.title = label;
    motionButton.setAttribute('aria-pressed', String(paused));
  }
  motionButton?.addEventListener('click', () => {
    document.body.classList.toggle('motion-paused');
    updateMotionLabel();
  });
  if (reduceMotion.matches) document.body.classList.add('motion-paused');
  applyLocale();
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    document.body.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
})();
