import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-left">
                    <span className="footer-brand">Φ Phideus</span>
                    <span className="footer-divider">·</span>
                    <span>Harmonic Information Theory — Research Program</span>
                </div>
                <div className="footer-links">
                    <a href="https://github.com/AlterMundi/Phideus" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://altermundi.github.io/Phideus/" target="_blank" rel="noopener noreferrer">3D Visualizations</a>
                    <a href="https://github.com/AlterMundi/Phideus/blob/main/LICENSE.md" target="_blank" rel="noopener noreferrer">MIT License</a>
                </div>
                <div className="footer-meta">
                    <span>AlterMundi · Last updated: February 2026</span>
                </div>
            </div>
        </footer>
    );
}
