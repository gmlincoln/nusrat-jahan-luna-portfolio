import React, { useState } from 'react';

export default function MolecularIllustration() {
  const [activeNode, setActiveNode] = useState(null);

  // Nodes representing a simulated Deep Eutectic Solvent (DES) coordination cluster
  const nodes = [
    { id: 'hb-acceptor-1', x: 260, y: 150, r: 18, label: 'O (HBA)', type: 'acceptor', color: '#EF4444', ring: '#FCA5A5', desc: 'Hydrogen Bond Acceptor (Carbonyl Oxygen)' },
    { id: 'hbd-1', x: 170, y: 220, r: 14, label: 'N-H', type: 'donor', color: '#6366F1', ring: '#A5B4FC', desc: 'Hydrogen Bond Donor (Amide Nitrogen)' },
    { id: 'cation-center', x: 340, y: 260, r: 24, label: 'N⁺', type: 'cation', color: '#2563EB', ring: '#93C5FD', desc: 'Quaternary Ammonium Cation Center' },
    { id: 'hb-donor-2', x: 230, y: 340, r: 16, label: 'O-H', type: 'donor', color: '#0D9488', ring: '#5EEAD4', desc: 'Hydroxyl Donor Network' },
    { id: 'anion-center', x: 130, y: 320, r: 20, label: 'Cl⁻', type: 'anion', color: '#10B981', ring: '#6EE7B7', desc: 'Halide Anion Complexation Site' },
    { id: 'carbon-backbone-1', x: 380, y: 160, r: 12, label: 'Cα', type: 'carbon', color: '#475569', ring: '#94A3B8', desc: 'Aliphatic Backbone Carbon' },
    { id: 'carbon-backbone-2', x: 320, y: 390, r: 13, label: 'Cβ', type: 'carbon', color: '#475569', ring: '#94A3B8', desc: 'Coordination Arm Carbon' },
    { id: 'solvation-shell', x: 110, y: 170, r: 11, label: 'H₂O', type: 'solvent', color: '#0284C7', ring: '#7DD3FC', desc: 'Boundary Solvation Shell' }
  ];

  // Hydrogen bonds & covalent bonds
  const bonds = [
    { from: 'carbon-backbone-1', to: 'hb-acceptor-1', type: 'covalent', length: '1.23 Å' },
    { from: 'carbon-backbone-1', to: 'cation-center', type: 'covalent', length: '1.48 Å' },
    { from: 'cation-center', to: 'carbon-backbone-2', type: 'covalent', length: '1.51 Å' },
    { from: 'carbon-backbone-2', to: 'hb-donor-2', type: 'covalent', length: '1.43 Å' },
    { from: 'hbd-1', to: 'hb-acceptor-1', type: 'h-bond', length: '1.88 Å', energy: '-16.4 kJ/mol' },
    { from: 'hb-donor-2', to: 'anion-center', type: 'h-bond', length: '2.14 Å', energy: '-21.8 kJ/mol' },
    { from: 'hbd-1', to: 'anion-center', type: 'h-bond', length: '2.28 Å', energy: '-18.2 kJ/mol' },
    { from: 'solvation-shell', to: 'hbd-1', type: 'h-bond', length: '1.92 Å', energy: '-14.1 kJ/mol' },
    { from: 'cation-center', to: 'hb-donor-2', type: 'electrostatic', length: '3.12 Å' }
  ];

  const getNode = (id) => nodes.find(n => n.id === id);

  return (
    <div className="relative w-full max-w-lg mx-auto bg-gradient-to-b from-white/95 to-paper-100/90 rounded-2xl border academic-border p-5 shadow-academic overflow-hidden">
      {/* Editorial top technical header */}
      <div className="flex items-center justify-between pb-3 border-b academic-border mb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="font-mono text-navy-800 font-semibold tracking-wider uppercase text-[11px]">
            DES Coordination Simulation
          </span>
        </div>
        <span className="font-mono text-slateSubtle-500 text-[10px]">
          GAUSSIAN / MD ENSEMBLE
        </span>
      </div>

      {/* Main SVG graphic */}
      <div className="relative aspect-[4/3] w-full flex items-center justify-center">
        <svg 
          viewBox="0 0 480 480" 
          className="w-full h-full select-none"
          aria-label="Abstract Molecular Simulation Diagram of Deep Eutectic Solvent Network"
        >
          <defs>
            {/* Gradients */}
            <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
            </radialGradient>
            
            <pattern id="dotPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#E2E8F0" />
            </pattern>
          </defs>

          {/* Background grid dots */}
          <rect width="480" height="480" fill="url(#dotPattern)" opacity="0.8" />

          {/* Delocalized electron / electrostatic potential contour lines */}
          <circle cx="250" cy="250" r="190" fill="none" stroke="#E2E8F0" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
          <circle cx="250" cy="250" r="140" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
          <path 
            d="M 120,160 Q 240,110 370,150 T 360,370 Q 220,420 120,330 Z" 
            fill="none" 
            stroke="#93C5FD" 
            strokeWidth="1.5" 
            strokeDasharray="6 8"
            opacity="0.4"
          />

          {/* Bonds */}
          {bonds.map((bond, idx) => {
            const start = getNode(bond.from);
            const end = getNode(bond.to);
            if (!start || !end) return null;

            if (bond.type === 'covalent') {
              return (
                <g key={`bond-${idx}`}>
                  <line 
                    x1={start.x} y1={start.y} 
                    x2={end.x} y2={end.y} 
                    stroke="#1E293B" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  {/* Distance label */}
                  <text 
                    x={(start.x + end.x) / 2 + 6} 
                    y={(start.y + end.y) / 2 - 4} 
                    className="font-mono text-[9px] fill-slate-400 select-none"
                  >
                    {bond.length}
                  </text>
                </g>
              );
            }

            if (bond.type === 'h-bond') {
              return (
                <g key={`bond-${idx}`}>
                  <line 
                    x1={start.x} y1={start.y} 
                    x2={end.x} y2={end.y} 
                    stroke="#6366F1" 
                    strokeWidth="2" 
                    strokeDasharray="5 4" 
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  <text 
                    x={(start.x + end.x) / 2} 
                    y={(start.y + end.y) / 2 - 6} 
                    textAnchor="middle"
                    className="font-mono text-[9px] font-medium fill-indigo-600 select-none bg-white"
                  >
                    {bond.length}
                  </text>
                </g>
              );
            }

            return (
              <line 
                key={`bond-${idx}`}
                x1={start.x} y1={start.y} 
                x2={end.x} y2={end.y} 
                stroke="#94A3B8" 
                strokeWidth="1.2" 
                strokeDasharray="2 3" 
              />
            );
          })}

          {/* Nodes (Atoms) */}
          {nodes.map((node) => {
            const isHovered = activeNode === node.id;
            return (
              <g 
                key={node.id} 
                className="cursor-pointer transition-transform duration-200"
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
              >
                {/* Outer halo */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={node.r + (isHovered ? 10 : 4)} 
                  fill={node.ring} 
                  opacity={isHovered ? 0.6 : 0.25}
                  className="transition-all duration-300"
                />
                
                {/* Core atom */}
                <circle 
                  cx={node.x} 
                  cy={node.y} 
                  r={node.r} 
                  fill={node.color} 
                  stroke="#FFFFFF" 
                  strokeWidth="2.5"
                  className="transition-all duration-200"
                />

                {/* Inner specular highlight */}
                <circle 
                  cx={node.x - node.r * 0.3} 
                  cy={node.y - node.r * 0.3} 
                  r={node.r * 0.28} 
                  fill="#FFFFFF" 
                  opacity="0.65" 
                />

                {/* Label */}
                <text 
                  x={node.x} 
                  y={node.y + 4} 
                  textAnchor="middle" 
                  fill="#FFFFFF" 
                  className="font-mono text-[10px] font-bold pointer-events-none select-none"
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Dynamic technical legend / inspected node */}
      <div className="mt-2 pt-3 border-t academic-border flex items-center justify-between min-h-[46px] text-xs">
        {activeNode ? (
          (() => {
            const node = getNode(activeNode);
            return (
              <div className="w-full bg-slateSubtle-100 rounded-lg p-2 flex items-center justify-between">
                <div>
                  <span className="font-semibold text-navy-900">{node.label}</span>
                  <span className="mx-2 text-slate-400">·</span>
                  <span className="text-slateSubtle-600">{node.desc}</span>
                </div>
                <span className="font-mono text-[10px] text-academic-accent bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Site: {node.id}
                </span>
              </div>
            );
          })()
        ) : (
          <div className="w-full flex items-center justify-between text-slateSubtle-500 font-mono text-[11px]">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-0.5 bg-navy-900 inline-block"></span> Covalent
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2.5 h-0.5 border-b-2 border-indigo-500 border-dashed inline-block"></span> H-Bond
              </span>
            </div>
            <span className="italic text-[10px]">Hover any atom to inspect coordinates</span>
          </div>
        )}
      </div>
    </div>
  );
}
