
import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Shield, FilterX, SlidersHorizontal } from 'lucide-react';
import { Framework, Category, Industry } from '../../types';
import FrameworkCard from '../FrameworkCard';

interface Props {
  frameworks: Framework[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  categoryFilter: Category | 'All';
  setCategoryFilter: (cat: Category | 'All') => void;
  industryFilter: Industry | 'All';
  setIndustryFilter: (ind: Industry | 'All') => void;
  onFrameworkClick: (id: string) => void;
}

const LibraryView: React.FC<Props> = ({
  frameworks,
  searchTerm,
  setSearchTerm,
  categoryFilter,
  setCategoryFilter,
  industryFilter,
  setIndustryFilter,
  onFrameworkClick
}) => {
  
  const filteredFrameworks = useMemo(() => {
    return frameworks.filter(fw => {
      const matchesSearch = fw.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            fw.overview.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            fw.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesIndustry = industryFilter === 'All' || fw.industry === industryFilter;
      const matchesCategory = categoryFilter === 'All' || fw.category === categoryFilter;
      return matchesSearch && matchesIndustry && matchesCategory;
    });
  }, [searchTerm, industryFilter, categoryFilter, frameworks]);

  const allCategories: (Category | 'All')[] = ['All', 'Framework', 'Compliance', 'Governance', 'Regulation', 'Standard', 'Methodology', 'Privacy', 'Law', 'Best Practice'];
  const allIndustries: (Industry | 'All')[] = ['All', 'General / Cross-Industry', 'Financial Services', 'Healthcare', 'Automotive', 'Defense & Government', 'Energy & Utilities', 'Technology & SaaS', 'Retail & E-commerce', 'Manufacturing', 'Telecommunications', 'Education'];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      {/* Header & Controls */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end gap-6 pb-6 border-b border-slate-800">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">Compliance Library</h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Browse <span className="text-white font-bold">{frameworks.length}</span> frameworks. 
            Currently viewing <span className="text-indigo-400 font-semibold">{categoryFilter === 'All' ? 'All Categories' : categoryFilter}</span> for <span className="text-indigo-400 font-semibold">{industryFilter === 'All' ? 'Global Industries' : industryFilter}</span>.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="w-full xl:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative group w-full xl:w-96">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl opacity-20 group-hover:opacity-60 transition duration-300 blur-sm"></div>
                <div className="relative flex items-center bg-slate-900 rounded-xl border border-slate-700/50 focus-within:border-indigo-500/50 transition-colors">
                <Search className="absolute left-4 text-slate-500 w-5 h-5" />
                <input 
                    type="text"
                    placeholder="Search by name, ID, or keyword..."
                    className="w-full bg-transparent border-none text-white pl-12 pr-4 py-3.5 focus:ring-0 outline-none placeholder:text-slate-600 font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                    <button onClick={() => setSearchTerm('')} className="absolute right-4 text-slate-600 hover:text-white">
                        <FilterX className="w-4 h-4" />
                    </button>
                )}
                </div>
            </div>
            
            {/* Mobile/Tablet Filters (Visible only on smaller screens usually managed by Sidebar on Desktop) */}
            <div className="lg:hidden flex gap-2">
                 <select 
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value as Category | 'All')}
                    className="flex-1 bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none text-sm font-medium"
                 >
                    {allCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                 </select>
                 <select 
                    value={industryFilter}
                    onChange={(e) => setIndustryFilter(e.target.value as Industry | 'All')}
                    className="flex-1 bg-slate-800 text-white p-3 rounded-xl border border-slate-700 outline-none text-sm font-medium"
                 >
                    {allIndustries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                 </select>
            </div>
        </div>
      </div>

      {/* Results Grid */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
            {filteredFrameworks.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 pb-20">
                {filteredFrameworks.map((fw) => (
                    <FrameworkCard 
                        key={fw.id} 
                        framework={fw} 
                        onClick={onFrameworkClick} 
                    />
                ))}
                </div>
            ) : (
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="col-span-full flex flex-col items-center justify-center py-32 bg-slate-900/30 rounded-3xl border-2 border-dashed border-slate-800 text-center px-4"
                >
                    <div className="bg-slate-800 p-4 rounded-full mb-6">
                        <Shield className="w-12 h-12 text-slate-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No frameworks found</h3>
                    <p className="text-slate-400 max-w-md mx-auto mb-8">
                        We couldn't find any frameworks matching "{searchTerm}" in the selected filters.
                    </p>
                    <button 
                        onClick={() => { setSearchTerm(''); setIndustryFilter('All'); setCategoryFilter('All'); }}
                        className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold transition-all border border-slate-700 hover:border-indigo-500/50 flex items-center gap-2"
                    >
                        <FilterX className="w-4 h-4" /> Clear all filters
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default LibraryView;
