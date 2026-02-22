export const hypotheses = [
  {
    id: 'H1',
    name: 'Structure',
    statement: 'Signals contain structured (non-random) distributions of frequency ratios.',
    status: 'VALIDATED',
    evidence: 'Non-random ratio distributions found in multiple signal types.',
    source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §1'
  },
  {
    id: 'H2',
    name: 'Learnability',
    statement: 'Neural networks can learn compact representations of ratio distributions using temporal histograms.',
    status: 'VALIDATED',
    evidence: 'Dramatic val_loss drop (from 4212 to 0.456) with temporal representations (v5.0).',
    source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §3.1'
  },
  {
    id: 'H3',
    name: 'Cross-modality',
    statement: 'Shared ratio structure between different signal domains enables zero-shot or contrastive cross-modal retrieval.',
    status: 'UNDER_INVESTIGATION',
    evidence: 'Gate 4.3: d4a4 champion arm (+9.6pp). Scratch 30ep: S=83.6% (+21.8pp record). Gate 4.4 concluded screening.',
    source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md §7.11'
  }
];

export const directives = {
  fundamental: {
    title: 'Fundamental Directive',
    text: 'Phideus = exploration of ratios as informational language. Cross-modality is the testbed, NOT the objective.',
    source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §1'
  },
  epistemological: {
    title: 'Epistemological Directive',
    text: 'Phideus is frontier science — act accordingly. Bold and creative criteria. Do not optimize to close hypotheses quickly. Long runs before discarding. Short screenings (3-5ep) = safety filter, NOT signal detector.',
    source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §1'
  },
  analytical: {
    title: 'Analytical Directive',
    text: 'Do NOT declare performance "ceilings" with insufficient evidence. That a metric peaks at epoch N and drops at N+1 with a given schedule does NOT prove a ceiling. Only report what is observed.',
    source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §1'
  }
};
