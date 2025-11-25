
import React from 'react';
import { Framework } from '../types';
import { ArrowRight, ShieldCheck, Globe, Building2, Factory, Stethoscope, Car, Server, ShoppingCart, Landmark, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  framework: Framework;
  onClick: (id: string) => void;
}

const FrameworkCard: React.FC<Props> = ({ framework, onClick }) => {
  const getIcon = () => {
    switch (framework.industry) {
      case 'Financial Services': return <Landmark className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Healthcare': return <Stethoscope className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Automotive': return <Car className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Defense & Government': return <ShieldCheck className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Technology & SaaS': return <Server className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Energy & Utilities': return <Zap className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      case 'Retail & E-commerce': return <ShoppingCart className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
      default: return <Globe className={`w-6 h-6 text-${framework.colorTheme}-400`} />;
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className={`group relative p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-${framework.colorTheme}-500/50 cursor-pointer transition-all duration-300 shadow-xl hover:shadow-${framework.colorTheme}-500/10 flex flex-col h-full overflow-hidden`}
      onClick={() => onClick(framework.id)}
    >
      {/* Background Gradient Blob */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-${framework.colorTheme}-500/10 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className="flex justify-between items-start mb-5 relative z-10">
        <div className="flex items-start gap-4">
          <div className={`w-14 h-14 flex-shrink-0 bg-slate-950 border border-slate-700/50 rounded-xl flex items-center justify-center p-2 shadow-inner group-hover:border-${framework.colorTheme}-500/30 group-hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300`}>
            {framework.logoUrl ? (
                <img src={framework.logoUrl} alt={`${framework.name} logo`} className="max-w-full max-h-full object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
            ) : (
                getIcon()
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-100 group-hover:text-white transition-colors leading-tight mb-2">
              {framework.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-lg bg-${framework.colorTheme}-500/10 text-${framework.colorTheme}-300 border border-${framework.colorTheme}-500/10 uppercase tracking-wide`}>
                {framework.category}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow relative z-10">
        {framework.overview}
      </p>

      <div className={`flex items-center justify-between pt-4 border-t border-slate-800 group-hover:border-${framework.colorTheme}-500/20 transition-colors relative z-10`}>
        <span className="text-xs text-slate-500 font-bold uppercase tracking-wide group-hover:text-slate-400 transition-colors">
            {framework.industry.split(' ')[0]}
        </span>
        <div className={`flex items-center text-xs font-bold text-${framework.colorTheme}-400 group-hover:text-${framework.colorTheme}-300 group-hover:translate-x-1 transition-all`}>
          View Details <ArrowRight className="w-3 h-3 ml-1.5" />
        </div>
      </div>
    </motion.div>
  );
};

export default FrameworkCard;
