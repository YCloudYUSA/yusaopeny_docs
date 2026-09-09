/**
 * Standalone component frame — minimal HTML wrapper for iframe rendering.
 *
 * Loaded via `<iframe>` so component CSS (`vw` units, `@media` queries) sees
 * the iframe's viewport width, not the parent page's. Required because
 * production y_canvas component CSS uses `vw` and viewport breakpoints which
 * cannot be simulated by a fixed-width container in the parent document.
 *
 * Accepts:
 *   - componentCssHref: string OR array of strings. Multiple stylesheets
 *     load in order (parent organism + each slot child SDC).
 *   - maskOverride: extra CSS injected after component CSS, patches
 *     external SVG mask refs into data: URIs (ADR-007 — Chrome file://
 *     cross-origin block on external SVG masks).
 *
 * Demo CTA neutralizer: clicks on [data-demo-url] anchors (rewritten by
 * mocks-export.mjs neutralizeDemoHrefs) preventDefault and toast the
 * original production-shape URL. Per Vlad PR #8 F-7: opening mock from
 * file:// and clicking a CTA otherwise produces a 404 page that reads as
 * a broken catalog.
 */
export function frame({ title, componentCssHref, componentJsHref = [], body, bg = 'transparent', maskOverride = '' }) {
  const hrefs = Array.isArray(componentCssHref) ? componentCssHref : [componentCssHref];
  const cssLinks = hrefs
    .filter(Boolean)
    .map((h) => `<link rel="stylesheet" href="${h}">`)
    .join('\n');
  const jsHrefs = Array.isArray(componentJsHref) ? componentJsHref : [componentJsHref];
  const jsTags = jsHrefs
    .filter(Boolean)
    .map((h) => `<script src="${h}" defer></script>`)
    .join('\n');
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="stylesheet" href="../_fonts.css">
<link rel="stylesheet" href="../assets/y_canvas/css/y-canvas.css">
${cssLinks}
<link rel="stylesheet" href="../_sdc-overrides.css">
${jsTags}
<style>
  /* Frame baseline — fonts/tokens come from y-canvas.css above (theme SoT).
   * Per-SDC fonts (Cachet vs Verdana per ws_small_y rules) opt-in via
   * --ylb-font-family-cachet / --ylb-font-family-verdana token references
   * inside each component's CSS. Frame imposes nothing extra. */
  *, *::before, *::after { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; background: ${bg}; }
  body > [data-component] { overflow: hidden; }
${maskOverride}
  /* Chrome SDC placeholder (F-8) — visually distinct from broken render */
  .__chrome-placeholder { display: flex; align-items: center; justify-content: center; min-height: 320px; padding: 32px 16px; background: repeating-linear-gradient(45deg, #f5f7fb, #f5f7fb 10px, #ecf0f7 10px, #ecf0f7 20px); }
  .__chrome-placeholder__inner { max-width: 520px; padding: 28px 32px; background: #fff; border: 1px solid #d6dde8; border-radius: 10px; box-shadow: 0 4px 16px rgba(15, 23, 42, .06); font: 14px/1.55 system-ui, -apple-system, sans-serif; color: #1f2937; }
  .__chrome-placeholder__badge { display: inline-block; padding: 3px 8px; background: #fef3c7; color: #92400e; font: 600 10px/1 system-ui, sans-serif; letter-spacing: .06em; border-radius: 3px; margin-bottom: 12px; }
  .__chrome-placeholder__title { margin: 0 0 10px; font: 600 22px/1.2 system-ui, sans-serif; color: #0f172a; }
  .__chrome-placeholder__lede { margin: 0 0 12px; }
  .__chrome-placeholder__cta { margin: 0; }
  .__chrome-placeholder__cta a { color: #0c5757; font-weight: 600; }
  .__chrome-placeholder code { background: #eef2f7; padding: 1px 5px; border-radius: 3px; font-size: 12px; }
  /* Demo CTA toast (F-7) */
  .__demo-cta-toast { position: fixed; left: 50%; bottom: 24px; transform: translateX(-50%); background: #1a1a1a; color: #fff; padding: 10px 16px; border-radius: 6px; font: 13px/1.4 system-ui, sans-serif; box-shadow: 0 6px 20px rgba(0,0,0,.25); z-index: 99999; max-width: 80vw; opacity: 0; transition: opacity .18s ease; pointer-events: none; }
  .__demo-cta-toast.is-visible { opacity: 1; }
  .__demo-cta-toast code { background: rgba(255,255,255,.14); padding: 1px 6px; border-radius: 3px; font-size: 12px; }
</style>
</head>
<body>
${body}
<script>
  // Demo CTA neutralizer (Vlad PR #8 F-7) — click on [data-demo-url] toasts
  // the production-shape URL instead of navigating to a non-existent page.
  (function () {
    var toast;
    var hideTimer;
    document.addEventListener('click', function (e) {
      var el = e.target.closest && e.target.closest('[data-demo-url]');
      if (!el) return;
      e.preventDefault();
      if (!toast) {
        toast = document.createElement('div');
        toast.className = '__demo-cta-toast';
        document.body.appendChild(toast);
      }
      toast.innerHTML = 'demo CTA — would link to <code>' + el.getAttribute('data-demo-url').replace(/[<>&]/g, function (c) { return { '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]; }) + '</code> in production';
      toast.classList.add('is-visible');
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { toast.classList.remove('is-visible'); }, 2200);
    });
  })();
</script>
</body>
</html>`;
}
