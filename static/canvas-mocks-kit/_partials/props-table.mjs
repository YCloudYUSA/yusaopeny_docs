/**
 * Props table partial — renders SDC schema props as HTML table.
 *
 * Input: parsed `*.component.yml` props.properties object.
 */
export function propsTable(properties = {}, opts = {}) {
  // Optional id for the wrapping <section>. Default 'props' matches the
  // page-tabs anchor (#props) on per-SDC index pages. Inner uses (e.g.
  // slot-children props on a parent page) pass null/'' so the page does
  // not emit duplicate id attributes — invalid HTML and breaks anchor
  // resolution.
  // Use Object.prototype.hasOwnProperty so an explicit `{ id: null }` from
  // the caller suppresses the id (nullish coalescing would have re-applied
  // the default and emitted duplicate id="props" on every nested call).
  const id = Object.prototype.hasOwnProperty.call(opts, 'id') ? opts.id : 'props';
  const idAttr = id ? ` id="${id}"` : '';
  const escape = (s) => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  const rows = Object.entries(properties).map(([name, p]) => {
    const type = p.type || (p.$ref ? 'object · $ref' : '—');
    const def = p.default !== undefined ? `<span class="default">${escape(p.default)}</span>` : '<span class="default">—</span>';
    const desc = p.description ? escape(p.description) : '';
    const enums = Array.isArray(p.enum)
      ? p.enum.map((e) => `<span class="enum">${escape(e)}</span>`).join('')
      : '';
    const example = Array.isArray(p.examples) && p.examples.length
      ? `<code>${escape(typeof p.examples[0] === 'object' ? JSON.stringify(p.examples[0]) : p.examples[0])}</code>`
      : '—';
    return `      <tr>
        <td class="col-name">${escape(name)}</td>
        <td class="col-type">${escape(type)}</td>
        <td>${def}</td>
        <td>${desc}${enums ? '<br>' + enums : ''}</td>
        <td>${example}</td>
      </tr>`;
  }).join('\n');

  return `<section class="props"${idAttr}>
  <h2 class="props__title">Props schema</h2>
  <p class="props__lede">Source: <code>components/&lt;id&gt;/&lt;id&gt;.component.yml</code>.</p>
  <table class="props__table">
    <thead>
      <tr><th>Prop</th><th>Type</th><th>Default</th><th>Description · Enum</th><th>Example</th></tr>
    </thead>
    <tbody>
${rows}
    </tbody>
  </table>
</section>`;
}
