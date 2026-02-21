import StatusBadge from '../components/StatusBadge';
import EvidenceCallout from '../components/EvidenceCallout';
import { hypotheses, directives } from '../data/hypotheses';
import './Research.css';

export default function Research() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Research Program</h1>
                <p className="subtitle">Harmonic Information Theory — Hypothesis, Methodology & Falsifiability</p>
            </div>

            <section className="section">
                <h2 className="section-title">Central Thesis</h2>
                <blockquote>
                    Phideus investigates the hypothesis that <strong>frequency ratios</strong> constitute a universal
                    informational language that transcends sensory modalities. A ratio is the relationship between
                    two frequencies: f₁/f₂. The same proportion 3:2 exists between 300Hz and 200Hz, between 1500Hz
                    and 1000Hz, between a theta and an alpha brain wave. Ratios are <strong>dimensionless</strong> —
                    they do not depend on absolute scale.
                </blockquote>
                <p>
                    The project name comes from <strong>Phidias</strong>, the Greek sculptor celebrated for his mastery
                    of proportions. "IAm Phideus" = an AI that understands the world through proportions.
                </p>
                <EvidenceCallout source="Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md">
                    Section 1: Central Thesis
                </EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Operative Hypotheses</h2>
                <div className="hypothesis-cards">
                    {hypotheses.map(h => (
                        <div key={h.id} className="hypothesis-card card">
                            <div className="hyp-header">
                                <span className="hyp-id">{h.id}</span>
                                <span className="hyp-name">{h.name}</span>
                                <StatusBadge status={h.status} />
                            </div>
                            <p className="hyp-statement">{h.statement}</p>
                            <p className="hyp-evidence">{h.evidence}</p>
                            <EvidenceCallout source={h.source} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Research Directives</h2>
                {Object.values(directives).map(d => (
                    <div key={d.title} className="directive card">
                        <h4>{d.title}</h4>
                        <blockquote>{d.text}</blockquote>
                        <EvidenceCallout source={d.source} />
                    </div>
                ))}
            </section>

            <section className="section">
                <h2 className="section-title">What Phideus Does NOT Claim</h2>
                <ul className="disclaimers">
                    <li>Phideus does <strong>not</strong> claim that ratios are the <em>only</em> informational structure in signals.</li>
                    <li>Phideus does <strong>not</strong> claim mystical or esoteric properties of harmonic proportions.</li>
                    <li>Cross-modality is the <strong>testbed</strong>, not the objective. The goal is to understand ratios as information.</li>
                    <li>Performance ceilings are <strong>not</strong> declared without sufficient evidence (Analytical Directive).</li>
                    <li>Short screening runs (3-5 epochs) are safety filters, <strong>not</strong> signal detectors.</li>
                </ul>
            </section>
        </div>
    );
}
