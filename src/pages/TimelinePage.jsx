import StatusBadge from '../components/StatusBadge';
import EvidenceCallout from '../components/EvidenceCallout';
import { phases } from '../data/timeline';
import './TimelinePage.css';

export default function TimelinePage() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Timeline & History</h1>
                <p className="subtitle">From the first ratio extractors to cross-modal retrieval at 83.6%</p>
            </div>

            <div className="timeline-container">
                {phases.map((phase, i) => (
                    <div key={phase.id} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="timeline-marker">
                            <span className="timeline-dot">
                                {phase.status === 'ACTIVE' ? '◉' : phase.status === 'CLOSED' ? '✓' : '⏸'}
                            </span>
                            {i < phases.length - 1 && <div className="timeline-line" />}
                        </div>
                        <div className="timeline-card card">
                            <div className="tc-header">
                                <span className="tc-phase">Phase {phase.id}</span>
                                <StatusBadge status={phase.status} />
                            </div>
                            <h3 className="tc-title">{phase.title}</h3>
                            <span className="tc-period">{phase.period}</span>

                            <div className="tc-detail">
                                <span className="tc-label">Objective</span>
                                <p>{phase.objective}</p>
                            </div>
                            <div className="tc-detail">
                                <span className="tc-label">Representation</span>
                                <p className="mono-text">{phase.representation}</p>
                            </div>
                            <div className="tc-detail">
                                <span className="tc-label">Models & Results</span>
                                <p>{phase.models}</p>
                            </div>
                            <div className="tc-detail result-box">
                                <span className="tc-label">Result</span>
                                <p>{phase.result}</p>
                            </div>
                            <div className="tc-detail lesson-box">
                                <span className="tc-label">Key Lesson</span>
                                <p>{phase.lesson}</p>
                            </div>
                            <EvidenceCallout source={phase.source} />
                        </div>
                    </div>
                ))}
            </div>

            <section className="section glossary-section">
                <h2 className="section-title">Glossary of Terms</h2>
                <div className="glossary-grid">
                    <div className="glossary-item card">
                        <strong>DANN:</strong> Domain Adversarial Neural Network. Used in Gate 3 to test if domain-invariant embeddings would improve retrieval.
                    </div>
                    <div className="glossary-item card">
                        <strong>UOEMD:</strong> Universal Objective Evaluation of Modal Descriptors. Phase 1 attempt at cross-domain alignment.
                    </div>
                    <div className="glossary-item card">
                        <strong>VICReg:</strong> Variance-Invariance-Covariance Regularization. Current contrastive loss function used in BIAS_CONTROL.
                    </div>
                    <div className="glossary-item card">
                        <strong>Gate:</strong> A systematic decision point in the research roadmap with explicit GO/NO-GO criteria.
                    </div>
                </div>
            </section>
        </div>
    );
}
