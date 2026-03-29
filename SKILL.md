---
name: cinematic-portfolio
description: Design and build a cinematic, immersive portfolio website inspired by high-end product storytelling. Use this skill when the user wants to create a portfolio or personal website that feels like a visual journey — with dark environments, WebGL or canvas backgrounds, scroll-driven scene transitions, glassmorphism UI, and deep motion design. Triggers include requests for "cinematic portfolio", "immersive website", "Sennheiser-style", "Three.js portfolio", "scroll storytelling", or any portfolio redesign aiming for a filmic, atmospheric, experiential aesthetic. Do not use for standard business sites, dashboards, documentation, or any project where clarity and accessibility outweigh immersion.
---

This skill guides the construction of a portfolio website designed as a cinematic experience. The goal is not to display information — it is to guide the visitor through a sequence of emotional scenes, each one revealing a layer of the creator's identity, work, and craft. Every technical decision must serve that narrative goal.

Read this entire document before writing a single line of code.


## Design Philosophy

The site must feel like a film, not a webpage. Each scroll advances the story. Each hover is a breath. Each transition is a cut between scenes, not a page reload.

The four principles that govern every decision:

- Experience over content. The visitor should feel something before they read anything.
- Minimal UI, maximum emotion. Hide chrome, expose atmosphere.
- Depth, motion, and lighting are not enhancements — they are the design.
- No hard jumps. Every state change must be eased, blended, or crossfaded.

If a design choice makes the site feel like a standard webpage, it is wrong.


## Color System

Use these values as CSS custom properties defined on :root. Do not deviate from this palette without a strong narrative reason.

```css
:root {
  --bg-primary:    #0A0A0F;
  --bg-secondary:  #11131A;
  --accent:        #3B82F6;
  --text-primary:  #E5E7EB;
  --text-secondary:#9CA3AF;
  --glow-blue:     rgba(59, 130, 246, 0.15);
  --fog-overlay:   rgba(10, 10, 15, 0.6);
}
```

Rules:
- The background must always feel like deep space or a dark environment, never a flat black.
- The accent color appears rarely — on a single CTA, a single hover state, or a key heading. Overuse destroys the effect.
- No bright whites. Use --text-primary for primary copy.
- Gradients should transition between --bg-primary and --bg-secondary, never toward light.


## Visual Environment

### Background Layers

Every section has three stacked background layers:

1. The deep layer — a Three.js canvas or a CSS radial gradient simulating depth and light falloff.
2. The fog layer — a semi-transparent div using --fog-overlay, creating visual distance.
3. The content layer — glassmorphism panels or bare text floating above.

For sections without Three.js, use this CSS fog pattern:

```css
.scene-bg {
  background:
    radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 100%, rgba(17,19,26,0.9) 0%, transparent 70%),
    var(--bg-primary);
}
```

### Particles and Floating Elements

Use Three.js Points geometry for ambient particles in hero and work sections. Rules:

- Particle count: 800 to 1200. More causes frame drops on mobile, fewer looks sparse.
- Particle size: 0.5 to 1.2 units (randomized per particle).
- Color: white at opacity 0.3 to 0.6. Do not use colored particles except near the accent glow.
- Movement: rotate the entire particle system at 0.0003 radians per frame on Y axis. Add a slow sinusoidal drift on Y for individual particles.
- On mouse move, apply a gentle camera tilt — no more than 0.05 radians in either axis. Use linear interpolation (lerp) at 0.05 factor to avoid snapping.

### Lighting

Simulate lighting using Three.js lights and CSS glow:

- AmbientLight at intensity 0.3, color 0xffffff.
- DirectionalLight or PointLight from above-center, intensity 0.8, color 0x3B82F6 (accent).
- For CSS-only sections, simulate a top light source with:

```css
.lit-card {
  background: linear-gradient(160deg, rgba(59,130,246,0.07) 0%, transparent 40%);
  border-top: 1px solid rgba(59,130,246,0.2);
}
```


## Layout: Sections as Scenes

Do not build a traditional scrollable page. Build a series of full-viewport scenes. Each scene is 100vh minimum. Between scenes, use a scroll-triggered crossfade or a vertical fog wipe, never an abrupt cut.

### Scene 1 — Hero

- Fullscreen, 100vh, centered content.
- Background: animated Three.js canvas with floating particles and a slow camera orbit or a radial gradient with a CSS noise texture.
- Single headline, large, font-weight 200 to 300, letter-spacing 0.1em or wider.
- One CTA button, text only (no box unless glassmorphism). On hover: the text glows with --accent, no scale change.
- Do not place navigation here. Hide it entirely or use a single floating icon in a corner.

### Scene 2 — Identity (About)

- Full width, split layout or centered column.
- One or two short paragraphs. No lists. No headers inside the section.
- A decorative element: a thin horizontal line with a gradient fade, or a faint topographic grid in the background.
- On scroll entry: text fades in from below using Framer Motion `initial={{ opacity: 0, y: 40 }}` transitioning to `{ opacity: 1, y: 0 }` over 0.8 seconds.

### Scene 3 — Work (Projects)

- Projects are not cards in a grid. They are scenes within the scene.
- Layout option A: Full-bleed project images that appear on scroll, overlapping each other with parallax offset.
- Layout option B: A horizontal scroll container — the visitor scrolls the page vertically but the project row moves horizontally. Use GSAP ScrollTrigger with `pin: true` and `scrub: 1`.
- Each project shows: a title in large thin type, a one-line descriptor, and a hover state that reveals a faint overlay with a link. No modal popups.
- Project images use a CSS filter: `brightness(0.7) contrast(1.1)` at rest, transitioning to `brightness(1) contrast(1)` on hover.

### Scene 4 — Skills

- Do not use skill bars or percentage charts.
- Use an interactive visualization: either a Three.js node graph where each skill is a floating sphere connected by faint lines, or a canvas-drawn constellation layout.
- On hover over a node: the node glows in --accent, connected nodes dim slightly, and a label fades in near the node.
- Group skills by category (Language, Framework, Tool, etc.) and encode category as node size or connection density, not color.
- If Three.js is too heavy for this section, use an SVG-based animated graph with CSS transitions. The key requirement is interactivity — the visitor must be able to explore, not just read.

### Scene 5 — Contact

- Minimal. One heading, one email address or form field, one send action.
- The heading should be evocative, not functional. Example: "Let's build something that matters." not "Contact Me".
- Background: the deepest, darkest variant of the palette. Use `--bg-primary` with zero additional layers — let the emptiness be the design.
- Optional: a slow particle fade-out effect as the visitor reaches this section, as though the environment is dissolving.


## Typography

Font selection is critical. The typeface must feel editorial and refined, not technical or neutral.

Recommended pairings:
- Display: Cormorant Garamond (light weight), Playfair Display, or Monument Extended
- Body: DM Sans (light), Outfit (300), or Syne

Rules:
- Headings: font-weight 200 to 300. letter-spacing 0.05em to 0.15em. Never bold.
- Body: font-weight 300 to 400. line-height 1.7 to 1.9.
- No text shadows. Use opacity reduction for hierarchy, not shadow.
- Keep text columns narrow: max-width 600px to 680px for body copy.


## Motion and Animation

### Scroll Behavior

Use GSAP ScrollTrigger for scene-level transitions and Framer Motion for element-level entrances.

GSAP scene transition pattern:

```javascript
gsap.to(".scene-2", {
  opacity: 1,
  y: 0,
  scrollTrigger: {
    trigger: ".scene-2",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  }
});
```

All scenes start at `opacity: 0, y: 60px` and animate to `opacity: 1, y: 0` as they enter.

### Mouse Parallax

Apply on hero and any Three.js sections:

```javascript
const handleMouseMove = (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  camera.position.x += (x * 0.3 - camera.position.x) * 0.05;
  camera.position.y += (-y * 0.2 - camera.position.y) * 0.05;
};
```

Do not apply mouse parallax to text elements. Only to 3D cameras or background layers.

### Hover States

- Text links: color transition to --accent over 300ms. No underline on default, thin underline on hover.
- Buttons: glow effect using box-shadow: `0 0 20px rgba(59,130,246,0.4)`, not scale.
- Project images: brightness transition, not scale or lift.
- Skill nodes: radial glow on the canvas, label fade-in.
- Never use scale transforms on hover except for iconographic elements below 32px.

### Page Load Sequence

On initial load, execute this sequence using Framer Motion or GSAP timelines:

1. Background canvas fades in over 1.2 seconds.
2. Fog overlay fades in over 0.8 seconds (delayed 0.4 seconds).
3. Hero headline fades in, characters staggered at 0.03 seconds per character, starting at 1.2 seconds.
4. CTA fades in at 2.0 seconds.
5. Cursor custom style activates at 2.2 seconds.

Do not animate the navigation or any utility elements during load.


## Audio Integration

Audio is optional but transforms the experience when implemented correctly. This section explains exactly how to find, prepare, and integrate audio.

### Sourcing Audio

Use ambient or atmospheric audio only. The audio must be non-distracting and loop seamlessly. Recommended free sources:

- Freesound.org — search for "dark ambient loop", "cinematic drone", "deep space atmosphere". Filter by Creative Commons 0 or Attribution license.
- ZapSplash.com — similar ambient categories.
- Pixabay.com/music — royalty-free ambient tracks.
- NASA audio library (nasa.gov/audio-and-ringtones) — space recordings that are public domain.

What to look for: mono or stereo WAV or MP3, 60 to 120 seconds minimum, no sudden peaks, frequency content primarily below 2kHz.

### Preparing the Audio File

1. Download the file as MP3 or WAV.
2. Open in Audacity (free) or any DAW.
3. Normalize to -18 LUFS or lower — the audio should be barely perceptible, not present.
4. Apply a fade-in of 2 seconds and a fade-out of 3 seconds at the loop point to ensure seamless looping.
5. Export as MP3 at 128kbps. Name it `ambient.mp3` and place it in `/public/audio/`.

### Integration Pattern

Never autoplay audio without user consent. Use a mute toggle in the corner of the screen.

```javascript
// AudioManager.js
import { useEffect, useRef, useState } from 'react';

export function useAmbientAudio(src) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(src);
    audioRef.current.loop = true;
    audioRef.current.volume = 0;
    return () => audioRef.current.pause();
  }, [src]);

  const toggle = () => {
    if (muted) {
      audioRef.current.play();
      fadeVolume(audioRef.current, 0, 0.12, 2000);
      setMuted(false);
    } else {
      fadeVolume(audioRef.current, 0.12, 0, 1000, () => audioRef.current.pause());
      setMuted(true);
    }
  };

  return { muted, toggle };
}

function fadeVolume(audio, from, to, duration, onComplete) {
  const steps = 30;
  const interval = duration / steps;
  const delta = (to - from) / steps;
  let current = from;
  audio.volume = from;
  const timer = setInterval(() => {
    current += delta;
    audio.volume = Math.min(1, Math.max(0, current));
    if ((delta > 0 && current >= to) || (delta < 0 && current <= to)) {
      clearInterval(timer);
      if (onComplete) onComplete();
    }
  }, interval);
}
```

### Audio Toggle UI

Place a fixed-position sound icon in the bottom-right corner. Use an SVG speaker icon. On muted state: speaker with a line through it, opacity 0.4. On active state: speaker icon, opacity 1.0, with a faint pulse animation using CSS keyframes.

```css
@keyframes pulse-ring {
  0%   { box-shadow: 0 0 0 0 rgba(59,130,246,0.3); }
  70%  { box-shadow: 0 0 0 8px rgba(59,130,246,0); }
  100% { box-shadow: 0 0 0 0 rgba(59,130,246,0); }
}

.audio-toggle.active {
  animation: pulse-ring 2s ease-out infinite;
}
```

### Scroll-Reactive Audio (Advanced)

If adding scroll reactivity, adjust volume based on scroll position using GSAP ScrollTrigger:

```javascript
ScrollTrigger.create({
  trigger: ".scene-contact",
  start: "top center",
  onEnter: () => fadeVolume(audio, currentVolume, 0.04, 1500),
  onLeaveBack: () => fadeVolume(audio, 0.04, 0.12, 1000),
});
```

The contact scene should feel quieter — the environment dissolving around the visitor.


## Glassmorphism Component Pattern

Use for any floating panel, modal, or card element:

```css
.glass-panel {
  background: rgba(17, 19, 26, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
}
```

Rules:
- Use sparingly. Maximum two glass panels visible at once.
- Never nest glass panels.
- The blur effect degrades on low-end devices — always provide a fallback: `@supports not (backdrop-filter: blur(1px)) { background: rgba(17,19,26,0.92); }`.


## Custom Cursor

Replace the default cursor for an immersive effect:

```css
* { cursor: none; }
```

```javascript
// CustomCursor.jsx
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      dot.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      ring.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
```

```css
.cursor-dot {
  position: fixed; top: -4px; left: -4px;
  width: 8px; height: 8px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none; z-index: 9999;
  transition: transform 0.05s linear;
}
.cursor-ring {
  position: fixed; top: -18px; left: -18px;
  width: 36px; height: 36px;
  border: 1px solid rgba(59,130,246,0.4);
  border-radius: 50%;
  pointer-events: none; z-index: 9998;
  transition: transform 0.15s ease-out;
}
```

On hovering interactive elements, scale the ring: add a class that applies `transform: scale(1.6)` and reduces border opacity.


## Tech Stack

- Framework: Next.js 14 (App Router) or React 18 with Vite
- Styling: Tailwind CSS for layout utilities, custom CSS for all visual and animation properties
- 3D: React Three Fiber (Three.js wrapper for React), @react-three/drei for helpers
- Animation: Framer Motion for element-level transitions, GSAP with ScrollTrigger for scene-level scroll storytelling
- Audio: Web Audio API or HTML Audio element with a custom React hook (see Audio Integration above)
- Fonts: Google Fonts or self-hosted via next/font

Install commands:

```bash
npm install three @react-three/fiber @react-three/drei
npm install framer-motion
npm install gsap
```


## Performance Requirements

- Target: 60fps on desktop, 30fps minimum on mobile.
- Three.js canvas must use `frameloop="demand"` in React Three Fiber during static sections, switching to `frameloop="always"` only in active scenes.
- Particles must be disposed on unmount: call `geometry.dispose()` and `material.dispose()`.
- All scroll animations must use `will-change: transform, opacity` on affected elements, removed after animation completes.
- Audio files must be preloaded using `<link rel="preload" as="audio">` in the HTML head.
- Lazy-load Three.js scenes using React's `Suspense` and `lazy()` — the hero canvas loads immediately, subsequent scenes load as the visitor scrolls near them.
- Disable heavy effects on `prefers-reduced-motion: reduce`. Provide a static fallback layout.


## What to Avoid

- No navbar with multiple links visible at all times.
- No card grids with border-radius and drop shadow on a white or gray background.
- No animated counters, skill percentage bars, or timeline infographics.
- No stock illustration or icon pack imagery.
- No page routing between portfolio sections — all content is on one scrollable document.
- No color outside the defined palette, including section-specific accent colors.
- No transform: scale() on hover for anything larger than 32px.
- No audio autoplay. Ever.
- No loading spinner. Use a fade-in entrance for the canvas instead.


## Quality Benchmark

Before considering the build complete, verify:

- The hero section holds attention for 10 seconds without reading anything.
- Every scroll transition is smooth with no visible jump or flash.
- The skills section is interactive — hovering a node changes the visual state.
- The site runs at 60fps in Chrome DevTools with CPU throttled to 4x slowdown.
- The audio toggle works correctly, fades in and out, and does not autoplay.
- All text is readable at --text-primary and --text-secondary on all backgrounds.
- The custom cursor does not lag more than one frame behind the mouse.
- The site looks intentional and complete on a 1440px screen and usable on a 375px mobile screen.
