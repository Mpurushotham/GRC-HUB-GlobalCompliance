
import React from 'react';
import { Shield, Home, LayoutGrid, LayoutDashboard, Briefcase, Sparkles, ShieldAlert, Lock, Database, Cloud, PieChart, Cpu, Bug } from 'lucide-react';
import { motion } from 'framer-motion';
import { Category, Industry } from '../../types';

interface Props {
  activeTab: 'home' | 'library' | 'toolkit' | 'ai-assistant' | 'cyber-defense' | 'cloud-grc' | 'risk-management' | 'ai-defense' | 'ai-vuln-mgmt';
  setActiveTab: (tab: 'home' | 'library' | 'toolkit' | 'ai-assistant' | 'cyber-defense' | 'cloud-grc' | 'risk-management' | 'ai-defense' | 'ai-vuln-mgmt') => void;
  categoryFilter: Category | 'All';
  setCategoryFilter: (cat: Category | 'All') => void;
  industryFilter: Industry | 'All';
  setIndustryFilter: (ind: Industry | 'All') => void;
  isSidebarOpen: boolean;
  onLogoClick: () => void;
}

const NavItem = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group relative overflow-hidden ${
      active 
        ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg shadow-indigo-500/20' 
        : 'text-slate-400 hover:bg-slate-800 hover:text-white'
    }`}
  >
    <div className="relative z-10 flex items-center gap-3">
      {icon}
      <span className="font-semibold tracking-wide text-sm">{label}</span>
    </div>
    {active && <div className="absolute inset-0 bg-white/10 blur-sm" />}
  </button>
);

const Sidebar: React.FC<Props> = ({
  activeTab,
  setActiveTab,
  categoryFilter,
  setCategoryFilter,
  industryFilter,
  setIndustryFilter,
  isSidebarOpen,
  onLogoClick
}) => {
  const allCategories: (Category | 'All')[] = ['All', 'Framework', 'Compliance', 'Governance', 'Regulation', 'Standard', 'Methodology', 'Privacy', 'Law', 'Best Practice'];
  const allIndustries: (Industry | 'All')[] = ['All', 'General / Cross-Industry', 'Financial Services', 'Healthcare', 'Automotive', 'Defense & Government', 'Energy & Utilities', 'Technology & SaaS', 'Retail & E-commerce', 'Manufacturing', 'Telecommunications', 'Education'];

  return (
    <motion.aside 
      initial={false}
      animate={{ width: isSidebarOpen ? 300 : 0, opacity: isSidebarOpen ? 1 : 0 }}
      className="h-screen bg-slate-900 border-r border-slate-800 flex-shrink-0 relative overflow-hidden hidden lg:block sticky top-0 print:hidden"
    >
      <div className="p-6 h-full flex flex-col">
        {/* Brand */}
        <div className="flex items-center gap-3 mb-8 px-2 cursor-pointer" onClick={onLogoClick}>
          <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-600/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white leading-none">GRC Hub</h1>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">Global Compliance</span>
          </div>
        </div>

        {/* Main Nav */}
        <div className="space-y-6 overflow-y-auto custom-scrollbar flex-1 pr-2 pb-4">
          <div className="space-y-1">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-4">Core</h3>
            <NavItem 
              icon={<Home className="w-5 h-5" />} 
              label="Home" 
              active={activeTab === 'home'} 
              onClick={() => setActiveTab('home')} 
            />
            <NavItem 
              icon={<LayoutGrid className="w-5 h-5" />} 
              label="Framework Library" 
              active={activeTab === 'library'} 
              onClick={() => setActiveTab('library')} 
            />
          </div>

          <div className="space-y-1">
             <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-4 flex items-center gap-2">
              <ShieldAlert className="w-3 h-3" /> Security Domains
            </h3>
            <NavItem 
              icon={<PieChart className="w-5 h-5 text-rose-400" />} 
              label="Risk Lab" 
              active={activeTab === 'risk-management'} 
              onClick={() => setActiveTab('risk-management')} 
            />
            <NavItem 
              icon={<Lock className="w-5 h-5 text-emerald-400" />} 
              label="Cyber Defense" 
              active={activeTab === 'cyber-defense'} 
              onClick={() => setActiveTab('cyber-defense')} 
            />
            <NavItem 
              icon={<Bug className="w-5 h-5 text-teal-400" />} 
              label="AI Vuln Mgmt" 
              active={activeTab === 'ai-vuln-mgmt'} 
              onClick={() => setActiveTab('ai-vuln-mgmt')} 
            />
            <NavItem 
              icon={<Cpu className="w-5 h-5 text-fuchsia-400" />} 
              label="AI Defense Hub" 
              active={activeTab === 'ai-defense'} 
              onClick={() => setActiveTab('ai-defense')} 
            />
            <NavItem 
              icon={<Cloud className="w-5 h-5 text-sky-400" />} 
              label="Cloud GRC" 
              active={activeTab === 'cloud-grc'} 
              onClick={() => setActiveTab('cloud-grc')} 
            />
          </div>

          <div className="space-y-1">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 px-4 flex items-center gap-2">
              <Briefcase className="w-3 h-3" /> Management
            </h3>
            <NavItem 
              icon={<LayoutDashboard className="w-5 h-5" />} 
              label="Management Toolkit" 
              active={activeTab === 'toolkit'} 
              onClick={() => setActiveTab('toolkit')} 
            />
            <NavItem 
              icon={<Sparkles className="w-5 h-5 text-indigo-400" />} 
              label="AI Consultant" 
              active={activeTab === 'ai-assistant'} 
              onClick={() => setActiveTab('ai-assistant')} 
            />
          </div>

          {/* Filters Scroll Area - Only show if Library is active */}
          {activeTab === 'library' && (
            <div className="mt-4 border-t border-slate-800 pt-6">
              <div className="mb-6">
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-4">Categories</h3>
                <div className="space-y-1">
                  {allCategories.map((cat) => (
                    <button 
                      key={cat}
                      onClick={() => { setCategoryFilter(cat); }}
                      className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-all border border-transparent ${
                        categoryFilter === cat 
                        ? 'text-indigo-300 bg-indigo-950/40 border-indigo-500/20 font-medium' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-4">Industries</h3>
                <div className="space-y-1">
                  {allIndustries.map((ind) => (
                    <button 
                      key={ind}
                      onClick={() => { setIndustryFilter(ind); }}
                      className={`w-full text-left px-4 py-2 text-sm rounded-lg transition-all border border-transparent ${
                        industryFilter === ind 
                        ? 'text-indigo-300 bg-indigo-950/40 border-indigo-500/20 font-medium' 
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="pt-6 border-t border-slate-800 mt-auto">
           <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-slate-900 border border-indigo-500/10 hover:border-indigo-500/30 transition-colors">
              <p className="text-xs text-indigo-300 mb-1 font-semibold">GRC Hub v2.3</p>
              <p className="text-[10px] text-slate-400">New: AI Vuln Mgmt</p>
           </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
