// ===========================
// SCROLL REVEAL
// ===========================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, entry.target.dataset.delay || 0);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('section > *, .project-card, .skill-category, .about-card, .about-text, .contact-left, .contact-right').forEach((el, i) => {
  el.classList.add('reveal');
  el.dataset.delay = (i % 4) * 80;
  revealObserver.observe(el);
});

// ===========================
// SKILL BARS ANIMATION
// ===========================
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.bar').forEach(bar => {
        bar.classList.add('animated');
      });
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(el => barObserver.observe(el));

// ===========================
// NAV SCROLL EFFECT
// ===========================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = '0.8rem 3rem';
  } else {
    nav.style.padding = '1.2rem 3rem';
  }
});

// ===========================
// ACTIVE NAV LINKS
// ===========================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--accent)';
        }
      });
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => navObserver.observe(s));

// ===========================
// CURSOR GLOW EFFECT
// ===========================
const glow = document.createElement('div');
glow.style.cssText = `
  position: fixed; pointer-events: none; z-index: 9998;
  width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(0,229,255,0.04) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  transition: left 0.15s ease, top 0.15s ease;
`;
document.body.appendChild(glow);

document.addEventListener('mousemove', (e) => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

// ===========================
// PROJECT CARD DATA ATTR
// ===========================
document.querySelectorAll('.project-card').forEach(card => {
  const index = card.dataset.index;
  if (index) {
    const badge = document.createElement('div');
    badge.style.cssText = `
      position: absolute; top: 1.5rem; right: 1.5rem;
      font-family: var(--font-mono, monospace);
      font-size: 0.68rem;
      color: rgba(255,255,255,0.1);
    `;
    badge.textContent = `#${index}`;
    card.appendChild(badge);
  }
});

console.log('%cLouis Bourcier — Portfolio', 'color: #00e5ff; font-family: monospace; font-size: 14px; font-weight: bold;');
console.log('%cBUT Réseaux & Télécommunications — IUT de Blois', 'color: #6b6b8a; font-family: monospace; font-size: 11px;');
