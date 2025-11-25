
import React from 'react';
import { motion } from 'framer-motion';
import { Framework } from '../types';

interface Props {
  framework: Framework;
}

const themeColors: { [key: string]: string } = {
  sky: '#0ea5e9',
  blue: '#3b82f6',
  indigo: '#6366f1',
  purple: '#a855f7',
  fuchsia: '#d946ef',
  rose: '#f43f5e',
  red: '#ef4444',
  orange: '#f97316',
  amber: '#f59e0b',
  yellow: '#eab308',
  emerald: '#10b981',
  teal: '#14b8a6',
  cyan: '#06b6d4',
  slate: '#64748b',
};

// --- 1. THE CYCLE DIAGRAM (NIST CSF, ISO 27001, AI RMF) ---
const CycleDiagram = ({ framework }: { framework: Framework }) => {
    // Determine cycle items based on diagram type
    let items = ['GOVERN', 'IDENTIFY', 'PROTECT', 'DETECT', 'RESPOND', 'RECOVER']; // NIST CSF Default
    
    if (framework.diagramType === 'generic-pdca') {
        items = ['PLAN', 'DO', 'CHECK', 'ACT'];
    } else if (framework.diagramType === 'ai-rmf-cycle') {
        items = ['GOVERN', 'MAP', 'MEASURE', 'MANAGE'];
    }
    
    const color = themeColors[framework.colorTheme] || '#3b82f6';
    const radius = 120;
    const center = 150;

    return (
        <div className="relative w-full aspect-square max-w-sm mx-auto flex items-center justify-center">
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-dashed rounded-full opacity-20"
                style={{ borderColor: color }}
             />
             
             <svg viewBox="0 0 300 300" className="w-full h-full">
                {items.map((item, i) => {
                    const angle = (i * 2 * Math.PI) / items.length - Math.PI / 2;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    
                    return (
                        <motion.g 
                            key={item}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.2, type: "spring" }}
                        >
                            <line 
                                x1={center} y1={center} x2={x} y2={y} 
                                stroke={color} strokeWidth="1" strokeOpacity="0.3" 
                            />
                            <circle cx={x} cy={y} r="30" fill="#0f172a" stroke={color} strokeWidth="2" />
                            <text 
                                x={x} y={y} dy="0.3em" 
                                textAnchor="middle" 
                                fill="white" 
                                fontSize="9" 
                                fontWeight="bold"
                                className="uppercase font-mono"
                            >
                                {item.substring(0, 5)}
                            </text>
                        </motion.g>
                    );
                })}
                <motion.circle 
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}
                    cx={center} cy={center} r="45" fill={color + '30'} stroke={color} 
                />
                <text x={center} y={center} dy="0.3em" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
                    {framework.diagramType === 'generic-pdca' ? 'ISMS' : 
                     framework.diagramType === 'ai-rmf-cycle' ? 'AI RMF' : 'CSF'}
                </text>
             </svg>
        </div>
    );
};

// --- 2. THE PYRAMID DIAGRAM (CMMC, Maturity Models) ---
const PyramidDiagram = ({ framework }: { framework: Framework }) => {
    const levels = ['Advanced / Expert', 'Managed / Proactive', 'Foundational / Basic'];
    const color = themeColors[framework.colorTheme] || '#10b981';

    return (
        <div className="flex flex-col items-center justify-center py-8 gap-1">
            {levels.map((level, i) => (
                <motion.div
                    key={level}
                    initial={{ opacity: 0, y: 50, width: '10%' }}
                    animate={{ opacity: 1, y: 0, width: `${(i + 1) * 33}%` }}
                    transition={{ delay: (2-i) * 0.3, duration: 0.6, type: "spring" }}
                    className="h-16 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden group"
                    style={{ 
                        background: `linear-gradient(to right, ${color}20, ${color}60)`,
                        border: `1px solid ${color}` 
                    }}
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-white font-bold text-xs md:text-sm uppercase tracking-wider text-center px-2">
                        Level {3-i}: {level}
                    </span>
                </motion.div>
            ))}
             <div className="text-slate-500 text-xs font-mono mt-2 uppercase tracking-widest">Maturity Progression</div>
        </div>
    );
};

// --- 3. THE PILLARS DIAGRAM (GDPR, Architecture) ---
const PillarsDiagram = ({ framework }: { framework: Framework }) => {
    const pillars = framework.id === 'gdpr' 
        ? ['Lawfulness', 'Rights', 'Accountability'] 
        : ['Security', 'Reliability', 'Efficiency'];
    
    const color = themeColors[framework.colorTheme] || '#6366f1';

    return (
        <div className="flex flex-col h-64 w-full max-w-md mx-auto relative px-4">
             {/* Roof */}
             <motion.div 
                initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
                className="h-12 w-full mb-2 rounded-t-full flex items-center justify-center border-b-4"
                style={{ background: `linear-gradient(to bottom, ${color}40, ${color}10)`, borderColor: color }}
             >
                 <span className="text-white font-bold tracking-widest uppercase text-sm">Governance Strategy</span>
             </motion.div>

             {/* Pillars Container */}
             <div className="flex-1 flex justify-around gap-2">
                {pillars.map((p, i) => (
                    <motion.div
                        key={p}
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="flex-1 rounded-sm flex flex-col items-center justify-center p-2 text-center border-x"
                        style={{ 
                            background: `linear-gradient(to bottom, ${color}10, ${color}30)`,
                            borderColor: `${color}40`
                        }}
                    >
                         <div className="h-full w-[1px] bg-white/10 mb-2" />
                         <span className="text-white font-bold text-xs vertical-text rotate-180 md:rotate-0 whitespace-nowrap">
                             {p}
                         </span>
                         <div className="h-full w-[1px] bg-white/10 mt-2" />
                    </motion.div>
                ))}
             </div>

             {/* Foundation */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="h-8 w-full mt-2 rounded-sm flex items-center justify-center"
                style={{ background: color }}
             >
                 <span className="text-white/90 font-mono text-[10px] uppercase">Compliance Baseline</span>
             </motion.div>
        </div>
    );
};

// --- 4. THE PROCESS FLOW (RMF, Generic) ---
const ProcessFlowDiagram = ({ framework }: { framework: Framework }) => {
    const steps = ['Prepare', 'Assess', 'Implement', 'Monitor'];
    const color = themeColors[framework.colorTheme] || '#ef4444';

    return (
        <div className="flex flex-wrap items-center justify-center gap-2 py-8">
            {steps.map((step, i) => (
                <React.Fragment key={step}>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.15 }}
                        className="relative w-24 h-20 rounded-xl flex items-center justify-center border shadow-lg group hover:-translate-y-1 transition-transform cursor-default"
                        style={{ borderColor: color, backgroundColor: '#0f172a' }}
                    >
                        <div className="absolute top-1 left-2 text-[10px] font-mono text-slate-500">{i+1}</div>
                        <span className="text-[10px] font-bold text-white text-center px-1">{step}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl" />
                    </motion.div>
                    
                    {i < steps.length - 1 && (
                         <motion.div 
                            initial={{ width: 0 }} animate={{ width: 16 }} transition={{ delay: i * 0.15 + 0.1 }}
                            className="h-[2px] bg-slate-600 hidden md:block"
                         />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};


const FrameworkDiagram: React.FC<Props> = ({ framework }) => {
  const renderDiagram = () => {
    switch (framework.diagramType) {
      case 'nist-csf-cycle':
      case 'generic-pdca':
      case 'ai-rmf-cycle':
        return <CycleDiagram framework={framework} />;
      case 'pyramid-maturity':
        return <PyramidDiagram framework={framework} />;
      case 'pillar-structure':
        return <PillarsDiagram framework={framework} />;
      case 'process-flow':
        return <ProcessFlowDiagram framework={framework} />;
      default:
        // Fallback to generic flow if diagramType is missing but component called
        return <ProcessFlowDiagram framework={framework} />;
    }
  };

  if (!framework.diagramType || framework.diagramType === 'none') return null;

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center bg-slate-900/50 rounded-2xl border border-slate-800 backdrop-blur-sm overflow-hidden p-6">
        {renderDiagram()}
    </div>
  );
};

export default FrameworkDiagram;
