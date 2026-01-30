

# Fix Service Section Navigation from Homepage

## Problem
When clicking on a service card in the homepage Services section, the navigation goes to `/services#service-slug`, but the page scrolls to the header/hero area instead of the services tabs section where the selected service is displayed.

## Root Cause
The current implementation has a timing issue:
- The page uses animated routes with `AnimatePresence` for page transitions
- The `useEffect` in Services.tsx has only a 100ms delay before calculating scroll position
- This delay is too short - the page transition animation and component rendering may not be complete
- As a result, the scroll calculation uses incorrect element positions

## Solution

### 1. Increase Scroll Delay Timing
Increase the timeout from 100ms to 300-400ms to ensure the page transition completes before scrolling.

### 2. Add Scroll-to-Top Reset First
When navigating with a hash, ensure the page starts at a predictable position before scrolling to the target.

### 3. Use requestAnimationFrame for Better Timing
Wrap the scroll logic in `requestAnimationFrame` to ensure the DOM has painted before calculating positions.

## Files to Modify

**src/pages/Services.tsx**
- Update the `useEffect` hook that handles hash navigation
- Increase timeout delay from 100ms to 350ms
- Add `requestAnimationFrame` wrapper for more reliable timing
- Ensure smooth scroll behavior works correctly with page transitions

## Technical Details

```typescript
// Current problematic code
const scrollTimeout = setTimeout(() => {
  if (tabsSectionRef.current) {
    const headerOffset = 100;
    const elementPosition = tabsSectionRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}, 100); // Too short for page transitions

// Fixed implementation
const scrollTimeout = setTimeout(() => {
  requestAnimationFrame(() => {
    if (tabsSectionRef.current) {
      const headerOffset = 100;
      const elementPosition = tabsSectionRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}, 350); // Enough time for page transition to complete
```

## Expected Outcome
After clicking any service card on the homepage:
1. The page navigates to `/services#service-slug`
2. The correct service tab is pre-selected
3. The page smoothly scrolls to the tabs section (not the header)
4. The selected service content is visible in the viewport

