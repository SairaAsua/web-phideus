import EvidenceCallout from '../components/EvidenceCallout';
import { gate43Results, scratchResults, longRunResults, bloqueAResults } from '../data/gates';
import './Results.css';

export default function Results() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Results</h1>
                <p className="subtitle">Key experimental findings from BIAS_CONTROL gates</p>
            </div>

            <section className="section">
                <h2 className="section-title">Gate 4.3 — Ratio Re-Centric (13 Arms, 5 Epochs)</h2>
                <p>All arms start from <code className="inline">foundation_locked_e25.pt</code>, freeze-policy run-d. Structured evaluation: pool=256, queries=500, seed=42.</p>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Rank</th><th>Arm</th><th>Descriptor</th><th>Mechanism</th><th>S</th><th>hard_neg</th><th>vs D0</th></tr>
                        </thead>
                        <tbody>
                            {gate43Results.map(r => (
                                <tr key={r.arm} className={r.highlight ? 'highlight' : r.baseline ? 'baseline-row' : ''}>
                                    <td>{r.rank}</td>
                                    <td><strong>{r.arm}</strong></td>
                                    <td>{r.descriptor}</td>
                                    <td>{r.mechanism}</td>
                                    <td className="mono">{r.s}</td>
                                    <td className="mono">{r.hardNeg}</td>
                                    <td className="mono">{r.delta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <EvidenceCallout source="README.md">Gate 4.3 results table</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Key Observations</h2>
                <div className="observations">
                    <div className="obs card">
                        <h4>🔬 d4a4 is Superadditive</h4>
                        <p>D4 alone = +3.4pp, A4 alone = +3.4pp, but d4a4 dual = <strong>+9.6pp</strong> (not +6.8pp). The combination contributes more than the sum of parts.</p>
                    </div>
                    <div className="obs card">
                        <h4>↩️ Reverse Cross-Attention Wins</h4>
                        <p>A4r = 68.6% with a single descriptor, nearly matching d4a4 dual (69.8%). Reverse cross-att is systematically better: A4r &gt; A4x, D4r &gt; D4x.</p>
                    </div>
                    <div className="obs card">
                        <h4>✅ Same-Modality &gt;&gt; Cross-Modal</h4>
                        <p>d4a4 (same-mod concat) = +9.6pp. d4a4cm (cross-modal injection) = <strong>-7.8pp</strong>. Injecting descriptors cross-modally destroys signal.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">d4a4 From-Scratch — 30 Epochs</h2>
                <p>Same starting point as D-02 (MERT pretrained + random MIDI). Only difference: d4a4 injection. Duration: 636 min (10.6h).</p>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Epoch</th><th>Loss</th><th>S</th><th>A2M</th><th>M2A</th><th>hard_neg</th><th>vs D-02 best</th></tr>
                        </thead>
                        <tbody>
                            {scratchResults.map(r => (
                                <tr key={r.epoch} className={r.highlight ? 'highlight' : ''}>
                                    <td>{r.epoch}</td>
                                    <td className="mono">{r.loss}</td>
                                    <td className="mono"><strong>{r.s}</strong></td>
                                    <td className="mono">{r.a2m}</td>
                                    <td className="mono">{r.m2a}</td>
                                    <td className="mono">{r.hardNeg}</td>
                                    <td className="mono">{r.delta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="result-note">D-02 best = S=61.8% (epoch 25). Model was still improving at epoch 30 (not saturated).</p>
                <EvidenceCallout source="README.md">d4a4 from-scratch 30 epochs</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Long Runs — 30 Epochs Scratch (Ranking)</h2>
                <div className="ranking-bars">
                    {longRunResults.map(r => (
                        <div key={r.arm} className={`rank-bar ${r.highlight ? 'top' : ''}`}>
                            <span className="rb-name">{r.arm}</span>
                            <div className="rb-track">
                                <div className="rb-fill" style={{ width: `${parseFloat(r.s)}%` }} />
                            </div>
                            <span className="rb-value">{r.s}</span>
                        </div>
                    ))}
                </div>
                <EvidenceCallout source="README.md">Runs largos scratch 30ep ranking</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Bloque A — Recovery Training</h2>
                <p>Comparison of fine-tuning strategies on the MERT-based audio encoder.</p>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Run</th><th>Strategy</th><th>Best S</th><th>Best Epoch</th><th>hard_neg</th></tr>
                        </thead>
                        <tbody>
                            {bloqueAResults.map(r => (
                                <tr key={r.run} className={r.highlight ? 'highlight' : ''}>
                                    <td><strong>{r.run}</strong></td>
                                    <td>{r.strategy}</td>
                                    <td className="mono">{r.s}</td>
                                    <td className="mono">{r.bestEpoch}</td>
                                    <td className="mono">{r.hardNeg}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="result-note">D-02 epoch 25 was locked as <code className="inline">foundation_locked_e25.pt</code> — starting point for all Gate 4.3 arms.</p>
                <EvidenceCallout source="Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/05_PLAN_POST_DIAGNOSTICO_BLOQUE_A/PLAN_EJECUCION_POST_DEC005_v1.1.md" />
            </section>

            <section className="section">
                <h2 className="section-title">Full Experimental Summary</h2>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Block</th><th>Result</th><th>Reading</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>Escalón 1 hashing</td><td className="mono">27% piece accuracy</td><td>Signal detected, insufficient for robust closure</td></tr>
                            <tr><td>UOEMD (F0-F3A)</td><td>NO-GO</td><td>Dataset/regime limits confirmed</td></tr>
                            <tr><td>BIAS_CONTROL Gate 2</td><td className="mono">R@10=34.4%</td><td>Operational baseline</td></tr>
                            <tr><td>BIAS_CONTROL Gate 3 (DANN)</td><td>4 runs, no improvement</td><td>Modal invariance was not the bottleneck</td></tr>
                            <tr><td>BIAS_CONTROL Gate 4.0-4.1</td><td>Mixed → closed</td><td>Insufficient causal control</td></tr>
                            <tr><td>BIAS_CONTROL Gate 6 + 4.2</td><td>Diagnostic complete</td><td>Root cause: frozen audio encoder</td></tr>
                            <tr className="highlight"><td><strong>Gate 4.3</strong></td><td className="mono"><strong>d4a4=69.8% (5ep); scratch=83.6% (30ep)</strong></td><td>Ratio injection works, superadditive</td></tr>
                            <tr className="highlight"><td><strong>Gate 4.4</strong></td><td className="mono"><strong>24 arms screened</strong></td><td>t3-wt wins 4.4 family; FiLM/MoE in 58-60% band</td></tr>
                            <tr className="highlight"><td><strong>Runs largos 30ep</strong></td><td className="mono"><strong>d4a4 83.6 &gt; a4r 82.0 &gt; t3-wt 79.8</strong></td><td>Base for batch 60ep</td></tr>
                        </tbody>
                    </table>
                </div>
                <EvidenceCallout source="README.md">Experimental Summary / Resumen Experimental</EvidenceCallout>
            </section>
        </div>
    );
}
