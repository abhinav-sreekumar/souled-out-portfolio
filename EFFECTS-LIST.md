# ✨ Visual Effects Guide

## 🎯 Hero Section
1. **Animated Gradient Background** - Slowly shifting radial gradients (20s loop)
2. **Floating Particles** - 30 amber particles floating across the hero
3. **Magnetic Title Letters** - Each letter in "SOULED OUT" responds to hover (lifts up, glows, color shift)
4. **Magnetic CTA Button** - "For bookings" button subtly follows cursor when hovered
5. **Parallax Ghost Text** - Background "SOULED" text moves with scroll and fades out

## 🎨 About Section ("NOT YOUR AVERAGE SOUND")
6. **Band Photo Background** - Reveals more clearly on hover (35% → 65% opacity, blur removal, color restoration)
7. **Text Shadows** - Glowing shadows on all text for readability over dynamic background

## 👥 Artist Photos
8. **3D Tilt Effect** - Photos tilt based on mouse position (vanilla-tilt)
9. **Glare/Shine Effect** - Light reflection follows cursor across image
10. **Scale on Hover** - Subtle zoom (1.05x) when hovering
11. **Rustic Filter** - Sepia tone, adjusted contrast/saturation for vintage look
12. **Vignette Effect** - Dark edges fade in from corners

## 🎭 Stages Section
13. **Glitch Animation** - Stage names glitch/shake on hover
14. **Ripple Effect** - Amber dot creates expanding ripple wave on hover
15. **Slide Transform** - Stage items slide right and indent on hover
16. **Dot Scale** - Amber dot grows 1.6x on hover

## 🧭 Navigation
17. **Glassmorphism on Scroll** - Nav becomes translucent with blur backdrop when scrolled
18. **Nav Link Lift** - Links lift up 2px on hover
19. **Active Section Indicator** - (Base styling ready for implementation)

## ✉️ Contact Section
20. **Magnetic Email Link** - Email address follows cursor
21. **Glow on Hover** - Text shadow glow effect

## 🦶 Footer
22. **Magnetic Social Links** - Instagram/Spotify/YouTube links follow cursor
23. **Link Lift** - Links lift up 2px on hover

## 🖱️ Global Effects
24. **Custom Cursor** - Amber dot + ring that follows mouse
25. **Cursor Glow on Hover** - Cursor glows when hovering interactive elements
26. **Animated Film Grain** - Subtle moving noise texture (8s loop, 10 steps)
27. **Magnetic Effect System** - Universal `.magnetic` class for any element
28. **Scroll Reveal Animations** - Elements fade in and slide up when scrolled into view
29. **Smooth Scroll** - Native smooth scrolling between sections

## 📱 Responsive Design
- All effects optimized for desktop
- Heavy animations disabled on mobile for performance
- Tilt/magnetic effects work best on desktop with mouse
- Touch-friendly fallbacks on mobile

## 🎨 Color Palette
- Amber: #E8621A (primary accent)
- Gold: #C9963A (hover states)
- Cream: #F0EBE1 (text)
- Deep: #0A0805 (dark backgrounds)

## ⚡ Performance Notes
- Animations use `transform` and `opacity` for GPU acceleration
- `will-change` avoided to prevent memory issues
- Film grain uses CSS animation with `steps()` for performance
- Particles limited to 30 for smooth 60fps

---
**Total: 29 interactive effects across the entire site!**
