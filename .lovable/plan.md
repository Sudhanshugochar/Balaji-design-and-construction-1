

# Enhanced Gallery Animations for Projects Page

## Overview
Upgrade the project gallery with premium, polished animations that create a professional browsing experience without relying on scroll-triggered effects (as previously removed per your request).

---

## Animation Enhancements

### 1. Initial Page Load Animation
When the page loads, images will gracefully appear with a staggered fade-in effect, giving a polished first impression.

### 2. Advanced Hover Effects
Each image card will feature:
- **3D Tilt Effect**: Subtle rotation based on mouse position
- **Gradient Overlay**: Text/icon reveal on hover
- **Image Brightness Boost**: Slight brightness increase
- **Smooth Shadow Expansion**: Dynamic shadow that grows on hover

### 3. Magnetic Cursor Effect (Desktop)
Cards will subtly follow the cursor when hovering, creating an engaging interactive feel.

### 4. Category Label Animation
Category icons/badges that fade in on hover with a slide-up effect.

---

## Technical Details

### File: `src/pages/Projects.tsx`

**New Imports:**
```tsx
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
```

**New Component - ImageCard with 3D Tilt:**
```tsx
const ImageCard = ({ image, alt, aspectRatio = "4/3" }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  
  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className="..."
    >
      {/* Gradient overlay on hover */}
      {/* Category badge animation */}
      <motion.img ... />
    </motion.div>
  );
};
```

**Enhanced Hover States:**
| Property | Before | After |
|----------|--------|-------|
| Scale | 1.03 | 1.02 (subtler) |
| Shadow | Static | Dynamic depth |
| Rotation | None | 3D tilt |
| Image | Scale 1.1 | Scale 1.08 + brightness |
| Overlay | None | Gradient fade |

**Container Animation (Optional Stagger on Load):**
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 1 },
    visible: { transition: { staggerChildren: 0.05 } }
  }}
>
  {images.map((image, i) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      <ImageCard ... />
    </motion.div>
  ))}
</motion.div>
```

---

## Animation Summary

| Effect | Description |
|--------|-------------|
| **3D Tilt** | Cards rotate slightly based on cursor position |
| **Gradient Reveal** | Dark gradient appears from bottom on hover |
| **Magnetic Pull** | Subtle card movement toward cursor |
| **Shadow Depth** | Shadow grows and softens on hover |
| **Image Glow** | Brightness increases on hover |
| **Stagger Load** | Images fade in sequentially on page load (0.05s delay each) |

---

## Files to Modify
- `src/pages/Projects.tsx` - Add ImageCard component with 3D tilt and enhanced hover animations

