
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, ShieldCheck, Zap, Eye, Activity, 
  Network, Lock, Server, FileSearch, Siren,
  Workflow, Boxes, Fingerprint, BrainCircuit
} from 'lucide-react';

// --- ANIMATIONS ---
const PulseRing = ({ delay, color }: { delay: number, color: string }) => (
  <motion.div
    animate={{ scale: [1, 3], opacity: [0.5, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay: delay, ease: "easeOut" }}
    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border ${color}`}
    style={{ width: '100px', height: '100px' }}
  />
);

const AiDefenseHub: React.FC = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-16 pb-20">
      
      {/* --- HERO: THE SENTINEL --- */}
      <section className="relative bg-black rounded-[3rem] border border-slate-800 p-8 md:p-16 overflow-hidden shadow-2xl">
         {/* Grid Background */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(217,70,239,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(217,70,239,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
         
         <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-900/30 border border-fuchsia-500/30 text-fuchsia-300 text-xs font-bold uppercase tracking-widest mb-6">
                    <SparkleIcon className="w-3 h-3" /> 24/7 Autonomous Defense
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
                    AI vs. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Zero-Day Threats</span>
                </h1>
                <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
                    Traditional rule-based security fails against novel attacks. 
                    AI Defense leverages Machine Learning to establish behavioral baselines, detecting subtle anomalies that signal a breach in real-time, without human fatigue.
                </p>
            </div>

            {/* Visual Animation */}
            <div className="relative h-[400px] flex items-center justify-center">
                <div className="relative w-64 h-64 bg-slate-900 rounded-full flex items-center justify-center border border-slate-800 z-10 shadow-[0_0_50px_rgba(192,38,211,0.3)]">
                    <BrainCircuit className="w-24 h-24 text-fuchsia-500" />
                    {/* Orbiting Shield */}
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                    >
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-950 p-2 rounded-xl border border-fuchsia-500 shadow-lg">
                            <ShieldCheck className="w-6 h-6 text-fuchsia-400" />
                        </div>
                    </motion.div>
                </div>
                {/* Ripples */}
                <PulseRing delay={0} color="border-fuchsia-500/50" />
                <PulseRing delay={1} color="border-fuchsia-500/30" />
                <PulseRing delay={2} color="border-fuchsia-500/10" />
                
                {/* Connected Nodes */}
                <Node label="Network" icon={Network} x="-140px" y="-120px" delay={0} />
                <Node label="Endpoint" icon={Server} x="140px" y="-120px" delay={0.5} />
                <Node label="Identity" icon={Fingerprint} x="0px" y="160px" delay={1} />
            </div>
         </div>
      </section>

      {/* --- POWER TOOLS GRID --- */}
      <section>
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Cpu className="w-8 h-8 text-fuchsia-500" />
              Defense Power Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PowerCard 
                  title="UEBA" 
                  subtitle="User & Entity Behavior Analytics" 
                  icon={Activity}
                  desc="Detects insider threats by learning 'normal' user patterns (login times, data access) and flagging deviations."
                  color="blue"
              />
              <PowerCard 
                  title="SOAR" 
                  subtitle="Security Orchestration & Response" 
                  icon={Zap}
                  desc="Automates triage and containment. AI executes playbooks (e.g., disable user, isolate host) instantly upon alert."
                  color="amber"
              />
              <PowerCard 
                  title="Predictive Intel" 
                  subtitle="Threat Anticipation" 
                  icon={Eye}
                  desc="Scrapes the dark web and global sensors to predict attacks on your sector before they hit your perimeter."
                  color="emerald"
              />
          </div>
      </section>

      {/* --- SYSTEMATIC WORKFLOW --- */}
      <section className="bg-slate-900/30 border border-slate-800 rounded-3xl p-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Systematic AI Response Cycle</h2>
          
          <div className="relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-slate-800 via-fuchsia-900/50 to-slate-800 -translate-y-1/2" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  <WorkflowStep 
                      number="01" 
                      title="Ingest & Normalize" 
                      icon={Boxes}
                      text="AI ingests TBs of logs from firewalls, clouds, and endpoints, normalizing data formats for analysis."
                  />
                  <WorkflowStep 
                      number="02" 
                      title="AI Inference" 
                      icon={BrainCircuit}
                      text="Machine Learning models compare live traffic against baseline behavior to identify anomalies (Zero-Day)."
                  />
                  <WorkflowStep 
                      number="03" 
                      title="Automated Triage" 
                      icon={FileSearch}
                      text="AI correlates alerts into a single 'Incident', reducing alert fatigue by filtering 99% of false positives."
                  />
                  <WorkflowStep 
                      number="04" 
                      title="Autonomous Action" 
                      icon={Siren}
                      text="Pre-approved playbooks execute immediately: blocking IPs, killing processes, or resetting passwords."
                  />
              </div>
          </div>
      </section>

    </motion.div>
  );
};

// --- SUB COMPONENTS ---

const Node = ({ label, icon: Icon, x, y, delay }: { label: string, icon: any, x: string, y: string, delay: number }) => (
    <motion.div 
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: delay, type: 'spring' }}
        className="absolute flex flex-col items-center gap-2"
        style={{ transform: `translate(${x}, ${y})` }}
    >
        <div className="w-16 h-16 bg-slate-900 rounded-2xl border border-slate-700 flex items-center justify-center shadow-xl z-20">
            <Icon className="w-8 h-8 text-slate-400" />
        </div>
        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider bg-black/50 px-2 py-1 rounded backdrop-blur-sm">{label}</span>
        {/* Connecting Line to Center */}
        <svg className="absolute top-1/2 left-1/2 w-[200px] h-[200px] -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
             <line x1="50%" y1="50%" x2={parseInt(x) > 0 ? "0%" : "100%"} y2={parseInt(y) > 0 ? "0%" : "100%"} stroke="#475569" strokeWidth="1" strokeDasharray="4 4" />
        </svg>
    </motion.div>
);

const PowerCard = ({ title, subtitle, icon: Icon, desc, color }: any) => {
    const colorMap: any = {
        blue: 'text-blue-400 bg-blue-500/10 border-blue-500/20 group-hover:border-blue-500/50',
        amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20 group-hover:border-amber-500/50',
        emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20 group-hover:border-emerald-500/50',
    };

    return (
        <div className="group bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:bg-slate-800/50 transition-all duration-300 hover:-translate-y-2">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${colorMap[color].split(' group')[0]}`}>
                <Icon className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">{subtitle}</p>
            <p className="text-slate-400 leading-relaxed text-sm">{desc}</p>
        </div>
    );
};

const WorkflowStep = ({ number, title, icon: Icon, text }: any) => (
    <div className="bg-slate-950 border border-slate-800 p-6 rounded-2xl relative group hover:border-fuchsia-500/30 transition-colors">
        <div className="absolute -top-4 left-6 bg-slate-900 text-slate-500 text-xs font-black px-3 py-1 rounded-full border border-slate-800 group-hover:text-fuchsia-400 group-hover:border-fuchsia-500/30 transition-colors">
            STEP {number}
        </div>
        <div className="mb-4 mt-2">
            <Icon className="w-8 h-8 text-slate-400 group-hover:text-white transition-colors" />
        </div>
        <h4 className="text-lg font-bold text-white mb-2">{title}</h4>
        <p className="text-sm text-slate-400 leading-relaxed">{text}</p>
    </div>
);

// Helper Icon
function SparkleIcon(props: any) {
    return (
      <svg 
        {...props} 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      >
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    );
}

export default AiDefenseHub;
