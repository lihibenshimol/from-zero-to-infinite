/* ── LEGAL.JS ─────────────────────────────────────────────────────────────
   Injects accessibility widget + cookie consent bar into every page.
   Include once per page: <script src="/assets/js/legal.js"></script>
   ──────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  /* ── 1. INJECT STYLES ── */
  const css = `
/* ── ACCESSIBILITY WIDGET ── */
#a11y-btn {
  position: fixed;
  bottom: 80px;
  left: 16px;
  z-index: 1000;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(10,10,18,0.92);
  border: 1.5px solid rgba(77,184,255,0.35);
  color: hsl(210,100%,65%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
  transition: border-color .2s, background .2s;
  padding: 0;
}
#a11y-btn:hover { border-color: rgba(77,184,255,0.7); background: rgba(77,184,255,0.1); }
#a11y-btn:focus-visible { outline: 2px solid hsl(210,100%,65%); outline-offset: 3px; }

#a11y-panel {
  position: fixed;
  bottom: 132px;
  left: 16px;
  z-index: 1000;
  width: 220px;
  background: rgba(10,10,18,0.97);
  border: 1px solid rgba(77,184,255,0.2);
  border-radius: 14px;
  padding: 16px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.6);
  display: none;
  flex-direction: column;
  gap: 10px;
  direction: rtl;
}
#a11y-panel.open { display: flex; }

#a11y-panel p {
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(77,184,255,0.5);
  margin: 0 0 4px;
  font-family: 'Assistant', sans-serif;
}

.a11y-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.a11y-label {
  font-size: 13px;
  color: rgba(220,220,240,0.85);
  font-family: 'Assistant', sans-serif;
}

.a11y-toggle {
  position: relative;
  width: 36px;
  height: 20px;
  flex-shrink: 0;
}
.a11y-toggle input { opacity: 0; width: 0; height: 0; position: absolute; }
.a11y-toggle-track {
  position: absolute;
  inset: 0;
  border-radius: 10px;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.15);
  cursor: pointer;
  transition: background .2s;
}
.a11y-toggle input:checked + .a11y-toggle-track { background: hsl(210,100%,55%); border-color: hsl(210,100%,55%); }
.a11y-toggle-thumb {
  position: absolute;
  top: 2px;
  right: 2px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #fff;
  transition: transform .2s;
  pointer-events: none;
}
.a11y-toggle input:checked ~ .a11y-toggle-thumb { transform: translateX(-16px); }

.a11y-size-row { display: flex; align-items: center; gap: 6px; }
.a11y-size-btn {
  width: 28px; height: 28px;
  border-radius: 6px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(220,220,240,0.85);
  cursor: pointer;
  font-size: 13px;
  font-family: 'Assistant', sans-serif;
  display: flex; align-items: center; justify-content: center;
  transition: background .2s, border-color .2s;
}
.a11y-size-btn:hover { background: rgba(77,184,255,0.12); border-color: rgba(77,184,255,0.3); }
#a11y-size-val {
  font-size: 12px;
  color: rgba(160,160,180,0.6);
  font-family: 'Assistant', sans-serif;
  min-width: 28px;
  text-align: center;
}

/* ── BODY-LEVEL STATES ── */
body.a11y-large { font-size: 118% !important; }
body.a11y-contrast {
  filter: contrast(1.4) brightness(1.08);
}
body.a11y-no-motion * {
  animation: none !important;
  transition: none !important;
}

/* ── COOKIE BAR ── */
#cookie-bar {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 900;
  background: rgba(10,10,18,0.97);
  border-top: 1px solid rgba(77,184,255,0.15);
  padding: 14px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  direction: rtl;
  transform: translateY(100%);
  transition: transform .4s cubic-bezier(0.16,1,0.3,1);
}
#cookie-bar.show { transform: translateY(0); }
#cookie-bar p {
  font-size: 12.5px;
  color: rgba(160,160,180,0.75);
  line-height: 1.6;
  flex: 1;
  min-width: 200px;
  margin: 0;
  font-family: 'Assistant', sans-serif;
}
#cookie-bar a { color: hsl(210,100%,65%); text-decoration: none; }
#cookie-bar a:hover { text-decoration: underline; }
#cookie-accept {
  background: rgba(77,184,255,0.12);
  border: 1px solid rgba(77,184,255,0.3);
  border-radius: 8px;
  color: hsl(210,100%,65%);
  font-size: 12px;
  letter-spacing: .1em;
  font-family: 'Assistant', sans-serif;
  padding: 8px 20px;
  cursor: pointer;
  white-space: nowrap;
  transition: background .2s, border-color .2s;
  flex-shrink: 0;
}
#cookie-accept:hover { background: rgba(77,184,255,0.22); border-color: rgba(77,184,255,0.5); }
#cookie-accept:focus-visible { outline: 2px solid hsl(210,100%,65%); outline-offset: 2px; }
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ── 2. ACCESSIBILITY WIDGET ── */
  const widgetHTML = `
<button id="a11y-btn" aria-label="אפשרויות נגישות" aria-expanded="false" aria-controls="a11y-panel">
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
       stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <circle cx="12" cy="5" r="1.5"/>
    <path d="M12 8v5"/>
    <path d="M9 11H7l-1 5"/>
    <path d="M15 11h2l1 5"/>
    <path d="M10 16l-1 4"/>
    <path d="M14 16l1 4"/>
  </svg>
</button>

<div id="a11y-panel" role="dialog" aria-label="אפשרויות נגישות">
  <p>נגישות</p>

  <div class="a11y-row">
    <span class="a11y-label">הגדלת טקסט</span>
    <div class="a11y-size-row">
      <button class="a11y-size-btn" id="a11y-size-down" aria-label="הקטן טקסט">A-</button>
      <span id="a11y-size-val">100%</span>
      <button class="a11y-size-btn" id="a11y-size-up" aria-label="הגדל טקסט">A+</button>
    </div>
  </div>

  <div class="a11y-row">
    <span class="a11y-label">ניגודיות גבוהה</span>
    <label class="a11y-toggle" aria-label="הפעל ניגודיות גבוהה">
      <input type="checkbox" id="a11y-contrast-cb"/>
      <span class="a11y-toggle-track"></span>
      <span class="a11y-toggle-thumb"></span>
    </label>
  </div>

  <div class="a11y-row">
    <span class="a11y-label">עצירת אנימציות</span>
    <label class="a11y-toggle" aria-label="עצור אנימציות">
      <input type="checkbox" id="a11y-motion-cb"/>
      <span class="a11y-toggle-track"></span>
      <span class="a11y-toggle-thumb"></span>
    </label>
  </div>
</div>
`;
  document.body.insertAdjacentHTML('beforeend', widgetHTML);

  const btn = document.getElementById('a11y-btn');
  const panel = document.getElementById('a11y-panel');
  const contrastCb = document.getElementById('a11y-contrast-cb');
  const motionCb = document.getElementById('a11y-motion-cb');
  const sizeUp = document.getElementById('a11y-size-up');
  const sizeDown = document.getElementById('a11y-size-down');
  const sizeVal = document.getElementById('a11y-size-val');
  let fontSize = parseInt(localStorage.getItem('a11y-font') || '100', 10);

  function applyFont() {
    document.documentElement.style.fontSize = fontSize + '%';
    sizeVal.textContent = fontSize + '%';
    localStorage.setItem('a11y-font', fontSize);
  }

  function load() {
    if (localStorage.getItem('a11y-contrast') === '1') { contrastCb.checked = true; document.body.classList.add('a11y-contrast'); }
    if (localStorage.getItem('a11y-motion') === '1')   { motionCb.checked = true;   document.body.classList.add('a11y-no-motion'); }
    applyFont();
  }

  btn.addEventListener('click', function () {
    const open = panel.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', function (e) {
    if (!btn.contains(e.target) && !panel.contains(e.target)) {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { panel.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
  });

  sizeUp.addEventListener('click', function () { fontSize = Math.min(fontSize + 10, 140); applyFont(); });
  sizeDown.addEventListener('click', function () { fontSize = Math.max(fontSize - 10, 80); applyFont(); });

  contrastCb.addEventListener('change', function () {
    document.body.classList.toggle('a11y-contrast', this.checked);
    localStorage.setItem('a11y-contrast', this.checked ? '1' : '0');
  });

  motionCb.addEventListener('change', function () {
    document.body.classList.toggle('a11y-no-motion', this.checked);
    localStorage.setItem('a11y-motion', this.checked ? '1' : '0');
  });

  load();

  /* ── 3. COOKIE CONSENT BAR ── */
  if (!localStorage.getItem('cookie-ok')) {
    const cookieHTML = `
<div id="cookie-bar" role="region" aria-label="הודעת עוגיות">
  <p>
    אתר זה משתמש בכלים טכניים לשיפור חווית המשתמש (כגון שמירת העדפות ניגודיות).
    לפרטים ראו את <a href="/privacy">מדיניות הפרטיות</a> שלנו.
  </p>
  <button id="cookie-accept">הבנתי ✓</button>
</div>`;
    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        const bar = document.getElementById('cookie-bar');
        if (bar) bar.classList.add('show');
      });
    });

    document.getElementById('cookie-accept').addEventListener('click', function () {
      localStorage.setItem('cookie-ok', '1');
      const bar = document.getElementById('cookie-bar');
      bar.style.transform = 'translateY(100%)';
      setTimeout(function () { bar.remove(); }, 400);
    });
  }

})();
