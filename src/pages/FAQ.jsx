import { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        q: 'What are frequency ratios?',
        a: 'A frequency ratio is the relationship between two frequencies: f₁/f₂. For example, the ratio 3:2 (a perfect fifth in music) exists between 300Hz and 200Hz, between 1500Hz and 1000Hz, or between any two frequencies with that proportion. Ratios are dimensionless — they do not depend on absolute scale, making them potentially transferable across domains.'
    },
    {
        q: 'Why Audio ↔ MIDI for cross-modal testing?',
        a: 'MAESTRO v3.0.0 provides temporally aligned Audio + MIDI pairs for 1276 piano performances (120GB). This makes it an ideal testbed because: (1) the pairing is exact (same performance), (2) audio and MIDI represent fundamentally different encodings of the same musical event, and (3) the dataset is large enough for rigorous neural training. If ratios carry cross-modal information, Audio↔MIDI retrieval should work.'
    },
    {
        q: 'What is the "structured pool" evaluation?',
        a: 'The canonical evaluation protocol: from a pool of 256 candidate segments, the model must retrieve the correct match for each of 500 queries (seed=42 for reproducibility). The metric S = min(A2M_R@10, M2A_R@10) measures how well the model retrieves in both directions. This is more rigorous than global validation metrics.'
    },
    {
        q: 'What is VICReg?',
        a: 'Variance-Invariance-Covariance Regularization — a contrastive learning loss function. It pushes paired embeddings (audio, MIDI) together (invariance), prevents dimensional collapse (variance), and decorrelates dimensions (covariance). Config: inv=10, var=10, cov=1.'
    },
    {
        q: 'What does "S" mean?',
        a: 'S = min(A2M_R@10, M2A_R@10). It\'s the canonical retrieval metric: the minimum of Audio-to-MIDI and MIDI-to-Audio Recall@10. It measures the harder direction, ensuring the model works well in both ways. Higher is better. The current record is S=83.6% (d4a4 scratch, 30 epochs).'
    },
    {
        q: 'What is d4a4?',
        a: 'd4a4 is the champion arm from Gate 4.3. It injects two ratio descriptors simultaneously: D4 (MIDI ratio descriptor) into the MIDI encoder, and A4 (audio log-frequency deltas) into the audio encoder. Both use same-modality concatenation. The combination is superadditive: D4 alone = +3.4pp, A4 alone = +3.4pp, but d4a4 = +9.6pp.'
    },
    {
        q: 'What is D4 exactly?',
        a: 'D4 is a MIDI ratio descriptor that encodes 4 dimensions per token: relative pitch intervals (f₁/f₂), inter-onset interval (IOI) ratios, velocity deltas, and duration ratios. Unlike absolute MIDI properties, D4 focuses on the harmonic relationships between events.'
    },
    {
        q: 'What is a "gate" in BIAS_CONTROL?',
        a: 'A gate is a decision point in the experimental framework. Each gate has a specific objective, a pass/fail criterion, and leads to a GO / NO-GO decision. This systematic approach prevents "wandering" — every experiment either advances the program or definitively closes a line of inquiry.'
    },
    {
        q: 'What does "Representation > Architecture" mean?',
        a: 'The key lesson from Phase 2: changing the data encoding (from global histograms to temporal ones) produced a dramatic improvement in learnability, while changing the model architecture produced little effect. This led to the "Anti-Phantom-Variable Protocol" to isolate whether improvements come from the representation or the model mechanism.'
    },
    {
        q: 'What was learned from Gate 3 (DANN)?',
        a: 'Gate 3 tested Domain Adversarial Neural Networks to force modal invariance. The result was a NO-GO: forcing the model to ignore domain differences did not improve retrieval, suggesting that modal invariance was not the main bottleneck, but rather the representation of harmonic signal itself.'
    },
    {
        q: 'Is this project related to sacred geometry or numerology?',
        a: 'No. Phideus investigates a falsifiable scientific hypothesis: that frequency ratio distributions contain structured information transferable across modalities. Every claim is backed by controlled experiments with explicit metrics. The "Analytical Directive" prohibits declaring results without sufficient evidence. The project explicitly states what it does NOT claim (see Research page).'
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);
    return (
        <div className="main-content">
            <div className="page-hero">
                <h1>FAQ</h1>
                <p className="subtitle">Frequently asked questions about Phideus and its methodology</p>
            </div>
            <div className="faq-list">
                {faqs.map((faq, i) => (
                    <div key={i} className={`faq-item card ${openIndex === i ? 'open' : ''}`}>
                        <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                            <span>{faq.q}</span>
                            <span className="faq-toggle">{openIndex === i ? '−' : '+'}</span>
                        </button>
                        {openIndex === i && <p className="faq-answer">{faq.a}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
}
