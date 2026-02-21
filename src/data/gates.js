export const gates = [
    { id: 'gate-0', name: 'Gate 0', title: 'Data Integrity', status: 'PASS', decision: 'GO', s: null, source: 'ROADMAP_BIAS_CONTROL.md §5.1' },
    { id: 'gate-1', name: 'Gate 1', title: 'Intra-modal Baselines', status: 'CLOSED', decision: 'GO', s: null, source: 'ROADMAP_BIAS_CONTROL.md §5.2' },
    { id: 'gate-2', name: 'Gate 2', title: 'Foundation Baseline', status: 'CLOSED', decision: 'GO', s: '34.4%', hardNeg: '80.4%', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/01_GATES_0_2_5/GATE_2_FOUNDATION/INFORME_GATE2_COMPLETO.md' },
    { id: 'gate-2-5', name: 'Gate 2.5', title: 'Separability Probes', status: 'CLOSED', decision: 'GO (diagnostic)', s: null, source: 'ROADMAP_BIAS_CONTROL.md §5.4' },
    { id: 'gate-3', name: 'Gate 3', title: 'DANN', status: 'CLOSED', decision: 'NO-GO', s: null, description: 'Domain Adversarial Neural Network for domain-invariant embeddings. No robust improvement — modal invariance was not the bottleneck.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/02_GATE_3_DANN/INFORME_GATE3_COMPLETO.md' },
    { id: 'gate-4', name: 'Gate 4.0', title: 'Ratio Auxiliary', status: 'CLOSED', decision: 'Mixed signal', s: null, source: 'ROADMAP_BIAS_CONTROL.md §5.6' },
    { id: 'gate-4-1', name: 'Gate 4.1', title: 'Causal Control', status: 'CLOSED', decision: 'NO-GO', s: null, description: 'dS=+0.8pp < threshold. Insufficient causal control.', source: 'ROADMAP_BIAS_CONTROL.md §5.6' },
    { id: 'gate-6', name: 'Gate 6', title: 'Retroanalysis', status: 'CLOSED', decision: 'Root cause confirmed', s: null, description: 'Root cause: frozen audio encoder limited learning capacity.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/04_DIAGNOSTICO_GATE_6_Y_GATE_4_2/INFORME_DEC005_DIAGNOSTICO_COMPLETO.md' },
    { id: 'gate-4-2', name: 'Gate 4.2', title: 'Pre-red Dual-Domain', status: 'CLOSED', decision: 'NO-GO', s: null, description: 'AUC ~0.50. Pre-network ratio injection did not work.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/06_GATE_4_2_RATIO_CENTRICO/plan_gate_4.2.md' },
    { id: 'bloque-a', name: 'Bloque A', title: 'Recovery Training', status: 'CLOSED', decision: 'GO', s: '61.8%', description: '5 recovery runs (S0/A/B/C/D). D-02 epoch 25 locked as foundation checkpoint.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/05_PLAN_POST_DIAGNOSTICO_BLOQUE_A/PLAN_EJECUCION_POST_DEC005_v1.1.md' },
    { id: 'gate-4-3', name: 'Gate 4.3', title: 'Ratio Re-Centric', status: 'CLOSED', decision: 'GO — Record', s: '83.6%', description: '13 arms + from-scratch. d4a4 is superadditive: +9.6pp (5ep), +21.8pp scratch 30ep. Reverse cross-attention best individual mechanism.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/07_GATE_4_3_RATIO_RE_CENTRICO/README.md' },
    { id: 'gate-4-4', name: 'Gate 4.4', title: 'Third Tower + FiLM + MoE', status: 'CLOSED', decision: 'Screening complete', s: null, description: '24 arms screened (incl. MoE v2/v3/v4). Third Tower (t3-wt) wins 4.4 family. Runs largos: d4a4=83.6%, a4r=82.0%, d4-a4r/t3-wt=79.8%.', source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/08_GATE_4_4_ARQUITECTURAS_MAYORES/README.md' },
    { id: 'gate-5a', name: 'Gate 5A', title: 'Descriptor × Mechanism Sweep', status: 'PENDING', decision: null, s: null, source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/09_GATE_5_LINEA_A_BARRIDO/README.md' },
    { id: 'gate-5b', name: 'Gate 5B', title: 'Scientific Showcase', status: 'PENDING', decision: null, s: null, source: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/10_GATE_5_LINEA_B_SHOWCASE/README.md' }
];

export const gate43Results = [
    { rank: 1, arm: 'd4a4', descriptor: 'MIDI intervals + Audio log-freq', mechanism: 'Dual same-mod concat', s: '69.8%', hardNeg: '91.6%', delta: '+9.6pp', highlight: true },
    { rank: 2, arm: 'A4r', descriptor: 'Audio log-freq deltas (8d)', mechanism: 'Reverse cross-att', s: '68.6%', hardNeg: '91.6%', delta: '+8.4pp' },
    { rank: 3, arm: 'D4r', descriptor: 'MIDI intervals (4d)', mechanism: 'Reverse cross-att', s: '64.2%', hardNeg: '93.2%', delta: '+4.0pp' },
    { rank: 4, arm: 'D4', descriptor: 'MIDI intervals (4d)', mechanism: 'Concat', s: '63.6%', hardNeg: '91.2%', delta: '+3.4pp' },
    { rank: 4, arm: 'A4', descriptor: 'Audio log-freq deltas (8d)', mechanism: 'Concat', s: '63.6%', hardNeg: '92.4%', delta: '+3.4pp' },
    { rank: 6, arm: 'A4x', descriptor: 'Audio log-freq deltas (8d)', mechanism: 'Cross-attention', s: '62.6%', hardNeg: '92.4%', delta: '+2.4pp' },
    { rank: 7, arm: 'A7x', descriptor: 'Audio rational attractor (12d)', mechanism: 'Cross-attention', s: '62.2%', hardNeg: '92.0%', delta: '+2.0pp' },
    { rank: 8, arm: 'D0', descriptor: '—', mechanism: 'Baseline', s: '60.2%', hardNeg: '90.0%', delta: '—', baseline: true },
    { rank: 9, arm: 'D4x', descriptor: 'MIDI intervals (4d)', mechanism: 'Cross-attention', s: '60.0%', hardNeg: '91.4%', delta: '-0.2pp' },
    { rank: 10, arm: 'A9', descriptor: 'IDF-weighted attractor (12d)', mechanism: 'Concat', s: '58.8%', hardNeg: '90.4%', delta: '-1.4pp' },
    { rank: 10, arm: 'A7', descriptor: 'Audio rational attractor (12d)', mechanism: 'Concat', s: '58.8%', hardNeg: '90.2%', delta: '-1.4pp' },
    { rank: 12, arm: 'A8', descriptor: 'Onset-weighted chroma (12d)', mechanism: 'Concat', s: '57.4%', hardNeg: '90.6%', delta: '-2.8pp' },
    { rank: 13, arm: 'd4a4cm', descriptor: 'MIDI intervals + Audio log-freq', mechanism: 'Dual cross-modal', s: '52.4%', hardNeg: '89.6%', delta: '-7.8pp' }
];

export const scratchResults = [
    { epoch: 10, loss: '13.60', s: '74.6%', a2m: '74.6%', m2a: '75.0%', hardNeg: '93.0%', delta: '+12.8pp' },
    { epoch: 15, loss: '13.38', s: '65.8%', a2m: '65.8%', m2a: '68.6%', hardNeg: '91.0%', delta: '+4.0pp' },
    { epoch: 20, loss: '13.26', s: '75.6%', a2m: '75.6%', m2a: '76.8%', hardNeg: '93.6%', delta: '+13.8pp' },
    { epoch: 25, loss: '13.21', s: '82.2%', a2m: '82.8%', m2a: '82.2%', hardNeg: '95.4%', delta: '+20.4pp' },
    { epoch: 28, loss: '13.19', s: '82.8%', a2m: '82.8%', m2a: '83.6%', hardNeg: '94.8%', delta: '+21.0pp' },
    { epoch: 29, loss: '13.19', s: '82.6%', a2m: '82.6%', m2a: '83.8%', hardNeg: '95.2%', delta: '+20.8pp' },
    { epoch: 30, loss: '13.20', s: '83.6%', a2m: '84.0%', m2a: '83.6%', hardNeg: '95.2%', delta: '+21.8pp', highlight: true }
];

export const longRunResults = [
    { arm: 'd4a4', s: '83.6%', highlight: true },
    { arm: 'a4r', s: '82.0%' },
    { arm: 'd4-a4r', s: '79.8%' },
    { arm: 't3-wt', s: '79.8%' },
    { arm: 'd4a4r', s: '74.4%' },
    { arm: 'moe-dual', s: '72.6%' }
];

export const bloqueAResults = [
    { run: 'S0', strategy: 'Eval-only (control)', s: '34.4%', bestEpoch: '—', hardNeg: '80.4%' },
    { run: 'A', strategy: 'Adapters only', s: '30.0%', bestEpoch: '5', hardNeg: '76.8%' },
    { run: 'B', strategy: 'Unfreeze layers 2-3', s: '43.2%', bestEpoch: '3', hardNeg: '85.2%' },
    { run: 'C', strategy: 'Hybrid (adapters 0-1 + unfreeze 2-3)', s: '49.4%', bestEpoch: '5', hardNeg: '88.4%' },
    { run: 'D', strategy: 'Full unfreeze (split-LR)', s: '51.0%', bestEpoch: '5', hardNeg: '89.2%' },
    { run: 'D-02', strategy: 'Full unfreeze, 30 epochs', s: '61.8%', bestEpoch: '25', hardNeg: '90.4%', highlight: true }
];
