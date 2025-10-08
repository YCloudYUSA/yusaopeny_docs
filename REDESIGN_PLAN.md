# YMCA Website Services Docs Redesign Plan

## Goals
1. Implement persona-based navigation on homepage
2. Apply 2025 documentation best practices
3. Improve human readability and discoverability
4. Align with Diátaxis framework (already partially implemented)

## Identified User Personas

### 1. Content Editor
- **Goal**: Learn to manage content, create pages, use components
- **Entry Point**: User Documentation, Tutorials
- **Pain Points**: Need quick how-tos, visual guides

### 2. Developer
- **Goal**: Build features, contribute code, upgrade sites
- **Entry Point**: Development documentation, API references
- **Pain Points**: Need technical details, upgrade paths, architecture docs

### 3. Site Builder/Implementer
- **Goal**: Install, configure, deploy YMCA Website Services
- **Entry Point**: Installation guides, configuration how-tos
- **Pain Points**: Need step-by-step setup guides, troubleshooting

### 4. Decision Maker
- **Goal**: Understand YMCA Website Services value, features, roadmap
- **Entry Point**: Overview, roadmap, case studies
- **Pain Points**: Need quick overview, business value, community info

### 5. QA Engineer
- **Goal**: Test features, run smoke tests, ensure quality
- **Entry Point**: Testing documentation, smoke tests
- **Pain Points**: Need test procedures, quality standards

## Proposed Homepage Structure

### Hero Section
- Clear value proposition
- Persona-based quick navigation cards (4-5 prominent cards)

### Secondary Navigation
- By Documentation Type (Diátaxis):
  - Tutorials (learning-oriented)
  - How-to Guides (task-oriented)
  - Reference (information-oriented)
  - Explanation (understanding-oriented)

### Current Structure Issues
1. Generic "Read the Docs" button - not persona-specific
2. No clear paths for different user types
3. Community features buried below fold
4. No visual distinction between documentation types

## Implementation Plan

### Phase 1: Homepage Redesign
1. Create persona cards with icons and descriptions
2. Add "I am a..." section with role-based quick links
3. Improve visual hierarchy
4. Add popular topics/quick starts section

### Phase 2: Documentation Reorganization (Future)
1. Map existing content to Diátaxis quadrants
2. Create tutorials section (learning-oriented)
3. Consolidate reference documentation
4. Add explanation/conceptual guides

### Phase 3: Navigation Improvements
1. Add breadcrumbs showing persona paths
2. Improve search with persona filtering
3. Add "Related for [Persona]" sections

## File Changes Required

### Immediate Changes
- `content/en/_index.html` - New homepage with persona cards
- `assets/scss/_custom.scss` - Custom styling for persona cards (if needed)
- Possibly new partial: `layouts/partials/persona-cards.html`

### Future Changes
- Reorganize content structure
- Update navigation menus
- Create landing pages for each persona

## Success Metrics
- Users can identify their role in < 5 seconds
- Reduced clicks to find relevant documentation
- Better engagement with appropriate content sections
- Clearer learning paths

## Diátaxis Mapping (Current Content)

### Tutorials (Learning-oriented) - NEEDS EXPANSION
- Currently: Limited tutorials
- Should add: Getting started series, step-by-step learning paths

### How-to Guides (Task-oriented) - EXISTS
- Currently: `/docs/howto/` section
- Good: Already aligned with Diátaxis

### Reference (Information-oriented) - EXISTS
- Currently: Development docs, API references, content structure
- Good: Technical documentation well-covered

### Explanation (Understanding-oriented) - NEEDS EXPANSION
- Currently: Some in glossary and overview
- Should add: Architecture explanations, concept guides, design decisions
