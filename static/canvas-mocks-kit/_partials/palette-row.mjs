/**
 * Palette-row partial — gallery thumb wrapping iframe-rendered SDC variation.
 *
 * Each thumb embeds an iframe pointing to a per-variation `frame-*.html`
 * standalone page. iframe gives correct viewport for `vw` + media queries.
 */
export function paletteRow({ id, items, frameWidth = 1280, frameHeight = 700, scale = 0.5 }) {
  const w = Math.round(frameWidth * scale);
  const h = Math.round(frameHeight * scale);

  const grid = items.map((it) => {
    const meta = Object.entries(it.meta || {})
      .map(([k, v]) => `<span class="kv"><strong>${k}</strong>=${v}</span>`)
      .join(' ');
    return `<article class="thumb">
  <details class="thumb-disclose">
    <summary class="thumb__head"><span>${it.label}</span>${meta}</summary>
    <div class="thumb__body" style="width:${w}px; height:${h}px;">
      <iframe src="${it.frameHref}" width="${frameWidth}" height="${frameHeight}"
              style="border:0; display:block; transform: scale(${scale}); transform-origin: top left;"
              loading="lazy" title="${it.label}"
              onload="this.height = (this.contentDocument && this.contentDocument.body) ? Math.max(this.contentDocument.body.scrollHeight, ${frameHeight}) : this.height;"></iframe>
    </div>
  </details>
</article>`;
  }).join('\n');

  return `<section class="gallery" id="${id || 'gallery'}">
  <h2 class="gallery__title">Variations gallery</h2>
  <p class="gallery__lede">All declared <code>variation × background</code> combos rendered at <code>${frameWidth}×${frameHeight}</code> desktop viewport, scaled to ${Math.round(scale * 100)}% thumb.</p>
  <div class="gallery__grid">
${grid}
  </div>
</section>`;
}
