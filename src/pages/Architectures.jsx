import EvidenceCallout from '../components/EvidenceCallout';
import { visualizations } from '../data/visualizations';
import './Architectures.css';

export default function Architectures() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Architectures & Visualizations</h1>
                <p className="subtitle">Interactive 3D neural architecture explorers — adapted from bbycroft/llm-viz (MIT)</p>
            </div>

            <section className="section">
                <h2 className="section-title">Foundation Model (Run D)</h2>
                <pre className="code-block">{`Audio (waveform 96kHz × 4s) → MERTEncoderLite (4 CNN + 4 Transformer, d=1024) → MLP → [B, 256]
MIDI  (event sequence)      → 4× Transformer (d=512)                          → MLP → [B, 256]
                                      VICReg Loss (inv=10, var=10, cov=1)`}</pre>
                <div className="param-grid">
                    <div className="param-item card">
                        <span className="param-label">Audio Encoder</span>
                        <span className="param-value">~60M params</span>
                        <span className="param-desc">4 CNN stages + 4 Transformer layers, output d=1024</span>
                    </div>
                    <div className="param-item card">
                        <span className="param-label">MIDI Encoder</span>
                        <span className="param-value">~13M params</span>
                        <span className="param-desc">4 Transformer layers, d=512</span>
                    </div>
                    <div className="param-item card">
                        <span className="param-label">Projections</span>
                        <span className="param-value">~0.5M params</span>
                        <span className="param-desc">Audio: 1024→512→256, MIDI: 512→512→256</span>
                    </div>
                    <div className="param-item card">
                        <span className="param-label">d4a4 Injection</span>
                        <span className="param-value">~1.3M params</span>
                        <span className="param-desc">interval_projection (516→512+LN) + audio_descriptor_projection (1032→1024+LN)</span>
                    </div>
                </div>
                <EvidenceCallout source="README.md">Architecture section</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Interactive 3D Visualizations</h2>
                <p>Explore the neural network architectures in interactive 3D. Each visualization lets you navigate through the layers, see data flow, and understand the model structure.</p>
                <div className="viz-grid">
                    {visualizations.map(viz => (
                        <a key={viz.id} href={viz.url} target="_blank" rel="noopener noreferrer" className="viz-card card">
                            <div className="viz-header">
                                <span className="viz-icon">🧊</span>
                                <span className="viz-arch">{viz.arch}</span>
                            </div>
                            <h3 className="viz-name">{viz.name}</h3>
                            <p className="viz-desc">{viz.description}</p>
                            <span className="viz-link">Open 3D Visualization →</span>
                        </a>
                    ))}
                </div>
                <EvidenceCallout source="README.md">Visualizaciones Interactivas de Arquitectura</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Ratio Descriptors (Gate 4.3)</h2>
                <div className="descriptors">
                    <div className="desc-item card">
                        <h4>D4 — MIDI Ratio Descriptor</h4>
                        <p><strong>4 dimensions per token:</strong> Pitch intervals (f₁/f₂), IOI ratios, Velocity deltas, and Duration ratios.</p>
                        <p>Computed from MIDI events. Injected post-embedding, pre-Transformer. This descriptor encodes the relative harmonic structure instead of absolute properties.</p>
                    </div>
                    <div className="desc-item card">
                        <h4>A4 — Audio Log-Frequency Deltas</h4>
                        <p><strong>8 dimensions per frame:</strong> 8 log-freq bands, temporal delta, normalized.</p>
                        <p>Computed from STFT (n_fft=2048, hop=512). Injected post-CNN, pre-Transformer.</p>
                    </div>
                    <div className="desc-item card">
                        <h4>A7 — Rational Attractor</h4>
                        <p><strong>12 dimensions per frame:</strong> soft assignment of pairwise peak ratios to 12 just intonation attractors.</p>
                        <p>Directly tests the Phideus hypothesis: does proximity to JI ratios (3:2, 5:4, etc.) carry cross-modal signal?</p>
                    </div>
                </div>
                <div className="table-wrapper">
                    <table className="data-table">
                        <thead>
                            <tr><th>Mechanism</th><th>Description</th><th>Best Result</th></tr>
                        </thead>
                        <tbody>
                            <tr><td><strong>Concat</strong></td><td>Linear projection after concatenation of features and descriptors.</td><td>d4a4 = 69.8%</td></tr>
                            <tr><td><strong>Cross-attention</strong></td><td>Q=features, K/V=descriptor. Features attend to ratios.</td><td>A4x = 62.6%</td></tr>
                            <tr className="highlight"><td><strong>Reverse cross-att</strong></td><td>Q=descriptor, K/V=features. Ratios attend to features — 12.8× less compute.</td><td>A4r = 68.6%</td></tr>
                            <tr><td><strong>Dual same-mod</strong></td><td>Both encoders get their own modality-specific concat descriptors.</td><td>d4a4 = 69.8%</td></tr>
                            <tr><td><strong>Dual cross-modal</strong></td><td>Descriptors from one modality injected into the other (destructive).</td><td>d4a4cm = 52.4%</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Anti-Phantom-Variable Protocol</h2>
                <div className="card protocol-card">
                    <p>
                        To ensure rigorous causal attribution of performance improvements, Phideus follows the
                        <strong> Anti-Phantom-Variable Protocol</strong>:
                    </p>
                    <blockquote>
                        "Isolate a single architectural or data change per experiment. If multiple variables change simultaneously,
                        the resulting improvement is 'phantom' — its true source cannot be scientifically identified."
                    </blockquote>
                    <p>
                        Every GO decision must be backed by an ablation study or a controlled comparison where only the
                        target mechanism varies.
                    </p>
                </div>
                <EvidenceCallout source="Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md" />
            </section>

            <section className="section">
                <h2 className="section-title">How to Read the Visualizations</h2>
                <div className="legend-grid">
                    <div className="legend-item">
                        <span className="legend-color" style={{ background: '#3b82f6' }}></span>
                        <span>Encoder layers (feature extraction)</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ background: '#14b8a6' }}></span>
                        <span>Projection heads (embedding space mapping)</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ background: '#f59e0b' }}></span>
                        <span>Ratio descriptor injection point</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-color" style={{ background: '#ef4444' }}></span>
                        <span>Loss function (VICReg / adversarial)</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
