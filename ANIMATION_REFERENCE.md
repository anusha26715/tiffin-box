# Animation Reference Guide

## Quick Animation Patterns

### Pattern 1: Slide In from Left
```javascript
const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```
**Used in:** About (image), Booking (image), Order (text), Location (text)

### Pattern 2: Slide In from Right
```javascript
const variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};
```
**Used in:** About (text), Booking (text), Order (image), Location (image)

### Pattern 3: Fade and Slide Up
```javascript
const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```
**Used in:** Menu, Testimonial, Chef, Location headings

### Pattern 4: Scale In
```javascript
const variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
```
**Used in:** Community images, Specialities center image

### Pattern 5: Staggered Children
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};
```
**Used in:** Community grid images

## Implementation Template

```javascript
import { motion } from 'framer-motion';

const Component = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      Content
    </motion.div>
  );
};
```

## Key Properties

### Timing
- `duration`: Animation length in seconds (0.6 - 0.8s typical)
- `delay`: Wait time before animation starts
- `ease`: Easing function (easeOut recommended)

### Viewport
- `once: true`: Animation plays only once
- `amount: 0.3`: Trigger when 30% visible

### Transform Properties
- `opacity`: 0 (hidden) to 1 (visible)
- `x`: Horizontal position (-50 to 0 or 50 to 0)
- `y`: Vertical position (20 to 0)
- `scale`: Size (0.9 to 1)

## Animation Triggers

### Scroll Trigger (Most Used)
```javascript
whileInView="visible"
viewport={{ once: true, amount: 0.3 }}
```

### Page Load
```javascript
initial="hidden"
animate="visible"
```

### Hover Effect
```javascript
whileHover={{ scale: 1.05 }}
```

## Common Durations

- **Fast:** 0.3s - 0.4s (buttons, icons)
- **Normal:** 0.6s - 0.8s (sections, images)
- **Slow:** 1s+ (complex sequences)

## Easing Functions

- `easeOut`: Smooth deceleration (recommended)
- `easeIn`: Smooth acceleration
- `easeInOut`: Smooth both ways
- `linear`: Constant speed

## Performance Tips

1. Use `once: true` to prevent repeated animations
2. Limit simultaneous animations
3. Use `whileInView` for scroll efficiency
4. Avoid animating layout properties
5. Test on mobile devices

## Debugging

Check browser DevTools:
1. Performance tab for frame rate
2. Console for errors
3. Elements tab for animation states

## Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile: ✅ Full support



