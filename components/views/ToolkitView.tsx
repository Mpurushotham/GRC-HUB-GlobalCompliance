
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  AlertTriangle, Shield, Activity, FileText, Calendar, 
  Plus, Search, CheckCircle2, XCircle, Clock, 
  TrendingUp, BarChart3, AlertOctagon, User, MoreVertical, 
  Printer, Save, Trash2, Edit2, Download, Settings
} from 'lucide-react';
import { RiskItem, IncidentItem, PolicyItem, AuditItem, ToolkitSettings } from '../../types';

// --- MOCK DATA FOR INITIAL LOAD ---
const INITIAL_SETTINGS: ToolkitSettings = {
  companyName: "Acme Corp",
  cisoName: "Jane Doe",
  reportDate: new Date().toISOString().split('T')[0],
  executiveSummary: "The organization maintains a strong security posture with key risks in third-party management being actively mitigated. Incident response metrics remain within SLA."
};

const INITIAL_RISKS: RiskItem[] = [
  { id: 'R-001', risk: 'Ransomware Attack', description: 'Loss of data availability due to malware encryption.', likelihood: 4, impact: 5, owner: 'CISO', status: 'Open' },
  { id: 'R-002', risk: 'Third-Party Vendor Breach', description: 'Data leakage via supply chain partner.', likelihood: 3, impact: 4, owner: 'Vendor Mgmt', status: 'Mitigated' },
  { id: 'R-003', risk: 'Insider Threat', description: 'Employee data exfiltration.', likelihood: 2, impact: 5, owner: 'HR/Security', status: 'Open' },
];

const INITIAL_INCIDENTS: IncidentItem[] = [
  { id: 'INC-001', title: 'Phishing Campaign', description: 'Targeted spear-phishing against finance team.', severity: 'Medium', status: 'Closed', dateOpened: '2025-02-10', owner: 'SOC Team' },
  { id: 'INC-002', title: 'Suspicious API Traffic', description: 'Anomalous volume from unkown IP.', severity: 'High', status: 'Investigating', dateOpened: '2025-02-14', owner: 'AppSec' },
];

const INITIAL_POLICIES: PolicyItem[] = [
  { id: 'POL-01', name: 'Acceptable Use Policy', status: 'Approved', lastReview: '2024-01-15', nextReview: '2025-01-15', owner: 'Compliance' },
  { id: 'POL-02', name: 'Access Control Policy', status: 'Review', lastReview: '2023-11-20', nextReview: '2024-11-20', owner: 'IAM Team' },
];

const INITIAL_AUDITS: AuditItem[] = [
  { id: 'AUD-01', name: 'ISO 27001 Surveillance', type: 'External', status: 'Planned', date: '2025-05-10', auditor: 'BSI' },
  { id: 'AUD-02', name: 'Internal Access Review', type: 'Internal', status: 'In Progress', date: '2025-02-01', auditor: 'Internal Audit' },
];

// --- HOOK FOR LOCAL STORAGE ---
function useStickyState<T>(defaultValue: T, key: string): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

const ToolkitView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'risks' | 'incidents' | 'policies' | 'audits'>('dashboard');

  // Persistent State
  const [settings, setSettings] = useStickyState<ToolkitSettings>(INITIAL_SETTINGS, 'grc-settings');
  const [risks, setRisks] = useStickyState<RiskItem[]>(INITIAL_RISKS, 'grc-risks');
  const [incidents, setIncidents] = useStickyState<IncidentItem[]>(INITIAL_INCIDENTS, 'grc-incidents');
  const [policies, setPolicies] = useStickyState<PolicyItem[]>(INITIAL_POLICIES, 'grc-policies');
  const [audits, setAudits] = useStickyState<AuditItem[]>(INITIAL_AUDITS, 'grc-audits');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'risk' | 'incident' | 'policy' | 'audit' | 'settings'>('risk');
  const [editingItem, setEditingItem] = useState<any>(null);

  // --- CALCULATIONS FOR DASHBOARD ---
  const highRisks = risks.filter(r => (r.likelihood * r.impact) >= 15 && r.status === 'Open').length;
  const totalRisks = risks.length;
  const riskScore = totalRisks > 0 
    ? Math.round(risks.reduce((acc, r) => acc + (r.likelihood * r.impact), 0) / totalRisks) 
    : 0;

  const openIncidents = incidents.filter(i => i.status !== 'Closed').length;
  const criticalIncidents = incidents.filter(i => i.severity === 'Critical' && i.status !== 'Closed').length;
  
  const approvedPolicies = policies.filter(p => p.status === 'Approved').length;
  const policyCompliance = policies.length > 0 ? Math.round((approvedPolicies / policies.length) * 100) : 0;

  const upcomingAudits = audits.filter(a => a.status === 'Planned').length;

  // --- HANDLERS ---
  const handlePrint = () => {
    window.print();
  };

  const deleteItem = (id: string, type: 'risk' | 'incident' | 'policy' | 'audit') => {
    if(!window.confirm("Are you sure you want to delete this item?")) return;
    if (type === 'risk') setRisks(prev => prev.filter(i => i.id !== id));
    if (type === 'incident') setIncidents(prev => prev.filter(i => i.id !== id));
    if (type === 'policy') setPolicies(prev => prev.filter(i => i.id !== id));
    if (type === 'audit') setAudits(prev => prev.filter(i => i.id !== id));
  };

  const openAddModal = (type: 'risk' | 'incident' | 'policy' | 'audit' | 'settings') => {
    setModalType(type);
    setEditingItem(null); // Clear for new
    if(type === 'settings') setEditingItem(settings);
    setIsModalOpen(true);
  };

  const openEditModal = (item: any, type: 'risk' | 'incident' | 'policy' | 'audit') => {
    setModalType(type);
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const saveItem = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: any = Object.fromEntries(formData.entries());

    if (modalType === 'settings') {
      setSettings(data as ToolkitSettings);
    } else if (modalType === 'risk') {
      const newItem: RiskItem = {
        id: editingItem?.id || `R-${Date.now().toString().slice(-4)}`,
        risk: data.risk,
        description: data.description,
        likelihood: Number(data.likelihood) as any,
        impact: Number(data.impact) as any,
        owner: data.owner,
        status: data.status
      };
      setRisks(prev => editingItem ? prev.map(i => i.id === editingItem.id ? newItem : i) : [...prev, newItem]);
    } else if (modalType === 'incident') {
      const newItem: IncidentItem = {
        id: editingItem?.id || `INC-${Date.now().toString().slice(-4)}`,
        title: data.title,
        description: data.description,
        severity: data.severity,
        status: data.status,
        dateOpened: data.dateOpened || new Date().toISOString().split('T')[0],
        owner: data.owner
      };
      setIncidents(prev => editingItem ? prev.map(i => i.id === editingItem.id ? newItem : i) : [...prev, newItem]);
    } else if (modalType === 'policy') {
      const newItem: PolicyItem = {
        id: editingItem?.id || `POL-${Date.now().toString().slice(-4)}`,
        name: data.name,
        status: data.status,
        lastReview: data.lastReview,
        nextReview: data.nextReview,
        owner: data.owner
      };
      setPolicies(prev => editingItem ? prev.map(i => i.id === editingItem.id ? newItem : i) : [...prev, newItem]);
    } else if (modalType === 'audit') {
       const newItem: AuditItem = {
        id: editingItem?.id || `AUD-${Date.now().toString().slice(-4)}`,
        name: data.name,
        type: data.type,
        status: data.status,
        date: data.date,
        auditor: data.auditor
      };
      setAudits(prev => editingItem ? prev.map(i => i.id === editingItem.id ? newItem : i) : [...prev, newItem]);
    }

    setIsModalOpen(false);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
      
      {/* --- HEADER & CONTROLS --- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-6 border-b border-slate-800 print:hidden">
        <div>
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight flex items-center gap-3">
             <Shield className="w-8 h-8 text-indigo-500" /> Management Toolkit
          </h2>
          <p className="text-slate-400">Integrated GRC Management. Data is saved locally to your browser.</p>
        </div>
        
        <div className="flex flex-col items-end gap-3">
           <div className="flex gap-2">
              <button onClick={() => openAddModal('settings')} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-sm font-bold border border-slate-700 transition-all">
                <Settings className="w-4 h-4" /> Report Settings
              </button>
              <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold shadow-lg shadow-indigo-500/20 transition-all">
                <Printer className="w-4 h-4" /> Export Report
              </button>
           </div>
           
           <div className="flex flex-wrap gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'risks', label: 'Risks', icon: AlertTriangle },
              { id: 'incidents', label: 'Incidents', icon: Activity },
              { id: 'policies', label: 'Policies', icon: FileText },
              { id: 'audits', label: 'Audits', icon: Calendar },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-bold transition-all ${
                  activeTab === tab.id 
                    ? 'bg-slate-800 text-white shadow-sm' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- PRINT HEADER (VISIBLE ONLY ON PRINT) --- */}
      <div className="hidden print:block mb-8 border-b-2 border-black pb-4">
        <h1 className="text-2xl font-bold">{settings.companyName} - Executive GRC Report</h1>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
           <p>Prepared By: {settings.cisoName}</p>
           <p>Date: {settings.reportDate}</p>
        </div>
        <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded text-sm italic">
           <strong>Executive Summary:</strong> {settings.executiveSummary}
        </div>
      </div>

      <AnimatePresence mode="wait">
        
        {/* --- DASHBOARD TAB --- */}
        {activeTab === 'dashboard' && (
          <motion.div 
            key="dashboard"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 print:grid-cols-2 print:gap-4">
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden print:bg-white print:border-black">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 print:text-black">Policy Compliance</h3>
                <div className="text-4xl font-black text-white mb-1 print:text-black">{policyCompliance}%</div>
                <div className={`text-xs font-medium ${policyCompliance > 80 ? 'text-emerald-400' : 'text-amber-400'} print:text-black`}>
                  {approvedPolicies} / {policies.length} Policies Approved
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden print:bg-white print:border-black">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 print:text-black">Critical Risks</h3>
                <div className="text-4xl font-black text-white mb-1 print:text-black">{highRisks}</div>
                <div className="text-rose-400 text-xs font-medium flex items-center gap-1 print:text-black">
                  Open Risks Rated High/Critical
                </div>
              </div>

               <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden print:bg-white print:border-black">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 print:text-black">Active Incidents</h3>
                <div className="text-4xl font-black text-white mb-1 print:text-black">{openIncidents}</div>
                <div className="text-amber-400 text-xs font-medium flex items-center gap-1 print:text-black">
                  {criticalIncidents} Critical Severity
                </div>
              </div>

               <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative overflow-hidden print:bg-white print:border-black">
                <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 print:text-black">Upcoming Audits</h3>
                <div className="text-4xl font-black text-white mb-1 print:text-black">{upcomingAudits}</div>
                <div className="text-blue-400 text-xs font-medium flex items-center gap-1 print:text-black">
                   Planned or In Progress
                </div>
              </div>
            </div>

            {/* Print Friendly Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:block print:space-y-6">
               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl print:bg-white print:border-black print:break-inside-avoid">
                 <h3 className="text-white font-bold mb-4 flex items-center gap-2 print:text-black">
                   <AlertTriangle className="w-5 h-5 text-rose-400"/> Top Priority Risks
                 </h3>
                 <div className="space-y-3">
                   {risks.filter(r => r.status === 'Open').sort((a,b) => (b.impact*b.likelihood) - (a.impact*a.likelihood)).slice(0, 5).map(risk => (
                     <div key={risk.id} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-slate-800 print:bg-gray-50 print:border-gray-200">
                        <div>
                          <div className="font-bold text-white text-sm print:text-black">{risk.risk}</div>
                          <div className="text-xs text-slate-500">Owner: {risk.owner}</div>
                        </div>
                        <div className="text-rose-400 font-bold text-sm print:text-black">Score: {risk.impact * risk.likelihood}</div>
                     </div>
                   ))}
                   {risks.length === 0 && <p className="text-slate-500 text-sm">No risks recorded.</p>}
                 </div>
               </div>

               <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl print:bg-white print:border-black print:break-inside-avoid">
                 <h3 className="text-white font-bold mb-4 flex items-center gap-2 print:text-black">
                   <Activity className="w-5 h-5 text-amber-400"/> Recent Incidents
                 </h3>
                 <div className="space-y-3">
                   {incidents.slice(0, 5).map(inc => (
                     <div key={inc.id} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-slate-800 print:bg-gray-50 print:border-gray-200">
                        <div>
                          <div className="font-bold text-white text-sm print:text-black">{inc.title}</div>
                          <div className="text-xs text-slate-500">{inc.dateOpened} • {inc.status}</div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase ${
                          inc.severity === 'Critical' ? 'bg-rose-900/50 text-rose-400' : 
                          inc.severity === 'High' ? 'bg-orange-900/50 text-orange-400' : 'bg-blue-900/50 text-blue-400'
                        } print:border print:border-black print:bg-white print:text-black`}>
                          {inc.severity}
                        </span>
                     </div>
                   ))}
                    {incidents.length === 0 && <p className="text-slate-500 text-sm">No incidents recorded.</p>}
                 </div>
               </div>
            </div>
          </motion.div>
        )}

        {/* --- RISK REGISTER TAB --- */}
        {activeTab === 'risks' && (
          <motion.div
            key="risks"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center print:hidden">
              <h3 className="text-xl font-bold text-white">Risk Register</h3>
              <button onClick={() => openAddModal('risk')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold flex items-center gap-2">
                <Plus className="w-4 h-4" /> Add Risk
              </button>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden print:bg-white print:border-black">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 print:bg-gray-200 print:text-black print:border-black">
                    <tr>
                      <th className="p-4 font-semibold">Risk Scenario</th>
                      <th className="p-4 font-semibold">Likelihood</th>
                      <th className="p-4 font-semibold">Impact</th>
                      <th className="p-4 font-semibold">Score</th>
                      <th className="p-4 font-semibold">Owner</th>
                      <th className="p-4 font-semibold">Status</th>
                      <th className="p-4 font-semibold text-right print:hidden">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 print:divide-gray-300">
                    {risks.map((risk) => {
                      const score = risk.likelihood * risk.impact;
                      let scoreColor = 'text-emerald-400';
                      if (score >= 15) scoreColor = 'text-rose-400';
                      else if (score >= 8) scoreColor = 'text-amber-400';

                      return (
                        <tr key={risk.id} className="hover:bg-slate-800/50 transition-colors print:bg-white print:text-black">
                          <td className="p-4">
                            <div className="font-bold text-white print:text-black">{risk.risk}</div>
                            <div className="text-xs text-slate-400 print:text-gray-600">{risk.description}</div>
                          </td>
                          <td className="p-4 text-slate-300 print:text-black">{risk.likelihood}</td>
                          <td className="p-4 text-slate-300 print:text-black">{risk.impact}</td>
                          <td className={`p-4 font-black ${scoreColor} print:text-black`}>{score}</td>
                          <td className="p-4 text-slate-300 print:text-black">{risk.owner}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold border ${
                              risk.status === 'Open' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                              risk.status === 'Mitigated' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                              'bg-slate-700/50 text-slate-400 border-slate-600'
                            } print:border-black print:bg-white print:text-black`}>
                              {risk.status}
                            </span>
                          </td>
                          <td className="p-4 text-right flex justify-end gap-2 print:hidden">
                            <button onClick={() => openEditModal(risk, 'risk')} className="p-1.5 hover:bg-slate-700 rounded text-slate-400 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                            <button onClick={() => deleteItem(risk.id, 'risk')} className="p-1.5 hover:bg-rose-900/30 rounded text-slate-400 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* --- INCIDENT TAB --- */}
        {activeTab === 'incidents' && (
          <motion.div
            key="incidents"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
             <div className="flex justify-between items-center print:hidden">
              <h3 className="text-xl font-bold text-white">Incident Tracker</h3>
              <button onClick={() => openAddModal('incident')} className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-rose-900/20">
                <AlertTriangle className="w-4 h-4" /> Declare Incident
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
               {incidents.map((inc) => (
                 <div key={inc.id} className="p-6 bg-slate-900 border border-slate-800 hover:border-slate-600 rounded-xl transition-all group print:bg-white print:border-black print:break-inside-avoid">
                    <div className="flex justify-between items-start mb-4">
                       <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${inc.status === 'Closed' ? 'bg-emerald-500' : 'bg-rose-500 animate-pulse'} print:hidden`} />
                          <span className="text-xs font-mono text-slate-500 print:text-black">{inc.id}</span>
                       </div>
                       <div className="flex gap-2">
                           <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                             inc.severity === 'Critical' ? 'bg-rose-950 text-rose-400 border border-rose-900' :
                             inc.severity === 'High' ? 'bg-orange-950 text-orange-400 border border-orange-900' :
                             'bg-blue-950 text-blue-400 border border-blue-900'
                           } print:bg-white print:text-black print:border-black`}>
                             {inc.severity}
                           </span>
                           <div className="print:hidden flex gap-1">
                               <button onClick={() => openEditModal(inc, 'incident')} className="p-1 hover:bg-slate-700 rounded text-slate-400"><Edit2 className="w-3 h-3" /></button>
                               <button onClick={() => deleteItem(inc.id, 'incident')} className="p-1 hover:bg-slate-700 rounded text-slate-400 hover:text-rose-400"><Trash2 className="w-3 h-3" /></button>
                           </div>
                       </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 print:text-black">{inc.title}</h4>
                    <p className="text-sm text-slate-400 mb-4 print:text-black">{inc.description}</p>
                    <div className="flex justify-between items-end mt-4 text-sm text-slate-400 border-t border-slate-800 pt-4 print:border-gray-300 print:text-black">
                       <div className="flex gap-4">
                          <span className="flex items-center gap-1"><User className="w-3 h-3"/> {inc.owner}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3"/> {inc.dateOpened}</span>
                       </div>
                       <div className="font-bold text-white print:text-black">{inc.status}</div>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        )}

        {/* --- POLICY TAB --- */}
        {activeTab === 'policies' && (
          <motion.div
            key="policies"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
             <div className="flex justify-between items-center print:hidden">
              <h3 className="text-xl font-bold text-white">Policies</h3>
              <button onClick={() => openAddModal('policy')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold flex items-center gap-2">
                <Plus className="w-4 h-4" /> New Policy
              </button>
            </div>

            <div className="space-y-3">
              {policies.map((pol) => (
                <div key={pol.id} className="flex items-center justify-between p-4 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-900 transition-colors print:bg-white print:border-black print:break-inside-avoid">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-slate-800 rounded-lg print:hidden">
                      <FileText className="w-5 h-5 text-slate-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white print:text-black">{pol.name}</h4>
                      <p className="text-xs text-slate-500 print:text-black">Owner: {pol.owner} • Review Due: {pol.nextReview}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      pol.status === 'Approved' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                      pol.status === 'Review' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-slate-700/50 text-slate-400 border border-slate-600'
                    } print:bg-white print:text-black print:border-black`}>
                      {pol.status}
                    </span>
                    <div className="print:hidden flex gap-1">
                       <button onClick={() => openEditModal(pol, 'policy')} className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                       <button onClick={() => deleteItem(pol.id, 'policy')} className="p-2 hover:bg-slate-800 rounded-lg text-slate-500 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* --- AUDIT TAB --- */}
        {activeTab === 'audits' && (
           <motion.div
            key="audits"
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="space-y-6"
          >
             <div className="flex justify-between items-center print:hidden">
              <h3 className="text-xl font-bold text-white">Audit Planner</h3>
              <button onClick={() => openAddModal('audit')} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-bold flex items-center gap-2">
                <Plus className="w-4 h-4" /> Schedule Audit
              </button>
            </div>

            <div className="relative border-l-2 border-slate-800 ml-3 space-y-8 print:border-gray-300">
               {audits.sort((a,b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map((audit) => (
                 <div key={audit.id} className="relative pl-8 print:break-inside-avoid">
                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-slate-900 ${
                      audit.status === 'Completed' ? 'bg-emerald-500' : 
                      audit.status === 'In Progress' ? 'bg-blue-500 animate-pulse' : 'bg-slate-600'
                    } print:hidden`} />
                    <div className="bg-slate-900 border border-slate-800 p-5 rounded-xl print:bg-white print:border-black">
                       <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-white text-lg print:text-black">{audit.name}</h4>
                          <span className="text-xs font-mono text-slate-500 print:text-black">{audit.date}</span>
                       </div>
                       <div className="flex justify-between items-end">
                            <div className="flex gap-4 text-sm text-slate-400 print:text-black">
                                <span className="flex items-center gap-1"><User className="w-3 h-3"/> {audit.auditor}</span>
                                <span className="flex items-center gap-1 px-2 py-0.5 rounded bg-slate-800 text-xs print:border print:border-black print:bg-white">{audit.type}</span>
                                <span className="text-xs italic text-slate-500">{audit.status}</span>
                            </div>
                            <div className="print:hidden flex gap-1">
                                <button onClick={() => openEditModal(audit, 'audit')} className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-white"><Edit2 className="w-4 h-4" /></button>
                                <button onClick={() => deleteItem(audit.id, 'audit')} className="p-1 hover:bg-slate-800 rounded text-slate-500 hover:text-rose-400"><Trash2 className="w-4 h-4" /></button>
                            </div>
                       </div>
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- ADD/EDIT MODAL --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 print:hidden"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <form onSubmit={saveItem}>
                <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950">
                  <h3 className="font-bold text-white text-lg capitalize">
                    {editingItem ? 'Edit' : 'Add'} {modalType === 'settings' ? 'Settings' : modalType}
                  </h3>
                  <button type="button" onClick={() => setIsModalOpen(false)} className="text-slate-500 hover:text-white"><XCircle className="w-6 h-6"/></button>
                </div>
                
                <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                   
                   {/* DYNAMIC FORM FIELDS */}
                   {modalType === 'settings' && (
                     <>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Company Name</label>
                          <input required name="companyName" defaultValue={settings.companyName} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">CISO / Author Name</label>
                          <input required name="cisoName" defaultValue={settings.cisoName} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Executive Summary</label>
                          <textarea required name="executiveSummary" rows={4} defaultValue={settings.executiveSummary} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                     </>
                   )}

                   {modalType === 'risk' && (
                     <>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Risk Scenario</label>
                          <input required name="risk" defaultValue={editingItem?.risk} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" placeholder="e.g. Data Breach" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Likelihood (1-5)</label>
                              <input required type="number" min="1" max="5" name="likelihood" defaultValue={editingItem?.likelihood || 3} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Impact (1-5)</label>
                              <input required type="number" min="1" max="5" name="impact" defaultValue={editingItem?.impact || 3} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Description</label>
                          <textarea name="description" rows={3} defaultValue={editingItem?.description} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Owner</label>
                              <input required name="owner" defaultValue={editingItem?.owner} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Status</label>
                              <select name="status" defaultValue={editingItem?.status || 'Open'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Open</option>
                                <option>Mitigated</option>
                                <option>Accepted</option>
                                <option>Closed</option>
                              </select>
                           </div>
                        </div>
                     </>
                   )}

                   {modalType === 'incident' && (
                     <>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Title</label>
                          <input required name="title" defaultValue={editingItem?.title} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                         <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Description</label>
                          <textarea name="description" rows={3} defaultValue={editingItem?.description} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Severity</label>
                              <select name="severity" defaultValue={editingItem?.severity || 'Medium'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Low</option>
                                <option>Medium</option>
                                <option>High</option>
                                <option>Critical</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Status</label>
                              <select name="status" defaultValue={editingItem?.status || 'Open'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Open</option>
                                <option>Investigating</option>
                                <option>Contained</option>
                                <option>Closed</option>
                              </select>
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Owner</label>
                              <input required name="owner" defaultValue={editingItem?.owner} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Date Opened</label>
                              <input type="date" name="dateOpened" defaultValue={editingItem?.dateOpened} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                        </div>
                     </>
                   )}

                   {modalType === 'policy' && (
                     <>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Policy Name</label>
                          <input required name="name" defaultValue={editingItem?.name} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Status</label>
                              <select name="status" defaultValue={editingItem?.status || 'Draft'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Draft</option>
                                <option>Review</option>
                                <option>Approved</option>
                                <option>Deprecated</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Owner</label>
                              <input required name="owner" defaultValue={editingItem?.owner} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Last Review</label>
                              <input type="date" name="lastReview" defaultValue={editingItem?.lastReview} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Next Review</label>
                              <input type="date" name="nextReview" defaultValue={editingItem?.nextReview} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                        </div>
                     </>
                   )}

                   {modalType === 'audit' && (
                     <>
                        <div>
                          <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Audit Name</label>
                          <input required name="name" defaultValue={editingItem?.name} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Type</label>
                              <select name="type" defaultValue={editingItem?.type || 'Internal'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Internal</option>
                                <option>External</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Status</label>
                              <select name="status" defaultValue={editingItem?.status || 'Planned'} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500">
                                <option>Planned</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                              </select>
                           </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Auditor</label>
                              <input required name="auditor" defaultValue={editingItem?.auditor} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Date</label>
                              <input type="date" required name="date" defaultValue={editingItem?.date} className="w-full bg-slate-800 border border-slate-700 rounded p-2 text-white outline-none focus:border-indigo-500" />
                           </div>
                        </div>
                     </>
                   )}

                </div>
                <div className="p-6 border-t border-slate-800 bg-slate-950 flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 rounded-lg text-slate-400 hover:text-white font-medium">Cancel</button>
                  <button type="submit" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-bold flex items-center gap-2">
                    <Save className="w-4 h-4" /> Save {modalType === 'settings' ? 'Settings' : 'Item'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default ToolkitView;
