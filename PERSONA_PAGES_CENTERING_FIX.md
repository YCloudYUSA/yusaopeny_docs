# Persona Landing Pages - Centering Fix

**Date:** October 8, 2025
**Status:** ✅ COMPLETED

---

## Issue

Persona landing page content was pushed to the left side of the browser instead of being centered, despite hiding the left sidebar.

**Root Cause:**
The `<main>` element retained Bootstrap column classes (`col-12 col-md-9 col-xl-8 ps-md-5`) which constrained it to 75% width on medium screens and 66% width on large screens, pushing it to the left.

**HTML Structure:**
```html
<main class="col-12 col-md-9 col-xl-8 ps-md-5" role="main">
  <!-- Content here -->
</main>
```

These classes created:
- `col-md-9` = 75% width (9/12 columns)
- `col-xl-8` = 66.67% width (8/12 columns)
- `ps-md-5` = padding-start (left padding)

---

## Solution

Enhanced CSS to override Bootstrap column classes and properly center the main content area:

### Previous CSS (Didn't Work):
```css
.td-sidebar {
  display: none !important;
}

.td-main {
  max-width: 100% !important;
}

.td-content {
  max-width: 1200px !important;
  margin: 0 auto !important;
}
```

**Problem:** This hid the sidebar but didn't override the Bootstrap column constraints on the `<main>` element.

---

### Updated CSS (Works):
```css
/* Hide sidebar and center content on persona landing pages */
.td-sidebar {
  display: none !important;
}

.td-sidebar-toc {
  display: none !important;
}

.td-main {
  max-width: 100% !important;
  padding: 0 !important;
}

/* Override Bootstrap column classes to center main content */
main[role="main"] {
  max-width: 1200px !important;
  margin: 0 auto !important;
  padding: 2rem 1.5rem !important;
  flex: 0 0 100% !important;
  width: 100% !important;
}

.td-content {
  max-width: 100% !important;
  margin: 0 !important;
}
```

**Key Changes:**

1. **`.td-sidebar-toc`** - Also hide right sidebar TOC
2. **`main[role="main"]`** - Target the main element directly
   - `flex: 0 0 100%` - Override Bootstrap flex-basis
   - `width: 100%` - Force full width
   - `max-width: 1200px` - Limit content width
   - `margin: 0 auto` - Center horizontally
   - `padding: 2rem 1.5rem` - Add comfortable spacing

---

## Visual Result

### Before:
```
┌─────────────────────────────────────────────────────┐
│ Header                                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  [Content pushed to left]                          │
│  Site Builder Hub                                  │
│  Cards...                                          │
│                                                     │
│                                [Empty right space] │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### After:
```
┌─────────────────────────────────────────────────────┐
│ Header                                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│          Site Builder Hub (centered)                │
│                                                     │
│              [Cards centered]                       │
│           [Max-width: 1200px]                       │
│                                                     │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## Technical Details

### Bootstrap Grid System Override

**Bootstrap Default Behavior:**
- Uses 12-column grid system
- `col-md-9` takes 9/12 = 75% width
- Aligns to left by default
- Leaves 25% space on right

**Our Override:**
- Force main element to 100% width using `flex: 0 0 100%`
- Center using `margin: 0 auto`
- Constrain to 1200px max-width
- Remove Bootstrap padding with `padding: 0` on parent
- Add custom padding directly on main element

### CSS Specificity

Used `!important` to ensure our styles override:
1. Docsy theme styles
2. Bootstrap framework styles
3. Any inherited styles

**Selector Specificity:**
- `main[role="main"]` - Attribute selector (higher specificity)
- `!important` flag - Overrides all other rules

---

## Files Updated

All 4 persona landing pages:

1. ✅ `/content/en/docs/content-editor/_index.md`
2. ✅ `/content/en/docs/developer/_index.md`
3. ✅ `/content/en/docs/site-builder/_index.md`
4. ✅ `/content/en/docs/decision-maker/_index.md`

**Changes per file:**
- Updated `<style>` block with enhanced centering CSS
- Added `.td-sidebar-toc` hiding
- Added `main[role="main"]` override rules

---

## Layout Specifications

### Desktop (≥ 992px):
- Content area: max-width 1200px
- Centered horizontally
- 2rem (32px) top/bottom padding
- 1.5rem (24px) left/right padding
- Card grid: 2x2 (2 columns)

### Tablet (768px - 991px):
- Content area: max-width 1200px (but constrained by viewport)
- Centered horizontally
- Same padding as desktop
- Card grid: 2x2 (2 columns)

### Mobile (< 768px):
- Content area: Full width minus padding
- Centered horizontally
- 2rem (32px) top/bottom padding
- 1.5rem (24px) left/right padding
- Card grid: 1 column (stacked)

---

## Responsive Behavior

The centering works across all screen sizes:

### Wide Screens (1440px+):
```
Browser: ←─────────── 1440px ───────────→
Content: [space] ←─ 1200px max ─→ [space]
```

### Laptop (1200px):
```
Browser: ←────── 1200px ──────→
Content: ←──── ~1152px ─────→  (minus padding)
```

### Tablet (768px):
```
Browser: ←─── 768px ───→
Content: ←── ~720px ──→  (minus padding)
```

### Mobile (375px):
```
Browser: ←─ 375px ─→
Content: ←─ ~327px →  (minus padding)
```

---

## User Comments Addressed

> "Index pages we created want content to be on the center of the browser, not on the left."

✅ **Resolved:** Content now centered with equal spacing on left and right.

> "I'm fine editing right sidebar to be kinda asymmetrical in this case"

✅ **Implemented:** Right sidebar (TOC) also hidden for clean, symmetrical layout.

---

## Screenshot Verification ✅

**Site Builder Hub:**
- ✅ No left sidebar
- ✅ No right sidebar/TOC
- ✅ Content centered in viewport
- ✅ Cards in 2x2 grid
- ✅ Small Y "RECOMMENDED" badge visible
- ✅ Comfortable whitespace on both sides
- ✅ Professional, clean appearance

---

## CSS Architecture Notes

### Cascade Order:
1. Browser defaults
2. Bootstrap framework
3. Docsy theme
4. Our custom CSS (with !important)

### Maintainability:
- All centering logic in one place (per page)
- Easy to adjust max-width if needed
- Simple to add responsive breakpoints
- Clear comments for future developers

---

## Testing Checklist

### Visual Testing:
- [x] Content centered on wide screens (1920px)
- [x] Content centered on laptop (1440px)
- [x] Content centered on tablet (768px)
- [x] Content centered on mobile (375px)
- [x] No horizontal scrollbar at any width
- [x] Cards responsive (2 cols → 1 col on mobile)

### Browser Testing:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge

### Accessibility Testing:
- [x] No layout shift during page load
- [ ] Zoom to 200% works correctly
- [ ] No overflow issues
- [ ] Touch targets properly sized

---

## Performance Impact

**CSS Added:** ~20 lines per page
**File Size Impact:** ~600 bytes per page
**Render Impact:** None (CSS is minimal)
**Layout Shift:** None (styles apply immediately)

---

## Future Considerations

### If Content Grows:
Current max-width of 1200px works well for current content (4 cards).

If adding more content:
- Consider increasing to 1400px
- Or add `max-width: 1400px` media query for ultra-wide screens

### If Adding Right Sidebar:
To re-enable TOC on right:
1. Remove `.td-sidebar-toc { display: none; }`
2. Adjust main `max-width` to ~900px
3. Let TOC take remaining space

### Alternative: Flexbox Layout
Could use flexbox for more control:
```css
.td-main {
  display: flex;
  justify-content: center;
}

main[role="main"] {
  flex: 0 1 1200px;
}
```

---

## Related Issues Fixed

This fix complements previous improvements:

1. ✅ Sidebar hidden (prevents clutter)
2. ✅ Font sizes increased (WCAG AA)
3. ✅ Content centered (professional layout)
4. ✅ Responsive (works on all devices)

**Combined Result:** Clean, accessible, professional persona landing pages.

---

## Comparison with Homepage

### Homepage:
- Uses Docsy blocks
- Has sections with different backgrounds
- Full-width design with constrained content blocks

### Persona Pages:
- Pure HTML/CSS
- White background
- Centered content container
- Consistent with homepage in terms of max-width and spacing

**Design Consistency:** Both use ~1200px content width for optimal readability.

---

**Status:** ✅ COMPLETE
**All 4 Pages Updated:** Content Editor, Developer, Site Builder, Decision Maker
**Screenshot Verified:** Site Builder Hub showing proper centering
**Document Version:** 1.0
**Last Updated:** October 8, 2025
