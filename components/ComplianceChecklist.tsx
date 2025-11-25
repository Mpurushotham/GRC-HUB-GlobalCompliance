
import React, { useState } from 'react';
import { Framework, Control } from '../types';
import { CheckCircle2, Circle, AlertCircle, BarChart, Info, AlertTriangle, ShieldAlert, Layers, Plus, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  framework: Framework;
}

const initialNewControlState = {
  id: '',
  name: '',
  description: '',
  priority: 'Low' as 'Critical' | 'High' | 'Medium' | 'Low',
  group: '',
  isImplemented: false,
  isCustom: true,
};

const ComplianceChecklist: React.FC<Props> = ({ framework }) => {
  const [controls, setControls] = useState<Control[]>(framework.controls);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newControl, setNewControl] = useState<Omit<Control, 'groupColor'>>(initialNewControlState);

  const toggleControl = (id: string) => {
    setControls(prev => prev.map(c => 
      c.id === id ? { ...c, isImplemented: !c.isImplemented } : c
    ));
  };

  const handleAddControl = () => {
    if (!newControl.id || !newControl.name) return;
    setControls(prev => [...prev, newControl]);
    setIsModalOpen(false);
    setNewControl(initialNewControlState);
  };

  const implementedCount = controls.filter(c => c.isImplemented).length;
  const progress = Math.round((implementedCount / controls.length) * 100);

  const getPriorityBadge = (p?: string) => {
    switch(p) {
      case 'Critical':
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-red-500/10 text-red-500 border border-red-500/20 font-bold uppercase tracking-wide shadow-[0_0_10px_rgba(239,68,68,0.2)]"><ShieldAlert className="w-3 h-3"/> Critical</span>;
      case 'High':
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20 font-bold uppercase tracking-wide"><ShieldAlert className="w-3 h-3"/> High Priority</span>;
      case 'Medium':
        return <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold uppercase tracking-wide"><AlertTriangle className="w-3 h-3"/> Medium Priority</span>;
      default:
        return <span className={`flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-${framework.colorTheme}-500/10 text-${framework.colorTheme}-400 border border-${framework.colorTheme}-500/20 font-bold uppercase tracking-wide`}>Low Priority</span>;
    }
  };

  const groupedControls = controls.reduce((acc, control) => {
    const group = control.group || 'General Controls';
    if (!acc[group]) acc[group] = [];
    acc[group].push(control);
    return acc;
  }, {} as Record<string, Control[]>);

  const sortedGroups = Object.keys(groupedControls).sort((a, b) => {
    const findOriginalIndex = (groupName: string) => {
        const originalControl = framework.controls.find(c => c.group === groupName);
        return originalControl ? framework.controls.indexOf(originalControl) : Infinity;
    };
    const indexA = findOriginalIndex(a);
    const indexB = findOriginalIndex(b);

    if (indexA !== Infinity && indexB !== Infinity) {
        return indexA - indexB;
    }
    return a.localeCompare(b);
  });

  return (
    <div className="space-y-10">
      {/* Progress Bar & Add Button */}
      <div className={`bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden group print:border-black print:bg-white print:shadow-none`}>
        {/* Glow Effect */}
        <div className={`absolute top-0 right-0 w-64 h-64 bg-${framework.colorTheme}-600/10 blur-[100px] rounded-full group-hover:bg-${framework.colorTheme}-600/20 transition-colors duration-700 print:hidden`} />
        
        <div className="flex justify-between items-end mb-6 relative z-10">
          <div>
            <h3 className="text-2xl font-bold text-white flex items-center gap-3 print:text-black">
              <div className={`p-2 rounded-xl bg-${framework.colorTheme}-500/10 border border-${framework.colorTheme}-500/20 print:hidden`}>
                 <BarChart className={`w-6 h-6 text-${framework.colorTheme}-400`} />
              </div>
              Implementation Status
            </h3>
            <p className="text-slate-400 text-sm mt-2 pl-1 print:text-black font-medium">Tracking compliance across {controls.length} controls</p>
          </div>
          <div className="text-right flex-shrink-0">
             <span className={`text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 print:text-black`}>{progress}%</span>
          </div>
        </div>
        
        <div className="w-full bg-slate-900/80 rounded-full h-6 border border-slate-700/50 overflow-hidden relative shadow-inner print:border-gray-300">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className={`h-full rounded-full bg-gradient-to-r from-${framework.colorTheme}-600 via-${framework.colorTheme}-500 to-${framework.colorTheme}-400 shadow-[0_0_20px_rgba(99,102,241,0.5)] relative overflow-hidden`}
          >
             <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:20px_20px] animate-[move_1s_linear_infinite] opacity-30" />
          </motion.div>
        </div>
        
        <div className="flex justify-between items-center text-sm font-bold text-slate-500 mt-4 uppercase tracking-wider print:text-black relative z-10">
          <span>{implementedCount} / {controls.length} Controls Verified</span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className={`flex items-center gap-2 px-4 py-2 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-${framework.colorTheme}-500/50 text-slate-300 hover:text-white rounded-lg transition-all text-xs font-bold print:hidden shadow-lg hover:shadow-${framework.colorTheme}-900/20`}
          >
            <Plus className="w-3 h-3" />
            Add Custom Control
          </button>
        </div>
      </div>

      {/* Controls List Grouped */}
      <div className="space-y-12">
        {sortedGroups.map((group) => {
          const groupControls = groupedControls[group];
          const firstControl = groupControls[0];
          const hasGrouping = firstControl.group !== undefined;

          return (
            <div key={group} className="space-y-4">
              {hasGrouping && (
                 <div className="flex items-center gap-3 pb-3 border-b border-slate-800 print:border-slate-300 sticky top-0 bg-slate-950/95 backdrop-blur z-20 py-4 print:static">
                    <Layers className={`w-5 h-5 text-${framework.colorTheme}-500`} />
                    <h4 className="text-lg font-black text-white uppercase tracking-widest print:text-black">{group}</h4>
                    <span className="ml-auto text-xs font-mono text-slate-500 bg-slate-900 px-2 py-1 rounded">{groupControls.length} Controls</span>
                 </div>
              )}

              <div className="grid grid-cols-1 gap-4">
              {groupControls.map((control, idx) => (
                <motion.div 
                  key={control.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.03 }}
                  onClick={() => toggleControl(control.id)}
                  className={`group p-6 rounded-2xl border transition-all duration-200 cursor-pointer relative overflow-hidden print:border-black print:bg-white print:break-inside-avoid ${
                    control.isImplemented 
                      ? `bg-${framework.colorTheme}-950/20 border-${framework.colorTheme}-500/40 shadow-[0_0_30px_-10px_rgba(16,185,129,0.15)]` 
                      : control.isCustom
                        ? `bg-slate-900/20 border-dashed border-slate-700 hover:border-${framework.colorTheme}-500`
                        : `bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-800/60`
                  }`}
                >
                  {/* Active Indicator Line */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-colors print:hidden ${
                    control.isImplemented ? `bg-${framework.colorTheme}-500 shadow-[0_0_10px_currentColor]` : 'bg-transparent group-hover:bg-slate-700'
                  }`} />

                  <div className="flex items-start gap-5 pl-2">
                    <div className={`mt-1 transition-all duration-300 print:hidden transform group-active:scale-90 ${
                      control.isImplemented ? `text-${framework.colorTheme}-400 scale-110` : 'text-slate-600 group-hover:text-slate-400'
                    }`}>
                      {control.isImplemented 
                        ? <CheckCircle2 className={`w-7 h-7 fill-${framework.colorTheme}-500/10`} /> 
                        : <Circle className="w-7 h-7" />
                      }
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-slate-950 border border-slate-800 text-slate-400 print:border-black print:bg-white print:text-black shadow-sm">
                          {control.id}
                        </span>
                        
                        {control.priority === 'Critical' && !control.isImplemented && (
                           <span className="flex items-center gap-1 text-[10px] font-black px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30 uppercase tracking-wide animate-pulse print:hidden">
                             <Zap className="w-3 h-3 fill-current" /> Critical Action
                           </span>
                        )}

                        {control.isCustom && (
                           <span className={`text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-bold uppercase tracking-wide print:hidden`}>
                            Custom
                          </span>
                        )}
                        
                        <div className="print:hidden opacity-80 group-hover:opacity-100 transition-opacity">
                            {getPriorityBadge(control.priority)}
                        </div>
                      </div>
                      
                      <h4 className={`text-lg font-bold transition-colors print:text-black ${
                        control.isImplemented ? `text-${framework.colorTheme}-100` : 'text-slate-200'
                      }`}>
                        {control.name}
                      </h4>
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed print:text-black max-w-4xl">
                        {control.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="hidden print:block text-xs mt-3 border-t border-slate-200 pt-3 space-y-1 font-sans">
                      <p><strong className="font-semibold">Status:</strong> {control.isImplemented ? 'Implemented' : 'Not Implemented'}</p>
                      {control.priority && <p><strong className="font-semibold">Priority:</strong> {control.priority}</p>}
                      {control.isCustom && <p><strong className="font-semibold">Type:</strong> Custom</p>}
                  </div>

                </motion.div>
              ))}
              </div>
            </div>
          );
        })}
      </div>
      
      <div className={`mt-8 p-6 bg-${framework.colorTheme}-900/10 border border-${framework.colorTheme}-500/20 rounded-2xl flex items-start gap-4 print:hidden`}>
        <div className={`p-2 bg-${framework.colorTheme}-500/10 rounded-lg`}>
            <Info className={`w-5 h-5 text-${framework.colorTheme}-400`} />
        </div>
        <div>
            <h5 className={`font-bold text-${framework.colorTheme}-300 text-sm mb-1`}>Auditor Note</h5>
            <p className={`text-sm text-${framework.colorTheme}-200/70 leading-relaxed`}>
            This checklist acts as a preliminary gap analysis tool. Custom controls are stored locally and will reset on refresh. For official certification, consult a qualified auditor.
            </p>
        </div>
      </div>

      {/* Add Control Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-6 border-b border-slate-800 bg-slate-950">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                    <div className="p-1.5 bg-indigo-600 rounded-lg"><Plus className="w-4 h-4 text-white"/></div>
                    Add Custom Control
                </h3>
                <button onClick={() => setIsModalOpen(false)} className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-8 space-y-6 bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Control ID <span className="text-rose-500">*</span></label>
                    <input type="text" value={newControl.id} onChange={e => setNewControl({...newControl, id: e.target.value})} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-${framework.colorTheme}-500 focus:border-transparent outline-none transition-all`} placeholder="e.g., CUST-01" />
                  </div>
                   <div>
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Group (Optional)</label>
                    <input type="text" value={newControl.group} onChange={e => setNewControl({...newControl, group: e.target.value})} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-${framework.colorTheme}-500 focus:border-transparent outline-none transition-all`} placeholder="e.g., GOVERN" />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Control Name <span className="text-rose-500">*</span></label>
                  <input type="text" value={newControl.name} onChange={e => setNewControl({...newControl, name: e.target.value})} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-${framework.colorTheme}-500 focus:border-transparent outline-none transition-all`} placeholder="e.g., Annual Penetration Test" />
                </div>
                
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Description</label>
                  <textarea value={newControl.description} onChange={e => setNewControl({...newControl, description: e.target.value})} rows={3} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-${framework.colorTheme}-500 focus:border-transparent outline-none transition-all`} placeholder="Describe the control's purpose and implementation details..."></textarea>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Priority</label>
                  <select value={newControl.priority} onChange={e => setNewControl({...newControl, priority: e.target.value as any})} className={`w-full bg-slate-800/50 border border-slate-700 rounded-xl p-3 text-white focus:ring-2 focus:ring-${framework.colorTheme}-500 focus:border-transparent outline-none transition-all`}>
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>

              <div className="p-6 border-t border-slate-800 bg-slate-950 flex justify-end gap-3">
                <button onClick={() => setIsModalOpen(false)} className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl transition-all text-sm font-bold">Cancel</button>
                <button onClick={handleAddControl} disabled={!newControl.id || !newControl.name} className={`px-6 py-3 bg-${framework.colorTheme}-600 hover:bg-${framework.colorTheme}-500 text-white rounded-xl transition-all text-sm font-bold disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-${framework.colorTheme}-900/20`}>Save Control</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ComplianceChecklist;
