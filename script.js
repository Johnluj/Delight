/* =============================================
   Delight Tech — script.js
   ============================================= */

/* ---- Year ---- */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ---- Header scroll effect ---- */
const header = document.getElementById('site-header');
function onScroll() {
  if (window.scrollY > 30) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

if (navToggle && mobileNav) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    mobileNav.classList.toggle('hidden');
  });

  // Close mobile nav when a link is clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.classList.add('hidden');
    });
  });
}

/* ---- Smooth scroll for anchor links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      const headerHeight = header ? header.offsetHeight : 0;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  });
});

/* ---- Animate on Scroll (custom lightweight AOS) ---- */
const aosElements = document.querySelectorAll('.aos-init');

const observerOptions = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
};

const aosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseInt(el.getAttribute('data-aos-delay') || '0', 10);

      setTimeout(() => {
        el.classList.add('aos-animate');
      }, delay);

      aosObserver.unobserve(el);
    }
  });
}, observerOptions);

aosElements.forEach(el => aosObserver.observe(el));

/* ---- Contact form ---- */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';

    // Simulate async send (replace with real API call)
    await new Promise(r => setTimeout(r, 1500));

    submitBtn.textContent = '✓ Message sent!';
    submitBtn.style.background = '#16a34a';

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '';
      submitBtn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

/* ---- Staggered service card entrance (reinforcement) ---- */
// Already handled by AOS delays above

/* ---- Prefers-reduced-motion: disable transitions ---- */
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.aos-init').forEach(el => {
    el.classList.add('aos-animate');
  });
}