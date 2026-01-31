
# Fix Google Rating Not Showing on Mobile

## Problem Identified
The Google Rating (5.0) and Years Experience (6+) counters are showing "0.0" and "0+" on mobile devices instead of animating to their actual values.

**Root Cause**: The `Counter` component in `src/components/ui/motion.tsx` uses `useInView` with a `margin: '-100px'` setting. This means the animation only triggers when the element is 100px inside the viewport. On mobile devices with smaller screen heights, the stats cards may not meet this threshold before users scroll past them, leaving the counters stuck at 0.

---

## Solution

Reduce the negative margin in the `Counter` component's `useInView` hook to be more mobile-friendly, ensuring the counting animation triggers properly on all screen sizes.

---

## Technical Implementation

### File: `src/components/ui/motion.tsx`

**Change the Counter component's useInView margin from `-100px` to `-20px`:**

```tsx
// Before (line 233)
const isInView = useInView(ref, { once: true, margin: '-100px' });

// After
const isInView = useInView(ref, { once: true, margin: '-20px' });
```

This smaller margin ensures the counting animation triggers much earlier as the element approaches the viewport edge, making it work reliably on mobile devices where screen real estate is limited.

---

## Why This Works

- `-100px` margin requires the element to be 100px inside the viewport before triggering
- On mobile (375px wide, ~700px visible height), by the time users see the stats cards, the -100px threshold may not be met before they scroll past
- Reducing to `-20px` triggers the animation much sooner, ensuring users see the numbers count up as intended

---

## Expected Result

After this fix:
- **Google Rating** will animate from 0 to 5.0
- **Satisfied Clients** will animate from 0 to 30+
- **Years Experience** will animate from 0 to 6+
- **Commitment** will animate from 0 to 100%

All animations will trigger properly on both mobile and desktop devices.
