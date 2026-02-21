import './StatusBadge.css';

const statusConfig = {
    PASS: { label: 'PASS', className: 'status-pass' },
    VALIDATED: { label: 'VALIDATED', className: 'status-pass' },
    CLOSED: { label: 'CLOSED', className: 'status-closed' },
    'NO-GO': { label: 'NO-GO', className: 'status-nogo' },
    ACTIVE: { label: 'ACTIVE', className: 'status-running' },
    RUNNING: { label: 'RUNNING', className: 'status-running' },
    UNDER_INVESTIGATION: { label: 'UNDER INVESTIGATION', className: 'status-running' },
    PENDING: { label: 'PENDING', className: 'status-pending' },
    PAUSED: { label: 'PAUSED', className: 'status-pending' }
};

export default function StatusBadge({ status }) {
    const config = statusConfig[status] || { label: status, className: 'status-pending' };
    return <span className={`status-badge ${config.className}`}>{config.label}</span>;
}
