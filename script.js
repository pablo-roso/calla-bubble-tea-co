/* ============================================================
   Calla Bubble Tea Co. — Seitenlogik
   Nur das Mobilmenü und die Jahreszahl. Bewusst kein
   Öffnungsstatus: Für diesen Laden gibt es keine verlässlich
   veröffentlichten Zeiten, und ein erfundener Status wäre
   schlechter als gar keiner.
   ============================================================ */
(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('mainNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName !== 'A') return;
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
