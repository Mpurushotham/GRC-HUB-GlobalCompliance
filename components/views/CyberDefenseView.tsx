
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Layers, Bot, Database, Eye, 
  Lock, Server, Wifi, FileWarning, Fingerprint,
  Cpu, Radar, AlertOctagon, Network, BrickWall,
  Laptop, HardDrive, Globe, Key, Activity, Scan,
  Terminal, Zap, Search
} from 'lucide-react';

type DefenseLayer = 'physical' | 'network' | 'host' | 'app' | 'data';

const LAYER_INFO: Record<DefenseLayer, {
  title: string;
  subtitle: string;
  icon: any;
  color: string;
  borderColor: string;
  glowColor: string;
  description: string;
  controls: { name: string; desc: string; icon: any }[];
}> = {
  physical: {
    title: "Physical Layer",
    subtitle: "Facility & Hardware Security",
    icon: BrickWall,
    color: "bg-slate-500",
    borderColor: "border-slate-500",
    glowColor: "shadow-slate-500/50",
    description: "The first line of defense. Ensuring physical access to hardware is restricted prevents theft, tampering, and direct console access attacks.",
    controls: [
      { name: "Perimeter Defense", desc: "Fences, bollards, and anti-tailgating mantraps.", icon: Lock },
      { name: "Surveillance", desc: "CCTV with motion detection and audit logs.", icon: Eye },
      { name: "Biometrics", desc: "Fingerprint or retina scanners for server rooms.", icon: Fingerprint },
      { name: "Environmental", desc: "Fire suppression (FM-200) and UPS redundancy.", icon: AlertOctagon }
    ]
  },
  network: {
    title: "Network Layer",
    subtitle: "Transit & Segmentation",
    icon: Network,
    color: "bg-sky-500",
    borderColor: "border-sky-500",
    glowColor: "shadow-sky-500/50",
    description: "Securing the transit infrastructure. Controls here filter traffic, segment assets, and prevent unauthorized connections.",
    controls: [
      { name: "Segmentation", desc: "VLANs to isolate Critical Assets (CDE/OT).", icon: Layers },
      { name: "NGFW", desc: "Next-Gen Firewalls with Deep Packet Inspection.", icon: ShieldCheck },
      { name: "IDS / IPS", desc: "Intrusion Detection & Prevention Systems.", icon: Radar },
      { name: "Zero Trust", desc: "Micro-segmentation and continuous verification.", icon: Fingerprint }
    ]
  },
  host: {
    title: "Host / Endpoint Layer",
    subtitle: "Device Hardening",
    icon: Laptop,
    color: "bg-blue-500",
    borderColor: "border-blue-500",
    glowColor: "shadow-blue-500/50",
    description: "Securing individual devices (servers, laptops, mobile). If the network is breached, the host must defend itself.",
    controls: [
      { name: "EDR / XDR", desc: "Endpoint Detection & Response agents.", icon: Radar },
      { name: "Patching", desc: "Automated vulnerability remediation.", icon: Cpu },
      { name: "Disk Encryption", desc: "BitLocker/FileVault for data-at-rest.", icon: Lock },
      { name: "Hardening", desc: "Disabling unused ports/services (CIS Benchmarks).", icon: Server }
    ]
  },
  app: {
    title: "Application Layer",
    subtitle: "Software Assurance",
    icon: Globe,
    color: "bg-indigo-500",
    borderColor: "border-indigo-500",
    glowColor: "shadow-indigo-500/50",
    description: "Ensuring software code and interfaces are secure. Prevents exploitation of logic flaws or injection vulnerabilities.",
    controls: [
      { name: "WAF", desc: "Web App Firewall blocking SQLi/XSS.", icon: ShieldCheck },
      { name: "Secure Coding", desc: "SAST/DAST integration in CI/CD pipeline.", icon: Cpu },
      { name: "Input Validation", desc: "Sanitizing all user inputs.", icon: FileWarning },
      { name: "API Security", desc: "OAuth 2.0 and rate limiting.", icon: Key }
    ]
  },
  data: {
    title: "Data Layer",
    subtitle: "Information Protection",
    icon: Database,
    color: "bg-emerald-500",
    borderColor: "border-emerald-500",
    glowColor: "shadow-emerald-500/50",
    description: "The core value. Even if all other layers fail, the data itself should be unreadable or useless to the attacker.",
    controls: [
      { name: "Encryption", desc: "AES-256 for storage, TLS 1.3 for transit.", icon: Lock },
      { name: "DLP", desc: "Data Loss Prevention policies.", icon: Eye },
      { name: "IAM", desc: "Role-Based Access Control (RBAC).", icon: Fingerprint },
      { name: "Backups", desc: "Immutable (WORM) offline backups.", icon: HardDrive }
    ]
  }
};

// --- VISUALIZATION COMPONENTS ---

const RadarScan = () => (
  <motion.div 
    animate={{ rotate: 360 }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 pointer-events-none"
  >
    <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent absolute top-1/2 shadow-[0_0_20px_rgba(16,185,129,0.5)]" />
    <div className="w-1/2 h-1/2 bg-gradient-to-tl from-emerald-500/20 to-transparent absolute top-0 left-1/2 rounded-tl-full origin-bottom-left transform -rotate-45" />
  </motion.div>
);

const DefenseInDepthVisual = ({ activeLayer, setActiveLayer }: { activeLayer: DefenseLayer | null, setActiveLayer: (l: DefenseLayer | null) => void }) => {
  
  const layers = [
    { id: 'data', size: 120 },
    { id: 'app', size: 240 },
    { id: 'host', size: 360 },
    { id: 'network', size: 480 },
    { id: 'physical', size: 600 },
  ];

  return (
    <div className="relative w-full h-[650px] flex items-center justify-center overflow-hidden bg-black rounded-3xl border border-slate-800 shadow-2xl group">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px]" />

      {/* Radar Scan Effect */}
      <div className="absolute inset-0 opacity-20">
         <RadarScan />
      </div>

      {/* Orbiting Particles Animation */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-[700px] h-[700px] border border-dashed border-slate-700/30 rounded-full pointer-events-none"
      >
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-cyan-400 rounded-full blur-[2px] shadow-[0_0_10px_cyan]" />
         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full blur-[2px] shadow-[0_0_10px_purple]" />
      </motion.div>

      {/* Interactive Layers */}
      <div className="relative z-10 flex items-center justify-center">
        {layers.slice().reverse().map((layer, index) => {
           const info = LAYER_INFO[layer.id as DefenseLayer];
           const isActive = activeLayer === layer.id;
           const isHovered = activeLayer && activeLayer !== layer.id; // dimmed state

           return (
            <motion.div
              key={layer.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: isHovered ? 0.3 : 1,
                borderColor: isActive ? 'rgba(255,255,255,0.8)' : 'rgba(71,85,105,0.4)',
                boxShadow: isActive ? `0 0 30px ${info.color.replace('bg-', '')}` : 'none'
              }}
              transition={{ delay: index * 0.1 }}
              style={{ width: layer.size, height: layer.size, zIndex: 50 - index }}
              className={`absolute rounded-full border-2 ${isActive ? info.borderColor : ''} bg-slate-900/40 backdrop-blur-[1px] flex items-start justify-center cursor-pointer transition-all duration-300 hover:bg-slate-800/40 hover:border-slate-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]`}
              onClick={() => setActiveLayer(isActive ? null : layer.id as DefenseLayer)}
            >
              <div className={`mt-4 flex flex-col items-center transition-all duration-300 ${isActive ? 'scale-110 -translate-y-1' : ''}`}>
                  <div className={`p-1.5 rounded-full ${isActive ? info.color : 'bg-slate-800'} transition-colors duration-300`}>
                    <info.icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-widest mt-1 ${isActive ? 'text-white drop-shadow-md' : 'text-slate-600'}`}>
                    {info.title.split(' ')[0]}
                  </span>
              </div>
            </motion.div>
          );
        })}
        
        {/* Core Jewel */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full shadow-[0_0_50px_rgba(16,185,129,0.6)] z-50 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform border-2 border-emerald-300"
          onClick={() => setActiveLayer('data')}
        >
             <Database className="w-8 h-8 text-white drop-shadow-lg" />
        </motion.div>
      </div>

      {/* Info Panel Overlay */}
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end pointer-events-none">
         <div className="bg-black/80 backdrop-blur-xl border border-slate-800 p-5 rounded-2xl shadow-2xl max-w-xs pointer-events-auto">
            <h4 className="text-white font-bold flex items-center gap-2 mb-2">
              <Scan className="w-4 h-4 text-cyan-400"/> Interactive Defense Model
            </h4>
            <p className="text-slate-400 text-xs leading-relaxed">
              Click on any ring to inspect the security controls for that layer. The architecture assumes breach at outer layers.
            </p>
         </div>
         
         {activeLayer && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setActiveLayer(null)}
              className="bg-white hover:bg-slate-200 text-black px-5 py-2.5 rounded-xl text-xs font-bold pointer-events-auto transition-colors shadow-lg shadow-white/10 flex items-center gap-2"
            >
              <Scan className="w-3 h-3" /> Reset View
            </motion.button>
         )}
      </div>
    </div>
  );
};

// --- SUB-VIEWS ---

const ArchitectureContent = () => {
  const [activeLayer, setActiveLayer] = useState<DefenseLayer | null>(null);
  
  const activeInfo = activeLayer ? LAYER_INFO[activeLayer] : null;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
       {/* Visual */}
       <DefenseInDepthVisual activeLayer={activeLayer} setActiveLayer={setActiveLayer} />

       {/* Dynamic Details Panel */}
       <AnimatePresence mode="wait">
         {activeLayer && activeInfo ? (
            <motion.div 
              key={activeLayer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
            >
               {/* Description Card */}
               <div className="lg:col-span-1 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-8 rounded-3xl relative overflow-hidden group shadow-2xl">
                  <div className={`absolute top-0 right-0 w-40 h-40 ${activeInfo.color} opacity-10 rounded-bl-full group-hover:scale-110 transition-transform duration-700 blur-2xl`} />
                  <activeInfo.icon className={`w-12 h-12 ${activeInfo.color.replace('bg-', 'text-')} mb-6 relative z-10 drop-shadow-lg`} />
                  <h3 className="text-3xl font-black text-white mb-2 relative z-10">{activeInfo.title}</h3>
                  <p className={`text-xs font-bold uppercase tracking-widest ${activeInfo.color.replace('bg-', 'text-')} mb-6 relative z-10`}>{activeInfo.subtitle}</p>
                  <div className="w-10 h-1 bg-slate-800 mb-6 rounded-full" />
                  <p className="text-slate-400 leading-relaxed relative z-10 font-light">{activeInfo.description}</p>
               </div>

               {/* Controls Grid */}
               <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeInfo.controls.map((control, idx) => (
                    <div key={idx} className="bg-slate-900/40 border border-slate-800/60 hover:border-slate-600 hover:bg-slate-800/60 p-6 rounded-2xl transition-all group hover:-translate-y-1 duration-300 backdrop-blur-sm">
                       <div className="flex items-start gap-5">
                          <div className={`p-3 bg-slate-950 rounded-xl border border-slate-800 group-hover:${activeInfo.borderColor} group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all duration-300`}>
                             <control.icon className={`w-6 h-6 text-slate-400 group-hover:${activeInfo.color.replace('bg-', 'text-')} transition-colors`} />
                          </div>
                          <div>
                             <h4 className="text-white font-bold text-lg mb-1">{control.name}</h4>
                             <p className="text-slate-400 text-sm leading-relaxed">{control.desc}</p>
                          </div>
                       </div>
                    </div>
                  ))}
               </div>
            </motion.div>
         ) : (
            <motion.div 
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {[
                  { title: "Layered Redundancy", desc: "No single security control is infallible. Multiple overlapping layers ensure that if one fails, others stand in the way of a breach.", icon: Layers, color: "text-indigo-400", bg: "bg-indigo-500/10" },
                  { title: "Assume Breach", desc: "Design architectures assuming the outer perimeter has already been penetrated. Focus on containment and lateral movement restriction.", icon: AlertOctagon, color: "text-rose-400", bg: "bg-rose-500/10" },
                  { title: "Least Privilege", desc: "Users and services should only have the minimum access necessary to perform their function, limiting the blast radius of compromised credentials.", icon: Lock, color: "text-emerald-400", bg: "bg-emerald-500/10" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/30 p-8 rounded-3xl border border-slate-800 hover:bg-slate-900/60 transition-colors group cursor-default">
                      <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className={`w-7 h-7 ${item.color}`} />
                      </div>
                      <h4 className="text-white font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-sm font-light">{item.desc}</p>
                  </div>
                ))}
            </motion.div>
         )}
       </AnimatePresence>
    </div>
  );
};

const AiSecurityContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
     <div className="col-span-full bg-gradient-to-r from-purple-950/50 to-indigo-950/50 border border-indigo-500/30 p-10 rounded-3xl relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="flex items-center gap-6 mb-6 relative z-10">
            <div className="p-4 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                <Bot className="w-10 h-10 text-indigo-300" />
            </div>
            <div>
                <h3 className="text-3xl font-black text-white tracking-tight">AI Security Governance</h3>
                <p className="text-indigo-200/80 font-medium">Securing LLMs and Generative AI Implementations</p>
            </div>
        </div>
        <p className="text-slate-300 leading-relaxed max-w-4xl relative z-10 text-lg font-light">
            As organizations adopt AI, the attack surface expands. Security must move from model protection to prompt engineering defense and output validation. This requires a systematic approach aligning with <strong className="text-white">NIST AI RMF</strong> and <strong className="text-white">OWASP Top 10 for LLM</strong>.
        </p>
     </div>

     <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl hover:border-emerald-500/30 transition-all group">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" /> 
            OWASP LLM Top 10 Defense
        </h4>
        <ul className="space-y-5">
            {[
                { title: "Prompt Injection", desc: "Use delimiters and parametrized queries to separate instructions from data." },
                { title: "Insecure Output Handling", desc: "Treat LLM output as untrusted user input; encode before rendering." },
                { title: "Training Data Poisoning", desc: "Validate supply chain of data; use SBOMs for datasets." },
                { title: "Model Denial of Service", desc: "Cap context window and resource usage per user." }
            ].map((item, i) => (
                <li key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                    <div>
                        <span className="text-slate-200 font-bold block mb-1 group-hover:text-emerald-300 transition-colors">{item.title}</span> 
                        <span className="text-slate-400 text-sm leading-relaxed block">{item.desc}</span>
                    </div>
                </li>
            ))}
        </ul>
     </div>

     <div className="bg-slate-900/40 border border-slate-800/60 p-8 rounded-3xl hover:border-amber-500/30 transition-all group">
        <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
            <FileWarning className="w-6 h-6 text-amber-400" /> 
            Implementation Checklist
        </h4>
        <div className="space-y-3">
            {[
                "Establish an AI Acceptable Use Policy (AUP)",
                "Implement 'Human in the Loop' for high-stakes decisions",
                "Red Team models for jailbreak vulnerability",
                "Monitor for model drift and hallucinations",
                "Sanitize PII from training datasets"
            ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-xl border border-slate-800/50 hover:bg-slate-900 transition-colors">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-700 flex items-center justify-center group-hover:border-amber-500/50 transition-colors">
                        <div className="w-2 h-2 bg-slate-600 rounded-full group-hover:bg-amber-500 transition-colors" />
                    </div>
                    <span className="text-slate-300 font-medium">{item}</span>
                </div>
            ))}
        </div>
     </div>
  </div>
);

const DataSecurityContent = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
             {['Discover', 'Classify', 'Protect', 'Monitor'].map((step, i) => (
                 <div key={i} className="relative p-8 bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden group hover:bg-slate-900 transition-all hover:-translate-y-1 duration-300">
                     <div className="absolute -right-6 -top-6 text-[120px] font-black text-slate-800/30 opacity-20 z-0 group-hover:text-sky-900/20 transition-colors">{i+1}</div>
                     <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{step}</h3>
                     <p className="text-xs text-slate-400 relative z-10 leading-relaxed font-medium uppercase tracking-wide">
                         {i===0 && "Scan endpoints, cloud, and servers to find dark data."}
                         {i===1 && "Tag data based on sensitivity (Public, Internal, Confidential)."}
                         {i===2 && "Apply encryption, access controls, and retention policies."}
                         {i===3 && "Audit usage and alert on anomalous exfiltration patterns."}
                     </p>
                     <div className="mt-6 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-sky-500 w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out shadow-[0_0_15px_rgba(14,165,233,0.8)]" />
                     </div>
                 </div>
             ))}
        </div>

        <div className="bg-slate-900/40 border border-slate-800 rounded-3xl p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
            
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="p-2 bg-sky-500/10 rounded-lg"><Fingerprint className="w-6 h-6 text-sky-400" /></div>
                DLP Policy Framework
            </h3>
            
            <div className="overflow-hidden rounded-xl border border-slate-800">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-950 text-slate-400 uppercase text-xs font-bold tracking-wider">
                        <tr>
                            <th className="py-4 px-6 border-b border-slate-800">Data Type</th>
                            <th className="py-4 px-6 border-b border-slate-800">Identifiers</th>
                            <th className="py-4 px-6 border-b border-slate-800">Action</th>
                            <th className="py-4 px-6 border-b border-slate-800">Channel Scope</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 bg-slate-900/50 text-slate-300">
                        <tr className="group hover:bg-slate-800/50 transition-colors">
                            <td className="py-5 px-6 font-bold text-white group-hover:text-sky-300 transition-colors">PII (GDPR/CCPA)</td>
                            <td className="py-5 px-6 font-mono text-xs text-slate-400">SSN, Email, Tax ID, Passport</td>
                            <td className="py-5 px-6"><span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20 text-[10px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(244,63,94,0.1)]">BLOCK</span></td>
                            <td className="py-5 px-6 text-xs font-medium">Email, USB, Cloud Upload, Print</td>
                        </tr>
                        <tr className="group hover:bg-slate-800/50 transition-colors">
                            <td className="py-5 px-6 font-bold text-white group-hover:text-sky-300 transition-colors">PCI DSS</td>
                            <td className="py-5 px-6 font-mono text-xs text-slate-400">Credit Card PAN (Luhn Algo)</td>
                            <td className="py-5 px-6"><span className="px-3 py-1 bg-rose-500/10 text-rose-400 rounded-full border border-rose-500/20 text-[10px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(244,63,94,0.1)]">BLOCK</span></td>
                            <td className="py-5 px-6 text-xs font-medium">Unencrypted Email, Slack, Web Forms</td>
                        </tr>
                        <tr className="group hover:bg-slate-800/50 transition-colors">
                            <td className="py-5 px-6 font-bold text-white group-hover:text-sky-300 transition-colors">Internal IP</td>
                            <td className="py-5 px-6 font-mono text-xs text-slate-400">"Confidential" Watermark, Project Codes</td>
                            <td className="py-5 px-6"><span className="px-3 py-1 bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 text-[10px] font-black uppercase tracking-wider shadow-[0_0_10px_rgba(245,158,11,0.1)]">ENCRYPT</span></td>
                            <td className="py-5 px-6 text-xs font-medium">Email to External Domains</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

const SocContent = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        {/* Metric Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
             <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-5 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-indigo-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-500" />
                 <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20 shadow-inner"><Radar className="w-8 h-8 text-indigo-400" /></div>
                 <div>
                     <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">MTTD Target</p>
                     <p className="text-3xl font-black text-white group-hover:text-indigo-300 transition-colors">&lt; 1 Hour</p>
                 </div>
             </div>
             <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-5 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-emerald-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-500" />
                 <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 shadow-inner"><AlertOctagon className="w-8 h-8 text-emerald-400" /></div>
                 <div>
                     <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">MTTR Target</p>
                     <p className="text-3xl font-black text-white group-hover:text-emerald-300 transition-colors">&lt; 4 Hours</p>
                 </div>
             </div>
             <div className="bg-slate-900/60 border border-slate-800 p-6 rounded-2xl flex items-center gap-5 relative overflow-hidden group">
                 <div className="absolute right-0 top-0 w-24 h-24 bg-rose-500/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-125 duration-500" />
                 <div className="p-4 bg-rose-500/10 rounded-2xl border border-rose-500/20 shadow-inner"><Eye className="w-8 h-8 text-rose-400" /></div>
                 <div>
                     <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Log Retention</p>
                     <p className="text-3xl font-black text-white group-hover:text-rose-300 transition-colors">365 Days</p>
                 </div>
             </div>
        </div>

        {/* Operational Model */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <Activity className="w-6 h-6 text-slate-400"/> Tiered Operational Model
            </h3>
            <div className="space-y-6">
                <div className="flex gap-6 p-6 border border-slate-800/50 rounded-2xl bg-slate-950/30 hover:bg-slate-900/50 transition-colors group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 font-black text-slate-600 text-2xl group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all shadow-lg">L1</div>
                    <div>
                        <h4 className="font-bold text-indigo-300 text-lg mb-2 group-hover:text-indigo-200">Triage Analyst</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Eyes on glass. Reviews alerts from SIEM/EDR. Discards false positives and escalates true positives using standardized playbooks.
                        </p>
                    </div>
                </div>
                 <div className="flex gap-6 p-6 border border-slate-800/50 rounded-2xl bg-slate-950/30 hover:bg-slate-900/50 transition-colors group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 font-black text-slate-600 text-2xl group-hover:text-purple-400 group-hover:border-purple-500/30 transition-all shadow-lg">L2</div>
                    <div>
                        <h4 className="font-bold text-purple-300 text-lg mb-2 group-hover:text-purple-200">Incident Responder</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Deep analysis. Correlates logs, performs forensics, contains the threat, and guides remediation efforts. Manages the incident lifecycle.
                        </p>
                    </div>
                </div>
                 <div className="flex gap-6 p-6 border border-slate-800/50 rounded-2xl bg-slate-950/30 hover:bg-slate-900/50 transition-colors group">
                    <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 font-black text-slate-600 text-2xl group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-all shadow-lg">L3</div>
                    <div>
                        <h4 className="font-bold text-emerald-300 text-lg mb-2 group-hover:text-emerald-200">Threat Hunter</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Proactive defense. Searches for hidden threats that bypassed alerts. Develops new detection logic and SIEM rules.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* OODA Loop */}
        <div className="lg:col-span-1 bg-slate-900/40 border border-slate-800/60 rounded-3xl p-8">
            <h3 className="text-xl font-bold text-white mb-8">Response Cycle</h3>
            <div className="relative border-l-2 border-slate-800 ml-3 space-y-10 py-2">
                {['Observe', 'Orient', 'Decide', 'Act'].map((step, i) => (
                    <div key={step} className="relative pl-8 group">
                        <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-900 bg-${['blue','indigo','purple','emerald'][i]}-500 group-hover:scale-125 transition-transform shadow-[0_0_10px_currentColor]`} />
                        <h4 className="text-white font-bold text-lg mb-1 group-hover:translate-x-1 transition-transform">{step}</h4>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                            {i===0 && "Ingest logs, flows, and alerts."}
                            {i===1 && "Contextualize with Threat Intel."}
                            {i===2 && "Determine containment strategy."}
                            {i===3 && "Execute isolation and recovery."}
                        </p>
                    </div>
                ))}
            </div>
            
            <div className="mt-10 p-4 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                <div className="flex items-center gap-2 mb-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                    <Zap className="w-4 h-4" /> Pro Tip
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                    Automate the 'Observe' and 'Act' phases using SOAR (Security Orchestration, Automation, and Response) to reduce analyst fatigue.
                </p>
            </div>
        </div>
    </div>
);


const CyberDefenseView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'ai' | 'dlp' | 'soc'>('architecture');

  const tabs = [
    { id: 'architecture', label: 'Defense in Depth', icon: Layers },
    { id: 'ai', label: 'AI Security', icon: Bot },
    { id: 'dlp', label: 'Data Security (DLP)', icon: Database },
    { id: 'soc', label: 'SOC Operations', icon: ShieldCheck },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-10 max-w-[1600px] mx-auto"
    >
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-slate-800/50">
        <div>
          <h2 className="text-4xl font-black text-white mb-2 tracking-tight flex items-center gap-4">
             <div className="p-3 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                <ShieldCheck className="w-8 h-8 text-emerald-500" /> 
             </div>
             Cyber Defense
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl pl-1">
             Strategic architectures, operational best practices, and advanced threat mitigation.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-3 bg-slate-900/50 p-1.5 rounded-2xl border border-slate-800/50 w-fit backdrop-blur-md">
         {tabs.map((tab) => (
             <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all text-sm ${
                    activeTab === tab.id 
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/20 scale-100' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
             >
                <tab.icon className="w-4 h-4" />
                {tab.label}
             </button>
         ))}
      </div>

      {/* Content Area */}
      <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
             {activeTab === 'architecture' && (
                 <motion.div key="arch" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <ArchitectureContent />
                 </motion.div>
             )}

             {activeTab === 'ai' && (
                 <motion.div key="ai" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <AiSecurityContent />
                 </motion.div>
             )}

             {activeTab === 'dlp' && (
                 <motion.div key="dlp" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <DataSecurityContent />
                 </motion.div>
             )}

             {activeTab === 'soc' && (
                 <motion.div key="soc" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                     <SocContent />
                 </motion.div>
             )}
          </AnimatePresence>
      </div>

    </motion.div>
  );
};

export default CyberDefenseView;
