import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, Lock, FileCheck, ArrowRight, LayoutGrid } from 'lucide-react';
import { Framework } from '../types';

interface Props {
  onExplore: () => void;
  featuredFrameworks: Framework[];
  onFrameworkClick: (id: string) => void;
}

const HomePage: React.FC<Props> = ({ onExplore, featuredFrameworks, onFrameworkClick }) => {
  // Randomly select 4 frameworks to display on load to keep homepage fresh
  const randomFeatured = useMemo(() => {
    const shuffled = [...featuredFrameworks].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [featuredFrameworks]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-24">
      
      {/* Hero Section */}
      <section className="text-center space-y-8 py-10 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-slate-800/80 border border-slate-700 text-indigo-400 text-sm font-medium backdrop-blur-sm">
            The Global Standard for GRC Knowledge
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Master Compliance. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Secure Your Future.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            The ultimate single stop reference for global cybersecurity frameworks, regulatory standards, and governance checklists.
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
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-600/25 transition-all flex items-center justify-center gap-2 group"
          >
            Explore Library
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Globe className="w-8 h-8 text-blue-400" />, title: "Global Reach", desc: "Covers standards from US, EU, APAC, and International bodies." },
          { icon: <Lock className="w-8 h-8 text-emerald-400" />, title: "Industry Specific", desc: "Tailored content for Finance, Healthcare, Auto, Defense, and Retail." },
          { icon: <FileCheck className="w-8 h-8 text-purple-400" />, title: "Actionable Checklists", desc: "Interactive controls to track preliminary compliance gaps." }
        ].map((feature, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-slate-700 transition-colors"
          >
            <div className="mb-4 p-3 bg-slate-800 w-fit rounded-lg">{feature.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400">{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* Featured Frameworks Preview */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Frameworks</h2>
            <p className="text-slate-400">Discover popular standards.</p>
          </div>
          <button onClick={onExplore} className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-1">
            View All {featuredFrameworks.length}+ <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {randomFeatured.map((fw) => (
            <div 
              key={fw.id}
              onClick={() => onFrameworkClick(fw.id)}
              className="p-5 rounded-xl bg-slate-800 border border-slate-700 hover:border-indigo-500/50 cursor-pointer transition-all hover:-translate-y-1 group flex items-center gap-4"
            >
              <div className="w-10 h-10 flex-shrink-0 bg-slate-900/50 p-1.5 rounded-lg border border-slate-600 flex items-center justify-center">
                  {fw.logoUrl ? (
                      <img src={fw.logoUrl} alt={`${fw.name} logo`} className="max-w-full max-h-full object-contain" />
                  ) : (
                      <LayoutGrid className="w-5 h-5 text-slate-500" />
                  )}
              </div>
              <div>
                  <h3 className="font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight text-sm">{fw.name}</h3>
                  <p className="text-xs text-slate-500 uppercase tracking-wide">{fw.industry}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;