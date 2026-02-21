import './Credits.css';

export default function Credits() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>People & Credits</h1>
                <p className="subtitle">The team behind Phideus</p>
            </div>

            <section className="section">
                <h2 className="section-title">Team</h2>
                <div className="people-grid">
                    <div className="person-card card">
                        <div className="person-avatar">M</div>
                        <h3>Mariano</h3>
                        <span className="person-role">Principal Engineer / Lead Implementer</span>
                        <p>Architecture design, experiment execution, analysis, and documentation.</p>
                    </div>
                    <div className="person-card card">
                        <div className="person-avatar team">P</div>
                        <h3>Phideus Research Team</h3>
                        <span className="person-role">Research & Analysis</span>
                        <p>Collaborative research on cross-modal retrieval and harmonic information theory.</p>
                    </div>
                    <div className="person-card card">
                        <div className="person-avatar org">A</div>
                        <h3>AlterMundi</h3>
                        <span className="person-role">Host Organization</span>
                        <p>Infrastructure, repository hosting, and organizational support.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Acknowledgments</h2>
                <div className="ack-list">
                    <div className="ack-item card">
                        <h4>bbycroft/llm-viz</h4>
                        <p>3D neural network visualizations adapted from <a href="https://github.com/bbycroft/llm-viz" target="_blank" rel="noopener noreferrer">bbycroft/llm-viz</a> (MIT License).</p>
                    </div>
                    <div className="ack-item card">
                        <h4>MAESTRO v3.0.0</h4>
                        <p>Dataset: <a href="https://magenta.tensorflow.org/datasets/maestro" target="_blank" rel="noopener noreferrer">Google Magenta MAESTRO</a> — 120GB of aligned piano audio + MIDI, 1276 pieces.</p>
                    </div>
                    <div className="ack-item card">
                        <h4>MERT</h4>
                        <p>Pre-trained audio encoder used as the audio backbone: Music Encoder Representations from Transformers.</p>
                    </div>
                    <div className="ack-item card">
                        <h4>VICReg</h4>
                        <p>Contrastive learning objective — Variance-Invariance-Covariance Regularization.</p>
                    </div>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">License</h2>
                <p>
                    Phideus is released under the <a href="https://github.com/AlterMundi/Phideus/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer">MIT License</a>.
                </p>
            </section>
        </div>
    );
}
