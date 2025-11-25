
import React from 'react';
import { Shield, X, Menu } from 'lucide-react';

interface Props {
  selectedFrameworkId: string | null;
  onCloseDetail: () => void;
  isSidebarOpen: boolean; // Placeholder if we add mobile drawer later
}

const MobileHeader: React.FC<Props> = ({ selectedFrameworkId, onCloseDetail }) => {
  return (
    <div className="lg:hidden p-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between sticky top-0 z-30 print:hidden">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-1.5 rounded-lg">
             <Shield className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-white text-lg">GRC Hub</span>
        </div>
        
        {selectedFrameworkId && (
          <button 
            onClick={onCloseDetail} 
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-800 rounded-full text-slate-300 text-sm font-medium hover:bg-slate-700 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
            Close View
          </button>
        )}
    </div>
  );
};

export default MobileHeader;
