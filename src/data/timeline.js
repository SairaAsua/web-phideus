export const phases = [
    {
        id: 1,
        title: 'Origins — IAm Phideus',
        period: 'May – August 2025',
        objective: 'Build first ratio extractors; test if audio signals contain structured ratio distributions.',
        representation: 'CQT → v2.2 [100] → v3.x [200-512] → v4.0 [256,3] → v4.1 Enriched [512,3]',
        models: 'VAE (1.6M params, val_loss=4212) vs HRM (6.0M params, val_loss=2.74 — but illusory improvement)',
        result: 'H1 validated: ratio distributions are non-random. HRM >> VAE on synthetic data.',
        lesson: 'The improvement came from HRM architecture, but the real bottleneck was the representation, not the model.',
        status: 'CLOSED',
        source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §2'
    },
    {
        id: 2,
        title: 'Paradigm Shift v5.0',
        period: 'January 2026',
        objective: 'Shift from global histograms to temporal histograms: [256,3] → [T,256,3].',
        representation: 'Temporal histograms [T, 256, 3] preserving time structure.',
        models: 'VAE Temporal (1.82M, val_loss=0.4560) ≈ HRM Temporal (2.27M, val_loss=0.4607)',
        result: 'H2 validated: val_loss < 0.5. The same VAE that was catastrophic with v4.1 became excellent.',
        lesson: 'Representation > Architecture. The improvement came from changing how data is encoded, not the model.',
        status: 'CLOSED',
        source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §2'
    },
    {
        id: 3,
        title: 'UOEMD / Rosetta — Cross-Modal Audio-Vibration',
        period: 'January – February 2026',
        objective: 'Demonstrate H3 with audio-vibration pairs from UOEMD dataset (128 samples).',
        representation: 'Dense histograms, sparse constellation tokens, JEPA-lite.',
        models: 'RosetaVAE v2.2 (gap=0.007), ConstellationVAE C1-C6 (0.78% = random), JEPA-lite (1.56%)',
        result: 'NO-GO on all approaches. Dataset too small (128 samples) for cross-modal validation.',
        lesson: '128 samples is insufficient. VAE collapses discriminative information. Sparse tokens lose information.',
        status: 'CLOSED',
        source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §2'
    },
    {
        id: 4,
        title: 'Escalón 1 — MAESTRO Audio↔MIDI',
        period: 'February 2026',
        objective: 'Pivot to a much larger dataset: MAESTRO v3.0.0 (120GB, 1276 piano pieces, aligned audio + MIDI).',
        representation: 'Event-based and improved TF constellations on MAESTRO pairs.',
        models: 'Route A (event-based): 71.4% accuracy. Route B (improved TF): 80.0% accuracy.',
        result: 'Signal detected (28-32× vs random), but onset resolution limits scaling.',
        lesson: 'The hashing approach has potential but temporal resolution is the bottleneck. Need neural contrastive approach.',
        status: 'PAUSED',
        source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §2'
    },
    {
        id: 5,
        title: 'BIAS_CONTROL — The Main Line',
        period: 'February 2026 – present',
        objective: 'Use contrastive neural networks (VICReg) with specialized encoders for Audio (MERT) and MIDI (Transformer) to achieve cross-modal retrieval.',
        representation: 'Raw audio waveforms (96kHz × 4s) + MIDI event sequences → shared 256d embedding space.',
        models: 'Audio encoder (~60M, MERT pretrained) + MIDI encoder (~13M, 4 Transformer layers) + VICReg loss.',
        result: 'Gate 4.3: d4a4 scratch 83.6% S (+21.8pp over baseline). Gate 4.4: 24 arms screened. Runs largos 60ep ongoing at UNC.',
        lesson: 'Ratio descriptor injection is superadditive. Same-modality injection >> cross-modal. Reverse cross-attention is the best individual mechanism.',
        status: 'ACTIVE',
        source: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md §2, ROADMAP_BIAS_CONTROL.md'
    }
];
