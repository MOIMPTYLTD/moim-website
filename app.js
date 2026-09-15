(function () {
  const copy = {
    en: {
      navProduct: 'Product', navBusiness: 'For business', navCompany: 'Company', navSupport: 'Support', navContact: 'Contact',
      footerTag: 'A local Korean community platform for life abroad.',
      footerExplore: 'Explore', footerCompany: 'Company', footerHelp: 'Help & legal',
      footerProduct: 'Product', footerBusiness: 'For business', footerAbout: 'About MOIM', footerContact: 'Contact',
      footerSupport: 'Support', footerPrivacy: 'Privacy Policy', footerTerms: 'Terms of Service', footerGuidelines: 'Community Guidelines', footerDelete: 'Delete account',
      backHome: 'Back to MOIM', language: 'Language',
      companyLine: 'MOIM PTY LTD · ABN 16 700 316 490 · Australia',
      rightsLine: 'MOIM™ © 2026 MOIM PTY LTD. All rights reserved.'
    },
    ko: {
      navProduct: '제품', navBusiness: '비즈니스', navCompany: '회사', navSupport: '고객지원', navContact: '문의',
      footerTag: '해외 생활을 위한 지역 기반 한인 커뮤니티 플랫폼.',
      footerExplore: '둘러보기', footerCompany: '회사', footerHelp: '고객지원 및 법률',
      footerProduct: '제품', footerBusiness: '비즈니스', footerAbout: 'MOIM 소개', footerContact: '문의',
      footerSupport: '고객지원', footerPrivacy: '개인정보처리방침', footerTerms: '이용약관', footerGuidelines: '커뮤니티 가이드라인', footerDelete: '계정 삭제',
      backHome: 'MOIM으로 돌아가기', language: '언어',
      companyLine: 'MOIM PTY LTD · ABN 16 700 316 490 · Australia',
      rightsLine: 'MOIM™ © 2026 MOIM PTY LTD. All rights reserved.'
    }
  };

  const pageNames = {
    'product.html': { en: 'Product', ko: '제품' },
    'business.html': { en: 'For business', ko: '비즈니스' },
    'company.html': { en: 'Company', ko: '회사' },
    'support.html': { en: 'Support', ko: '고객지원' },
    'privacy.html': { en: 'Privacy Policy', ko: '개인정보처리방침' },
    'terms.html': { en: 'Terms of Service', ko: '이용약관' },
    'community-guidelines.html': { en: 'Community Guidelines', ko: '커뮤니티 가이드라인' },
    'delete-account.html': { en: 'Delete account', ko: '계정 삭제' }
  };

  const currentFile = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  function brandMarkup(extraClass = '') {
    return `<span class="brand-lockup ${extraClass}"><span class="brand-word">MOIM</span><img src="moim-mark.png" alt="" class="brand-mark"></span>`;
  }

  function headerMarkup() {
    return `
      <header class="site-header">
        <div class="wrap navbar">
          <a class="brand" href="index.html" aria-label="MOIM home">${brandMarkup()}</a>
          <nav class="desktop-nav" aria-label="Primary navigation">
            <a href="product.html" data-nav="product.html" data-i18n="navProduct">Product</a>
            <a href="business.html" data-nav="business.html" data-i18n="navBusiness">For business</a>
            <a href="company.html" data-nav="company.html" data-i18n="navCompany">Company</a>
            <a href="support.html" data-nav="support.html" data-i18n="navSupport">Support</a>
          </nav>
          <div class="nav-tools">
            <div class="lang-switch" aria-label="Language selector">
              <button type="button" data-lang-btn="en" aria-label="View in English">EN</button>
              <button type="button" data-lang-btn="ko" aria-label="한국어로 보기">한국어</button>
            </div>
            <a class="header-cta" href="mailto:office@moim.com.au?subject=MOIM%20enquiry" data-i18n="navContact">Contact</a>
          </div>
          <button class="menu-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
        </div>
        <div class="mobile-menu" aria-hidden="true">
          <div class="wrap mobile-menu-inner">
            <a href="product.html" data-i18n="navProduct">Product</a>
            <a href="business.html" data-i18n="navBusiness">For business</a>
            <a href="company.html" data-i18n="navCompany">Company</a>
            <a href="support.html" data-i18n="navSupport">Support</a>
            <a href="mailto:office@moim.com.au?subject=MOIM%20enquiry" data-i18n="navContact">Contact</a>
            <div class="mobile-menu-footer">
              <div class="lang-switch"><button type="button" data-lang-btn="en">EN</button><button type="button" data-lang-btn="ko">한국어</button></div>
              <a href="mailto:office@moim.com.au">office@moim.com.au</a>
            </div>
          </div>
        </div>
      </header>`;
  }

  function footerMarkup() {
    return `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <div class="footer-brand-block">
            <a class="footer-logo" href="index.html" aria-label="MOIM home">${brandMarkup('footer-lockup')}</a>
            <p data-i18n="footerTag">A local Korean community platform for life abroad.</p>
            <div class="footer-entity" data-i18n="companyLine">MOIM PTY LTD · ABN 16 700 316 490 · Australia</div>
            <a class="footer-email" href="mailto:office@moim.com.au">office@moim.com.au</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footerExplore">Explore</h4>
            <a href="product.html" data-i18n="footerProduct">Product</a>
            <a href="business.html" data-i18n="footerBusiness">For business</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footerCompany">Company</h4>
            <a href="company.html" data-i18n="footerAbout">About MOIM</a>
            <a href="mailto:office@moim.com.au" data-i18n="footerContact">Contact</a>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footerHelp">Help & legal</h4>
            <a href="support.html" data-i18n="footerSupport">Support</a>
            <a href="privacy.html" data-i18n="footerPrivacy">Privacy Policy</a>
            <a href="terms.html" data-i18n="footerTerms">Terms of Service</a>
            <a href="community-guidelines.html" data-i18n="footerGuidelines">Community Guidelines</a>
            <a href="delete-account.html" data-i18n="footerDelete">Delete account</a>
          </div>
        </div>
        <div class="wrap footer-bottom">
          <span data-i18n="rightsLine">MOIM™ © 2026 MOIM PTY LTD. All rights reserved.</span>
          <span>moim.com.au</span>
        </div>
      </footer>`;
  }

  document.querySelectorAll('[data-site-header]').forEach(el => el.innerHTML = headerMarkup());
  document.querySelectorAll('[data-site-footer]').forEach(el => el.innerHTML = footerMarkup());

  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');
  function closeMenu() {
    if (!menuBtn || !mobileMenu) return;
    mobileMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
  }
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const open = !mobileMenu.classList.contains('open');
      if (open) {
        mobileMenu.classList.add('open');
        menuBtn.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.classList.add('menu-open');
      } else closeMenu();
    });
    mobileMenu.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 980) closeMenu(); });
  }

  document.querySelectorAll(`[data-nav="${currentFile}"]`).forEach(a => a.setAttribute('aria-current', 'page'));

  function rebuildLegalToc(lang) {
    const toc = document.querySelector('.legal-toc');
    if (!toc) return;
    const visibleBlock = document.querySelector(`.legal-doc [data-lang-block="${lang}"]`);
    if (!visibleBlock) return;
    const sections = Array.from(visibleBlock.querySelectorAll(':scope > section'));
    if (!sections.length) return;
    const heading = lang === 'ko' ? '목차' : (pageNames[currentFile]?.en || 'Contents');
    toc.innerHTML = `<h3>${heading}</h3>`;
    sections.forEach((section, index) => {
      const h2 = section.querySelector('h2');
      if (!h2) return;
      const id = `${lang}-section-${index + 1}`;
      section.id = id;
      const a = document.createElement('a');
      a.href = `#${id}`;
      a.textContent = h2.textContent.replace(/^\d+\.\s*/, `${index + 1}. `);
      toc.appendChild(a);
    });
  }

  function setLang(lang) {
    const selected = lang === 'ko' ? 'ko' : 'en';
    try { localStorage.setItem('moim-lang', selected); } catch (_) {}
    document.documentElement.lang = selected;
    document.body.dataset.lang = selected;
    document.querySelectorAll('[data-lang-btn]').forEach(btn => btn.classList.toggle('active', btn.dataset.langBtn === selected));
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (copy[selected][key]) el.textContent = copy[selected][key];
    });
    document.querySelectorAll('[data-lang-block]').forEach(el => { el.hidden = el.dataset.langBlock !== selected; });
    document.querySelectorAll('[data-lang-inline]').forEach(el => { el.hidden = el.dataset.langInline !== selected; });
    document.querySelectorAll('[data-doc-title]').forEach(el => {
      const key = pageNames[currentFile];
      if (key) el.textContent = key[selected];
    });
    rebuildLegalToc(selected);
  }

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-lang-btn]');
    if (btn) setLang(btn.dataset.langBtn);
  });

  let initialLang = 'en';
  try { initialLang = localStorage.getItem('moim-lang') || initialLang; } catch (_) {}
  if (!['en','ko'].includes(initialLang) && navigator.language) initialLang = navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
  if (!['en','ko'].includes(initialLang)) initialLang = navigator.language && navigator.language.toLowerCase().startsWith('ko') ? 'ko' : 'en';
  setLang(initialLang);

  // Support cards open the matching answer in the currently selected language.
  document.querySelectorAll('[data-faq-index]').forEach(card => {
    card.addEventListener('click', e => {
      e.preventDefault();
      const lang = document.body.dataset.lang || 'en';
      const index = Number(card.dataset.faqIndex || 0);
      const faq = document.querySelector(`.faq[data-lang-block="${lang}"]`);
      const item = faq ? faq.querySelectorAll('details')[index] : null;
      if (!item) return;
      item.open = true;
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    if (a.hasAttribute('data-faq-index')) return;
    a.addEventListener('click', e => {
      const selector = a.getAttribute('href');
      if (!selector || selector === '#') return;
      const target = document.querySelector(selector);
      if (!target || target.hidden) return;
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();
