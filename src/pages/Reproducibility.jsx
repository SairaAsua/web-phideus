import EvidenceCallout from '../components/EvidenceCallout';
import './Reproducibility.css';

export default function Reproducibility() {
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>Reproducibility</h1>
                <p className="subtitle">Quick start, commands, and protocol for reproducing all experiments</p>
            </div>

            <section className="section">
                <h2 className="section-title">Quick Start</h2>
                <pre className="code-block">{`python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt`}</pre>
                <EvidenceCallout source="README.md">Setup del Entorno</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Full Pipeline</h2>
                <p>Run the entire BIAS_CONTROL suite (Gates 0-4.4):</p>
                <pre className="code-block">{`python <a href="https://github.com/AlterMundi/Phideus/blob/main/experiments/bias_control/run_all_gates.py" target="_blank">experiments/bias_control/run_all_gates.py</a> \\
  --maestro-dir data/maestro_v3/maestro-v3.0.0 \\
  --output data/bias_control_medium`}</pre>
            </section>

            <section className="section">
                <h2 className="section-title">Gate 4.3 (Example: arm d4a4)</h2>
                <p>Reproduce the champion arm training:</p>
                <pre className="code-block">{`PYTORCH_CUDA_ALLOC_CONF=expandable_segments:True \\
python <a href="https://github.com/AlterMundi/Phideus/blob/main/experiments/bias_control/gate42_training.py" target="_blank">experiments/bias_control/gate42_training.py</a> \\
  --descriptor d4a4 \\
  --checkpoint data/bias_control_medium/training_outputs/foundation_locked_e25.pt \\
  --output data/bias_control_medium/training_outputs/gate43/d4a4 \\
  --maestro-dir data/maestro_v3/maestro-v3.0.0 \\
  --epochs 5 --batch-size 16 --num-workers 8 \\
  --freeze-policy run-d --seed 42 --device cuda`}</pre>
            </section>

            <section className="section">
                <h2 className="section-title">Structured Pool Evaluation</h2>
                <pre className="code-block">{`python experiments/bias_control/evaluate_structured_pool.py \\
  --model <checkpoint.pt> \\
  --output <output.json> \\
  --pool-size 256 --n-queries 500 --seed 42 \\
  --maestro-dir data/maestro_v3/maestro-v3.0.0`}</pre>
                <div className="protocol-box card">
                    <h4>Canonical Protocol</h4>
                    <ul className="protocol-list">
                        <li><strong>Pool size:</strong> 256 candidates</li>
                        <li><strong>Queries:</strong> 500</li>
                        <li><strong>Seed:</strong> 42 (fixed for comparability)</li>
                        <li><strong>Metric:</strong> S = min(A2M_R@10, M2A_R@10)</li>
                    </ul>
                </div>
                <EvidenceCallout source="README.md">Evaluación Estructurada</EvidenceCallout>
            </section>

            <section className="section">
                <h2 className="section-title">Data Directories</h2>
                <p>The following directories are <strong>not versioned</strong> (too heavy for git):</p>
                <pre className="code-block">{`data/           # Datasets (MAESTRO v3.0.0 = ~120GB)
models/         # Trained checkpoints
train/          # Training outputs and logs
outputs/        # Evaluation outputs`}</pre>
                <p>You need to download MAESTRO v3.0.0 separately from <a href="https://magenta.tensorflow.org/datasets/maestro" target="_blank" rel="noopener noreferrer">magenta.tensorflow.org</a>.</p>
            </section>

            <section className="section">
                <h2 className="section-title">Adding New Results Without Breaking Comparability</h2>
                <div className="protocol-box card">
                    <ul className="protocol-list">
                        <li>Always use the <strong>canonical pool</strong> (256 candidates, 500 queries, seed=42)</li>
                        <li>Report <strong>S metric</strong> for primary comparison</li>
                        <li>Use <code className="inline">foundation_locked_e25.pt</code> as starting checkpoint (MD5: ddb2ebf7, chmod 444)</li>
                        <li>Document freeze-policy and learning rate schedule</li>
                        <li>Follow the <strong>Anti-Phantom-Variable Protocol</strong>:
                            <p className="protocol-quote">"Isolate a single architectural or data change per experiment. If multiple variables change simultaneously, the resulting improvement is 'phantom' — its true source cannot be scientifically identified."</p>
                        </li>
                    </ul>
                </div>
                <EvidenceCallout source="Documents/01_FRENTES_ACTIVOS/BIAS_CONTROL/ROADMAP_BIAS_CONTROL.md">
                    Section 9.3: Protocolo anti-variable-fantasma
                </EvidenceCallout>
            </section>
        </div>
    );
}
