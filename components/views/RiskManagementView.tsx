
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, PieChart, Calculator, Activity, 
  Save, Trash2, Plus, Target, ArrowRight, Layers,
  Shield, TrendingUp, CheckCircle2, XCircle
} from 'lucide-react';

interface RiskEntry {
  id: string;
  risk: string;
  category: string;
  likelihood: number; // 1-5
  impact: number; // 1-5
  score: number;
  strategy: 'Avoid' | 'Mitigate' | 'Transfer' | 'Accept';
  status: 'Open' | 'In Progress' | 'Closed';
  owner: string;
}

const INITIAL_RISKS: RiskEntry[] = [
  { id: 'R-101', risk: 'Cloud Misconfiguration', category: 'Technical', likelihood: 4, impact: 5, score: 20, strategy: 'Mitigate', status: 'Open', owner: 'DevOps' },
  { id: 'R-102', risk: 'Phishing Attack', category: 'People', likelihood: 5, impact: 3, score: 15, strategy: 'Mitigate', status: 'In Progress', owner: 'SOC' },
  { id: 'R-103', risk: 'Vendor Bankruptcy', category: 'Supply Chain', likelihood: 2, impact: 4, score: 8, strategy: 'Transfer', status: 'Open', owner: 'Legal' },
];

const RiskManagementView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'heatmap' | 'plan'>('calculator');
  const [risks, setRisks] = useState<RiskEntry[]>(INITIAL_RISKS);
  
  // Calculator State
  const [calcState, setCalcState] = useState({
    riskName: '',
    category: 'Technical',
    likelihood: 3,
    impact: 3,
    strategy: 'Mitigate',
    owner: ''
  });

  const calculatedScore = calcState.likelihood * calcState.impact;
  
  const getRiskLevel = (score: number) => {
    if (score >= 15) return { label: 'Critical', color: 'text-rose-500', bg: 'bg-rose-500/10', border: 'border-rose-500' };
    if (score >= 10) return { label: 'High', color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500' };
    if (score >= 5) return { label: 'Medium', color: 'text-amber-500', bg: 'bg-amber-500/10', border: 'border-amber-500' };
    return { label: 'Low', color: 'text-emerald-500', bg: 'bg-emerald-500/10', border: 'border-emerald-500' };
  };

  const handleAddRisk = () => {
    if (!calcState.riskName) return;
    const newRisk: RiskEntry = {
      id: `R-${Date.now().toString().slice(-4)}`,
      risk: calcState.riskName,
      category: calcState.category,
      likelihood: calcState.likelihood,
      impact: calcState.impact,
      score: calculatedScore,
      strategy: calcState.strategy as any,
      status: 'Open',
      owner: calcState.owner || 'Unassigned'
    };
    setRisks([...risks, newRisk]);
    setCalcState({ ...calcState, riskName: '', likelihood: 3, impact: 3, owner: '' });
    alert("Risk added to register!");
  };

  const deleteRisk = (id: string) => {
    setRisks(risks.filter(r => r.id !== id));
  };

  // Heatmap Data Generation
  const heatmapData = useMemo(() => {
    const grid = Array(5).fill(null).map(() => Array(5).fill([] as RiskEntry[]));
    risks.forEach(r => {
        // Indices are 0-4, inputs are 1-5. Invert Y (Likelihood) so 5 is top.
        const x = r.impact - 1;
        const y = 5 - r.likelihood; 
        grid[y][x] = [...(grid[y][x] || []), r];
    });
    return grid;
  }, [risks]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-slate-800/50">
        <div>
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight flex items-center gap-4">
             <div className="p-3 bg-rose-500/10 rounded-2xl border border-rose-500/20">
                <PieChart className="w-8 h-8 text-rose-500" /> 
             </div>
             Risk Lab
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl pl-1">
             Quantify threats, visualize exposure, and manage mitigation plans.
          </p>
        </div>
        
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            {[
                { id: 'calculator', label: 'Calculator', icon: Calculator },
                { id: 'heatmap', label: 'Heat Map', icon: Activity },
                { id: 'plan', label: 'Treatment Plan', icon: Layers }
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                        activeTab === tab.id 
                        ? 'bg-rose-600 text-white shadow-lg shadow-rose-900/20' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                </button>
            ))}
        </div>
      </div>

      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
            
            {/* --- CALCULATOR TAB --- */}
            {activeTab === 'calculator' && (
                <motion.div key="calc" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Input Panel */}
                    <div className="lg:col-span-7 bg-slate-900/50 border border-slate-800 rounded-3xl p-8 shadow-xl">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Target className="w-5 h-5 text-rose-400" /> Assessment Inputs
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Risk Scenario Name</label>
                                <input 
                                    type="text" 
                                    value={calcState.riskName}
                                    onChange={(e) => setCalcState({...calcState, riskName: e.target.value})}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all"
                                    placeholder="e.g., Ransomware on Database Server"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Category</label>
                                    <select 
                                        value={calcState.category}
                                        onChange={(e) => setCalcState({...calcState, category: e.target.value})}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none"
                                    >
                                        <option>Technical</option>
                                        <option>People</option>
                                        <option>Process</option>
                                        <option>Supply Chain</option>
                                        <option>Legal/Compliance</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Proposed Strategy</label>
                                    <select 
                                        value={calcState.strategy}
                                        onChange={(e) => setCalcState({...calcState, strategy: e.target.value})}
                                        className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white outline-none"
                                    >
                                        <option>Mitigate</option>
                                        <option>Accept</option>
                                        <option>Transfer</option>
                                        <option>Avoid</option>
                                    </select>
                                </div>
                            </div>

                            {/* Sliders */}
                            <div className="space-y-8 pt-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase">Likelihood</label>
                                        <span className="text-rose-400 font-bold">{calcState.likelihood} / 5</span>
                                    </div>
                                    <input 
                                        type="range" min="1" max="5" 
                                        value={calcState.likelihood}
                                        onChange={(e) => setCalcState({...calcState, likelihood: parseInt(e.target.value)})}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                                    />
                                    <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-medium uppercase">
                                        <span>Rare</span>
                                        <span>Unlikely</span>
                                        <span>Possible</span>
                                        <span>Likely</span>
                                        <span>Certain</span>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2">
                                        <label className="text-xs font-bold text-slate-400 uppercase">Impact</label>
                                        <span className="text-rose-400 font-bold">{calcState.impact} / 5</span>
                                    </div>
                                    <input 
                                        type="range" min="1" max="5" 
                                        value={calcState.impact}
                                        onChange={(e) => setCalcState({...calcState, impact: parseInt(e.target.value)})}
                                        className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
                                    />
                                    <div className="flex justify-between text-[10px] text-slate-600 mt-1 font-medium uppercase">
                                        <span>Negligible</span>
                                        <span>Minor</span>
                                        <span>Moderate</span>
                                        <span>Major</span>
                                        <span>Catastrophic</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase mb-2">Owner / Department</label>
                                <input 
                                    type="text" 
                                    value={calcState.owner}
                                    onChange={(e) => setCalcState({...calcState, owner: e.target.value})}
                                    className="w-full bg-slate-950 border border-slate-700 rounded-xl p-4 text-white focus:border-rose-500 outline-none transition-all"
                                    placeholder="e.g., IT Director"
                                />
                            </div>

                            <button 
                                onClick={handleAddRisk}
                                disabled={!calcState.riskName}
                                className="w-full py-4 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg shadow-lg shadow-rose-900/20 transition-all flex items-center justify-center gap-2"
                            >
                                <Plus className="w-5 h-5" /> Add to Risk Register
                            </button>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:col-span-5 space-y-6">
                        {/* Score Card */}
                        <div className={`bg-gradient-to-br from-slate-900 to-slate-950 border-2 ${getRiskLevel(calculatedScore).border} p-8 rounded-3xl relative overflow-hidden shadow-2xl`}>
                            <div className={`absolute top-0 right-0 w-64 h-64 ${getRiskLevel(calculatedScore).bg} rounded-bl-full blur-3xl opacity-20 pointer-events-none`} />
                            
                            <h4 className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">Calculated Risk Score</h4>
                            
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className={`text-7xl font-black ${getRiskLevel(calculatedScore).color}`}>
                                    {calculatedScore}
                                </span>
                                <span className="text-2xl font-bold text-slate-500">/ 25</span>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                                    <span className="text-slate-400 text-sm font-medium">Risk Level</span>
                                    <span className={`text-sm font-bold uppercase tracking-wide ${getRiskLevel(calculatedScore).color}`}>
                                        {getRiskLevel(calculatedScore).label}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-slate-900/50 rounded-xl border border-slate-800">
                                    <span className="text-slate-400 text-sm font-medium">Formula</span>
                                    <span className="text-sm font-mono text-slate-300">
                                        Likelihood ({calcState.likelihood}) x Impact ({calcState.impact})
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Educational Context */}
                        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6">
                            <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-sky-400" /> Analysis Guidance
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                <strong>Quantitative vs Qualitative:</strong> This tool uses a semi-quantitative matrix. 
                                Scores above 15 typically require immediate mitigation or board-level acceptance.
                            </p>
                            <ul className="space-y-2 text-xs text-slate-500">
                                <li className="flex gap-2">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> Low (1-4): Acceptable risk. Monitor periodically.
                                </li>
                                <li className="flex gap-2">
                                    <AlertTriangle className="w-3 h-3 text-amber-500" /> Medium (5-9): Management responsibility.
                                </li>
                                <li className="flex gap-2">
                                    <AlertTriangle className="w-3 h-3 text-orange-500" /> High (10-14): Mitigation required.
                                </li>
                                <li className="flex gap-2">
                                    <XCircle className="w-3 h-3 text-rose-500" /> Critical (15-25): Immediate action required.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* --- HEATMAP TAB --- */}
            {activeTab === 'heatmap' && (
                <motion.div key="map" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* The Matrix */}
                    <div className="lg:col-span-2 aspect-square relative bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
                        
                        {/* Y-Axis Label */}
                        <div className="absolute -left-6 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Likelihood</div>
                        
                        {/* Grid */}
                        <div className="w-full h-full grid grid-rows-5 grid-cols-5 gap-1">
                            {heatmapData.map((row, rowIndex) => (
                                row.map((cellRisks, colIndex) => {
                                    const likelihood = 5 - rowIndex; // 5 at top, 1 at bottom
                                    const impact = colIndex + 1;     // 1 at left, 5 at right
                                    const score = likelihood * impact;
                                    
                                    // Determine cell color
                                    let bgClass = 'bg-emerald-900/20 border-emerald-900/50';
                                    if (score >= 15) bgClass = 'bg-rose-900/20 border-rose-900/50 hover:bg-rose-900/40';
                                    else if (score >= 10) bgClass = 'bg-orange-900/20 border-orange-900/50 hover:bg-orange-900/40';
                                    else if (score >= 5) bgClass = 'bg-amber-900/20 border-amber-900/50 hover:bg-amber-900/40';
                                    
                                    return (
                                        <div 
                                            key={`${rowIndex}-${colIndex}`}
                                            className={`border rounded-lg relative group transition-colors duration-300 ${bgClass}`}
                                        >
                                            {/* Coordinates Helper (Hidden but useful) */}
                                            <span className="absolute top-1 right-1 text-[9px] text-slate-700 font-mono opacity-0 group-hover:opacity-100 transition-opacity">{likelihood}x{impact}</span>
                                            
                                            {/* Dots for Risks */}
                                            <div className="absolute inset-0 flex items-center justify-center flex-wrap content-center gap-1 p-2">
                                                {cellRisks.map((r, i) => (
                                                    <div key={i} className="w-3 h-3 rounded-full bg-white shadow-[0_0_5px_white] relative group/dot cursor-help">
                                                        {/* Tooltip */}
                                                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-black text-white text-[10px] p-2 rounded pointer-events-none opacity-0 group-hover/dot:opacity-100 transition-opacity z-20 border border-slate-700">
                                                            <p className="font-bold truncate">{r.risk}</p>
                                                            <p className="text-slate-400">{r.strategy}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    );
                                })
                            ))}
                        </div>

                        {/* X-Axis Label */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-bold text-slate-500 uppercase tracking-[0.3em]">Impact</div>
                    </div>

                    {/* Legend & List */}
                    <div className="space-y-6">
                        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6">
                            <h4 className="text-white font-bold mb-4">Matrix Legend</h4>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-rose-900/40 border border-rose-900 rounded" />
                                    <span className="text-xs text-slate-400">Critical (15-25)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-orange-900/40 border border-orange-900 rounded" />
                                    <span className="text-xs text-slate-400">High (10-14)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-amber-900/40 border border-amber-900 rounded" />
                                    <span className="text-xs text-slate-400">Medium (5-9)</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 bg-emerald-900/40 border border-emerald-900 rounded" />
                                    <span className="text-xs text-slate-400">Low (1-4)</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 flex-1 overflow-y-auto max-h-[300px]">
                            <h4 className="text-white font-bold mb-4">Top Risks</h4>
                            <div className="space-y-3">
                                {risks.sort((a,b) => b.score - a.score).slice(0, 5).map(r => (
                                    <div key={r.id} className="flex justify-between items-center p-3 bg-slate-950 rounded-xl border border-slate-800">
                                        <div>
                                            <p className="text-sm font-bold text-white truncate max-w-[150px]">{r.risk}</p>
                                            <p className="text-xs text-slate-500">{r.category}</p>
                                        </div>
                                        <div className={`text-sm font-black ${getRiskLevel(r.score).color}`}>{r.score}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* --- PLAN TAB --- */}
            {activeTab === 'plan' && (
                <motion.div key="plan" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 uppercase text-xs font-bold tracking-wider">
                                <tr>
                                    <th className="p-6">Risk Scenario</th>
                                    <th className="p-6">Level</th>
                                    <th className="p-6">Treatment Strategy</th>
                                    <th className="p-6">Owner</th>
                                    <th className="p-6">Status</th>
                                    <th className="p-6 text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {risks.map(r => (
                                    <tr key={r.id} className="hover:bg-slate-800/30 transition-colors group">
                                        <td className="p-6">
                                            <div className="font-bold text-white">{r.risk}</div>
                                            <div className="text-xs text-slate-500">{r.category}</div>
                                        </td>
                                        <td className="p-6">
                                            <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${getRiskLevel(r.score).color} ${getRiskLevel(r.score).bg}`}>
                                                {getRiskLevel(r.score).label} ({r.score})
                                            </span>
                                        </td>
                                        <td className="p-6">
                                            <div className="flex items-center gap-2">
                                                <span className={`w-2 h-2 rounded-full ${
                                                    r.strategy === 'Avoid' ? 'bg-rose-500' :
                                                    r.strategy === 'Transfer' ? 'bg-blue-500' :
                                                    r.strategy === 'Mitigate' ? 'bg-amber-500' : 'bg-emerald-500'
                                                }`} />
                                                <span className="text-sm text-slate-300">{r.strategy}</span>
                                            </div>
                                        </td>
                                        <td className="p-6 text-sm text-slate-400">{r.owner}</td>
                                        <td className="p-6">
                                            <span className={`text-xs font-medium px-2 py-1 rounded border ${
                                                r.status === 'Open' ? 'border-rose-500/30 text-rose-400' :
                                                r.status === 'In Progress' ? 'border-blue-500/30 text-blue-400' :
                                                'border-emerald-500/30 text-emerald-400'
                                            }`}>
                                                {r.status}
                                            </span>
                                        </td>
                                        <td className="p-6 text-right">
                                            <button onClick={() => deleteRisk(r.id)} className="p-2 hover:bg-rose-900/30 rounded-lg text-slate-500 hover:text-rose-400 transition-colors">
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {risks.length === 0 && (
                            <div className="p-12 text-center text-slate-500">
                                No risks recorded. Use the calculator to add entries.
                            </div>
                        )}
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RiskManagementView;
