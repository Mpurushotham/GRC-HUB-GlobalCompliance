
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Cloud, Server, Database, Layers, CheckCircle2, 
  ArrowRight, Building2, ShieldCheck, Map, FileCheck,
  Code, HardDrive, Layout, Key, Lock, Users
} from 'lucide-react';

// --- DATA STRUCTURES ---

const RESPONSIBILITY_MODELS = [
  {
    id: 'iaas',
    title: 'IaaS',
    subtitle: 'Infrastructure as a Service',
    desc: 'You manage the OS and up. Provider manages the hardware.',
    icon: Server,
    providerLayers: ['Physical Data Center', 'Network Infrastructure', 'Host Infrastructure'],
    customerLayers: ['Guest OS', 'Network Config', 'Applications', 'Identity & Access', 'Data'],
    providerColor: 'bg-sky-900/40 border-sky-700/50 text-sky-200',
    customerColor: 'bg-indigo-600 border-indigo-500 text-white',
    complianceFocus: 'Technical & Config Controls (NIST 800-53, CIS)',
    examples: 'AWS EC2, Azure VMs, Google Compute Engine'
  },
  {
    id: 'paas',
    title: 'PaaS',
    subtitle: 'Platform as a Service',
    desc: 'Provider manages the runtime. You manage apps and data.',
    icon: Database,
    providerLayers: ['Physical Data Center', 'Network Infrastructure', 'Host Infrastructure', 'Operating System', 'Runtime Platform'],
    customerLayers: ['Applications', 'Identity & Access', 'Data'],
    providerColor: 'bg-sky-900/60 border-sky-700/50 text-sky-200',
    customerColor: 'bg-indigo-600 border-indigo-500 text-white',
    complianceFocus: 'App Security & Governance (OWASP, GDPR)',
    examples: 'AWS RDS, Azure SQL, Google App Engine'
  },
  {
    id: 'saas',
    title: 'SaaS',
    subtitle: 'Software as a Service',
    desc: 'Provider manages everything except your data and users.',
    icon: Layout,
    providerLayers: ['Physical Data Center', 'Network Infrastructure', 'Host Infrastructure', 'Operating System', 'Runtime Platform', 'Application Code'],
    customerLayers: ['Identity & Access', 'Data', 'Config Settings'],
    providerColor: 'bg-sky-900/80 border-sky-700/50 text-sky-200',
    customerColor: 'bg-indigo-600 border-indigo-500 text-white',
    complianceFocus: 'Config & Privacy (SOC 2 Review, User Access)',
    examples: 'Salesforce, Microsoft 365, Slack'
  }
];

const MIGRATION_SCENARIOS = [
  {
    title: "Virtual Data Center",
    subtitle: "Legacy App Migration",
    model: "IaaS",
    services: ["AWS EC2", "Azure VMs", "Google Compute Engine"],
    frameworks: [
      { name: "CIS Benchmarks", reason: "For OS & network hardening." },
      { name: "PCI DSS", reason: "If processing payments." },
      { name: "NIST SP 800-53", reason: "General security controls." }
    ]
  },
  {
    title: "Web App & Database",
    subtitle: "Modernization",
    model: "PaaS",
    services: ["AWS RDS", "Azure SQL DB", "AWS Elastic Beanstalk"],
    frameworks: [
      { name: "OWASP ASVS", reason: "For application security verification." },
      { name: "SOC 2", reason: "Trust principles of the service." },
      { name: "GDPR", reason: "Data sovereignty in the database." }
    ]
  },
  {
    title: "DevOps Platform",
    subtitle: "CI/CD Pipeline",
    model: "PaaS / IaaS",
    services: ["AWS EKS", "GitHub Actions", "Azure DevOps"],
    frameworks: [
      { name: "NIST 800-53 (SA-15)", reason: "Development security." },
      { name: "SOC 2", reason: "Integrity of the pipeline." },
      { name: "ISO 27001", reason: "Secure development lifecycle." }
    ]
  },
  {
    title: "CRM Operations",
    subtitle: "Business Apps",
    model: "SaaS",
    services: ["Salesforce", "HubSpot", "Dynamics 365"],
    frameworks: [
      { name: "SOC 2 Report", reason: "Primary evidence for provider controls." },
      { name: "GDPR/CCPA", reason: "Customer data privacy." },
      { name: "Internal IAM", reason: "User access reviews." }
    ]
  },
  {
    title: "Collaboration",
    subtitle: "Productivity Suite",
    model: "SaaS",
    services: ["M365", "Google Workspace", "Slack"],
    frameworks: [
      { name: "SOC 2 Report", reason: "Relying on provider controls." },
      { name: "DLP Audits", reason: "Protecting data in files/emails." },
      { name: "Config Audits", reason: "MFA enforcement, Sharing policies." }
    ]
  },
  {
    title: "Data Analytics",
    subtitle: "Warehousing",
    model: "PaaS / SaaS",
    services: ["Snowflake", "BigQuery", "Redshift"],
    frameworks: [
      { name: "ISO 27001", reason: "Trust in the platform." },
      { name: "Data Sovereignty", reason: "GDPR data location rules." },
      { name: "Data Governance", reason: "Classification & Encryption." }
    ]
  }
];

// --- SUB-COMPONENTS ---

const ResponsibilityStack = ({ model }: { model: typeof RESPONSIBILITY_MODELS[0] }) => (
  <div className="flex flex-col h-full gap-1">
    {/* Customer Layers (Top) */}
    {model.customerLayers.map((layer, i) => (
      <motion.div 
        key={`cust-${i}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.05 }}
        className={`p-3 rounded-lg border ${model.customerColor} text-center text-xs font-bold shadow-lg flex items-center justify-center gap-2`}
      >
        <ShieldCheck className="w-3 h-3 opacity-70" /> {layer}
      </motion.div>
    ))}
    
    {/* Divider */}
    <div className="h-0.5 bg-slate-700 my-2 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900 px-2 text-[10px] text-slate-500 uppercase tracking-widest">Responsibility Boundary</div>
    </div>

    {/* Provider Layers (Bottom) */}
    {model.providerLayers.slice().reverse().map((layer, i) => (
      <motion.div 
        key={`prov-${i}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: (i + 5) * 0.05 }}
        className={`p-3 rounded-lg border ${model.providerColor} text-center text-xs font-medium flex items-center justify-center gap-2`}
      >
        <Cloud className="w-3 h-3 opacity-70" /> {layer}
      </motion.div>
    ))}
  </div>
);

const RoadmapStep = ({ number, title, desc, icon: Icon }: { number: string, title: string, desc: any, icon: any }) => (
  <div className="relative flex gap-6 pb-12 last:pb-0 group">
    {/* Line */}
    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-slate-800/50 group-last:hidden" />
    
    {/* Icon */}
    <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-slate-900 border border-indigo-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.2)] group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-indigo-400" />
        </div>
        <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-sky-500 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
            {number}
        </div>
    </div>

    {/* Content */}
    <div className="bg-slate-900/40 border border-slate-800/60 p-6 rounded-2xl flex-1 hover:bg-slate-900/60 transition-colors">
        <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
        <div className="text-slate-400 text-sm leading-relaxed">{desc}</div>
    </div>
  </div>
);

const CloudGrcView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'srm' | 'migrations' | 'roadmap'>('srm');

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-10"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-slate-800/50">
        <div>
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight flex items-center gap-4">
             <div className="p-3 bg-sky-500/10 rounded-2xl border border-sky-500/20">
                <Cloud className="w-8 h-8 text-sky-500" /> 
             </div>
             Cloud GRC
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl pl-1">
             Navigating the Shared Responsibility Model and compliance in public cloud environments.
          </p>
        </div>
        
        <div className="flex bg-slate-900 p-1 rounded-xl border border-slate-800">
            {[
                { id: 'srm', label: 'Shared Responsibility', icon: Layers },
                { id: 'migrations', label: 'Migrations', icon: ArrowRight },
                { id: 'roadmap', label: 'Strategic Roadmap', icon: Map }
            ].map(tab => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${
                        activeTab === tab.id 
                        ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/20' 
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                </button>
            ))}
        </div>
      </div>

      <div className="min-h-[600px]">
        <AnimatePresence mode="wait">
            
            {/* --- SHARED RESPONSIBILITY MODEL --- */}
            {activeTab === 'srm' && (
                <motion.div 
                    key="srm"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {RESPONSIBILITY_MODELS.map((model) => (
                        <div key={model.id} className="bg-slate-900/40 border border-slate-800/60 rounded-3xl p-6 flex flex-col h-full relative overflow-hidden group">
                            <div className="flex items-center gap-4 mb-6 relative z-10">
                                <div className={`p-3 rounded-xl ${model.providerColor} bg-opacity-10`}>
                                    <model.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{model.title}</h3>
                                    <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{model.subtitle}</p>
                                </div>
                            </div>
                            
                            <div className="flex-1 mb-8 relative z-10">
                                <ResponsibilityStack model={model} />
                            </div>

                            <div className="space-y-4 mt-auto relative z-10 pt-6 border-t border-slate-800/50">
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Your GRC Focus</p>
                                    <p className="text-indigo-300 text-sm font-semibold">{model.complianceFocus}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-500 uppercase font-bold mb-1">Common Examples</p>
                                    <p className="text-slate-400 text-xs">{model.examples}</p>
                                </div>
                            </div>

                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${model.id === 'iaas' ? 'from-sky-500/5' : model.id === 'paas' ? 'from-indigo-500/5' : 'from-purple-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        </div>
                    ))}
                </motion.div>
            )}

            {/* --- MIGRATION SCENARIOS --- */}
            {activeTab === 'migrations' && (
                <motion.div 
                    key="migrations"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                    {MIGRATION_SCENARIOS.map((scenario, idx) => (
                        <div key={idx} className="bg-slate-900/40 border border-slate-800 hover:border-sky-500/30 rounded-2xl p-6 transition-all group hover:-translate-y-1 duration-300 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Cloud className="w-24 h-24 text-sky-400" />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{scenario.title}</h3>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">{scenario.subtitle}</p>
                                </div>
                                <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                                    scenario.model.includes('IaaS') ? 'bg-indigo-900/50 text-indigo-300 border border-indigo-700' : 
                                    scenario.model.includes('SaaS') ? 'bg-purple-900/50 text-purple-300 border border-purple-700' : 
                                    'bg-sky-900/50 text-sky-300 border border-sky-700'
                                }`}>
                                    {scenario.model}
                                </span>
                            </div>

                            <div className="mb-6">
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-2">Typical Services</p>
                                <div className="flex flex-wrap gap-2">
                                    {scenario.services.map(s => (
                                        <span key={s} className="text-xs bg-slate-950 text-slate-300 px-2 py-1 rounded border border-slate-800">{s}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className="text-[10px] text-slate-500 uppercase font-bold mb-3 flex items-center gap-2">
                                    <ShieldCheck className="w-3 h-3" /> Compliance Targets
                                </p>
                                <div className="space-y-3">
                                    {scenario.frameworks.map((fw, i) => (
                                        <div key={i} className="flex items-start gap-3 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                            <div>
                                                <span className="text-white font-semibold">{fw.name}</span>
                                                <span className="text-slate-500 block text-xs">{fw.reason}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            )}

            {/* --- STRATEGIC ROADMAP --- */}
            {activeTab === 'roadmap' && (
                <motion.div 
                    key="roadmap"
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 xl:grid-cols-3 gap-10"
                >
                    {/* Timeline */}
                    <div className="xl:col-span-2">
                        <RoadmapStep 
                            number="01" 
                            title="Classify Your Data" 
                            icon={Database}
                            desc={<>
                                Before anything else, understand what data you are migrating. Is it Public, Internal, Confidential, or Regulated (PII, PCI, ePHI)? This dictates everything.
                                <br/><br/>
                                <strong className="text-white">Action:</strong> Tag all assets. If it's PII, it needs encryption and stricter IAM.
                            </>}
                        />
                        <RoadmapStep 
                            number="02" 
                            title="Choose the Service Model" 
                            icon={Layers}
                            desc={<>
                                Align the service model (IaaS, PaaS, SaaS) with your team's ability to manage the corresponding responsibility. 
                                <br/><br/>
                                <strong className="text-white">Rule of Thumb:</strong> More control (IaaS) means more compliance responsibility. Use PaaS/SaaS to offload patching and physical security audits.
                            </>}
                        />
                        <RoadmapStep 
                            number="03" 
                            title="Leverage Provider Docs" 
                            icon={FileCheck}
                            desc={<>
                                Don't reinvent the wheel. Request the <strong>SOC 2 Type II</strong> report from your provider (AWS Artifact, Azure Service Trust). 
                                <br/><br/>
                                <strong className="text-white">Action:</strong> Map provider controls to your audit requirements. If AWS handles physical security, you don't audit their data center; you just file their cert.
                            </>}
                        />
                        <RoadmapStep 
                            number="04" 
                            title="Hybrid Auditing" 
                            icon={ScaleIcon}
                            desc={<>
                                Your audit becomes a two-part process:
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li><strong>Provider Side:</strong> Review their compliance certifications.</li>
                                    <li><strong>Your Side:</strong> Audit your configurations (e.g., S3 Bucket Policies, IAM Roles).</li>
                                </ul>
                            </>}
                        />
                    </div>

                    {/* Sidebar Tooling */}
                    <div className="xl:col-span-1 space-y-6">
                        <div className="bg-gradient-to-br from-indigo-900/40 to-slate-900 border border-indigo-500/30 p-6 rounded-3xl">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                <Code className="w-5 h-5 text-indigo-400" /> Native GRC Tools
                            </h3>
                            <p className="text-sm text-slate-400 mb-6">
                                Use these native tools to automatically check your configurations against benchmarks like CIS.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#FF9900]/10 rounded-lg flex items-center justify-center text-[#FF9900] font-bold">AWS</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Security Hub</div>
                                        <div className="text-slate-500 text-xs">Automated CIS Checks</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#0078D4]/10 rounded-lg flex items-center justify-center text-[#0078D4] font-bold">Az</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Azure Policy</div>
                                        <div className="text-slate-500 text-xs">Compliance Dashboard</div>
                                    </div>
                                </div>
                                <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 flex items-center gap-4">
                                    <div className="w-10 h-10 bg-[#34A853]/10 rounded-lg flex items-center justify-center text-[#34A853] font-bold">GCP</div>
                                    <div>
                                        <div className="text-white font-bold text-sm">Security Command Center</div>
                                        <div className="text-slate-500 text-xs">Threat Detection</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl">
                            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                <Key className="w-4 h-4 text-amber-400" /> Key Takeaway
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                In the cloud, compliance is a joint effort. Your role shifts from building every control to being an <strong>integrator</strong>—weaving the provider's infrastructure with your configurations.
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

        </AnimatePresence>
      </div>
    </motion.div>
  );
};

// Helper for Scale Icon
function ScaleIcon(props: any) {
    return (
      <svg 
        {...props} 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
        <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/>
        <path d="M7 21h10"/>
        <path d="M12 3v18"/>
        <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>
      </svg>
    );
  }

export default CloudGrcView;
