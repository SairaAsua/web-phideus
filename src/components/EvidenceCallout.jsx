import './EvidenceCallout.css';

export default function EvidenceCallout({ source, children }) {
    const repoBase = 'https://github.com/AlterMundi/Phideus/blob/main/';
    const href = source.startsWith('http') ? source : `${repoBase}${source}`;
    return (
        <div className="evidence-callout">
            <span className="evidence-icon">📄</span>
            <div className="evidence-content">
                {children && <p className="evidence-text">{children}</p>}
                <a href={href} target="_blank" rel="noopener noreferrer" className="evidence-link">
                    Evidence: {source}
                </a>
            </div>
        </div>
    );
}
