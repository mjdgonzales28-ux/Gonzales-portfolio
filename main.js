// Basic interactivity: nav toggle, smooth scroll, contact submit mock, dynamic year
document.addEventListener('DOMContentLoaded', () => {
  // year
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // nav toggle for mobile
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      const isHidden = siteNav.getAttribute('aria-hidden') === 'false' || siteNav.getAttribute('aria-hidden') === null;
      siteNav.setAttribute('aria-hidden', String(isHidden ? 'true' : 'false'));
      // set visible by toggling attribute applied in CSS
      siteNav.style.display = isHidden ? 'block' : 'none';
    });
  }

  // smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
        // close mobile nav if open
        if (window.innerWidth <= 700 && siteNav) {
          siteNav.style.display = 'none';
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // mock contact form submission (for demo only)
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // basic validation
      const name = form.querySelector('#name').value.trim();
      const email = form.querySelector('#email').value.trim();
      const message = form.querySelector('#message').value.trim();
      if (!name || !email || !message) {
        alert('Please complete all fields.');
        return;
      }
      alert('Thanks — your message has been recorded (demo).');
      form.reset();
    });
  }
});
