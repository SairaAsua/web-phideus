import StatusBadge from '../components/StatusBadge';
import EvidenceCallout from '../components/EvidenceCallout';
import { gates } from '../data/gates';
import './BiasControl.css';

export default function BiasControl() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>BIAS_CONTROL</h1>
                <p className="subtitle">Systematic gate framework for cross-modal retrieval on MAESTRO</p>
            </div>

            <section className="section">
                <h2 className="section-title">Experimental Setup</h2>
                <div className="setup-grid">
                    <div className="setup-item card">
                        <span className="setup-label">Dataset</span>
                        <span className="setup-value">MAESTRO v3.0.0</span>
                        <span className="setup-desc">120GB, 1276 piano pieces, aligned Audio + MIDI</span>
                    </div>
                    <div className="setup-item card">
                        <span className="setup-label">Segments</span>
                        <span className="setup-value">4s duration, 1s hop</span>
                        <span className="setup-desc">batch_size=16, seed=42</span>
                    </div>
                    <div className="setup-item card">
                        <span className="setup-label">Objective</span>
                        <span className="setup-value">Cross-modal retrieval</span>
                        <span className="setup-desc">Audio ↔ MIDI contrastive alignment (VICReg)</span>
                    </div>
                    <div className="setup-item card">
                        <span className="setup-label">Canonical Metric</span>
                        <span className="setup-value code">S = min(A2M_R@10, M2A_R@10)</span>
                        <span className="setup-desc">Structured pool: 256 candidates, 500 queries, seed=42</span>
                    </div>
                </div>
                <EvidenceCallout source="Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md">
                    Sections 3.1-3.3: Canonical Evaluation Protocol
                </EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Live Status</h2>
                <div className="live-panel card">
                    <div className="live-row">
                        <span className="live-label">Current focus</span>
                        <span>Batch 60ep at UNC (D0, d4a4, a4r, d4-a4r, moe-dual) + t3-wt scratch 50ep with trapezoidal scheduler</span>
                    </div>
                    <div className="live-row">
                        <span className="live-label">Last closed</span>
                        <span>Gate 4.4 — 24 arms screening + 30ep scratch runs</span>
                    </div>
                    <div className="live-row">
                        <span className="live-label">Next</span>
                        <span>Gate 5A (barrido) + Gate 5B (scientific showcase) — pending</span>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Gate Matrix</h2>
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Gate</th>
                            <th>Purpose</th>
                            <th>Status</th>
                            <th>Decision</th>
                            <th>Best S</th>
                        </tr>
                    </thead>
                    <tbody>
                        {gates.map(g => (
                            <tr key={g.id} className={g.s === '83.6%' ? 'highlight' : ''}>
                                <td><strong>{g.name}</strong></td>
                                <td>{g.title}</td>
                                <td><StatusBadge status={g.status} /></td>
                                <td>{g.decision || '—'}</td>
                                <td className="mono">{g.s || '—'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>

            <section className="section">
                <h2 className="section-title">Gate Details</h2>
                {gates.filter(g => g.description).map(g => (
                    <div key={g.id} className="gate-detail card">
                        <div className="gd-header">
                            <h3>{g.name}: {g.title}</h3>
                            <StatusBadge status={g.status} />
                        </div>
                        <p>{g.description}</p>
                        {g.s && <p className="gd-metric">S = <strong>{g.s}</strong></p>}
                        {g.decision && <p className="gd-decision">Decision: <strong>{g.decision}</strong></p>}
                        <EvidenceCallout source={g.source} />
                    </div>
                ))}
            </section>
        </div>
    );
}
