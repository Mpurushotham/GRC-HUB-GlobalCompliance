
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Printer, ExternalLink, Workflow, Shield, CheckSquare, Layers, Calendar, Target, Users, Route, Lightbulb, BookOpen, Quote } from 'lucide-react';
import { Framework } from '../../types';
import ComplianceChecklist from '../ComplianceChecklist';
import FrameworkDiagram from '../FrameworkDiagram';

interface Props {
  framework: Framework;
  onBack: () => void;
  onPrint: () => void;
}

const DetailView: React.FC<Props> = ({ framework, onBack, onPrint }) => {
  
  // Helper to parse **text** into bold elements
  const formatText = (text: string) => {
    if (!text) return null;
    return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="text-white font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10 pb-24 print:space-y-8 print:pb-0 font-sans"
    >
      {/* Print Header - Visible only in Print/PDF Mode */}
      <div className="hidden print:flex justify-between items-end border-b-2 border-slate-200 pb-4 mb-8">
        <div>
           <div className="flex items-center gap-2 mb-1">
             <Shield className="w-6 h-6 text-slate-900" />
             <h1 className="text-xl font-bold text-slate-900">GRC Hub Report</h1>
           </div>
           <p className="text-sm text-slate-500 font-medium">Global Compliance Assessment & Checklist</p>
        </div>
        <div className="text-right">
           <p className="text-xs text-slate-500 mb-1">
             <span className="font-bold text-slate-700">Report Generated:</span> {new Date().toLocaleString()}
           </p>
           <p className="text-xs text-slate-500">
             <span className="font-bold text-slate-700">Author:</span> Purushotham Muktha
           </p>
        </div>
      </div>

      {/* Navigation & Actions */}
      <div className="flex justify-between items-center print:hidden">
        <button 
          onClick={onBack}
          className="flex items-center text-sm font-medium text-slate-400 hover:text-white transition-colors group px-3 py-2 rounded-lg hover:bg-slate-800/50"
        >
          <ChevronRight className="w-4 h-4 rotate-180 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Library
        </button>

        <div className="flex gap-3">
          {framework.link && (
             <a 
              href={framework.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 text-slate-300 rounded-lg transition-all text-sm font-medium"
            >
              Official Source <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <button 
            onClick={onPrint}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all text-sm font-bold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40"
          >
            <Printer className="w-4 h-4" />
            Print Report
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className={`relative overflow-hidden rounded-3xl border border-${framework.colorTheme}-500/20 bg-gradient-to-br from-slate-900 via-slate-900 to-${framework.colorTheme}-950/40 p-8 md:p-12 shadow-2xl print:shadow-none print:border-black print:bg-white`}>
        {/* Decorative Background Elements */}
        <div className={`absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 rounded-full bg-${framework.colorTheme}-500/10 blur-[100px] print:hidden`} />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-[80px] print:hidden" />
        
        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
          {/* Logo Container */}
          <div className={`flex-shrink-0 h-24 w-24 md:h-32 md:w-32 rounded-2xl bg-slate-950/60 border border-slate-800/80 p-5 flex items-center justify-center shadow-2xl backdrop-blur-md print:hidden`}>
             {framework.logoUrl ? (
                <img src={framework.logoUrl} alt={`${framework.name} logo`} className="max-w-full max-h-full object-contain" />
            ) : (
                <Shield className={`h-14 w-14 text-${framework.colorTheme}-500`} />
            )}
          </div>
          
          <div className="flex-1 space-y-5">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex items-center rounded-lg bg-${framework.colorTheme}-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-${framework.colorTheme}-400 ring-1 ring-inset ring-${framework.colorTheme}-400/20 print:border print:border-black print:text-black`}>
                {framework.category}
              </span>
              <span className="inline-flex items-center rounded-lg bg-slate-800/60 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300 ring-1 ring-inset ring-slate-700/60 print:hidden">
                {framework.industry}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white print:text-black leading-tight">
              {framework.name}
            </h1>

            <p className="max-w-4xl text-lg md:text-xl text-slate-300 leading-relaxed font-light print:text-black">
              {framework.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Key Intelligence Grid (4 Columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-2">
         {[
           { title: "Primary Purpose", icon: Target, text: framework.purpose, color: "blue" },
           { title: "Strategic Value", icon: Shield, text: framework.importance, color: "emerald" },
           { title: "When to Apply", icon: Calendar, text: framework.whenToApply, color: "amber" },
           { title: "Target Audience", icon: Users, text: framework.whereToApply, color: "purple" }
         ].map((item, i) => (
           <div key={i} className="bg-slate-900/40 border border-slate-800/60 rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300 group print:bg-white print:border-black">
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20 transition-colors`}>
                    <item.icon className={`w-4 h-4 text-${item.color}-400`} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">{item.title}</h3>
              </div>
              <p className="text-sm font-medium text-slate-200 leading-relaxed print:text-black">{item.text}</p>
           </div>
         ))}
      </div>

      {/* Main Content Area: Asymmetric Grid (8/4 Split) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 print:block">
          
          {/* LEFT COLUMN (8/12): Core Content, Scenarios, Use Cases */}
          <div className="xl:col-span-8 space-y-8 flex flex-col print:break-inside-avoid">
             
             {/* 1. Architecture Visual */}
             {framework.diagramType && framework.diagramType !== 'none' && (
                <div className="bg-slate-900/30 border border-slate-800 rounded-3xl overflow-hidden print:bg-white print:border-black shadow-lg">
                    <div className="px-8 py-5 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm flex items-center gap-3">
                        <Workflow className={`w-5 h-5 text-${framework.colorTheme}-400`} />
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider print:text-black">Framework Architecture</h3>
                    </div>
                    <div className="p-8 bg-slate-950/30">
                       <FrameworkDiagram framework={framework} />
                    </div>
                </div>
             )}

             {/* 2. Methodology / How to Apply */}
             <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-10 print:bg-white print:border-black shadow-sm hover:border-slate-700 transition-colors">
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-800/50">
                  <div className={`p-3 rounded-xl bg-${framework.colorTheme}-500/10 border border-${framework.colorTheme}-500/20`}>
                    <BookOpen className={`w-6 h-6 text-${framework.colorTheme}-400`} />
                  </div>
                  <div>
                      <h3 className="text-2xl font-bold text-white print:text-black">Implementation Strategy</h3>
                      <p className="text-sm text-slate-500 mt-1">Core methodology and execution principles</p>
                  </div>
                </div>
                {/* Text Parser Applied Here */}
                <div className="prose prose-invert prose-lg max-w-none text-slate-300/90 leading-relaxed whitespace-pre-line print:text-black font-light">
                  {formatText(framework.howToApply)}
                </div>
             </div>

             {/* 3. Narrative / In Practice */}
             {framework.scenarios && (
               <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-10 print:bg-white print:border-black shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <Lightbulb className="w-6 h-6 text-amber-400" />
                    </div>
                     <div>
                      <h3 className="text-2xl font-bold text-white print:text-black">In Practice</h3>
                      <p className="text-sm text-slate-500 mt-1">Real world application example</p>
                  </div>
                  </div>
                  <div className="bg-slate-950/50 rounded-2xl p-6 border border-slate-800/50 relative overflow-hidden">
                      <Quote className="absolute top-4 right-4 w-12 h-12 text-slate-800/50 -rotate-12" />
                      {/* Text Parser Applied Here */}
                      <div className="prose prose-invert prose-slate max-w-none text-slate-300 leading-relaxed whitespace-pre-line print:text-black relative z-10">
                        {formatText(framework.scenarios)}
                      </div>
                  </div>
               </div>
             )}

             {/* 4. Specific Use Cases (Moved to Left Column) */}
             {framework.useCases.length > 0 && (
                <div className="bg-slate-900/30 border border-slate-800 rounded-3xl p-8 md:p-10 print:bg-white print:border-black">
                   <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                            <Layers className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white print:text-black">Specific Scenarios</h3>
                            <p className="text-sm text-slate-500 mt-1">Targeted use cases and domains</p>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {framework.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex flex-col gap-3 p-6 rounded-2xl bg-slate-950/40 border border-slate-800 hover:border-purple-500/30 hover:bg-slate-900/60 transition-all group">
                                <div className="flex items-center gap-3">
                                     <div className={`w-1.5 h-1.5 rounded-full bg-${framework.colorTheme}-400 group-hover:scale-150 transition-transform`} />
                                     <h4 className="font-bold text-white text-lg print:text-black">{useCase.title}</h4>
                                </div>
                                <p className="text-sm text-slate-400 leading-relaxed print:text-black pl-4.5 border-l border-slate-800 group-hover:border-purple-500/20 transition-colors">
                                    {useCase.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
             )}
          </div>

          {/* RIGHT COLUMN (4/12): Sticky Roadmap */}
          <div className="xl:col-span-4 space-y-8 print:mt-8 print:break-inside-avoid">
             
             {/* Sticky Wrapper */}
             <div className="sticky top-6 space-y-6">
                 
                 {framework.implementationSteps && framework.implementationSteps.length > 0 ? (
                    <div className="bg-slate-900/80 border border-slate-700/50 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl ring-1 ring-white/5 print:bg-white print:border-black print:static print:shadow-none">
                        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/5">
                            <div className={`p-2 rounded-lg bg-${framework.colorTheme}-500/20 ring-1 ring-${framework.colorTheme}-500/40`}>
                                <Route className={`w-5 h-5 text-${framework.colorTheme}-400`} />
                            </div>
                            <h3 className="text-lg font-bold text-white print:text-black">Execution Roadmap</h3>
                        </div>
                        
                        <div className="relative pl-2">
                            {/* Connecting Line */}
                            <div className="absolute left-[19px] top-2 bottom-6 w-0.5 bg-gradient-to-b from-slate-700 via-slate-800 to-transparent print:bg-slate-300" />
                            
                            {framework.implementationSteps.map((step, idx) => (
                                <div key={idx} className="relative pl-10 pb-8 last:pb-0 group">
                                    {/* Step Dot */}
                                    <div className={`absolute left-0 top-0.5 w-10 h-10 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-${framework.colorTheme}-500 group-hover:shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] transition-all flex items-center justify-center z-10 print:bg-white print:border-black`}>
                                        <span className={`text-${framework.colorTheme}-400 font-bold text-sm print:text-black`}>{step.phase}</span>
                                    </div>
                                    
                                    <div className="group-hover:translate-x-1 transition-transform duration-300">
                                        <h4 className={`text-white font-bold text-base mb-1.5 group-hover:text-${framework.colorTheme}-300 transition-colors print:text-black`}>{step.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed print:text-black">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                 ) : (
                    <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center">
                        <p className="text-slate-500 text-sm">No specific roadmap available for this framework.</p>
                    </div>
                 )}

                 {/* Mini Call to Action for Checklist */}
                 <div className="hidden xl:block bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-sm">
                    <h4 className="text-white font-bold mb-2">Ready to audit?</h4>
                    <p className="text-indigo-200/60 text-sm mb-4">Jump down to the interactive controls checklist.</p>
                    <a 
                      href="#checklist-section" 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('checklist-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="block w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-center rounded-xl font-bold text-sm transition-colors shadow-lg shadow-indigo-900/20"
                    >
                        Go to Checklist
                    </a>
                 </div>

             </div>
          </div>
      </div>

      {/* SECTION DIVIDER */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-800/50"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-slate-950 px-4 text-sm text-slate-500 uppercase tracking-widest font-semibold">Implementation Phase</span>
        </div>
      </div>

      {/* Full Width Bottom Action Area */}
      <div className="print:break-before-page scroll-mt-24" id="checklist-section">
         <div className="bg-slate-900/20 rounded-[2.5rem] border border-slate-800/50 p-8 md:p-12 print:bg-white print:border-none print:p-0 relative overflow-hidden">
             
             {/* Background glow */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

             <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6 mb-12">
                <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 rounded-2xl bg-${framework.colorTheme}-500/10 ring-1 ring-${framework.colorTheme}-500/20`}>
                            <CheckSquare className={`w-8 h-8 text-${framework.colorTheme}-400`} />
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tight print:text-black">
                        Controls Checklist
                        </h3>
                    </div>
                    <p className="text-slate-400 text-lg leading-relaxed print:text-black pl-1">
                      This interactive tool functions as a preliminary gap analysis. Track your implementation status, add custom controls, and identify deficiencies before a formal audit.
                    </p>
                </div>
             </div>
             
             <div className="w-full relative z-10">
                <ComplianceChecklist framework={framework} />
             </div>
         </div>
      </div>

    </motion.div>
  );
};

export default DetailView;
    