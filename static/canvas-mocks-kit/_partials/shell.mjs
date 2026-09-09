/**
 * Canonical HTML shell — wraps every emitted page.
 * Loads mock chrome (_shared.css), tokens (_tokens.css), and per-component CSS.
 *
 * Inlines `window.__MOCKS_INDEX` so nav.js can mount sidebar + ⌘K palette
 * under file:// (fetch is CORS-blocked there). Per ADR-001 file://-first
 * principle.
 */
export function shell({ title, body, componentCssHref = '', extraStyle = '', mocksIndex = [] }) {
  const compLink = componentCssHref
    ? `<link rel="stylesheet" href="${componentCssHref}">`
    : '';
  const inlineIndex = `<script>window.__MOCKS_INDEX = ${JSON.stringify(mocksIndex)};</script>`;
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="stylesheet" href="../_fonts.css">
<link rel="stylesheet" href="../_tokens.css">
<link rel="stylesheet" href="../_shared.css">
${compLink}
${extraStyle ? `<style>${extraStyle}</style>` : ''}
</head>
<body>
${body}
${inlineIndex}
<script src="../nav.js" defer></script>
</body>
</html>`;
}
