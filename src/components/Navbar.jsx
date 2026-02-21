import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/research', label: 'Research' },
    { path: '/timeline', label: 'Timeline' },
    { path: '/bias-control', label: 'BIAS_CONTROL' },
    { path: '/results', label: 'Results' },
    { path: '/architectures', label: 'Visualizations' },
    { path: '/reproducibility', label: 'Reproducibility' },
    { path: '/docs', label: 'Docs' }
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-brand">
                    <span className="brand-icon">Φ</span>
                    <span className="brand-text">Phideus</span>
                </Link>
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`} />
                </button>
                <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path)) ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
