# 👽 FROM ZERO TO INFINITE — BRAND GUIDELINES

## [ CORE VISUAL CONCEPT ]
The aesthetic is **ALIEN-FUTURISM**. Think of a highly advanced, non-human operating system discovered inside a crystal. It is clean, precise, and glowing, but also organic and deeply strange. It's the OS Apple will never release, because it's too powerful.

## [ THE PALETTE: DEEP & GLOWING ]
Do not use generic colors. Every color must have depth.

* **#010214 (MIDNIGHT_VOID):** Primary background. Deeper than black, like a rich, velvety night.
* **#05113F (DEEP_NEBULA):** Surface color for elements. A dark, intense blue that gives depth.
* **#0AFFF0 (CYAN_GLOW):** The glow. The life force. Use for active states, borders, and main accents.
* **#EFFF0A (ALIEN_YELLOW):** The contrast. Primary foreground for headings and data points. Like a neon sign in a dark alley.
* **#4C7CFF (SOFT_COSMIC):** Secondary foreground for body text. Readable but still alien.

## [ TYPOGRAPHY: THE HYBRID ]
Never pair two generic fonts. We need contrast.

* **HEADINGS:** (Display/Headline) Pair with a font that is geometric but has sharp, alien serifs (e.g., 'AvenirNext-Bold' or a custom web font like 'Syne' or 'Monument Extended'). Large, bold, and aggressive.
* **BODY:** (Code/Sans) Pair with a sharp, clear, tech-focused monospace sans-serif (e.g., 'Fira Code', 'Space Mono', or 'IBM Plex Mono'). Everything should look like it was pulled from a data stream.

## [ THE INTERFACE GUARDRAILS ]

### 🌌 DEPTH & LAYERING (Z-PLANES)
Surfaces should not be flat. Use subtle, layered box-shadows to create "floating" crystal surfaces.
* **Shadows:** Tint shadows with `box-shadow: 0 4px 30px rgba(5, 17, 63, 0.4)`. Low opacity, deep-tinted.

### ⚛️ TEXTURES & GRAIN
Add texture to the `DEEP_VOID` background to give it a materialized feel. Use an SVG noise filter:
```html
<filter id='noiseFilter'>
  <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/>
</filter>