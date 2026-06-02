// nav.js — sidebar tree + ⌘K palette for canvas-mocks-kit pages.
// Adapted from ec-ui-light/docs/design/mocks/v2/nav.js.
//
// Loads window.__MOCKS_INDEX (inlined per page) and mounts:
//   – Left sidebar tree (collapsible groups + per-item links)
//   – ⌘K / `/` command palette
//   – Sticky group tab bar (top-level catalog only)
//
// Vanilla JS, no deps. file://-friendly via inline JSON.

(function () {
  "use strict";

  // Catalog index page is tagged `<body data-mx-index>` by the exporter.
  // Path-independent so sidebar/palette links resolve under any deploy base
  // (`/canvas-mocks-kit/` on ds-docs, `/docs/design/mocks/` in dev) instead
  // of assuming a `/mocks/` path. nav.js is `defer`, so body is parsed here.
  const isIndex = !!(document.body && document.body.dataset.mxIndex);

  // Category labels — aligned with ds-docs.y.org Block Library taxonomy
  // (top 8) plus Canvas-only groupings (bottom 5). Source of truth for
  // category ↔ id mapping is `scripts/registry.mjs::CATEGORY_MAP`.
  const GROUP_LABEL = {
    "chrome":          "Site shell",
    "hero-banner":     "Page heroes",
    "content":         "Content blocks",
    "grid-card":       "Cards & grids",
    "views-listings":  "Listings",
    "people":          "People & quotes",
    "activities":      "Activity & schedule blocks",
    "location-nav":    "Location & wayfinding",
    "navigation":      "Navigation",
    "forms-ctas":      "Forms & calls to action",
    "page-fields":     "Page fields",
    "highlights":      "Highlights",
    "numbers-text":    "Numbers & text blocks",
    "templates":       "Page templates",
    "slot-children":   "Slot children",
    // Legacy fallbacks (entries without category)
    "organisms":       "Organisms",
    "molecules":       "Molecules",
    "states":          "States",
    "overlays":        "Overlays",
    "flows":           "Flows",
  };
  // Site shell pinned top — most-asked first lookup; also addresses Lera
  // friction #1 (chrome was buried at index 11). Slot children pinned to
  // the bottom (W2/P1 operator decision 2026-05-05) — chrome shell
  // children share the same group regardless of parent.
  const GROUP_ORDER = [
    "chrome",
    "hero-banner", "content", "grid-card", "views-listings",
    "people", "activities", "location-nav", "navigation", "forms-ctas",
    "page-fields", "highlights", "numbers-text",
    "templates",
    "slot-children",
    // Legacy
    "organisms", "molecules", "states", "overlays", "flows",
  ];

  // Group axis. Old MOCKS_INDEX entries may only have `group`; new ones
  // also have `category`. Prefer category, fall back to group.
  function axisOf(e) { return e.category || e.group; }

  let entries = [];

  // Recent-SDC tracker (Vlad PR #8 F-6 §3). LIFO, dedupes, capped at 3.
  // Each per-SDC page records itself on load; the palette surfaces these
  // as a "Recent" section above filter results so designers stop
  // re-filtering the same 5–6 SDCs over and over.
  const RECENT_KEY = "mx-recent-sdc";
  const RECENT_CAP = 8;

  function readRecent() {
    try {
      const arr = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : [];
    } catch { return []; }
  }
  function writeRecent(arr) {
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(arr)); } catch {}
  }
  function pushRecent(id) {
    if (!id) return;
    const cur = readRecent().filter((x) => x !== id);
    cur.unshift(id);
    writeRecent(cur.slice(0, RECENT_CAP));
  }

  function boot(j) {
    entries = j;
    // If we're on a per-SDC page, record the visit.
    if (!isIndex) {
      const segs = window.location.pathname.split("/").filter(Boolean);
      const id = segs[segs.length - 2];
      if (id && entries.some((e) => e.id === id)) pushRecent(id);
    }
    mountPalette();
    mountSidebar();
    if (isIndex) mountTabs();
    mountPageTabs();
    mountDevView();
    mountDiscloseAll();
  }

  // ─────────── Expand/Collapse all (P3d/P5b — section <details> control) ───────
  function mountDiscloseAll() {
    document.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-mx-disclose-all]");
      if (!btn) return;
      ev.preventDefault();
      const targetSel = btn.getAttribute("data-mx-target");
      const root = targetSel ? document.querySelector(targetSel) : document;
      if (!root) return;
      const open = btn.getAttribute("data-mx-disclose-all") === "open";
      root.querySelectorAll("details").forEach((d) => { d.open = open; });
    });
  }

  // ─────────── developer-view toggle (P7 — RULES.md) ───────────
  function mountDevView() {
    const KEY = "mx-dev-view";
    const apply = (on) => {
      if (on) document.documentElement.setAttribute("data-view", "dev");
      else document.documentElement.removeAttribute("data-view");
      document.querySelectorAll("[data-mx-toggle-devview]").forEach((b) => {
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    };
    const stored = (() => {
      try { return localStorage.getItem(KEY) === "1"; } catch { return false; }
    })();
    apply(stored);

    document.addEventListener("click", (ev) => {
      const btn = ev.target.closest("[data-mx-toggle-devview]");
      if (!btn) return;
      ev.preventDefault();
      const wasOn = document.documentElement.getAttribute("data-view") === "dev";
      const next = !wasOn;
      try { localStorage.setItem(KEY, next ? "1" : "0"); } catch {}
      apply(next);
    });
  }

  // ─────────── per-SDC sticky tab strip (Variant C — RULES.md) ───────────
  function mountPageTabs() {
    const nav = document.querySelector(".page-tabs");
    if (!nav) return;
    const tabs = [...nav.querySelectorAll('a[role="tab"]')]
      .map((a) => {
        const sel = a.getAttribute("href");
        const target = sel && sel.startsWith("#") ? document.querySelector(sel) : null;
        return target ? { a, target } : null;
      })
      .filter(Boolean);
    if (!tabs.length) return;

    const setCurrent = (a) => {
      tabs.forEach((t) => {
        if (t.a === a) t.a.setAttribute("aria-current", "true");
        else t.a.removeAttribute("aria-current");
      });
    };

    let activeTarget = tabs[0].target;
    const obs = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport (after sticky tabs).
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (!visible.length) return;
        activeTarget = visible[0].target;
        const match = tabs.find((t) => t.target === activeTarget);
        if (match) setCurrent(match.a);
      },
      { rootMargin: "-72px 0px -55% 0px", threshold: 0 }
    );
    tabs.forEach((t) => obs.observe(t.target));
    setCurrent(tabs[0].a);
  }

  if (window.__MOCKS_INDEX && Array.isArray(window.__MOCKS_INDEX)) {
    boot(window.__MOCKS_INDEX);
  } else {
    fetch("./mocks-index.json")
      .then((r) => r.json())
      .then(boot)
      .catch((e) => console.warn("nav.js: mocks-index.json fetch failed", e));
  }

  // ─────────── command palette (⌘K / /) ───────────
  function mountPalette() {
    const overlay = document.createElement("div");
    overlay.id = "mx-palette";
    overlay.innerHTML = `
      <div class="mx-pal-card" role="dialog" aria-label="Command palette">
        <div class="mx-pal-input-row">
          <span class="mx-pal-icon">⌘</span>
          <input class="mx-pal-input" placeholder="Type to filter SDC · ↑↓ navigate · ↵ open · ⎋ close" />
          <span class="mx-pal-count"></span>
        </div>
        <ul class="mx-pal-list" role="listbox"></ul>
        <div class="mx-pal-foot">
          <span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>⎋</kbd> close</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector(".mx-pal-input");
    const list = overlay.querySelector(".mx-pal-list");
    const count = overlay.querySelector(".mx-pal-count");
    let activeIdx = 0;
    let filtered = entries;

    function urlFor(e) {
      // From per-SDC pages, prefix `../` so links resolve from current dir.
      // From top-level catalog, e.url is already relative (e.g. y-cards/index.html).
      return isIndex ? e.url : `../${e.url}`;
    }

    function render(items, opts) {
      const showRecent = !!(opts && opts.showRecent);
      filtered = items;
      activeIdx = 0;
      const recentEntries = showRecent
        ? readRecent()
            .map((id) => entries.find((e) => e.id === id))
            .filter(Boolean)
        : [];
      // Recent items prepend the filtered list so keyboard nav reaches
      // them first. They are part of `filtered` so Enter/click still
      // works. Render order: Recent (with header), then full filter set.
      const offset = recentEntries.length;
      filtered = recentEntries.concat(items);
      const renderItem = (e, i) => {
        const groupKey = axisOf(e);
        const groupLabel = GROUP_LABEL[groupKey] || groupKey;
        return `
          <li class="mx-pal-item${i === 0 ? " active" : ""}" data-i="${i}" role="option">
            <span class="mx-pal-item-id">${escapeHtml(e.id)}</span>
            <span class="mx-pal-item-sep" aria-hidden="true">·</span>
            <span class="mx-pal-item-group">${escapeHtml(groupLabel)}</span>
            <span class="mx-pal-item-title">${escapeHtml(e.title)}</span>
            ${e.bundle ? `<span class="mx-pal-item-bundle" data-view-only="dev">${escapeHtml(e.bundle)}</span>` : ""}
          </li>`;
      };
      const recentHtml = recentEntries.length
        ? `<li class="mx-pal-section" aria-hidden="true">Recent</li>${recentEntries.map((e, i) => renderItem(e, i)).join("")}<li class="mx-pal-section" aria-hidden="true">All ${items.length}</li>`
        : "";
      const restHtml = items.length
        ? items.map((e, i) => renderItem(e, i + offset)).join("")
        : `<li class="mx-pal-empty" role="option" aria-disabled="true">
            <strong>No SDC matched.</strong>
            Try <code>cards</code>, <code>numbers</code>, <code>hero</code>, <code>forms</code>, or <code>shell</code>.
            Press <kbd>Esc</kbd> to close.
          </li>`;
      list.innerHTML = recentHtml + restHtml;
      count.textContent = `${items.length} of ${entries.length}`;
    }

    function open() {
      overlay.classList.add("open");
      input.value = "";
      render(entries, { showRecent: true });
      setTimeout(() => input.focus(), 10);
    }
    function close() { overlay.classList.remove("open"); }
    // Expose so page-hdr search chip + any other affordance can trigger
    // the palette without forging keyboard events.
    window.__mxOpenPalette = open;
    document.addEventListener("click", (ev) => {
      const chip = ev.target.closest("[data-mx-open-palette]");
      if (!chip) return;
      ev.preventDefault();
      open();
    });
    function move(delta) {
      const items = list.querySelectorAll(".mx-pal-item");
      if (!items.length) return;
      items[activeIdx]?.classList.remove("active");
      activeIdx = (activeIdx + delta + items.length) % items.length;
      const el = items[activeIdx];
      el.classList.add("active");
      el.scrollIntoView({ block: "nearest" });
    }
    function activate() {
      const item = filtered[activeIdx];
      if (item) window.location.href = urlFor(item);
    }

    input.addEventListener("input", () => {
      const q = input.value.trim().toLowerCase();
      if (!q) return render(entries, { showRecent: true });
      const tokens = q.split(/\s+/);
      const matches = entries.filter((e) => {
        const hay = `${e.id} ${e.title} ${e.bundle || ""} ${axisOf(e)} ${(e.tags || []).join(" ")} ${(e.aliases || []).join(" ")} ${(e.props || []).join(" ")} ${e.description || ""}`.toLowerCase();
        return tokens.every((t) => hay.includes(t));
      });
      render(matches);
    });
    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { e.preventDefault(); close(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); move(1); }
      else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
      else if (e.key === "Enter") { e.preventDefault(); activate(); }
    });
    list.addEventListener("click", (e) => {
      const li = e.target.closest(".mx-pal-item");
      if (li) { activeIdx = Number(li.dataset.i); activate(); }
    });
    overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });

    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (overlay.classList.contains("open")) close(); else open();
      } else if (e.key === "/" && !isInput(e.target)) {
        e.preventDefault();
        open();
      } else if (e.key === "?" && e.shiftKey && !isInput(e.target)) {
        e.preventDefault();
        toggleHelpOverlay();
      }
    });
  }

  // ─────────── keyboard help overlay (Shift+?) ───────────
  function toggleHelpOverlay() {
    let overlay = document.getElementById("mx-help");
    if (overlay) {
      overlay.remove();
      return;
    }
    overlay = document.createElement("div");
    overlay.id = "mx-help";
    overlay.innerHTML = `
      <div class="mx-help-card" role="dialog" aria-label="Keyboard shortcuts">
        <header class="mx-help-hdr">
          <h2>Keyboard shortcuts</h2>
          <button class="mx-help-close" aria-label="Close">✕</button>
        </header>
        <dl class="mx-help-list">
          <div><dt><kbd>⌘</kbd><kbd>K</kbd> · <kbd>Ctrl</kbd><kbd>K</kbd> · <kbd>/</kbd></dt><dd>Open component search</dd></div>
          <div><dt><kbd>↑</kbd> <kbd>↓</kbd></dt><dd>Move highlight in palette</dd></div>
          <div><dt><kbd>↵</kbd></dt><dd>Open highlighted SDC</dd></div>
          <div><dt><kbd>Esc</kbd></dt><dd>Close palette / help</dd></div>
          <div><dt><kbd>Shift</kbd><kbd>?</kbd></dt><dd>Open this help</dd></div>
          <div><dt><kbd>⌘</kbd><kbd>\\</kbd></dt><dd>Toggle sidebar</dd></div>
        </dl>
        <footer class="mx-help-foot">Filter searches id, title, aliases, props.</footer>
      </div>`;
    document.body.appendChild(overlay);
    const close = () => overlay.remove();
    overlay.addEventListener("click", (ev) => { if (ev.target === overlay) close(); });
    overlay.querySelector(".mx-help-close").addEventListener("click", close);
    document.addEventListener("keydown", function onKey(ev) {
      if (ev.key === "Escape") { close(); document.removeEventListener("keydown", onKey); }
    });
  }

  // ─────────── sticky group tab bar (catalog only) ───────────
  function mountTabs() {
    const groups = GROUP_ORDER.filter((g) => entries.some((e) => axisOf(e) === g));
    if (groups.length < 2) return; // no value for single-group catalog
    const counts = Object.fromEntries(groups.map((g) => [g, entries.filter((e) => axisOf(e) === g).length]));
    const bar = document.createElement("nav");
    bar.id = "mx-tabbar";
    bar.innerHTML = groups
      .map((g) => `<a href="#g-${g}" data-g="${g}" class="mx-tab"><span>${escapeHtml(GROUP_LABEL[g] || g)}</span><b>${counts[g]}</b></a>`)
      .join("");
    document.body.prepend(bar);
  }

  // ─────────── left sidebar (collapsible tree) ───────────
  function mountSidebar() {
    const groups = GROUP_ORDER.filter((g) => entries.some((e) => axisOf(e) === g));
    if (!groups.length) return;
    const aside = document.createElement("aside");
    aside.id = "mx-sidebar";
    const collapsed = (() => { try { return JSON.parse(localStorage.getItem("mx-side-collapsed") || "{}"); } catch { return {}; } })();

    function urlFor(e) {
      // From per-SDC pages, prefix `../` so sidebar links resolve from current dir.
      const url = e.url || `${e.id}/index.html`;
      return isIndex ? url : `../${url}`;
    }
    const idIndex = new Set(entries.map((x) => x.id));

    // Build child entry index by id so parent rows can render nested
    // child links without rescanning the full entries array per parent.
    const byId = Object.fromEntries(entries.map((e) => [e.id, e]));

    // Recursive nested-child renderer — walks `parent.children[]` and
    // renders an indented sub-list per child. Slot children are
    // always-visible (W2/P1 operator decision: dropped data-view-only="dev"
    // gate). For two-level slots (e.g. y-partners → y-partners-tier →
    // y-partner-item) the child entry itself may have a `children[]` so
    // we recurse.
    function renderChildList(childIds, depth) {
      if (!Array.isArray(childIds) || !childIds.length) return "";
      return `
                      <ul class="mx-side-children" data-depth="${depth}">
                        ${childIds.map((cid) => {
                          const c = byId[cid];
                          if (!c) return "";
                          const grandchildren = renderChildList(c.children || [], depth + 1);
                          return `
                          <li class="mx-side-li mx-side-li--child">
                            <div class="mx-side-li-row">
                              <span class="mx-side-disclose mx-side-disclose--empty" aria-hidden="true"></span>
                              <a class="mx-side-link" href="${escapeHtml(urlFor(c))}" data-id="${escapeHtml(c.id)}" data-kind="slot-child">
                                ${c.bundleIconSvg
                                  ? `<span class="mx-side-icon" aria-hidden="true">${c.bundleIconSvg}</span>`
                                  : `<span class="mx-side-icon mx-side-icon--empty" aria-hidden="true"></span>`}
                                <span class="mx-side-id">${escapeHtml(c.id)}</span>
                                <span class="mx-side-kind" aria-hidden="true">slot-child</span>
                              </a>
                            </div>
                            ${grandchildren}
                          </li>`;
                        }).join("")}
                      </ul>`;
    }

    // Filter the catalog tree to parents only — children appear nested
    // under their parent (W2/P1) or in the dedicated "Slot children"
    // group at the bottom (chrome shell children whose parent has no
    // LB bundle to render them under).
    function isParentRow(e) {
      return e.kind !== "slot-child";
    }

    aside.innerHTML = `
      <div class="mx-side-hdr">
        <strong>canvas-mocks-kit</strong>
        <button class="mx-side-toggle" aria-label="Toggle sidebar" title="⌘\\">⇤</button>
      </div>
      <div class="mx-side-search">
        <input placeholder="Filter SDC…" />
      </div>
      <nav class="mx-side-tree" aria-label="SDC catalog">
        ${groups.map((g) => {
          const groupItems = entries.filter((e) => axisOf(e) === g);
          // Within each group: parents render with nested children below;
          // the dedicated "slot-children" group lists chrome shell children
          // (their canonical parent has no LB bundle, so they cannot nest
          // under a renderable parent surface).
          const items = g === "slot-children" ? groupItems : groupItems.filter(isParentRow);
          const open = !collapsed[g];
          const listId = "mx-side-grp-list-" + g;
          return `
            <div class="mx-side-grp" data-g="${g}" data-open="${open ? "1" : "0"}">
              <button class="mx-side-grp-hdr" aria-expanded="${open}" aria-controls="${listId}">
                <span class="mx-side-arr" aria-hidden="true">${open ? "▾" : "▸"}</span>
                <span>${escapeHtml(GROUP_LABEL[g] || g)}</span>
                <span class="mx-side-grp-cnt" aria-hidden="true">${items.length}</span>
              </button>
              <ul id="${listId}" class="mx-side-grp-list">
                ${items.map((e) => {
                  const children = Array.isArray(e.children) ? e.children : [];
                  const hasChildren = children.length > 0;
                  const isChild = e.kind === "slot-child";
                  return `
                  <li class="mx-side-li${hasChildren ? " mx-side-li--has-children" : ""}${isChild ? " mx-side-li--child" : ""}">
                    <div class="mx-side-li-row">
                      <span class="mx-side-disclose mx-side-disclose--empty" aria-hidden="true"></span>
                      <a class="mx-side-link" href="${escapeHtml(urlFor(e))}" data-id="${escapeHtml(e.id)}"${isChild ? ' data-kind="slot-child"' : ""}>
                        ${e.bundleIconSvg
                          ? `<span class="mx-side-icon" aria-hidden="true">${e.bundleIconSvg}</span>`
                          : `<span class="mx-side-icon mx-side-icon--empty" aria-hidden="true"></span>`}
                        <span class="mx-side-id">${escapeHtml(e.id)}</span>
                        ${isChild ? '<span class="mx-side-kind" aria-hidden="true">slot-child</span>' : ""}
                      </a>
                    </div>
                    ${renderChildList(children, 1)}
                  </li>`;
                }).join("")}
              </ul>
            </div>`;
        }).join("")}
      </nav>
    `;
    document.body.classList.add("mx-with-sidebar");
    document.body.prepend(aside);

    aside.querySelectorAll(".mx-side-grp").forEach((g) => {
      const open = g.dataset.open === "1";
      g.querySelector(".mx-side-grp-list").style.display = open ? "" : "none";
    });

    // Highlight active SDC entry on per-mock pages.
    const path = window.location.pathname;
    const segs = path.split("/").filter(Boolean);
    const sdcId = segs[segs.length - 2]; // ../<sdc-id>/<page>.html
    if (sdcId && sdcId !== "mocks") {
      const link = aside.querySelector(`a[data-id="${sdcId}"]`);
      if (link) {
        link.classList.add("active");
        const grp = link.closest(".mx-side-grp");
        if (grp && grp.dataset.open === "0") {
          grp.dataset.open = "1";
          grp.querySelector(".mx-side-arr").textContent = "▾";
          grp.querySelector(".mx-side-grp-list").style.display = "";
          const hdr = grp.querySelector(".mx-side-grp-hdr");
          if (hdr) hdr.setAttribute("aria-expanded", "true");
        }
        link.scrollIntoView({ block: "center" });
      }
    }

    // Group disclosure toggle.
    aside.addEventListener("click", (e) => {
      const hdr = e.target.closest(".mx-side-grp-hdr");
      if (!hdr) return;
      const grp = hdr.parentElement;
      const id = grp.dataset.g;
      const wasOpen = grp.dataset.open === "1";
      grp.dataset.open = wasOpen ? "0" : "1";
      grp.querySelector(".mx-side-arr").textContent = wasOpen ? "▸" : "▾";
      grp.querySelector(".mx-side-grp-list").style.display = wasOpen ? "none" : "";
      hdr.setAttribute("aria-expanded", wasOpen ? "false" : "true");
      collapsed[id] = wasOpen;
      try { localStorage.setItem("mx-side-collapsed", JSON.stringify(collapsed)); } catch {}
    });

    // Filter as you type. Searches id + title + aliases + props (P3 —
    // alias index lets a designer searching for "numbers" find
    // y-statistics under "Numbers & text blocks"). Uses the by-id index
    // built earlier for the nested-children renderer.
    const sIn = aside.querySelector(".mx-side-search input");
    sIn.addEventListener("input", () => {
      const q = sIn.value.trim().toLowerCase();
      aside.querySelectorAll(".mx-side-grp").forEach((g) => {
        let any = false;
        g.querySelectorAll("li").forEach((li) => {
          const a = li.querySelector("a.mx-side-link") || li.querySelector("a");
          const id = a?.dataset.id?.toLowerCase() || "";
          const e = byId[id];
          const hay = `${id} ${(e?.title || "").toLowerCase()} ${(e?.aliases || []).join(" ").toLowerCase()} ${(e?.props || []).join(" ").toLowerCase()}`;
          const match = !q || hay.includes(q);
          li.style.display = match ? "" : "none";
          if (match) any = true;
        });
        g.style.display = q && !any ? "none" : "";
      });
    });

    // Sidebar mini-mode.
    aside.querySelector(".mx-side-toggle").addEventListener("click", () => {
      document.body.classList.toggle("mx-side-mini");
    });
  }

  function escapeHtml(s) {
    return String(s ?? "").replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }
  function isInput(el) {
    return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
  }
})();
