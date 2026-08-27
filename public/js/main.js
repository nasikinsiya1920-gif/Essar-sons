(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------
     Sticky nav
     ------------------------------------------------------------------ */
  var nav = document.getElementById('siteNav');
  function onScrollNav() {
    if (!nav) return;
    if (window.scrollY > 40) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ------------------------------------------------------------------
     Mobile nav toggle
     ------------------------------------------------------------------ */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var open = navLinks.classList.toggle('is-open');
      navToggle.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
        navToggle.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ------------------------------------------------------------------
     Word-by-word heading reveal
     ------------------------------------------------------------------ */
  document.querySelectorAll('[data-word-reveal]').forEach(function (el) {
    var text = el.textContent.trim();
    var words = text.split(/\s+/);
    el.textContent = '';
    words.forEach(function (word, i) {
      var span = document.createElement('span');
      span.className = 'word-reveal-word';
      span.textContent = word + (i < words.length - 1 ? ' ' : '');
      if (!reduceMotion) span.style.transitionDelay = (i * 80) + 'ms';
      el.appendChild(span);
    });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.querySelectorAll('.word-reveal-word').forEach(function (span) {
          span.classList.add('is-in');
        });
      });
    });
  });

  /* ------------------------------------------------------------------
     Scroll-reveal sections
     ------------------------------------------------------------------ */
  var revealTargets = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealTargets.length) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealTargets.forEach(function (t) { revealObserver.observe(t); });
  } else {
    revealTargets.forEach(function (t) { t.classList.add('is-visible'); });
  }

  /* ------------------------------------------------------------------
     Parallax drift
     ------------------------------------------------------------------ */
  var parallaxEls = document.querySelectorAll('[data-parallax]');
  if (parallaxEls.length && !reduceMotion) {
    var ticking = false;
    function updateParallax() {
      var vh = window.innerHeight;
      parallaxEls.forEach(function (el) {
        var rect = el.getBoundingClientRect();
        var rate = parseFloat(el.getAttribute('data-parallax-rate')) || -20;
        var progress = (rect.top + rect.height / 2 - vh / 2) / vh;
        var offset = progress * rate;
        el.style.transform = 'translateY(' + offset.toFixed(1) + 'px)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    updateParallax();
  }

  /* ------------------------------------------------------------------
     Animated stat counters
     ------------------------------------------------------------------ */
  function animateCounter(el) {
    var raw = el.getAttribute('data-counter-text') || el.textContent;
    var match = raw.match(/[\d,]+/);
    if (!match) { el.textContent = raw; return; }
    var numStr = match[0];
    var target = parseInt(numStr.replace(/,/g, ''), 10);
    var prefix = raw.slice(0, match.index);
    var suffix = raw.slice(match.index + numStr.length);
    var hasComma = numStr.indexOf(',') !== -1;

    if (reduceMotion || !target) {
      el.textContent = raw;
      return;
    }

    var duration = 1600;
    var start = null;
    function formatNumber(n) {
      return hasComma ? n.toLocaleString('en-IN') : String(n);
    }
    function step(ts) {
      if (!start) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = Math.round(target * eased);
      el.textContent = prefix + formatNumber(current) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = raw;
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-counter]');
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      var counterObserver = new IntersectionObserver(function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });
      counters.forEach(function (c) { counterObserver.observe(c); });
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ------------------------------------------------------------------
     Sliders: project slider (autoplay, dots, arrows) + testimonial slider
     ------------------------------------------------------------------ */
  function initSlider(root, autoplayMs) {
    var slides = root.querySelectorAll('.slider-slide, .testimonial-slide');
    var dots = root.querySelectorAll('.slider-dot');
    var current = 0;
    var timer = null;

    function goTo(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === current); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
    }
    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }
    function resetTimer() {
      if (!autoplayMs || slides.length < 2) return;
      if (timer) clearInterval(timer);
      timer = setInterval(next, autoplayMs);
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goTo(i);
        resetTimer();
      });
    });
    var nextBtn = root.querySelector('[data-slide-next]');
    var prevBtn = root.querySelector('[data-slide-prev]');
    if (nextBtn) nextBtn.addEventListener('click', function () { next(); resetTimer(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { prev(); resetTimer(); });

    goTo(0);
    resetTimer();
  }

  document.querySelectorAll('.project-slider').forEach(function (slider) {
    var autoplay = parseInt(slider.getAttribute('data-autoplay'), 10) || 15000;
    initSlider(slider, autoplay);
  });
  document.querySelectorAll('.testimonial-slider').forEach(function (slider) {
    initSlider(slider, 9000);
  });

  /* ------------------------------------------------------------------
     Homepage hero video (slow-motion, with a still-image fallback if the
     browser can't play the source)
     ------------------------------------------------------------------ */
  var heroVideo = document.getElementById('heroVideo');
  var heroMediaWrap = document.getElementById('heroMediaWrap');
  if (heroVideo && heroMediaWrap) {
    heroVideo.playbackRate = 0.7;
    heroVideo.addEventListener('error', function () {
      heroMediaWrap.classList.add('video-failed');
    }, true);
    var tryPlay = function () { heroVideo.play().catch(function () {}); };
    tryPlay();
    heroVideo.addEventListener('loadeddata', tryPlay);
  }

  /* ------------------------------------------------------------------
     Homepage intro overlay
     ------------------------------------------------------------------ */
  var intro = document.getElementById('homeIntro');
  if (intro) {
    if (reduceMotion) {
      intro.classList.add('is-hidden');
    } else {
      var introWrap = document.getElementById('introLogoWrap');
      var navLogoEl = document.querySelector('.nav-logo');
      document.body.classList.add('no-scroll');
      setTimeout(function () {
        if (introWrap && navLogoEl) {
          var rect = navLogoEl.getBoundingClientRect();
          introWrap.style.top = (rect.top + rect.height / 2) + 'px';
          introWrap.style.left = (rect.left + rect.width / 2) + 'px';
          introWrap.style.width = rect.width + 'px';
        }
        intro.classList.add('is-shrinking');
      }, 900);
      setTimeout(function () {
        intro.classList.add('is-hidden');
        document.body.classList.remove('no-scroll');
      }, 2100);
    }
  }

  /* ------------------------------------------------------------------
     Contact form (shared partial, may appear multiple times per page)
     ------------------------------------------------------------------ */
  document.querySelectorAll('.contact-form-wrap').forEach(function (wrap) {
    var form = wrap.querySelector('.contact-form');
    var success = wrap.querySelector('.contact-form-success');
    var errorEl = wrap.querySelector('.form-error');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (errorEl) { errorEl.hidden = true; }

      var data = {
        name: form.elements.name.value,
        company: form.elements.company.value,
        contact: form.elements.contact.value,
        division: form.elements.division.value,
        message: form.elements.message.value,
      };

      if (!data.name || !data.contact || !data.division) {
        if (errorEl) {
          errorEl.textContent = 'Please fill in your name, contact details and division.';
          errorEl.hidden = false;
        }
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.disabled = true;

      fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
        .then(function (res) { return res.json().then(function (body) { return { ok: res.ok, body: body }; }); })
        .then(function (result) {
          if (result.ok && result.body.ok) {
            form.hidden = true;
            if (success) success.hidden = false;
          } else {
            throw new Error((result.body && result.body.error) || 'Something went wrong.');
          }
        })
        .catch(function (err) {
          if (errorEl) {
            errorEl.textContent = err.message || 'Something went wrong. Please try again.';
            errorEl.hidden = false;
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  });

  /* ------------------------------------------------------------------
     Projects page filter
     ------------------------------------------------------------------ */
  var filterBar = document.getElementById('projectFilters');
  var projectGrid = document.getElementById('projectGrid');
  var projectCount = document.getElementById('projectCount');
  if (filterBar && projectGrid) {
    var cards = projectGrid.querySelectorAll('.project-card');

    function applyFilter(filter) {
      var shown = 0;
      cards.forEach(function (card) {
        var divisions = (card.getAttribute('data-divisions') || '').split(' ');
        var match = filter === 'all' || divisions.indexOf(filter) !== -1;
        card.classList.toggle('is-shown', match);
        if (match) shown++;
      });
      if (projectCount) projectCount.textContent = shown;
    }

    filterBar.querySelectorAll('.filter-pill').forEach(function (pill) {
      pill.addEventListener('click', function () {
        filterBar.querySelectorAll('.filter-pill').forEach(function (p) { p.classList.remove('is-active'); });
        pill.classList.add('is-active');
        applyFilter(pill.getAttribute('data-filter'));
      });
    });

    applyFilter('all');
  }
})();
