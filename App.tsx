
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FRAMEWORKS } from './constants';
import { Category, Industry } from './types';
import Sidebar from './components/layout/Sidebar';
import MobileHeader from './components/layout/MobileHeader';
import HomeView from './components/views/HomeView';
import LibraryView from './components/views/LibraryView';
import DetailView from './components/views/DetailView';
import ToolkitView from './components/views/ToolkitView';
import AiAssistantView from './components/views/AiAssistantView';
import CyberDefenseView from './components/views/CyberDefenseView';
import CloudGrcView from './components/views/CloudGrcView';
import RiskManagementView from './components/views/RiskManagementView';
import AiDefenseHub from './components/views/AiDefenseHub';
import AiVulnerabilityView from './components/views/AiVulnerabilityView';

export default function App() {
  // Navigation State
  const [activeTab, setActiveTab] = useState<'home' | 'library' | 'toolkit' | 'ai-assistant' | 'cyber-defense' | 'cloud-grc' | 'risk-management' | 'ai-defense' | 'ai-vuln-mgmt'>('home');
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string | null>(null);
  
  // Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [industryFilter, setIndustryFilter] = useState<Industry | 'All'>('All');
  const [categoryFilter, setCategoryFilter] = useState<Category | 'All'>('All');
  
  // Layout State
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Handlers
  const handleFrameworkClick = (id: string) => {
    setSelectedFrameworkId(id);
    setActiveTab('library');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeDetail = () => setSelectedFrameworkId(null);
  const handlePrint = () => window.print();

  const handleExplore = () => {
    setActiveTab('library');
    setIndustryFilter('All');
    setCategoryFilter('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Data Logic
  const selectedFramework = FRAMEWORKS.find(f => f.id === selectedFrameworkId);

  return (
    <div className="min-h-screen bg-slate-950 flex font-sans text-slate-100 selection:bg-indigo-500/30">
      
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab}
        setActiveTab={(tab) => { setActiveTab(tab); setSelectedFrameworkId(null); }}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        industryFilter={industryFilter}
        setIndustryFilter={setIndustryFilter}
        isSidebarOpen={isSidebarOpen}
        onLogoClick={() => { setActiveTab('home'); setSelectedFrameworkId(null); }}
      />

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto relative scroll-smooth print:h-auto print:overflow-visible">
        
        {/* Mobile Header */}
        <MobileHeader 
          selectedFrameworkId={selectedFrameworkId} 
          onCloseDetail={closeDetail}
          isSidebarOpen={isSidebarOpen}
        />

        <div className="p-4 md:p-8 lg:p-12 max-w-[1600px] mx-auto min-h-full flex flex-col">
          
          <AnimatePresence mode="wait">
            
            {selectedFrameworkId && selectedFramework ? (
              // DETAIL VIEW
              <DetailView 
                key="detail"
                framework={selectedFramework}
                onBack={closeDetail}
                onPrint={handlePrint}
              />
            ) : activeTab === 'home' ? (
              // HOME VIEW
               <HomeView 
                 key="home"
                 onExplore={handleExplore} 
                 onNavigate={(tab) => setActiveTab(tab)}
                 featuredFrameworks={FRAMEWORKS}
                 onFrameworkClick={handleFrameworkClick}
               />
            ) : activeTab === 'toolkit' ? (
              // TOOLKIT VIEW
              <ToolkitView key="toolkit" />
            ) : activeTab === 'ai-assistant' ? (
              // AI ASSISTANT VIEW
              <AiAssistantView key="ai-assistant" />
            ) : activeTab === 'cyber-defense' ? (
              // CYBER DEFENSE VIEW
              <CyberDefenseView key="cyber-defense" />
            ) : activeTab === 'cloud-grc' ? (
              // CLOUD GRC VIEW
              <CloudGrcView key="cloud-grc" />
            ) : activeTab === 'risk-management' ? (
              // RISK MANAGEMENT VIEW
              <RiskManagementView key="risk-management" />
            ) : activeTab === 'ai-defense' ? (
              // AI DEFENSE HUB VIEW
              <AiDefenseHub key="ai-defense" />
            ) : activeTab === 'ai-vuln-mgmt' ? (
              // AI VULNERABILITY VIEW
              <AiVulnerabilityView key="ai-vuln-mgmt" />
            ) : (
              // LIBRARY VIEW
              <LibraryView 
                key="library"
                frameworks={FRAMEWORKS}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                categoryFilter={categoryFilter}
                setCategoryFilter={setCategoryFilter}
                industryFilter={industryFilter}
                setIndustryFilter={setIndustryFilter}
                onFrameworkClick={handleFrameworkClick}
              />
            )}
          </AnimatePresence>
          
          <footer className="mt-auto pt-12 border-t border-slate-900 text-center text-slate-600 text-sm print:hidden pb-4">
            <p className="mb-2">© 2025 GRC Hub. Open Source Intelligence.</p>
            <p className="flex items-center justify-center gap-1 opacity-75 hover:opacity-100 transition-opacity">
              Built with <span className="text-rose-500">♥</span> by <span className="text-slate-400 font-medium">Purushotham Muktha</span>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
