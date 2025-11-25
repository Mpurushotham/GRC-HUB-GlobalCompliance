
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Globe, Lock, ArrowRight, LayoutGrid, Zap, PieChart, Cloud, Cpu, Bug } from 'lucide-react';
import { Framework } from '../../types';

interface Props {
  onExplore: () => void;
  onNavigate: (tab: 'risk-management' | 'cloud-grc' | 'ai-defense' | 'ai-vuln-mgmt') => void;
  featuredFrameworks: Framework[];
  onFrameworkClick: (id: string) => void;
}

const HomeView: React.FC<Props> = ({ onExplore, onNavigate, featuredFrameworks, onFrameworkClick }) => {
  // Randomly select 4 frameworks to display on load to keep homepage fresh
  const randomFeatured = useMemo(() => {
    const shuffled = [...featuredFrameworks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [featuredFrameworks]);

  const stats = [
    { label: "Frameworks", value: "40+" },
    { label: "Controls", value: "500+" },
    { label: "Industries", value: "10+" }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-20">
      
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700/50 backdrop-blur-sm shadow-xl">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-300 text-xs font-bold tracking-wide uppercase">Updated 2025 Database</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-tight">
            Master Compliance. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              Secure Your Future.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The single-source-of-truth for global cybersecurity frameworks. 
            Simplify gap analysis, audit preparation, and governance with our interactive hub.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
        >
          <button 
            onClick={onExplore}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group border border-indigo-400/20"
          >
            Explore Library
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="flex justify-center gap-8 items-center px-8 py-4">
             {stats.map((stat, i) => (
               <div key={i} className="text-center">
                 <div className="text-2xl font-bold text-white">{stat.value}</div>
                 <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</div>
               </div>
             ))}
          </div>
        </motion.div>
      </section>

      {/* New Advanced Tools Section */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Advanced Operations</h2>
            <p className="text-slate-400">Next-generation tools for proactive defense.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => onNavigate('risk-management')}
             className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-rose-500/50 cursor-pointer group transition-all"
           >
              <div className="mb-4 p-3 bg-rose-500/10 w-fit rounded-xl border border-rose-500/20 group-hover:bg-rose-500/20 transition-colors">
                 <PieChart className="w-6 h-6 text-rose-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Risk Lab</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Interactive risk calculator and heatmap visualization.</p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => onNavigate('cloud-grc')}
             className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 cursor-pointer group transition-all"
           >
              <div className="mb-4 p-3 bg-sky-500/10 w-fit rounded-xl border border-sky-500/20 group-hover:bg-sky-500/20 transition-colors">
                 <Cloud className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cloud GRC</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Shared responsibility models for IaaS, PaaS, and SaaS.</p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => onNavigate('ai-defense')}
             className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-fuchsia-500/50 cursor-pointer group transition-all"
           >
              <div className="mb-4 p-3 bg-fuchsia-500/10 w-fit rounded-xl border border-fuchsia-500/20 group-hover:bg-fuchsia-500/20 transition-colors">
                 <Cpu className="w-6 h-6 text-fuchsia-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Defense Hub</h3>
              <p className="text-sm text-slate-400 leading-relaxed">24/7 autonomous threat detection and response.</p>
           </motion.div>

           <motion.div 
             whileHover={{ y: -5 }}
             onClick={() => onNavigate('ai-vuln-mgmt')}
             className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/50 cursor-pointer group transition-all"
           >
              <div className="mb-4 p-3 bg-teal-500/10 w-fit rounded-xl border border-teal-500/20 group-hover:bg-teal-500/20 transition-colors">
                 <Bug className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">AI Vuln Mgmt</h3>
              <p className="text-sm text-slate-400 leading-relaxed">Automated remediation and predictive patching engine.</p>
           </motion.div>
        </div>
      </section>

      {/* Value Props */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: <Globe className="w-6 h-6 text-blue-400" />, title: "Global Reach", desc: "Standards from NIST, ISO, EU, APAC, and International bodies all in one place." },
          { icon: <Lock className="w-6 h-6 text-emerald-400" />, title: "Industry Tailored", desc: "Specific collections for Finance, Healthcare, Auto, Defense, and Retail sectors." },
          { icon: <Zap className="w-6 h-6 text-amber-400" />, title: "Instant Analysis", desc: "Interactive checklists and gap analysis tools for immediate insights." }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 hover:bg-slate-800/50 transition-all group"
          >
            <div className="mb-5 p-3 bg-slate-800/80 w-fit rounded-xl border border-slate-700 group-hover:border-slate-600 transition-colors">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
            <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Frameworks Preview */}
      <section className="border-t border-slate-800 pt-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Frameworks</h2>
            <p className="text-slate-400">Essential standards used by top organizations.</p>
          </div>
          <button onClick={onExplore} className="text-indigo-400 font-bold hover:text-indigo-300 flex items-center gap-2 hover:gap-3 transition-all text-sm">
            View All Database <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {randomFeatured.map((fw) => (
            <motion.div 
              key={fw.id}
              whileHover={{ y: -5 }}
              onClick={() => onFrameworkClick(fw.id)}
              className="p-5 rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 hover:border-indigo-500/50 cursor-pointer transition-all group flex items-start gap-4 shadow-lg"
            >
              <div className="w-10 h-10 flex-shrink-0 bg-slate-950 p-1.5 rounded-lg border border-slate-700 flex items-center justify-center group-hover:border-indigo-500/30 transition-colors">
                  {fw.logoUrl ? (
                      <img src={fw.logoUrl} alt={`${fw.name} logo`} className="max-w-full max-h-full object-contain" />
                  ) : (
                      <LayoutGrid className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" />
                  )}
              </div>
              <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight text-sm truncate">{fw.name}</h3>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">{fw.category.slice(0,3)}</span>
                    <span className="text-[10px] text-slate-500 truncate">{fw.industry.split(' ')[0]}</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomeView;
