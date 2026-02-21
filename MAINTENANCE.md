# MAINTENANCE.md — Phideus Website

## How to Update the Site

### Adding a New Gate
1. Add the gate entry to `src/data/gates.js` with id, name, title, status, decision, s, source.
2. If the gate has detailed results, add them to the appropriate data structure in the same file.
3. The gate will automatically appear on the Home (gate progression), BIAS_CONTROL (gate matrix and details), and Results pages.

### Updating Results
1. Edit `src/data/gates.js` — update the relevant arrays: `gate43Results`, `scratchResults`, `longRunResults`.
2. Ensure all numbers match the official repo documents (ROADMAP_BIAS_CONTROL.md or README.md).

### Updating Status
1. Update the "Live Status" section in `src/pages/BiasControl.jsx` and the "Current Status" panel in `src/pages/Home.jsx`.
2. Update hypothesis status in `src/data/hypotheses.js` if any hypothesis changes state.

### Adding a New Phase to Timeline
1. Add the phase to `src/data/timeline.js` with all required fields.

### Updating Visualizations
1. Add/edit entries in `src/data/visualizations.js`.

### Development
```bash
npm run dev      # Start dev server
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

### Deploy to GitHub Pages
1. Run `npm run build`
2. Deploy the `dist/` folder to GitHub Pages
3. Or configure GitHub Actions to build and deploy automatically

### Content Rules
- **Every major claim must have an EvidenceCallout** linking to the source document.
- **Never invent data.** If something is unknown, mark it TBD.
- **ROADMAP_BIAS_CONTROL.md is the source of truth** for gate status and decisions.
- **Proyecto_Estado_Actual.md** is the executive summary.
