'use client';

const LAYERS = [
  { id: 'input', label: 'Plant signals', sub: 'MES · LIMS · ERP' },
  { id: 'l1', label: 'Layer 1', sub: 'Regulatory KB' },
  { id: 'l2', label: 'Layer 2', sub: 'GMP Validator' },
  { id: 'l3', label: 'Layer 3', sub: 'Pharma LLM' },
  { id: 'l4', label: 'Layer 4', sub: 'Audit Agent' },
  { id: 'output', label: 'Output', sub: 'GMP documents' },
];

const STATUS_STEPS = [
  'Ingesting batch records…',
  'Matching FDA 21 CFR Part 211…',
  'Running GMP validation…',
  'Generating SOP draft…',
  'Audit-ready document ready',
];

export default function AIPipelineMotion({ compact = false }) {
  return (
    <div
      className={`ai-pipeline-root relative w-full ${compact ? 'max-w-md mx-auto' : 'max-w-4xl mx-auto'}`}
      aria-hidden
    >
      <div className="ai-pipeline-glow absolute inset-0 rounded-3xl pointer-events-none" />

      {/* Flow diagram */}
      <div className={`relative ${compact ? 'p-4' : 'p-6 sm:p-8'}`}>
        <svg
          viewBox="0 0 720 200"
          className="w-full h-auto ai-pipeline-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#2dd4bf" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.6" />
            </linearGradient>
            <filter id="nodeGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Connection paths */}
          <path
            d="M 60 100 H 140 M 200 100 H 280 M 340 100 H 420 M 480 100 H 560 M 620 100 H 660"
            stroke="url(#pipeGrad)"
            strokeWidth="2"
            strokeLinecap="round"
            className="ai-pipe-line"
          />

          {/* Animated particles on path */}
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              r="4"
              fill="#22d3ee"
              className="ai-particle"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              <animateMotion
                dur="3s"
                repeatCount="indefinite"
                path="M 60 100 H 660"
                begin={`${i * 0.75}s`}
              />
            </circle>
          ))}

          {/* Nodes */}
          {[
            { cx: 60, active: 0 },
            { cx: 170, active: 1 },
            { cx: 280, active: 2 },
            { cx: 390, active: 3 },
            { cx: 500, active: 4 },
            { cx: 610, active: 5 },
            { cx: 660, active: 6 },
          ].map((node, i) => (
            <g key={i} filter="url(#nodeGlow)">
              <rect
                x={node.cx - 28}
                y="72"
                width="56"
                height="56"
                rx="12"
                className={`ai-node-box ai-node-${node.active}`}
                fill="rgba(255,255,255,0.04)"
                stroke="rgba(255,255,255,0.12)"
                strokeWidth="1"
              />
              <circle
                cx={node.cx}
                cy="100"
                r="6"
                className={`ai-node-core ai-node-${node.active}`}
                fill="#22d3ee"
              />
            </g>
          ))}
        </svg>

        {/* Layer labels */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-2">
          {LAYERS.map((layer, i) => (
            <div
              key={layer.id}
              className={`text-center ai-layer-label ai-layer-${i}`}
            >
              <p className="text-[10px] sm:text-xs font-medium text-zinc-300 leading-tight">
                {layer.label}
              </p>
              <p className="text-[9px] text-zinc-600 mt-0.5 hidden sm:block">
                {layer.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Live status + output preview */}
      {!compact && (
        <div className="mt-4 grid sm:grid-cols-2 gap-3 px-2 pb-2">
          <div className="card-dark p-4 flex items-start gap-3">
            <span className="ai-status-dot shrink-0 mt-1" />
            <div className="min-w-0">
              <p className="text-xs label-caps mb-1">Model runtime</p>
              <div className="text-sm text-zinc-300 ai-status-text font-mono h-5 relative">
                {STATUS_STEPS.map((step, i) => (
                  <span key={step} className={`ai-status-line ai-status-${i}`}>
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="card-dark p-4 overflow-hidden">
            <p className="text-xs label-caps mb-2">Generated output</p>
            <div className="ai-doc-preview font-mono text-[11px] text-zinc-500 space-y-1">
              <p className="text-cyan-400/90 ai-doc-line ai-doc-0">
                ▌ SOP — Reactor Installation
              </p>
              <p className="ai-doc-line ai-doc-1">1. Purpose: Ensure GMP compliance…</p>
              <p className="ai-doc-line ai-doc-2">2. Scope: Manufacturing facility…</p>
              <p className="ai-doc-line ai-doc-3 text-teal-400/70">
                ✓ Validated against 21 CFR Part 211
              </p>
            </div>
          </div>
        </div>
      )}

      {compact && (
        <p className="text-center text-[10px] text-zinc-500 mt-2 font-mono flex items-center justify-center gap-1.5">
          <span className="ai-status-dot w-1.5 h-1.5 shrink-0" />
          Processing compliance layers…
        </p>
      )}
    </div>
  );
}
