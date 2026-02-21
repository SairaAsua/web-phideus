import './DocsPortal.css';

const docMap = {
    '00_TRONCAL': {
        title: 'Core Documents (TRONCAL)',
        description: 'Executive-level project documents and main indices.',
        docs: [
            { name: 'Proyecto_Estado_Actual.md', role: 'Executive project status — single source of truth for current state', path: 'Documents/00_TRONCAL/Proyecto_Estado_Actual.md' },
            { name: 'INDICE_DOCUMENTACION.md', role: 'Complete document map with all categories', path: 'Documents/00_TRONCAL/INDICE_DOCUMENTACION.md' },
            { name: 'HANDOFF.md', role: 'Onboarding document for new collaborators', path: 'Documents/00_TRONCAL/HANDOFF.md' },
        ]
    },
    '01_BIAS_CONTROL': {
        title: 'Active Front: BIAS_CONTROL',
        description: 'The main experimental line. Gate framework, results, and operational roadmap.',
        docs: [
            { name: 'ROADMAP_BIAS_CONTROL.md', role: 'Master plan: all gates, criteria, decisions, and execution state', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md' },
            { name: 'INDEX_BIAS_CONTROL.md', role: 'Navigation by phases and document tree', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/INDEX_BIAS_CONTROL.md' },
            { name: 'INFORME_GATE2_COMPLETO.md', role: 'Gate 2 foundation baseline report', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/01_GATES_0_2_5/GATE_2_FOUNDATION/INFORME_GATE2_COMPLETO.md' },
            { name: 'INFORME_GATE3_COMPLETO.md', role: 'Gate 3 DANN complete report', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/02_GATE_3_DANN/INFORME_GATE3_COMPLETO.md' },
            { name: 'INFORME_DEC005_DIAGNOSTICO.md', role: 'Gate 6 retroanalysis and root cause diagnosis', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/04_DIAGNOSTICO_GATE_6_Y_GATE_4_2/INFORME_DEC005_DIAGNOSTICO_COMPLETO.md' },
            { name: 'PLAN_EJECUCION_POST_DEC005.md', role: 'Bloque A recovery execution plan', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/05_PLAN_POST_DIAGNOSTICO_BLOQUE_A/PLAN_EJECUCION_POST_DEC005_v1.1.md' },
            { name: 'plan_gate_4.2.md', role: 'Gate 4.2 ratio-centric pre-network plan', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/06_GATE_4_2_RATIO_CENTRICO/plan_gate_4.2.md' },
            { name: 'Gate 4.4 README', role: 'Third Tower + FiLM + MoE architectures', path: 'Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/08_GATE_4_4_ARQUITECTURAS_MAYORES/README.md' },
        ]
    },
    '04_TRANSVERSAL': {
        title: 'Cross-cutting: Theory & Foundations',
        description: 'Theoretical foundations, master briefing, and historical analysis.',
        docs: [
            { name: 'PHIDEUS_MASTER_BRIEFING.md', role: 'Complete project briefing: thesis, chronology, all results', path: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/PHIDEUS_MASTER_BRIEFING.md' },
            { name: 'INFORME_HISTORICO_REPRESENTACIONES.md', role: 'History of ratio representations across versions', path: 'Documents/04_TRANSVERSAL/TEORIA_Y_FUNDAMENTOS/INFORME_HISTORICO_REPRESENTACIONES_RATIOS.md' },
        ]
    },
    'Other': {
        title: 'Paused & Closed Fronts',
        description: 'Experimental lines that have been paused or closed.',
        docs: [
            { name: '02_FRENTES_PAUSADOS/', role: 'Paused experiments (VibeTensor, Escalón 1)', path: 'Documents/02_FRENTES_PAUSADOS' },
            { name: '03_FRENTES_CERRADOS/', role: 'Closed experiments (UOEMD/Rosetta — NO-GO)', path: 'Documents/03_FRENTES_CERRADOS' },
        ]
    }
};

export default function DocsPortal() {
    const repoBase = 'https://github.com/AlterMundi/Phideus/blob/main/';
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Docs Portal</h1>
                <p className="subtitle">Complete document map — every key document and its role</p>
            </div>

            <div className="source-of-truth card">
                <h4>📌 Source of Truth Rule</h4>
                <p>
                    <strong>ROADMAP_BIAS_CONTROL.md</strong> is the single source of truth for gate status and decisions.
                    <strong> Proyecto_Estado_Actual.md</strong> is the executive summary. The bitácora is a development log,
                    not a source of truth. When documents conflict, ROADMAP takes precedence.
                </p>
            </div>

            {Object.entries(docMap).map(([key, section]) => (
                <section key={key} className="section">
                    <h2 className="section-title">{section.title}</h2>
                    <p>{section.description}</p>
                    <div className="doc-list">
                        {section.docs.map(doc => (
                            <a key={doc.path} href={`${repoBase}${doc.path}`} target="_blank" rel="noopener noreferrer" className="doc-item card">
                                <span className="doc-icon">📄</span>
                                <div className="doc-info">
                                    <span className="doc-name">{doc.name}</span>
                                    <span className="doc-role">{doc.role}</span>
                                </div>
                                <span className="doc-arrow">→</span>
                            </a>
                        ))}
                    </div>
                </section>
            ))}

            <section className="section">
                <h2 className="section-title">Repository Structure</h2>
                <pre className="code-block">{`Phideus/
├── src/bias_control/          # Core modules (encoders, losses, descriptors)
├── experiments/bias_control/  # Training, evaluation, and gate scripts
├── Documents/
│   ├── 00_TRONCAL/            # Executive documents
│   ├── 01_FRENTES_ACTIVOS/    # Active fronts (BIAS_CONTROL, ESCALON_1)
│   ├── 02_FRENTES_PAUSADOS/   # Paused (VibeTensor)
│   ├── 03_FRENTES_CERRADOS/   # Closed (UOEMD)
│   └── 04_TRANSVERSAL/        # Cross-cutting (theory, visualizations)
├── viz/                       # Interactive WebGL visualizations (Next.js)
├── data/                      # Datasets and outputs (not in git)
└── config/                    # Configurations`}</pre>
            </section>
        </div>
    );
}
