// ============================================================
// Farooq Shaik — Cybersecurity Portfolio
// script.js
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  /* -----------------------------------------------------------
     Mobile navigation toggle
  ----------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      var isOpen = navMenu.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a nav link is clicked (mobile)
    navMenu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      var isClickInside = navMenu.contains(e.target) || navToggle.contains(e.target);
      if (!isClickInside) {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close menu on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        navMenu.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* -----------------------------------------------------------
     Active link highlighting on scroll
  ----------------------------------------------------------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('id');
        var link = document.querySelector('.nav-link[href="#' + id + '"]');
        if (!link) { return; }
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.classList.remove('is-active'); });
          link.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* -----------------------------------------------------------
     Back to top button
  ----------------------------------------------------------- */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -----------------------------------------------------------
     Reveal-on-scroll for cards
  ----------------------------------------------------------- */
  var revealTargets = document.querySelectorAll(
    '.skill-card, .project-card, .cert-card, .contact-card, .education-card, .academic-card'
  );

  if (revealTargets.length && 'IntersectionObserver' in window) {
    revealTargets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { revealObserver.observe(el); });
  }

});
