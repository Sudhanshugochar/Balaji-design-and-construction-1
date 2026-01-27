
# Services Section Redesign Plan

## Overview
Transform the current alternating two-column layout into a modern, minimal tabs-based interface. Users will click on service tabs to view detailed information with smooth animations and clean typography.

## Design Preview

The new design will feature:
- **Clean horizontal tab navigation** with service icons and titles
- **Minimal content area** showing the selected service's details
- **Smooth fade transitions** when switching between tabs
- **Large, prominent media area** for the selected service
- **Streamlined feature list** with better visual hierarchy

## Visual Layout

```text
+--------------------------------------------------+
|              HERO SECTION (unchanged)            |
+--------------------------------------------------+

+--------------------------------------------------+
|  [Icon] Residential | [Icon] Commercial | ...    |  <- Tab Navigation
+--------------------------------------------------+
|                                                  |
|  +-------------------+  +---------------------+  |
|  |                   |  |  Service Title      |  |
|  |   Image/Video     |  |  Description text   |  |
|  |   (Large)         |  |                     |  |
|  |                   |  |  - Feature 1        |  |
|  |                   |  |  - Feature 2        |  |
|  |                   |  |  - Feature 3        |  |
|  |                   |  |                     |  |
|  +-------------------+  |  [Get a Quote]      |  |
|                         +---------------------+  |
+--------------------------------------------------+
```

## Implementation Steps

### Step 1: Update Services.tsx Layout Structure
Replace the current `services.map()` with a Radix Tabs component:
- Use `Tabs` as the container with `defaultValue="residential-construction"`
- `TabsList` for the horizontal navigation bar
- `TabsTrigger` for each service (icon + title)
- `TabsContent` for each service's detailed content

### Step 2: Design the Tab Navigation
- Horizontal scrollable tabs on mobile (using `overflow-x-auto`)
- Icons displayed alongside titles for quick recognition
- Active tab highlighted with primary color underline
- Minimal styling: no heavy backgrounds, just subtle borders

### Step 3: Create the Content Panel
- Two-column grid layout (image/video left, content right)
- Framer Motion `AnimatePresence` for smooth fade transitions between tabs
- Large media area with subtle hover effects
- Clean typography with generous whitespace
- Simplified feature list with checkmarks

### Step 4: Mobile Responsive Design
- Stack tabs vertically or use horizontal scroll on mobile
- Single-column content layout below 768px
- Maintain tap target sizes (44px minimum)

---

## Technical Details

### Files to Modify
1. **src/pages/Services.tsx** - Main services page with new tabs layout

### Dependencies Used
- `@radix-ui/react-tabs` (already installed)
- `framer-motion` (already installed)
- Existing UI components: `Tabs`, `TabsList`, `TabsTrigger`, `TabsContent`

### Key Code Changes

**Tab Navigation Styling:**
- Custom classes for minimal tab triggers
- Primary color underline for active state
- Icon + text layout in triggers
- Horizontal scroll wrapper for mobile

**Content Panel Animation:**
```typescript
<AnimatePresence mode="wait">
  <motion.div
    key={activeService}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {/* Service content */}
  </motion.div>
</AnimatePresence>
```

**Responsive Grid:**
- Desktop: `grid-cols-2` with 50/50 split
- Mobile: `grid-cols-1` with stacked layout

### Styling Approach
- Remove heavy hover effects and gradient overlays
- Focus on typography and whitespace
- Subtle border separations
- Clean icon presentation with primary color accents
- Minimal shadows and decorations

### Accessibility
- Proper ARIA attributes from Radix tabs
- Keyboard navigation support built-in
- Focus states clearly visible
