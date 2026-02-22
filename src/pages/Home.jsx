import StatusBadge from '../components/StatusBadge';
import EvidenceCallout from '../components/EvidenceCallout';
import { gates } from '../data/gates';
import './Home.css';

export default function Home() {
    const currentGate = gates.find(g => g.id === 'gate-4-4');
    const bestResult = gates.find(g => g.id === 'gate-4-3');
    return (
        <div className="main-content">
            <section className="hero">
                <div className="hero-badge">Active Research Program</div>
                <h1>
                    <span className="phi-symbol">Φ</span> Phideus
                </h1>
                <p className="hero-subtitle">Harmonic Information Theory</p>
                <p className="hero-question">
                    <em>Do frequency ratios constitute a universal informational language?</em>
                </p>
                <p className="hero-desc">
                    <strong>Phideus</strong> investigates whether harmonic frequency ratios (3:2, 5:4, 7:4...)
                    function as dimensionless physical units of information transferable across modalities.
                    The current testbed is <strong>Audio ↔ MIDI</strong> cross-modal retrieval on MAESTRO,
                    with contrastive training (VICReg) and structured evaluation.
                </p>
                <EvidenceCallout source="Documents/00_TRONCAL/Proyecto_Estado_Actual.md" />
            </section>

            <section className="status-panel card">
                <h3>Current Status — February 2026</h3>
                <div className="status-grid">
                    <div className="status-item">
                        <span className="status-label">Active Focus</span>
                        <span className="status-value">Batch 60ep at UNC (D0, d4a4, a4r, d4-a4r, moe-dual)</span>
                    </div>
                    <div className="status-item">
                        <span className="status-label">Latest Gate (Screening)</span>
                        <span className="status-value">
                            {currentGate?.name} — {currentGate?.title} <StatusBadge status={currentGate?.status} />
                        </span>
                    </div>
                    <div className="status-item">
                        <span className="status-label">Best S (Retrieval Record)</span>
                        <span className="status-value highlight">{bestResult?.s} — d4a4 scratch 30ep (+21.8pp)</span>
                    </div>
                    <div className="status-item">
                        <span className="status-label">Hypothesis H3</span>
                        <StatusBadge status="UNDER_INVESTIGATION" />
                    </div>
                </div>
                <div className="status-definitions">
                    <p><small><strong>S (Retrieval Score):</strong> min(Audio2MIDI_R@10, MIDI2Audio_R@10) on a canonical pool of 256 candidates.</small></p>
                    <p><small><strong>Gate 4.4:</strong> Major architecture screening (Third Tower, FiLM, MoE) concluded with 24 screened arms.</small></p>
                </div>
                <EvidenceCallout source="Documents/00_TRONCAL/Proyecto_Estado_Actual.md" />
            </section>

            <section className="quick-links">
                <a href="https://github.com/AlterMundi/Phideus" target="_blank" rel="noopener noreferrer" className="quick-link card">
                    <span className="ql-icon">📦</span>
                    <span className="ql-title">Repository</span>
                    <span className="ql-desc">Source code & experiments</span>
                </a>
                <a href="https://altermundi.github.io/Phideus/" target="_blank" rel="noopener noreferrer" className="quick-link card">
                    <span className="ql-icon">🧊</span>
                    <span className="ql-title">3D Visualizations</span>
                    <span className="ql-desc">Interactive architecture explorers</span>
                </a>
                <a href="https://github.com/AlterMundi/Phideus/blob/main/Documents/00_TRONCAL/Proyecto_Estado_Actual.md" target="_blank" rel="noopener noreferrer" className="quick-link card">
                    <span className="ql-icon">📊</span>
                    <span className="ql-title">Current State</span>
                    <span className="ql-desc">Executive project status</span>
                </a>
                <a href="https://github.com/AlterMundi/Phideus/blob/main/Documents/00_TRONCAL/INDICE_DOCUMENTACION.md" target="_blank" rel="noopener noreferrer" className="quick-link card">
                    <span className="ql-icon">📚</span>
                    <span className="ql-title">Docs Index</span>
                    <span className="ql-desc">Complete document map</span>
                </a>
            </section>

            <section className="section">
                <h2 className="section-title">Gate Progression</h2>
                <div className="gate-matrix">
                    {gates.map(gate => (
                        <div key={gate.id} className="gate-mini card">
                            <div className="gate-mini-header">
                                <span className="gate-mini-name">{gate.name}</span>
                                <StatusBadge status={gate.status} />
                            </div>
                            <span className="gate-mini-title">{gate.title}</span>
                            {gate.s && <span className="gate-mini-s">S = {gate.s}</span>}
                            {gate.decision && <span className="gate-mini-decision">{gate.decision}</span>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
