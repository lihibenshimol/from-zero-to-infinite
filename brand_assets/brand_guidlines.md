# ♾️ FROM ZERO TO INFINITE — BRAND GUIDELINES (V2)

## [ DESIGN PHILOSOPHY ]
**Minimalist-Tech OS.** High-end, precise, and sophisticated. Use "Glassmorphism" for depth and "Circuitry" lines for separation. Everything should feel like an elite digital interface.

## [ THE REFINED PALETTE (CSS Variables) ]
* **--bg:** #0a0a0f (Deep Midnight)
* **--neon:** hsl(210, 100%, 65%) (Electric Blue Glow)
* **--silver:** rgba(220, 220, 235, 0.9) (Main Text)
* **--muted:** rgba(160, 160, 180, 0.6) (Secondary Text)

## [ CORE COMPONENTS & CLASSES ]
1. **Glass Surfaces:** Use `.glass` with `.border-neon` or `.border-silver` for containers. Always add `backdrop-filter: blur(12px)`.
2. **Typography:** - Headers: `.font-heading` (Inter, Bold, 0.12em spacing, Uppercase).
   - Labels: `.section-label` (Tiny, Neon, extreme spacing).
3. **Buttons:** Always use `.btn-outline`. It must have the hover glow effect and be centered on mobile.
4. **Structure:** Use `.circuitry-line` as a sophisticated divider between sections.
5. **Animation:** Use `.reveal` with delays (`.d1`, `.d2`, etc.) for all entering elements.

## [ THE LOGO RULES ]
- **Hero Priority:** The Logo is the king. Massive, central, and floating (`.hero-logo`). 
- **No Text Headlines:** Let the logo and the `.hero-title` sub-text do the work.

## [ CONVERSION FUNNEL LOGIC ]
- **Multi-step Forms:** Use `.glass` cards for forms. 
- **WhatsApp Integration:** All qualification forms must trigger a pre-filled Hebrew message to Lihi.