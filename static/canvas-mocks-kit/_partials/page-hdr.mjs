/**
 * Page header partial. Reusable across index/devices/variations.
 *
 * Inputs:
 *   eyebrow, title, lede (HTML), pills [{ swatch?, label, value }]
 *   sotLinks [{ label, url, note? }] — Source-of-truth links per SDC.
 *     Rendered as a "SoT" row beneath pills. Per
 *     `docs/decisions/SDC-AUDIT-vs-yusaopeny-docs.md` SoT hierarchy.
 */
export function pageHdr({ eyebrow = '', title = '', lede = '', pills = [], sotLinks = [] }) {
  const pillsHtml = pills.map((p) => {
    const swatch = p.swatch ? '<span class="swatch"></span>' : '';
    const devAttr = p.dev ? ' data-view-only="dev"' : '';
    return `<span class="pill"${devAttr}>${swatch}<strong>${p.label}</strong> ${p.value}</span>`;
  }).join('\n    ');
  const sotHtml = sotLinks.length ? `<div class="sot-row" data-view-only="dev" style="margin-top:.6rem;font-size:.78rem;line-height:1.4;color:var(--mx-ink-subtle)">
    <strong style="color:var(--mx-ink)">SoT:</strong>
    ${sotLinks.map((s) => `<a href="${s.url}" target="_blank" rel="noopener" style="margin-right:.9rem;color:var(--mx-ink);text-decoration:underline;text-decoration-color:var(--mx-line);text-underline-offset:3px">${s.label}${s.note ? ` <span style=\"color:var(--mx-ink-subtle)\">(${s.note})</span>` : ''}</a>`).join('')}
  </div>` : '';
  return `<header class="page-hdr">
  <div class="page-hdr-actions">
    <button type="button" class="mx-search-chip" data-mx-open-palette aria-label="Search components (Cmd+K)">
      <span class="mx-search-chip__kbd"><kbd>⌘</kbd><kbd>K</kbd></span>
      <span class="mx-search-chip__label">Search components</span>
    </button>
    <button type="button" class="mx-devview-chip" data-mx-toggle-devview aria-pressed="false" aria-label="Toggle developer view">
      <span class="mx-devview-chip__icon" aria-hidden="true">◐</span>
      <span class="mx-devview-chip__label">Dev view</span>
    </button>
  </div>
  <div class="eyebrow">${eyebrow}</div>
  <h1>${title}</h1>
  <p class="lede">${lede}</p>
  ${pills.length ? `<div class="meta-row">\n    ${pillsHtml}\n  </div>` : ''}
  ${sotHtml}
</header>`;
}
